import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";
import Layout from "../frontend/components/Layout";
import ModalContainer from "../frontend/components/ModalContainer";
import "../frontend/styles/globals.scss";
import "../frontend/styles/table.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ToastContainer />
      <ModalContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
