import { Search } from "lucide-react";

function SearchInput() {
    return (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search here"
          className="  bg-gray-800/50 border border-pink-500/30 rounded-md pl-10 pr-4 py-2 text-sm w-[220px] focus:outline-none focus:ring-1 focus:ring-pink-500"
        />
      </div>
    )
  }
  export default SearchInput;