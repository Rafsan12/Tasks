import { BellSvg, MessagesSvg2 } from "../utlity/Svg";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <SearchBar />
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
  );
}
