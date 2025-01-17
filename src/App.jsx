import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = async () => {
    try {
      const response = await invoke('start_server');
      if (response === 'ok') {
        setIsRunning(true);
      }
    } catch (error) {
      console.error('启动失败:', error);
    }
  };

  const handleStop = async () => {
    try {
      const response = await invoke('stop_server');
      if (response === 'ok') {
        setIsRunning(false);
      }
    } catch (error) {
      console.error('停止失败:', error);
    }
  };

  return (
    <main className="container">
      <div className="button-container">
        {!isRunning ? (
          <button onClick={handleStart}>启动</button>
        ) : (
          <button onClick={handleStop}>停止</button>
        )}
      </div>
    </main>
  );
}

export default App;
