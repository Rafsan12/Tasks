/* eslint-disable react/prop-types */
import { AddSvg } from "../../utlity/Svg";

export default function Task_Header({ onAddTask }) {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button
            onClick={onAddTask}
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
          >
            <AddSvg />
            Add
          </button>
        </div>
      </div>
    </>
  );
}
