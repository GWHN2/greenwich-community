import Head from "next/head";
import { useSetRecoilState } from "recoil";
import Button from "../frontend/components/common/Button";
import { GradesList, OverallGrade } from "../frontend/components/Grades";
import { ShowingModalState } from "../frontend/data/globalState";
import { APP } from "../frontend/enum";

function Grades() {
  const setShowingModal = useSetRecoilState(ShowingModalState);

  const overallGrade = {
    grades: 8.0,
  };
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Grades</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        <OverallGrade {...overallGrade} />
        <GradesList />
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
}

export default Grades;
