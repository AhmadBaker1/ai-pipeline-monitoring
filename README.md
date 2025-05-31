# 🔧 Pipeline AI Monitoring Dashboard

A real-time, full-stack dashboard for simulating and detecting anomalies in pipeline sensor data using AI.

Built to showcase applied machine learning, responsive UI/UX, and end-to-end system thinking — from data simulation to live alerting and model explainability.

---

## 📊 Overview

Pipeline failures can cause catastrophic economic and environmental damage. This project simulates a pipeline monitoring system that:

- 📈 Simulates live sensor readings (pressure, flow rate, temperature, vibration)
- 🤖 Uses a trained Isolation Forest model to detect anomalies
- 🚨 Shows real-time alerts in a dynamic dashboard
- 🧠 Displays AI scoring and root cause contributors for each anomaly
- 🧾 Logs anomalies with context and contributor analysis

![Pipeline AI Dashboard Preview](https://i.imgur.com/69Bmb4J.jpeg)

---

## 🧰 Tech Stack

| Layer        | Technologies Used                      |
|--------------|-----------------------------------------|
| Frontend     | React, Tailwind CSS, React Router       |
| Backend      | FastAPI, Python, Uvicorn, Scikit-learn  |
| AI/ML        | Isolation Forest, joblib, NumPy         |
| Simulation   | Python (CSV generator)                  |
| Deployment   | Vercel (frontend), Render (API server)  |

---

## 🚀 Features

- ✅ **Real-Time Sensor Simulation**  
  Custom `generator.py` script generates normal operating ranges of pipeline sensors.

- ✅ **Live AI Anomaly Detection**  
  The backend uses a trained Isolation Forest model to predict whether input is anomalous.

- ✅ **Anomaly Scoring & Contributors**  
  Displays severity score and which features most contributed to the detection.

- ✅ **Dashboard UI**  
  - Sensor cards (pressure, temperature, flow rate, vibration)
  - AI Detection Engine Panel
  - Animated Live Alerts
  - Anomaly Logs page

- ✅ **Persistent Logs**  
  Anomalies are stored and retrieved using local storage (can be connected to DB later).

---

## 📦 How It Works

1. **Data Generation**
   ```bash
   cd simulator
   python generator.py

   

2. **Model Training**
  - Run model_training.ipynb to:
   - Load CSV
   - Normalize data
   - Train Isolation Forest
   - Save model.joblib and scaler.joblib

3. Backend (FastAPI)
```bash
uvicorn inference_api:app --host 0.0.0.0 --port 10000
```
4. Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

📂 Folder Structure
```bash
├── backend/
│   ├── inference_api.py
│   ├── model_training.ipynb
│   ├── model.joblib
│   └── scaler.joblib
├── simulator/
│   ├── generator.py
│   └── normal_data.csv
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layout/
│   │   ├── pages/
│   │   └── App.jsx
└── README.md
```

🌐 Live Demo
Frontend: https://ai-pipeline-monitoring.vercel.app

💡 Why This Matters
This project simulates real-world infrastructure monitoring — relevant to:

- 🛢 Energy & Utilities

- 🧯 Industrial IoT

- 💻 Predictive Maintenance

- 🧠 AI-powered Ops dashboards

_**It’s designed to bridge the gap between applied ML, system integration, and business value.**_

👤 Author
Ahmad Baker
