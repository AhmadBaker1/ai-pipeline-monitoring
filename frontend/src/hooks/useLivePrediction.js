import { useEffect, useState } from 'react';
import axios from 'axios';

const useLivePrediction = () => {
  const [data, setData] = useState(null);
  const [anomalyResult, setAnomalyResult] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrediction = async () => {
        const simulatedData = {
          pressure: +(Math.random() * 100 + 100).toFixed(2),
          flow_rate: +(Math.random() * 10 + 10).toFixed(2),
          temperature: +(Math.random() * 20 + 20).toFixed(2),
          vibration: +(Math.random() * 0.1).toFixed(4),
        };

        try {
          const response = await axios.post('https://pipeline-backend-j9c9.onrender.com/predict', simulatedData);

          const prediction = response.data;
          setData(prediction.input);
          setAnomalyResult(prediction.is_anomaly);

          // If it is an anomaly, add to alerts
          if (prediction.is_anomaly) {
            setAlerts((prev) => [
              {
                id: Date.now(),
                type: 'Anomaly Detected',
                message: `AI detected an anomaly with pressure: ${prediction.input.pressure} PSI, flow rate: ${prediction.input.flow_rate} m³/h, temperature: ${prediction.input.temperature} °C.`,
                time: new Date().toLocaleTimeString(),
              },
              ...prev
            ]);
          }

          setLoading(false);
          } catch (err) {
            console.error('Prediction fetch error:', err.message);
            setLoading(false);
          }
        };

        const intervalId = setInterval(fetchPrediction, 4000); // Fetch every 4 seconds
        return () => clearInterval(intervalId);
      }, []);

    return { data, anomalyResult, alerts, loading };
};

export default useLivePrediction;

// https://pipeline-backend-j9c9.onrender.com
