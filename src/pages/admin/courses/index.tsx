import Head from "next/head";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { APP } from "../../../frontend/enum";
import Button from "../../../frontend/components/common/Button";
import { CourseList } from "../../../frontend/components/Courses";
import {
  ShowingModalState,
  UserRoleState,
} from "../../../frontend/data/globalState";

function Courses() {
  const userRole = useRecoilValue(UserRoleState);
  const setShowingModal = useSetRecoilState(ShowingModalState);
  return (
    <div className="h-full ">
      <Head>
        <title>{APP.APP_NAME} | Admin | Manage Courses</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        {userRole === "Admin" ? (
          <Button
            className="px-8"
            onClick={() => setShowingModal("ManageCourse")}
          >
            Add Course
          </Button>
        ) : null}
        <div className="flex flex-col">
          <CourseList />
        </div>
      </main>
    </div>
  );
}

export default Courses;
