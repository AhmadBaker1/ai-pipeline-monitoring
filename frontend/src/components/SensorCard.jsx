import React from 'react';

const SensorCard = ({ title, value }) => {
  return (
    <div className="rounded-xl bg-white/5 border border-cyan-500/20 shadow-md backdrop-blur-sm px-5 py-4">
      <div className="text-sm text-cyan-300 font-medium mb-1">{title}</div>
      <div className="text-3xl font-bold text-emerald-400">{value}</div>

      <div className="mt-4 h-2 w-full bg-cyan-500/10 rounded-full relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full animate-pulse bg-cyan-500/30" />
      </div>
    </div>
  );
};

export default SensorCard;