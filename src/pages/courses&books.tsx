import Head from "next/head";
import { CourseList } from "../frontend/components/Courses";
import { APP } from "../frontend/enum";

const CoursesBooks = () => {
  return (
    <div className="h-full">
      <Head>
        <title>{APP.APP_NAME} | Courses and Books</title>
      </Head>
      <main className="container flex flex-col items-center justify-center mt-32">
        <div className="flex flex-row ">
          <CourseList />
        </div>
      </main>
    </div>
  );
};

export default CoursesBooks;
