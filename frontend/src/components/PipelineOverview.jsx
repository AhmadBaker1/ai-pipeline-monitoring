import React from 'react';

const PipelineOverview = () => {
  return (
    <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-4 mt-2 backdrop-blur-sm">
      <h2 className="text-md font-semibold text-cyan-400 mb-4">🔍 Pipeline Overview</h2>
      <div className="h-6 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 rounded-full relative overflow-hidden">
        <div className="absolute top-1/2 left-[15%] w-3 h-3 bg-white border border-gray-900 rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 left-[35%] w-3 h-3 bg-white border border-gray-900 rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 left-[55%] w-3 h-3 bg-white border border-gray-900 rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 left-[75%] w-3 h-3 bg-white border border-gray-900 rounded-full -translate-y-1/2" />
      </div>
    </div>
  );
};

export default PipelineOverview;
