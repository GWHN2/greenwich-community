import Head from "next/head";
import avatar from "../public/images/avatar.png";
import { OverallGrade, Profile, Rating } from "../frontend/components/Profile";
import Diplomas from "../frontend/components/Profile/Diplomas";
import { APP } from "../frontend/enum";

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
      <main className="container flex grid flex-wrap justify-around grid-flow-col grid-rows-3 gap-4 mt-32">
        <div className="flex justify-center mb-10 flex-nowrap">
          <Profile {...profile} />
          <div className="ml-10 space-y-4">
            <Rating {...rating} />
            <OverallGrade {...overallGrade} />
          </div>
        </div>

        <Diplomas />
      </main>
    </div>
  );
}

export default Grades;
