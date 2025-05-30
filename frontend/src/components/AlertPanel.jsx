import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdWarning, MdOutlineError, MdBuild } from 'react-icons/md';

const AlertPanel = ({ alerts = [] }) => {
  const navigate = useNavigate();
  const latestThree = alerts.slice(0, 3);

  return (
    <div className="rounded-xl bg-red-900/10 border border-red-500/20 p-4 backdrop-blur-sm shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-red-400">🚨 Live Alerts</h2>
        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">{latestThree.length}</span>
      </div>

      {latestThree.map((alert) => (
        <div key={alert.id} className="flex gap-3 bg-red-800/20 rounded-md p-3 mb-2">
          <div className="text-red-400 text-xl">
            <MdWarning />
          </div>
          <div className="text-sm">
            <p className="font-semibold text-red-300">{alert.type}</p>
            <p className="text-gray-300 text-xs mt-1">{alert.message}</p>
            <p className="text-gray-500 text-[0.65rem] mt-1">
              {new Date(alert.id).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={() => navigate('/anomaly-logs')}
        className="mt-3 w-full text-sm text-white bg-red-600 hover:bg-red-500 rounded-md py-2 transition"
      >
        View Logs
      </button>
    </div>
  );
};

export default AlertPanel;
