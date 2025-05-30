import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLivePrediction from '../hooks/useLivePrediction';

const AnomalyLogs = () => {
  const { alerts } = useLivePrediction();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <button
        className="mb-6 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded"
        onClick={() => navigate('/')}
      >
        ← Back to Dashboard
      </button>
      <h1 className="text-2xl font-bold mb-4">Anomaly Logs</h1>
      {alerts.length === 0 ? (
        <p className="text-gray-400">No anomalies detected yet.</p>
      ) : (
        <ul className="space-y-4">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className="border border-red-600 p-4 rounded-lg bg-red-950 text-red-300"
            >
              <p className="font-semibold">🚨 {alert.type}</p>
              <p className="text-sm">{alert.message}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(alert.id).toLocaleTimeString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnomalyLogs;
