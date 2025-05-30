import React from 'react';

import SensorCard from '../components/SensorCard';
import useLivePrediction from '../hooks/useLivePrediction'; 
import LiveAlerts from '../components/LiveAlerts';
import { MdSpeed } from 'react-icons/md'
import { TbDropletFilled } from 'react-icons/tb'
import { LuThermometer, LuActivity } from 'react-icons/lu'


const Dashboard = () => {
  const { data, alerts} = useLivePrediction();
  return (
    <div className="flex">
      
      <main className="ml-64 p-8 w-full min-h-screen bg-gradient-to-br from-[#0a0c10] to-[#1a1d22] text-white overflow-y-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Real-Time Dashboard</h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8 items-start">
        {/* Real-time metrics section (2/3 of the width) */}
        <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SensorCard title="Pressure" value={data?.pressure?.toFixed(2)} icon={<MdSpeed />} color="text-cyan-400" unit="PSI" />
          <SensorCard title="Flow Rate" value={data?.flow_rate?.toFixed(2)} icon={<TbDropletFilled />} color="text-indigo-400" unit="m³/h" />
          <SensorCard title="Temperature" value={data?.temperature?.toFixed(2)} icon={<LuThermometer />} color="text-red-400" unit="°C" />
          <SensorCard title="Vibration" value={data?.vibration?.toFixed(4)} icon={<LuActivity />} color="text-pink-400" unit="" />
        </div>

        {/* Live Alerts panel (1/3 of the width) */}
        <div className="bg-red-950/10 border border-red-800 p-4 rounded-xl overflow-y-auto max-h-[500px] min-h-[300px] custom-scroll">
          <h2 className="text-lg font-semibold text-red-300 mb-4">Live Alerts</h2>
          <LiveAlerts alerts={alerts} />
        </div>
      </div>


        <div className="mt-12">
          {/* Flow animation + chart area */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;