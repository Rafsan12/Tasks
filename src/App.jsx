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
  const [taskEdit, setTaskEdit] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    // console.log("adding", newTask);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModal(false);
  };

  const handleEditTask = (task) => {
    console.log(task);
    setTaskEdit(task);
    setShowModal(true);
  };

  const handleCloseTask = () => {
    setShowModal(false);
    setTaskEdit(null);
  };

  const handleDeleteTask = (taskID) => {
    const taskDelete = tasks.filter((task) => task.id !== taskID);
    setTasks(taskDelete);
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
          onEdit={handleEditTask}
          taskEdit={taskEdit}
          onCloseClick={handleCloseTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
