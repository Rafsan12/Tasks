/* eslint-disable react/prop-types */
import { DeleteSvg, EditSvg, SadSvg, SortSvg } from "../../utlity/Svg";

export default function TaskList({ tasks, category, onEdit, onDelete }) {
  const categoryColor = getCategoryColor(category);

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={`rounded-lg p-4 ${categoryColor}`}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {category} ({tasks.length})
          </h3>
          <SortSvg />
        </div>

        {tasks.length === 0 ? (
          <p className="text-2xl mt-4 text-center ">
            <SadSvg /> Task List is empty!
          </p>
        ) : (
          tasks.map((task) => (
            <div key={task.id}>
              <div className="mb-4 rounded-lg bg-gray-800 p-4">
                <div className="flex justify-between">
                  <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                    {task.taskName}
                  </h4>
                  <div className="flex gap-2">
                    <button onClick={() => onDelete(task.id)}>
                      <DeleteSvg />
                    </button>
                    <button onClick={() => onEdit(task)}>
                      <EditSvg />
                    </button>
                  </div>
                </div>
                <p className="mb-2 text-sm text-zinc-200">{task.description}</p>
                <p className="mt-6 text-xs text-zinc-400">{task.dueDate}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const getCategoryColor = (category) => {
  switch (category) {
    case "To-Do":
      return "bg-indigo-600";
    case "On progress":
      return "bg-yellow-500";
    case "Revised":
      return "bg-rose-500";
    case "Done":
      return "bg-teal-500";
    default:
      return "bg-gray-500";
  }
};
