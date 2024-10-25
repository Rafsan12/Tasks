/* eslint-disable react/prop-types */
import AddTaskModal from "./AddTaskModal";
import TaskList from "./TaskList";
import Task_Header from "./Task_Header";

export default function Task({
  tasks,
  showModal,
  setShowModal,
  handleAddTask,
  onEdit,
  taskEdit,
  onCloseClick,
  onDelete,
}) {
  const categories = ["To-Do", "On progress", "Revised", "Done"];

  return (
    <div className="p-6">
      {showModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskEdit={taskEdit}
          onCloseClick={onCloseClick}
        />
      )}
      <Task_Header onAddTask={() => setShowModal(true)} />

      <div className="-mx-2 mb-6 flex flex-wrap">
        {categories.map((category) => (
          <TaskList
            key={category}
            category={category}
            onEdit={onEdit}
            onDelete={onDelete}
            tasks={tasks.filter((task) => task.category === category)}
          />
        ))}
      </div>
    </div>
  );
}
