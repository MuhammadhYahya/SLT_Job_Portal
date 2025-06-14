import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange }) => (
    <div className="w-full max-w-7xl flex flex-col sm:flex-row md:justify-end justify-center items-center mb-8">
  <div className="relative w-1/2 max-w-md p-5 ">
    {/* Gray inner search bar */}
    <div className="absolute inset-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] border border-black rounded-4xl"></div>

    {/* Search input */}
    <input
      type="search"
      placeholder="Search"
      value={value}
      onChange={onChange}
      className="relative w-[90%] pl-4 pr-10 py-1 bg-gray-200 rounded-4xl focus:outline-none z-10"
    />

    {/* Search icon */}
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
      <div className="bg-black rounded-full p-2 flex items-center justify-center">
        <FiSearch className="text-white text-lg stroke-[5]" />
      </div>
    </div>
    </div>
  </div>
);

export default SearchBar;
