import Link from "next/link";
import React, { useState } from "react";
import Button from "../common/Button";
import HookForm from "../common/HookForm";
import Titles from "../common/Titles";

const LoginFrom = () => {
  const defaultValues = {
    username: "",
    password: "",
  };

  const textInputs = [
    {
      placeholder: "Enter username",
      name: "username",
    },
    {
      placeholder: "Enter password",
      name: "password",
      type: "password",
    },
  ];

  const [formValues, setFormValues] = useState(defaultValues);
  return (
    <div className="w-full p-6 my-10 bg-white rounded-lg lg:w-1/2 drop-shadow-xl">
      <Titles title="Login" className="text-center" />
      <div className="flex flex-col items-center justify-center space-y-5">
        <HookForm
          textInputs={textInputs}
          defaultValues={defaultValues}
          onTextChange={(values) => {
            setFormValues(values as any);
          }}
        />
        <div className="flex flex-row items-center justify-between w-full">
          <Link href="/forgot-password">
            <a>Forgot password?</a>
          </Link>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              console.log(formValues);
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
