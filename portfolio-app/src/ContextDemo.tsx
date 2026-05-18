import { UserProvider } from "./UserContext";
import Dashboard from "./Dashboard";
import "./css/ContextDemo.css";

function ContextDemo() {
  return (
    <div className="container context-container">
      <h1>Context API Demo</h1>
      <p>
        This section demonstrates how Context API removes prop drilling.
      </p>

      <UserProvider>
        <Dashboard />
      </UserProvider>
    </div>
  );
}

export default ContextDemo;