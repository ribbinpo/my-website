import React from "react";

interface IButtonForm {
  children: React.ReactNode;
  className?: string;
}

const ButtonForm = ({ children, className }: IButtonForm) => {
  return (
    <button
      className={`px-8 py-2 rounded-full bg-orange-500 hover:bg-orange-600 font-medium text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
