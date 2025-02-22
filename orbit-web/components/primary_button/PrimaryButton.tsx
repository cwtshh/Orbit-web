import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onclick?: () => void;
  style?: string;
}

const PrimaryButton = ({
  children,
  type,
  onclick,
  style,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`bg-steel-gray-800 text-white font-bold p-3 rounded-xl hover:bg-steel-gray-900 ease-in-out duration-200 ${style}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
