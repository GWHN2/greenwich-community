import Head from "next/head";
import Deposit from "../../frontend/components/Employer/Deposit";
import { APP } from "../../frontend/enum";

function DepositForCompanies() {
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Employer | Deposit for Companies</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        <Deposit />
      </main>
    </div>
  );
}

export default DepositForCompanies;
