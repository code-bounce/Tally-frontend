import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const UserCard = () => {
  return (
    <div className="flex items-center gap-2 font-roboto">
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
        />
      </div>
      <div>
        <h4 className="text-sm font-medium">Tallyhoo B.</h4>
        <p className="text-xs">Analyst</p>
      </div>
      <div className="pl-3">
        <IoIosArrowDropdownCircle size={18} className="" />
      </div>
    </div>
  );
};

export default UserCard;
