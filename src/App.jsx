import { useState } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Task from "./components/Task_Board/Task";

function App() {
  const defaultTask = {
    id: crypto.randomUUID(),
    taskName: "Task1",
    description: "I will create more task",
    dueDate: "February 25, 2024",
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (newTask) => {
    console.log("adding", newTask);
    setTasks([...tasks, newTask]);
    setShowModal(false);
  };
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <Task
          tasks={tasks}
          showModal={showModal}
          setShowModal={setShowModal}
          handleAddTask={handleAddTask}
        />
      </div>
    </div>
  );
}

export default App;
