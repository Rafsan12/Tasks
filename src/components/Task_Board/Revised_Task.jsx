/* eslint-disable react/prop-types */
import { DeleteSvg, EditSvg, SortSvg } from "../../utlity/Svg";

export default function Revised_Task({ tasks }) {
  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-rose-500 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Revise ({tasks.length})</h3>
            <SortSvg />
          </div>
          {tasks.length === 0 ? (
            <p className="text-xl mt-4 bg-red-600">Task List is empty!</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="mb-4 rounded-lg bg-gray-800 p-4">
                <div className="flex justify-between">
                  <h4 className="mb-2 font-semibold text-rose-500">
                    Content Writer
                  </h4>
                  <div className="flex gap-2">
                    <DeleteSvg />
                    <EditSvg />
                  </div>
                </div>
                <p className="mb-2 text-sm text-zinc-200">
                  Make Promotional Ads for Instagram fasto's
                </p>

                <p className="mt-6 text-xs text-zinc-400">February 20, 2024</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
