import { useState } from "react";
import { useRecoilState } from "recoil";
import { ShowingModalState } from "../../data/globalState";

import Button from "../common/Button";
import HookForm from "../common/HookForm";
import Modal from "../common/Modal";
import Titles from "../common/Titles";
import UploadingFilesToIPFS from "../Rating/UploadingFilesToIPFS";

const ManageCourseModal = () => {
  const [showingModal, setShowingModal] = useRecoilState(ShowingModalState);
  const defaultValues = {
    name: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);

  const textInputs = [
    {
      placeholder: "Enter name",
      name: "name",
    },
    {
      placeholder: "Enter name",
      name: "name",
    },
    {
      placeholder: "Enter name",
      name: "name",
    },
    {
      placeholder: "Enter name",
      name: "name",
    },
    {
      placeholder: "Enter name",
      name: "name",
    },
  ];

  return (
    <Modal
      isOpen={showingModal.includes("ManageCourse")}
      onClose={() => {
        setShowingModal("");
      }}
    >
      <Titles title="Add Course" className="pt-0 text-center" />
      <UploadingFilesToIPFS />
      <div className="flex flex-col items-center justify-center space-y-5">
        <HookForm
          className="grid-cols-2"
          textInputs={textInputs}
          defaultValues={defaultValues}
          onTextChange={(values) => {
            setFormValues(values as any);
          }}
        />
        <div className="flex justify-center">
          <Button
            onClick={() => {
              console.log(formValues);
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ManageCourseModal;
