import { useQuery } from "../context/TaskContext";

export default function SearchBar() {
  const { query, setQuery } = useQuery();
  return (
    <div className="mx-4 flex-1">
      <input
        type="text"
        placeholder="Search here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
      />
    </div>
  );
}
