import React from "react";

interface IconButtonProps {
  children: JSX.Element;
  onClick?: () => void;
  bgColor?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ onClick, children, bgColor }, ref) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className={`rounded-md p-2 flex items-center justify-center ${
          bgColor && bgColor
        }`}
      >
        {children}
      </button>
    );
  }
);

export default IconButton;
