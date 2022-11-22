import React from "react";
import { BiSearch } from "react-icons/bi";

interface SearchInputProps {
  placeholder?: string;
  width?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder, width = "w-[300px]" }, ref) => {
    return (
      <div
        className={`flex border items-center bg-white rounded-md overflow-hidden font-inter border-gray-300 ${width} `}
      >
        <div className="p-1 pl-2">
          <BiSearch className="text-gray-400" />
        </div>
        <input
          className="outline-none flex-grow font-roboto text-sm p-1"
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    );
  }
);

export default SearchInput;
