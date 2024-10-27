import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { AddSvg } from "../utlity/Svg";
import Modal from "./Modal";
import TaskCategory from "./TaskCategory";

export default function ProjectBoard() {
  const { tasks } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddClick = () => {
    setCurrentTask(null);
    setShowModal(true);
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setCurrentTask(null);
    setShowModal(false);
  };

  const taskCategories = ["To-Do", "On Progress", "Done", "Revise"];

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
            onClick={handleAddClick}
            aria-label="Add new task"
          >
            <AddSvg />
            Add
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          isOpen={showModal}
          currentTask={currentTask}
          closeModal={handleModalClose}
        />
      )}

      <div className="-mx-2 mb-6 flex flex-wrap">
        {taskCategories.map((category) => (
          <TaskCategory
            key={category}
            taskType={category}
            tasks={tasks.filter((task) => task.status === category)}
            onTaskEdit={handleEditTask}
          />
        ))}
      </div>
    </div>
  );
}
