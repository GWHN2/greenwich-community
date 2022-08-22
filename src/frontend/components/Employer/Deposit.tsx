import { useState } from "react";
import Button from "../common/Button";
import HookForm from "../common/HookForm";

const Deposit = () => {
  const textInputs = [
    {
      name: "amount",
      type: "number",
      placeholder: "Enter amount",
    },
    {
      name: "message",
      placeholder: "Enter message",
    },
  ];
  const defaultValues = {
    amount: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);

  return (
    <div className="w-full max-w-xs p-4 bg-white rounded-lg drop-shadow-xl">
      <HookForm
        textInputs={textInputs}
        defaultValues={defaultValues}
        onTextChange={(values) => {
          setFormValues(values as any);
        }}
      />
      <Button
        onClick={() => {
          console.log(formValues);
        }}
      >
        Deposit
      </Button>
    </div>
  );
};

export default Deposit;
