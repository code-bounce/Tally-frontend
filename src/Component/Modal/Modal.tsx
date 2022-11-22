import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={`${
        isOpen
          ? "fixed bg-black bg-opacity-50 inset-0 flex items-center justify-center h-screen w-screen"
          : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-md min-w-max"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
