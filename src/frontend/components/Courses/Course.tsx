import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useRecoilValue, useSetRecoilState } from "recoil";
import API from "../../data/api";
import {
  EditingItemIdState,
  ShowingModalState,
  UserRoleState,
} from "../../data/globalState";
import { EventData } from "../../data/type";
import { getHeaders } from "../../utils/getHeaders";
import Button from "../common/Button";

const Course = (props: EventData) => {
  const userRole = useRecoilValue(UserRoleState);
  const setShowingModal = useSetRecoilState(ShowingModalState);
  const setEditingItem = useSetRecoilState(EditingItemIdState);
  const { _id, name, description, imageUrl, code, tokens } = props;
  const router = useRouter();
  const asPath = router.asPath;

  const handleDelete = async () => {
    try {
      const headers = getHeaders();
      const response = await API.delete(`/events/${_id}`, { headers });
      if (response.status === 200) {
        toast.success(" Delete successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <Button
            className="px-8"
            onClick={() => {
              setEditingItem(_id);
              setShowingModal("ManageCourse");
            }}
          >
            Edit
          </Button>

          <Button
            className="px-8"
            onClick={async () => {
              let isConfirm = confirm(
                "Are you sure you want to delete?"
              ).valueOf();
              if (isConfirm) {
                await handleDelete();
              }
            }}
          >
            Delete
          </Button>
        </div>
      ) : (
        <Link href={`/${asPath}/${_id}`}>
          <Button className="px-8">Enroll</Button>
        </Link>
      )}
    </div>
  );
};

export default Course;
