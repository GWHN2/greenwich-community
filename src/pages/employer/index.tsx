import Head from "next/head";
import { APP } from "../../frontend/enum";

function Employer() {
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Employer</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        Employer
      </main>
    </div>
  );
}

export default Employer;
