import Head from "next/head";
import { useRecoilValue } from "recoil";
import Button from "../../../frontend/components/common/Button";
import { EventList } from "../../../frontend/components/Event";
import { UserRuleState } from "../../../frontend/data/globalState";
import { APP } from "../../../frontend/enum";

function Events() {
  const userRule = useRecoilValue(UserRuleState);

  return (
    <div className="h-full">
      <Head>
        <title>{APP.APP_NAME} | Admin | Manage Events</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        {userRule === "Admin" ? (
          <Button className="px-8">Add Event</Button>
        ) : null}
        <EventList />
      </main>
    </div>
  );
}

export default Events;
