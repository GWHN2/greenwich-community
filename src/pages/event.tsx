import Head from "next/head";
import { useSetRecoilState } from "recoil";
import Button from "../frontend/components/common/Button";
import { EventList } from "../frontend/components/Event";
import { ShowingModalState } from "../frontend/data/globalState";
import { APP } from "../frontend/enum";

const Event = () => {
  const setShowingModal = useSetRecoilState(ShowingModalState);

  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Event</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        <EventList />
        <Button
          onClick={() => {
            setShowingModal("MintNFT");
          }}
        >
          Mint NFT
        </Button>
        <p className="items-center justify-center">
          Notice: You must capture your rating into image to mint
        </p>
      </main>
    </div>
  );
};

export default Event;
