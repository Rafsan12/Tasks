/* eslint-disable react/prop-types */
import { BellSvg, MessagesSvg2 } from "../../utlity/Svg";
import Search_Task from "./Search_Task";

export default function Header({ onSearch }) {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-800 p-4">
        <button className="lg:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <Search_Task onSearch={onSearch} />
        <div className="flex items-center">
          <button className="relative mr-4">
            <BellSvg />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button className="relative mr-4">
            <MessagesSvg2 />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
        </div>
      </header>
    </>
  );
}
