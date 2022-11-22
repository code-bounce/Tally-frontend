import React from "react";
import SearchInput from "../lib/Form/SearchInput";
import SelectInput from "../lib/Form/SelectInput";

interface FilterDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen
          ? "absolute z-50 right-0 top-10 w-[300px] bg-white border rounded-md  p-5 shadow-md space-y-2"
          : "hidden"
      }`}
    >
      <div>
        <h4 className="font-semibold text-base pb-1">Filter Options</h4>
      </div>
      <SelectInput label="Loan amount" />
      <SelectInput label="Loan type" />
      <div className="font-inter">
        <label className="text-xs font-medium uppercase text-gray-400">
          Assignee
        </label>
        <SearchInput width="w-full" placeholder="Enter assignee name." />
      </div>

      <div className="flex items-center justify-end gap-2 pt-3">
        <button
          onClick={onClose}
          className="text-sm font-inter border rounded-md p-1 px-2"
        >
          Cancel
        </button>
        <button className="bg-[#749F82] text-white text-sm font-inter border rounded-md p-1 px-2">
          Save
        </button>
      </div>
    </div>
  );
};

export default FilterDropdown;
