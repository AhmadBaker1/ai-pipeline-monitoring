import React from 'react';

const ControlPanel = ({ onStart, onPause, onStop, running }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-emerald-400 bg-white/5 backdrop-blur-md col-span-full">
      <div className="flex gap-4">
        <button
          className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-semibold shadow hover:opacity-90"
          onClick={onStart}
          disabled={running}
        >
          ▶️ Start Simulation
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold shadow hover:opacity-90"
          onClick={onPause}
          disabled={!running}
        >
          ⏸️ Pause
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:opacity-90"
          onClick={onStop}
        >
          ⏹️ Stop
        </button>
        <button className="px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold shadow hover:opacity-90">
          📊 Export Data
        </button>
      </div>
      <div className="text-emerald-400 font-mono text-sm">
        {running ? 'Status: Active' : 'Status: Paused'}
      </div>
    </div>
  );
};

export default ControlPanel;
