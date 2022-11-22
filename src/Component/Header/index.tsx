import React from "react";
import usePathname from "../../hooks/usePathname";
import UserCard from "./UserCard";

const Header = () => {
  const path = usePathname();
  return (
    <div
      className={`${
        path === "/login"
          ? "hidden"
          : "flex bg-white shadow-lg border-b items-center justify-end p-2 px-5 h-[3.5rem]"
      }`}
    >
      <UserCard />
    </div>
  );
};

export default Header;
