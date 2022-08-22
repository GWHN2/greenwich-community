import type { NextPage } from "next";
import Head from "next/head";
import RegisterFrom from "../frontend/components/Auth/RegisterFrom";
import { APP } from "../frontend/enum";

const Register: NextPage = () => {
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Register</title>
      </Head>
      <main className="container flex flex-row items-center justify-center mt-32">
        <RegisterFrom />
      </main>
    </div>
  );
};

export default Register;
