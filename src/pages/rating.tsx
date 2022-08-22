import Head from "next/head";
import { useSetRecoilState } from "recoil";
import Button from "../frontend/components/common/Button";
import { Rating as RatingSection } from "../frontend/components/Profile";
import { TableSection } from "../frontend/components/Rating";
import { ShowingModalState } from "../frontend/data/globalState";
import { APP } from "../frontend/enum";

const Rating = () => {
  const setShowingModal = useSetRecoilState(ShowingModalState);

  const rating = {
    rating: 4.5,
    showTitle: true,
  };

  const data = [
    {
      lecturer: "Dr. John Doe",
      course: "Software Engineering",
      rating: 2.5,
    },
    {
      lecturer: "Dr. John Doe",
      course: "Software Engineering",
      rating: 4.5,
    },
    {
      lecturer: "Dr. John Doe",
      course: "Software Engineering",
      rating: 4.5,
    },
    {
      lecturer: "Dr. John Doe",
      course: "Software Engineering",
      rating: 4.5,
    },
  ];
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Rating</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        <RatingSection {...rating} />
        <TableSection data={data} />
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

export default Rating;
