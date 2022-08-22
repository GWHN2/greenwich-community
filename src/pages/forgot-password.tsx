import type { NextPage } from "next";
import Head from "next/head";
import ForgotPasswordForm from "../frontend/components/Auth/ForgotPasswordForm";
import { APP } from "../frontend/enum";

const ForgotPassword: NextPage = () => {
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Forgot password</title>
      </Head>
      <main className="container flex flex-row items-center justify-center mt-32">
        <ForgotPasswordForm />
      </main>
    </div>
  );
};

export default ForgotPassword;
