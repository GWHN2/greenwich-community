import Head from "next/head";
import { APP } from "../../frontend/enum";

function Admin() {
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Admin</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        Admin
      </main>
    </div>
  );
}

export default Admin;
