import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SensorCard from './components/SensorCard';
import AlertPanel from './components/AlertPanel';
import AIDetectionPanel from './components/AIDetectionPanel';
import SessionStats from './components/SessionStats';
import PipelineOverview from './components/PipelineOverview';
import ControlPanel from './components/ControlPanel';
import useLivePrediction from './hooks/useLivePrediction';

import './App.css';
import './index.css';

function App() {
  const {
    data,
    anomalyResult,
    alerts,
    startSimulation,
    pauseSimulation,
    stopSimulation,
    running,
  } = useLivePrediction();

  return (
    <div className="flex h-screen w-screen overflow-hidden text-white bg-slate-950">
      
      <Sidebar />

      <div className="flex flex-col flex-1">
        
        <Navbar />

        
        <div className="p-4">
        <ControlPanel
          onStart={startSimulation}
          onPause={pauseSimulation}
          onStop={stopSimulation}
          running={running}
        />
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4 pb-4 flex-1 overflow-y-auto">
          
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <SensorCard title="Pressure (PSI)" value={data ? `${data.pressure}` : 'Loading...'} />
            <SensorCard title="Flow Rate (BBL/H)" value={data ? `${data.flow_rate}` : 'Loading...'} />
            <SensorCard title="Temperature (°F)" value={data ? `${data.temperature}` : 'Loading...'} />
            <SensorCard title="Vibration (mm/s)" value={data ? `${data.vibration}` : 'Loading...'} />
          </div>

          
          <div className="col-span-1 flex flex-col gap-4">
            <AlertPanel alerts={alerts} />
            <AIDetectionPanel anomalyResult={anomalyResult} />
            <SessionStats />
          </div>

          
          <div className="col-span-4">
            <PipelineOverview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
