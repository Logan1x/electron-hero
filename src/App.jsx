import CameraAndMic from "./cameraAndMic";
import Dashboard from "./dashboard";
import { useState } from "react";

function App() {
  const [showDashboard, setShowDashboard] = useState(true);
  return (
    <div className="">
      {showDashboard ? (
        <Dashboard setShowDashboard={setShowDashboard} />
      ) : (
        <CameraAndMic />
      )}
    </div>
  );
}

export default App;
