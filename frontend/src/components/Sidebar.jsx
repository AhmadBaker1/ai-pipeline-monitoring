function Sidebar() {
    return (
      <aside className="w-60 bg-slate-900 p-4 border-r border-slate-700 hidden md:block">
        <nav className="space-y-4">
          <a href="#" className="block text-cyan-300 hover:underline">Dashboard</a>
          <a href="#" className="block text-white hover:underline">AI Insights</a>
          <a href="#" className="block text-white hover:underline">Anomaly Logs</a>
          <a href="#" className="block text-white hover:underline">Settings</a>
        </nav>
      </aside>
    );
  }
  
  export default Sidebar;
  