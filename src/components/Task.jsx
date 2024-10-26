/* eslint-disable react/prop-types */
import { toast } from "react-toastify";

import { useTasks } from "../context/TaskContext";

import { formatDate } from "../utlity/Date";
import { DeleteSvg, EditSvg } from "../utlity/Svg";

export default function Task({ task, titleColor, onEdit }) {
  const { id, title, description, date } = task;
  const { dispatch } = useTasks();
  const notifyDelete = () => {
    toast.dark(
      <div className="space-y-6 text-center">
        <span>Are you sure you want to delete?</span>
        <div className="flex justify-center items-center gap-2">
          <button
            className="bg-red-600 hover:bg-red-700 duration-300 text-white px-2 py-1 rounded-md"
            onClick={() => {
              dispatch({
                type: "DELETE",
                payload: id,
              });
              toast.dismiss();
              toast.success("Task deleted!", { theme: "dark" });
            }}
          >
            Delete
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 duration-300 text-white px-2 py-1 rounded-md"
            onClick={() => toast.dismiss()}
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
      }
    );
  };
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className={`mb-2 flex-1 font-semibold ${titleColor}`}>{title}</h4>
        <div className="flex gap-2">
          <button onClick={notifyDelete}>
            <DeleteSvg />
          </button>
          <button onClick={() => onEdit(task)}>
            <EditSvg />
          </button>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{description}</p>
      <p className="mt-6 text-xs text-zinc-400">{formatDate(date)}</p>
    </div>
  );
}

Task;
