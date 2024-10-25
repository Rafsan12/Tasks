/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTaskModal({ onSave, taskEdit, onCloseClick }) {
  const [task, setTask] = useState(
    taskEdit ?? {
      id: crypto.randomUUID(),
      taskName: "",
      description: "",
      dueDate: "",
      category: "To-Do",
    }
  );

  // Update this condition to properly handle both null and undefined
  const [isAdd] = useState(!taskEdit);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full backdrop-blur-sm absolute z-10 top-0 left-0"></div>
      <div className="flex min-h-screen justify-center p-4 text-white z-10 absolute w-2/4 top-0">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              {isAdd ? "Create Task" : "Edit Task"}
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="taskName"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="taskName"
                  value={task.taskName}
                  onChange={handleChange}
                  required
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
                  value={task.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dueDate"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={task.category}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="To-Do">To-Do</option>
                  <option value="On progress">On Progress</option>
                  <option value="Done">Done</option>
                  <option value="Revised">Revised</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={onCloseClick}
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    onSave(task, isAdd);
                  }}
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {isAdd ? "Create Task" : "Edit Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
