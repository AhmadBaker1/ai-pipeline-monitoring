import React from 'react';
import { FaRobot } from 'react-icons/fa';

const AIDetectionPanel = ({ anomalyResult }) => {
  const isAnomaly = anomalyResult;

  return (
    <div className="rounded-xl bg-white/5 border border-blue-400/30 shadow-sm px-5 py-4 backdrop-blur-md">
      <div className="flex items-center gap-3 mb-2">
        <FaRobot className="text-blue-400 text-lg" />
        <h2 className="text-lg font-semibold text-blue-300">AI Detection Engine</h2>
      </div>

      <p className={`text-sm ${isAnomaly ? 'text-red-400' : 'text-emerald-400'} mb-1`}>
        • Status: {isAnomaly ? 'Anomaly Detected' : 'Normal Operation'}
      </p>

      <p className="text-xs text-gray-400">Model: Isolation Forest v2.1</p>

      <div className="mt-4 relative h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full ${isAnomaly ? 'bg-red-500' : 'bg-emerald-400'} animate-pulse`}
          style={{ width: isAnomaly ? '100%' : '87%' }}
        ></div>
      </div>
      <p className="text-xs text-center text-gray-400 mt-1">LIVE</p>
    </div>
  );
};

export default AIDetectionPanel;
