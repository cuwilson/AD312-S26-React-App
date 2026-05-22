import ContextUserProfile from "./ContextUserProfile";

function SettingsPanel() {
  return (
    <div className="context-box">
      <h2>Settings Panel</h2>
      <p>Just another nested component using the same user context.</p>
      <ContextUserProfile />
    </div>
  );
}

export default SettingsPanel;