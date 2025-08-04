import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className={`group 
         text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg 
         hover:shadow-xl transform hover:scale-105 transition-all duration-300 
         flex items-center gap-2 ${props.className}`}
      onClick={props.onClick || (() => {})}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
      <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
        →
      </div>
    </button>
  );
};

export default Button;
