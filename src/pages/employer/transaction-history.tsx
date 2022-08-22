import Head from "next/head";
import Titles from "../../frontend/components/common/Titles";
import History from "../../frontend/components/Employer/History";
import { APP } from "../../frontend/enum";

function Transaction() {
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Employer | Transaction</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-20">
        <Titles title="Your Transaction History" />
        <History />
      </main>
    </div>
  );
}

export default Transaction;
