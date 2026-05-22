import Sidebar from "./Sidebar";
import SettingsPanel from "./SettingsPanel";

function Dashboard() {
  return (
    <div className="context-box">
      <h2>Dashboard</h2>
      <Sidebar />
      <SettingsPanel />
    </div>
  );
}

export default Dashboard;