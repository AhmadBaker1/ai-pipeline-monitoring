// src/components/SensorCard.jsx
import React from 'react';
import { FaThermometerHalf, FaTachometerAlt, FaTint } from 'react-icons/fa';

const iconMap = {
  Pressure: <FaTachometerAlt className="text-cyan-400 text-3xl" />,
  'Flow Rate': <FaTint className="text-indigo-400 text-3xl" />,
  Temperature: <FaThermometerHalf className="text-red-400 text-3xl" />,
};

const SensorCard = ({ title, value }) => {
  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between shadow-lg hover:shadow-emerald-400/30 transition-shadow">
      <div>
        <h3 className="text-sm font-semibold text-gray-400">{title}</h3>
        <p className="text-2xl font-bold text-white mt-1">{value || 'Loading...'}</p>
      </div>
      <div className="opacity-80">{iconMap[title]}</div>
    </div>
  );
};

export default SensorCard;
