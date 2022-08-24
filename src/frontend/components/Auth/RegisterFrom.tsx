import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import API from "../../data/api";
import { UserDataState, UserRoleState } from "../../data/globalState";
import { ACCESS_TOKEN } from "../../data/localStorage";
import Button from "../common/Button";
import HookForm from "../common/HookForm";
import Titles from "../common/Titles";

const RegisterFrom = () => {
  const defaultValues = {
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const textInputs = [
    {
      placeholder: "Enter your full name",
      name: "fullName",
    },
    {
      placeholder: "Enter username",
      name: "username",
    },
    {
      placeholder: "Enter password",
      name: "password",
      type: "password",
    },
    {
      placeholder: "Confirm password",
      name: "confirmPassword",
      type: "password",
    },
  ];

  const [formValues, setFormValues] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const setUserData = useSetRecoilState(UserDataState);
  const setUserRole = useSetRecoilState(UserRoleState);

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await API.post("/auth/signup", {
        name: formValues.fullName,
        username: formValues.username,
        password: formValues.password,
        roles: "Student",
      });
      const _userData = response.data?.data;
      setUserData(_userData);
      setUserRole(_userData?.roles[0]?.name);
      localStorage.setItem(ACCESS_TOKEN, _userData.access_token);
      toast.success("Signup Successful as " + _userData.username);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full p-6 my-10 bg-white rounded-lg lg:w-1/2 drop-shadow-xl">
      <Titles title="Register" className="text-center" />
      <div className="flex flex-col items-center justify-center space-y-5">
        <HookForm
          textInputs={textInputs}
          defaultValues={defaultValues}
          onTextChange={(values) => {
            setFormValues(values as any);
          }}
        />
        <div className="flex flex-row items-center justify-end w-full">
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
        <div className="flex justify-center">
          <Button onClick={handleSignup}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterFrom;
