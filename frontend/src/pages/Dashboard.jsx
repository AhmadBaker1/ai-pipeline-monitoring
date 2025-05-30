import React from 'react';
import SensorCard from '../components/SensorCard';
import AIDetectionPanel from '../components/AIDetectionPanel';
import AlertPanel from '../components/AlertPanel';
import useLivePrediction from '../hooks/useLivePrediction';

const Dashboard = () => {
  const { data, anomalyResult, alerts } = useLivePrediction();

  return (
    <div className="p-8 space-y-8 overflow-y-auto text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 min-h-screen">
     
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-cyan-300">Pipeline Monitor</h1>
          <p className="text-sm text-gray-400">Real-time anomaly detection & telemetry</p>
        </div>
        <div className="flex gap-4">
          <span className="text-green-400 bg-green-500/10 px-3 py-1 rounded-full text-xs font-semibold">System Online</span>
          <span className="text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full text-xs font-semibold">AI Active</span>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SensorCard title="Pressure (PSI)" value={data ? `${data.pressure}` : '...'} />
        <SensorCard title="Flow Rate (BBL/H)" value={data ? `${data.flow_rate}` : '...'} />
        <SensorCard title="Temperature (°C)" value={data ? `${data.temperature}` : '...'} />
        <SensorCard title="Vibration (mm/s)" value={data ? `${data.vibration}` : '...'} />
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <AIDetectionPanel anomalyResult={anomalyResult} className="h-full" />
        </div>
        <div className="lg:col-span-2">
          <AlertPanel alerts={alerts.slice(0, 3)} layout="vertical" />
        </div>
      </div>

      
      <div className="bg-cyan-900/10 border border-cyan-400/20 rounded-2xl p-6 mt-6">
        <p className="text-sm text-gray-300 mb-2">Pipeline Flow Visualization</p>
        <div className="relative w-full h-4 rounded-full bg-cyan-800 overflow-hidden">
          <div className="absolute left-0 w-1/4 h-full bg-cyan-400 animate-[flow_2s_linear_infinite] rounded-full blur-sm" />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center justify-center text-center h-40">
          <p className="text-gray-400">📊 Coming soon: Session Stats</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center justify-center text-center h-40">
          <p className="text-gray-400">🛠️ Coming soon: Pipeline Overview</p>
        </div>
      </div>

      <style>
        {`
          @keyframes flow {
            0% { transform: translateX(0%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;
