import Head from "next/head";
import { APP } from "../../../frontend/enum";

function Events() {
  return (
    <div className="h-full">
      <Head>
        <title>{APP.APP_NAME} | Admin | Manage Events</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        Event Info
      </main>
    </div>
  );
}

export default Events;
