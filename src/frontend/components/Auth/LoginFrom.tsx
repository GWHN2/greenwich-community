import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import API from "../../data/api";
import { UserDataState, UserRoleState } from "../../data/globalState";
import Button from "../common/Button";
import HookForm from "../common/HookForm";
import Titles from "../common/Titles";

const LoginFrom = () => {
  const router = useRouter();
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
  const [loading, setLoading] = useState(false);
  const setUserData = useSetRecoilState(UserDataState);
  const setUserRole = useSetRecoilState(UserRoleState);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await API.post("/auth/login", {
        username: formValues.username,
        password: formValues.password,
      });
      const _userData = response.data?.data;
      setUserData(_userData);
      setUserRole(_userData?.roles[0]?.name);
      toast.success("Login Successful as " + _userData.username);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

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
          <Button onClick={handleLogin} loading={loading}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
