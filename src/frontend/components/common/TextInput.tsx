import { ChangeEvent } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextInput = ({ label, error, ...props }: TextInputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && <span className="">{label}</span>}
      <div className={`gradient-background p-1 rounded-xl`}>
        <input type="text" className="w-full p-1 rounded-lg" {...props} />
      </div>
    </div>
  );
};

export default TextInput;
