import React from "react";

interface InputProps {
  label?: string;
  type?: "text" | "number" | "tel" | "email" | "password";
  placeholder?: string;
  error?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", placeholder, error, ...rest }, ref) => {
    return (
      <div className="font-roboto">
        {label ? <label className="text-sm font-medium">{label}</label> : null}{" "}
        {type === "password" ? (
          <div className="mt-1 flex border border-gray-300 shadow-sm ring-2 ring-transparent focus-within:ring-blue-500 rounded-md overflow-hidden">
            <input
              className="outline-none flex-grow p-2 border-none"
              placeholder={placeholder}
              type="password"
              ref={ref}
              {...rest}
            />
          </div>
        ) : type === "number" ? (
          <div className="mt-1 flex border border-gray-300 shadow-sm ring-2 ring-transparent focus-within:ring-blue-500 rounded-md overflow-hidden">
            <input
              className="outline-none flex-grow p-2 border-none"
              placeholder={placeholder}
              type="number"
              ref={ref}
              {...rest}
            />
          </div>
        ) : (
          <div className="mt-1 flex border border-gray-300 shadow-sm ring-2 ring-transparent focus-within:ring-blue-500 rounded-md overflow-hidden">
            <input
              className="outline-none flex-grow p-2 border-none"
              placeholder={placeholder}
              type={type}
              ref={ref}
              {...rest}
            />
          </div>
        )}
        {error ? <p className="text-red-500 text-sm pt-1">{error}</p> : null}
      </div>
    );
  }
);

export default Input;
