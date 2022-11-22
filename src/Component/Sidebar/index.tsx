import React from "react";
import { BsGrid } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { FiSun } from "react-icons/fi";
import usePathname from "../../hooks/usePathname";
import SidebarBtn from "./SidebarBtn";

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  const path = usePathname();

  const handleSidebarOpen = React.useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);
  return (
    <div
      className={` ${
        path === "/login"
          ? "hidden"
          : "flex py-3 bg-[#749F82] relative shadow-sm border-r"
      } ${sidebarOpen ? "px-0" : "px-2"}`}
    >
      <button
        onClick={handleSidebarOpen}
        className={`absolute -right-3 border h-5 w-5 bg-white rounded-full hover:bg-gray-100 active:scale-95 flex items-center justify-center `}
      >
        {!sidebarOpen ? (
          <MdOutlineKeyboardArrowRight size={18} />
        ) : (
          <MdOutlineKeyboardArrowLeft size={18} />
        )}
      </button>
      <div className="flex flex-col gap-2">
        <div className="p-2">
          {sidebarOpen ? (
            <div className="font-roboto font-medium text-xs uppercase text-white">
              Good morning
            </div>
          ) : (
            <FiSun className="text-white" size={23} />
          )}
        </div>
        <SidebarBtn
          sidebarOpen={sidebarOpen}
          icon={<BsGrid size={23} />}
          link="/"
        >
          Overview
        </SidebarBtn>
      </div>
    </div>
  );
};

export default Sidebar;
