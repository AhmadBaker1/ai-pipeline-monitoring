import React from 'react';
import useLivePrediction from '../hooks/useLivePrediction';
import { FaExclamationTriangle } from 'react-icons/fa';

const AnomalyLogs = () => {
  const { alerts } = useLivePrediction();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-10 text-white">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-red-400">Anomaly Logs</h1>
            <p className="text-sm text-gray-400">Review all AI-detected anomalies</p>
          </div>
          <span className="bg-red-500/10 text-red-300 px-4 py-1 rounded-full text-xs font-bold">
            {alerts.length} total anomalies
          </span>
        </header>

        {alerts.length === 0 ? (
          <div className="bg-green-500/10 text-green-300 p-4 rounded-xl border border-green-500/30 text-center">
            Detecting anomalies
          </div>
        ) : (
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="bg-red-800/10 border border-red-500/20 rounded-xl p-5 flex gap-4 items-start shadow-sm"
              >
                <div className="mt-1 text-red-400">
                  <FaExclamationTriangle className="text-xl" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-red-300">{alert.type}</h2>
                  <p className="text-sm text-white/90 mt-1">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{new Date(alert.id).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnomalyLogs;
