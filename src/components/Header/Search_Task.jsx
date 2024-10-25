/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Search_Task({ onSearch }) {
  const [searchTask, setSearchTask] = useState("");

  const handleSearch = (e) => {
    setSearchTask(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };
  return (
    <>
      <div className="mx-4 flex-1">
        <input
          type="text"
          placeholder="Search here"
          value={searchTask}
          onChange={handleSearch}
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        />
      </div>
    </>
  );
}
