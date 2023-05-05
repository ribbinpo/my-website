import React from "react";

interface IButtonForm {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonForm = ({
  children = "",
  className,
  onClick = () => {},
}: IButtonForm) => {
  return (
    <button
      type="button"
      className={`px-8 py-2 rounded-full bg-orange-500 hover:bg-orange-600 font-medium text-white ${
        className || ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
