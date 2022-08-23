import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { UserRoleState } from "../../data/globalState";
import { EventData } from "../../data/type";
import Button from "../common/Button";

const Course = (props: EventData) => {
  const userRole = useRecoilValue(UserRoleState);
  const { _id, name, description, imageUrl, code, tokens } = props;

  return (
    <div className="flex flex-col items-center justify-center p-3 transition duration-300 bg-white rounded-lg shadow-xl cursor-pointer hover:scale-105">
      <div className="relative h-40 w-72 lg:w-80">
        {/* <Image src={imageUrl} alt="logo" layout="fill" objectFit="contain" /> */}
      </div>
      <div className="w-full">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-xl">{description}</p>
      </div>
      <span className="flex justify-end w-full text-lg font-semibold text-green-400">
        {tokens} Token
      </span>
      {userRole === "Admin" ? (
        <div className="flex flex-row space-x-4">
          {/* <Link href={editUrl}> */}
          <Button className="px-8">Edit</Button>
          {/* </Link> */}
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
