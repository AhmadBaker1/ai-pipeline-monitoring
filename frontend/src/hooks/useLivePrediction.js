import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const useLivePrediction = () => {
  const [data, setData] = useState(null);
  const [anomalyResult, setAnomalyResult] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const fetchPrediction = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', {
        pressure: +(Math.random() * 100 + 100).toFixed(2),
        flow_rate: +(Math.random() * 10 + 10).toFixed(2),
        temperature: +(Math.random() * 20 + 20).toFixed(2),
        vibration: +(Math.random() * 0.1).toFixed(4),
      });

      const prediction = response.data;
      setData(prediction.input);
      setAnomalyResult(prediction.is_anomaly);

      if (prediction.is_anomaly) {
        setAlerts((prev) => [
          {
            id: Date.now(),
            type: 'Anomaly Detected',
            message: `AI detected anomaly with pressure: ${prediction.input.pressure} PSI, flow: ${prediction.input.flow_rate} m³/h, temp: ${prediction.input.temperature} °C`,
            time: new Date().toLocaleTimeString(),
          },
          ...prev.slice(0, 2), // Keep only top 3
        ]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const startSimulation = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(fetchPrediction, 4000);
      setRunning(true);
    }
  };

  const pauseSimulation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  const stopSimulation = () => {
    pauseSimulation();
    setData(null);
    setAnomalyResult(null);
    setAlerts([]);
  };

  // Cleanup when component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return {
    data,
    anomalyResult,
    alerts,
    startSimulation,
    pauseSimulation,
    stopSimulation,
    running,
  };
};

export default useLivePrediction;
