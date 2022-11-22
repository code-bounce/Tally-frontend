import React from "react";

interface SelectInputProps {
  label?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs pb-1 font-medium uppercase text-gray-400">
        {label}
      </label>
      <select
        {...rest}
        className="p-1 px-2 border border-gray-300 text-sm rounded-md outline-none ring-1 ring-transparent"
      >
        <option>Choose loan status</option>
        <option>On hold</option>
      </select>
    </div>
  );
};

export default SelectInput;
