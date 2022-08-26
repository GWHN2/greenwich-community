import Head from "next/head";
import { OverallGrade, Profile, Rating } from "../frontend/components/Profile";
import Diplomas from "../frontend/components/Profile/Diplomas";
import MyNFT from "../frontend/components/Profile/MyNFT";
import { APP } from "../frontend/enum";
import avatar from "../public/images/avatar.png";

function Grades() {
  const profile = {
    image: avatar,
    username: "John Doe",
    dateOfBirth: "01/01/2000",
    StudentID: "123456789",
    numOfToken: 0,
  };

  const rating = {
    rating: 2.5,
    showTitle: true,
  };

  const overallGrade = {
    grades: 8.0,
  };

  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | View Profile</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mx-auto mt-32 space-y-4">
        <div className="flex justify-center mb-10 flex-nowrap">
          <Profile {...profile} />
          <div className="ml-10 space-y-4">
            <Rating {...rating} />
            <OverallGrade {...overallGrade} />
          </div>
        </div>
        <MyNFT />
      </main>
    </div>
  );
}

export default Grades;
