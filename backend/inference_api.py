from fastapi import FastAPI
from pydantic import BaseModel # this will define the structure of the incoming sensor data
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware


# FastAPI app instance
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or replace "*" with ["http://localhost:5173"] for more security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# loading the trained model and scaler 
model = joblib.load('model.joblib') 
scaler = joblib.load('scaler.joblib')



# defining the expected input structure using Pydantic
# this will define the JSON structure for the POST request
class SensorData(BaseModel):
    pressure: float
    flow_rate: float
    temperature: float
    vibration: float

# defining the /predict endpoint
@app.post("/predict")
def predict(data: SensorData):
    # Convert incoming data to numpy array
    X_input = np.array([[data.pressure, data.flow_rate, data.temperature, data.vibration]])
    X_scaled = scaler.transform(X_input)

    # Predict with Isolation Forest
    prediction = model.predict(X_scaled)[0]  # 1 = normal, -1 = anomaly
    score = model.decision_function(X_scaled)[0]  # Higher = more normal

    return {
        "is_anomaly": bool(prediction == -1),
        "score": float(score),  # just to be safe for JSON serialization
        "input": data.model_dump()
    }