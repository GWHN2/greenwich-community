import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
}

const TextInput = ({
  label,
  error,
  type = "text",
  ...props
}: TextInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="flex flex-col w-full">
      {label && <span className="">{label}</span>}
      <div className={`gradient-background p-1 rounded-xl relative`}>
        {type === "password" && (
          <div
            className="absolute flex items-center w-6 h-full pb-2 text-gray-500 cursor-pointer right-4"
            onClick={() => {
              setIsShowPassword(!isShowPassword);
            }}
          >
            {isShowPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </div>
        )}
        <input
          type={isShowPassword ? "text" : type}
          className="w-full p-1 rounded-lg"
          {...props}
        />
      </div>
    </div>
  );
};

export default TextInput;
