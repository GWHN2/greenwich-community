import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { UserRoleState } from "../../data/globalState";
import Button from "../common/Button";

interface CourseProps {
  id: string;
  course: string;
  image: any;
  lecturer: string;
  value: number;
  url: string;
  editUrl: string;
}

const Course = (props: CourseProps) => {
  const userRole = useRecoilValue(UserRoleState);

  const { id, course, image, lecturer, value, url, editUrl } = props;

  return (
    <div className="flex flex-col items-center justify-center p-3 transition duration-300 bg-white rounded-lg shadow-xl cursor-pointer hover:scale-105">
      <Link href={url}>
        <div className="relative h-40 w-72 lg:w-80">
          <Image src={image} alt="logo" layout="fill" objectFit="contain" />
        </div>
      </Link>
      <div className="w-full">
        <h3 className="text-2xl font-bold">{course}</h3>
        <p className="text-xl">{lecturer}</p>
      </div>
      <span className="flex justify-end w-full text-lg font-semibold text-green-400">
        {value} Token
      </span>
      {userRole === "Admin" ? (
        <div className="flex flex-row space-x-4">
          <Link href={editUrl}>
            <Button className="px-8">Edit</Button>
          </Link>
          <Button
            className="px-8"
            onClick={() => {
              let isConfirm = confirm(
                "Are you sure you want to delete?"
              ).valueOf();
            }}
          >
            Delete
          </Button>
        </div>
      ) : (
        <Button className="px-8">Enroll</Button>
      )}
    </div>
  );
};

export default Course;
