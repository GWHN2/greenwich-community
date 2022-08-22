import Head from "next/head";
import CreateAdvertisement from "../../frontend/components/Employer/CreateAdvertisement";
import { APP } from "../../frontend/enum";

function Advertisement() {
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Employer | Advertisement</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        <CreateAdvertisement />
      </main>
    </div>
  );
}

export default Advertisement;
