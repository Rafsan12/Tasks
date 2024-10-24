/* eslint-disable react/prop-types */
import AddTaskModal from "./AddTaskModal";
import Done_Task from "./Done_Task";
import OnProgress_Task from "./OnProgress_Task";
import Revised_Task from "./Revised_Task";
import Task_Header from "./Task_Header";
import Todo_Task from "./Todo_Task";

export default function Task({
  tasks,
  showModal,
  setShowModal,
  handleAddTask,
}) {
  const categoryTask = (category) => {
    switch (category) {
      case "To-Do":
        return (
          <Todo_Task
            tasks={tasks.filter((task) => task.category === "To-Do")}
          />
        );

      case "On progress":
        return (
          <OnProgress_Task
            tasks={tasks.filter((task) => task.category === "On progress")}
          />
        );

      case "Done":
        return (
          <Done_Task tasks={tasks.filter((task) => task.category === "Done")} />
        );

      case "Revised":
        return (
          <Revised_Task
            tasks={tasks.filter((task) => task.category === "Revised")}
          />
        );

      default:
        return (
          <Todo_Task
            tasks={tasks.filter((task) => task.category === "To-Do")}
          />
        );
    }
  };
  return (
    <div className="p-6">
      {showModal && <AddTaskModal onSave={handleAddTask} />}
      <Task_Header onAddTask={() => setShowModal(true)} />
      <div className="-mx-2 mb-6 flex flex-wrap">
        {categoryTask("To-Do")}
        {categoryTask("On progress")}
        {categoryTask("Done")}
        {categoryTask("Revised")}
      </div>
    </div>
  );
}
