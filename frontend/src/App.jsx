import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AnomalyLogs from './pages/AnomalyLogs';


import './App.css';
import './index.css';


function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex flex-col bg-slate-950 text-white">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/anomaly-logs" element={<AnomalyLogs />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
