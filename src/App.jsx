import { useState } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Task from "./components/Task_Board/Task";

function App() {
  const defaultTask = {
    id: crypto.randomUUID(),
    taskName: "Task1",
    description: "I will create more tasks",
    dueDate: "February 25, 2024",
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskEdit, setTaskEdit] = useState(null);
  const [findTask, setFindTask] = useState(tasks);

  const updateFindTask = (updatedTasks) => {
    setFindTask(updatedTasks);
  };

  const handleAddTask = (newTask, isAdd) => {
    let updatedTasks;
    if (isAdd) {
      updatedTasks = [...tasks, newTask];
    } else {
      updatedTasks = tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        }
        return task;
      });
    }
    setTasks(updatedTasks);
    updateFindTask(updatedTasks);
    setShowModal(false);
  };

  const handleEditTask = (task) => {
    setTaskEdit(task);
    setShowModal(true);
  };

  const handleCloseTask = () => {
    setShowModal(false);
    setTaskEdit(null);
  };

  const handleDeleteTask = (taskID) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(updatedTasks);
    updateFindTask(updatedTasks);
  };

  const handleSearchTask = (searchTask) => {
    if (searchTask.trim() === "") {
      setFindTask(tasks);
    } else {
      const filteredTasks = tasks.filter((task) =>
        task.taskName.toLowerCase().includes(searchTask.toLowerCase())
      );
      setFindTask(filteredTasks);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header onSearch={handleSearchTask} />
        <Task
          tasks={findTask}
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
