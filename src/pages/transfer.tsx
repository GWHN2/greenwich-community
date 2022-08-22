import Head from "next/head";
import { APP } from "../frontend/enum";
import Form from "../frontend/components/Transfer/Form";

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
        <Form inputs={inputs} />
      </main>
    </div>
  );
};

export default Transfer;
