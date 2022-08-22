import Head from "next/head";
import { APP } from "../../frontend/enum";

function DepositForCompanies() {
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Admin | Deposit for Companies</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        Deposit for Companies
      </main>
    </div>
  );
}

export default DepositForCompanies;
