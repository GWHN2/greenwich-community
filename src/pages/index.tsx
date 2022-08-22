import Head from "next/head";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { APP } from "../frontend/enum";

function HomePage() {
  return (
    <div className="">
      <Head>
        <title>{APP.APP_NAME} | University of Greenwich Community</title>
      </Head>
      <main className="container flex flex-col items-center justify-center">
        <div className="relative h-40 w-72 lg:w-96">
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
