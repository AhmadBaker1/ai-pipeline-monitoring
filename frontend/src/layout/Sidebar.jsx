// src/layout/Sidebar.jsx
import React from 'react';
import { FaChartLine, FaBell, FaMicrochip } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: <FaChartLine />, path: '/dashboard' },
    { name: 'Anomaly Logs', icon: <FaBell />, path: '/anomaly-logs' },
  ];

  return (
    <aside className="h-screen w-64 bg-[#0d1117] border-r border-gray-800 p-6 fixed top-0 left-0 text-white flex flex-col gap-8">
      <div className="text-2xl font-bold text-cyan-400 tracking-wide">🔧 Pipeline AI</div>
      <nav className="flex flex-col gap-4">
        {navItems.map(({ name, icon, path }) => (
          <Link
            key={name}
            to={path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              location.pathname === path
                ? 'bg-cyan-700/20 text-cyan-300'
                : 'hover:bg-white/10 text-gray-300'
            }`}
          >
            <span className="text-lg">{icon}</span>
            <span className="text-sm font-semibold">{name}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto text-xs text-gray-500">© Ahmad Baker, 2025</div>
    </aside>
  );
};

export default Sidebar;
