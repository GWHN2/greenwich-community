import type { NextPage } from "next";
import Head from "next/head";
import LoginFrom from "../frontend/components/Auth/LoginFrom";
import { APP } from "../frontend/enum";

const Login: NextPage = () => {
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Login</title>
      </Head>
      <main className="container flex flex-row items-center justify-center mt-32">
        <LoginFrom />
      </main>
    </div>
  );
};

export default Login;
