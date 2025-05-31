import { useEffect, useState } from 'react';
import axios from 'axios';

const useLivePrediction = () => {
  const [data, setData] = useState(null);
  const [anomalyResult, setAnomalyResult] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [contributors, setContributors] = useState([]);


  useEffect(() => {
    const fetchPrediction = async () => {
        const simulatedData = {
          pressure: +(Math.random() * 100 + 100).toFixed(2),
          flow_rate: +(Math.random() * 10 + 10).toFixed(2),
          temperature: +(Math.random() * 20 + 20).toFixed(2),
          vibration: +(Math.random() * 0.1).toFixed(4),
        };

          const NORMAL_RANGES = {
          pressure: [135, 165],
          flow_rate: [11.0, 13.0],
          temperature: [23, 37],
          vibration: [0.015, 0.06],};

          const getContributors = (input) => {
          return Object.entries(NORMAL_RANGES).map(([key, [min, max]]) => {
            const value = input[key];
            let deviation = 0;

            if (value < min) deviation = min - value;
            else if (value > max) deviation = value - max;

            return {
              feature: key,
              value,
              deviation: Math.abs(deviation),
              status: deviation === 0 ? 'normal' : 'deviated',
            };
          }).filter(c => c.status === 'deviated')
            .sort((a, b) => b.deviation - a.deviation); // most impactful first
        };
        
        try {
          const response = await axios.post('https://pipeline-backend-j9c9.onrender.com/predict', simulatedData);

          const prediction = response.data;
          const score = prediction.score;
          setData(prediction.input);
          setAnomalyResult(prediction.is_anomaly);
          

          // If it is an anomaly, add to alerts
          if (prediction.is_anomaly) {

            const contributorsList = getContributors(prediction.input);
            setContributors(contributorsList);

            const newAlert = 
              {
                id: Date.now(),
                type: 'Anomaly Detected',
                message: `AI detected an anomaly with pressure: ${prediction.input.pressure} PSI, flow rate: ${prediction.input.flow_rate} m³/h, temperature: ${prediction.input.temperature} °C.`,
                time: new Date().toLocaleTimeString(),
                score: score,
                input: prediction.input,
                contributors: contributorsList
              };
              
              // Saving to state
              setAlerts((prev) => [...prev, newAlert]);

              // Persist to localStorage
              const prevLogs = JSON.parse(localStorage.getItem('anomalyLogs') || '[]');
              localStorage.setItem('anomalyLogs', JSON.stringify([...prevLogs, newAlert]));
          }

          const timestamp = new Date().toLocaleTimeString();
            setChartData((prev) => {
              const newPoint = {
                time: timestamp,
                pressure: prediction.input.pressure,
                flow_rate: prediction.input.flow_rate,
                temperature: prediction.input.temperature,
                vibration: prediction.input.vibration,
              };
              const updated = [...prev, newPoint];
              return updated.length > 20 ? updated.slice(-20) : updated; // keep only last 20
            });

          setLoading(false);
          } catch (err) {
            console.error('Prediction fetch error:', err.message);
            setLoading(false);
          }
        };

        const intervalId = setInterval(fetchPrediction, 4000); // Fetch every 4 seconds
        return () => clearInterval(intervalId);
      }, []);
      
   
    return { data, anomalyResult, alerts, loading, chartData, contributors };
};


export default useLivePrediction;

// https://pipeline-backend-j9c9.onrender.com
