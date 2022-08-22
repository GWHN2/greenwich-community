import Link from "next/link";
import React, { useState } from "react";
import Button from "../common/Button";
import HookForm from "../common/HookForm";
import Titles from "../common/Titles";

const ForgotPasswordForm = () => {
  const defaultValues = {
    username: "",
  };

  const textInputs = [
    {
      placeholder: "Enter username",
      name: "username",
    },
  ];

  const [formValues, setFormValues] = useState(defaultValues);
  return (
    <div className="w-full p-6 my-10 bg-white rounded-lg lg:w-1/2 drop-shadow-xl">
      <Titles title="Reset Password" className="pt-0 text-center" />
      <div className="flex flex-col items-center justify-center space-y-5">
        <HookForm
          textInputs={textInputs}
          defaultValues={defaultValues}
          onTextChange={(values) => {
            setFormValues(values as any);
          }}
        />
        <div className="flex justify-center">
          <Button
            onClick={() => {
              console.log(formValues);
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
