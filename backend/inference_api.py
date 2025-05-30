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
    # converting the incoming data to a numpy array
    X_input = np.array([[data.pressure, data.flow_rate, data.temperature, data.vibration]])
    # scaling the input data using the loaded scaler from training
    X_scaled = scaler.transform(X_input)

    # making the prediction using the loaded model using Isolation Forest to detect anomaly
    prediction = model.predict(X_scaled)[0] # returns 1 for normal, -1 for anomaly

    # return the result now 
    return {
        "is_anomaly": bool(prediction == -1),  # True if anomaly, False if normal
        "input": data.model_dump() 
    }