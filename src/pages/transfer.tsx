import Head from "next/head";
import { APP } from "../frontend/enum";
import TransferFrom from "../frontend/components/Transfer/TransferFrom";

const Transfer = () => {
  const inputs: any = [
    {
      label: "Principal ID",
      placeholder: "Enter principal ID",
    },
    {
      label: "Amount",
      placeholder: "Enter amount",
    },
    {
      label: "Message",
      placeholder: "Enter message",
    },
  ];

  return (
    <div className="h-full">
      <Head>
        <title>{APP.APP_NAME} | Transfer</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        <TransferFrom />
      </main>
    </div>
  );
};

export default Transfer;
