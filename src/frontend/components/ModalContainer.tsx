import React from "react";
import ManageCourseModal from "./Modal/ManageCourseModal";
import MintNFTModal from "./Modal/MintNFTModal";

const ModalContainer = () => {
  return (
    <>
      <MintNFTModal />
      <ManageCourseModal />
    </>
  );
};

export default ModalContainer;
