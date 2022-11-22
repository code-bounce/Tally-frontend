import React from "react";
import { Link } from "react-router-dom";
import usePathname from "../../hooks/usePathname";

interface SidebarBtnProps {
  children: string;
  link: string;
  icon: JSX.Element;
  sidebarOpen: boolean;
}

const SidebarBtn: React.FC<SidebarBtnProps> = ({
  children,
  link,
  icon,
  sidebarOpen,
}) => {
  const path = usePathname();
  return (
    <Link
      to={link}
      className={`flex items-center gap-2 p-2 text-white  ${
        sidebarOpen ? "w-[220px]" : "w-auto rounded-md"
      } ${link === path && "bg-[#425F57]"}`}
    >
      {icon}
      {sidebarOpen ? <p className="font-roboto text-base">{children}</p> : null}
    </Link>
  );
};

export default SidebarBtn;
