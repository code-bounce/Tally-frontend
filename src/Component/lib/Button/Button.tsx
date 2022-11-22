import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type = "button", onClick }, ref) => {
    return (
      <button
        className="p-2 px-4 font-roboto bg-[#749F82] text-white rounded-md w-full md:w-[160px] text-sm"
        onClick={onClick}
        type={type}
        ref={ref}
      >
        <p>{children}</p>
      </button>
    );
  }
);

export default Button;
