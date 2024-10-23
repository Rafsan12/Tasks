import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Task from "./components/Task_Board/Task";

function App() {
  const defaultTask = {
    id: crypto.randomUUID,
    title: "Task1",
    description: "I will create more task",
    date: "February 24, 2024",
  };

  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <Task tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
