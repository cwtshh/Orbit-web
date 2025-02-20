import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton = ({
  children,
  onClick,
  style,
  type,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="font-bold bg-steel-gray-700 text-white p-3 rounded-xl hover:bg-steel-gray-800 transition-colors"
      style={style}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
