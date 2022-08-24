import React from "react";
import Spinner from "./Spinner";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  layoutClassName?: string;
  disabled?: boolean;
  loading?: boolean;
}
const Button = ({
  children,
  className,
  layoutClassName,
  disabled,
  loading,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={`px-2 py-2 rounded-lg cursor-pointer transition duration-200 
      active:scale-95 
      ${
        disabled ? "bg-secondary-200" : " bg-secondary-400"
      } my-5 flex items-center justify-center ${layoutClassName}`}
      {...props}
    >
      <span
        className={`text-white font-semibold w-auto flex flex-row items-center ${className}`}
      >
        {loading && (
          <div className="mr-2">
            <Spinner />
          </div>
        )}
        {children}
      </span>
    </button>
  );
};

export default Button;
