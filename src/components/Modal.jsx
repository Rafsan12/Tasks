/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";
import { useTasks } from "../context/TaskContext";

export default function Modal({ isOpen, closeModal, currentTask }) {
  const isAdd = currentTask ? false : true;
  const { dispatch } = useTasks();
  const [task, setTask] = useState(
    currentTask ?? {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      date: "",
      status: "To-Do",
    }
  );
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({
      ...task,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: isAdd ? "ADD" : "UPDATE",
      payload: task,
    });
    closeModal();
    toast.success(isAdd ? "Task added!" : "Task updated!", {
      theme: "dark",
    });
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            {isAdd ? "Create Task" : "Update Task"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter task title"
                required
                value={task.title}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Write a short description of task"
                value={task.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Due Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={task.date}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="status"
                name="status"
                value={task.status}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="To-Do">To-Do</option>
                <option value="On Progress">On Progress</option>
                <option value="Done">Done</option>
                <option value="Revise">Revise</option>
              </select>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {isAdd ? "Create Task" : "Edit Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Modal;
