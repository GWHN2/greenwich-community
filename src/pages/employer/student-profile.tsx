import Head from "next/head";
import avatar from "../../public/images/avatar.png";
import SearchInput from "../../frontend/components/common/SearchInput";
import { Profile } from "../../frontend/components/Profile";
import { APP } from "../../frontend/enum";

function StudentProfile() {
  const profiles = [
    {
      image: avatar,
      username: "John Doe",
      dateOfBirth: "01/01/2000",
      StudentID: "123456789",
      numOfToken: 0,
    },
    {
      image: avatar,
      username: "John Doe",
      dateOfBirth: "01/01/2000",
      StudentID: "3423432423",
      numOfToken: 20,
    },
    {
      image: avatar,
      username: "John Doe",
      dateOfBirth: "01/01/2000",
      StudentID: "3423432423",
      numOfToken: 20,
    },
    {
      image: avatar,
      username: "John Doe",
      dateOfBirth: "01/01/2000",
      StudentID: "3423432423",
      numOfToken: 20,
    },
    {
      image: avatar,
      username: "John Doe",
      dateOfBirth: "01/01/2000",
      StudentID: "3423432423",
      numOfToken: 20,
    },
  ];

  return (
    <div className="h-full">
      <Head>
        <title>{APP.APP_NAME} | Employer | View Student profile</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        <SearchInput
          layoutClassName="mb-60 w-72"
          placeholder="Search by student code"
        />

        <div className="flex flex-row space-x-4">
          {profiles.map((profile, i) => {
            return (
              <div key={i}>
                <Profile {...profile} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default StudentProfile;
