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
    <div
      className={`px-2 py-2 rounded-lg cursor-pointer ${
        disabled ? "bg-gray-400" : " bg-secondary-400"
      } my-5 flex items-center justify-center ${layoutClassName}`}
    >
      <button
        className={`text-white font-semibold w-auto flex flex-row items-center ${className}`}
        {...props}
      >
        {loading && (
          <div className="mr-2">
            <Spinner />
          </div>
        )}
        {children}
      </button>
    </div>
  );
};

export default Button;
