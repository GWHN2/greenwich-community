import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ShowingModalState } from "../../data/globalState";
import Button from "../common/Button";
import Modal from "../common/Modal";
import UploadingFilesToIPFS from "../Rating/UploadingFilesToIPFS";

const MintNFTModal = () => {
  const [showingModal, setShowingModal] = useRecoilState(ShowingModalState);
  return (
    <Modal
      isOpen={showingModal.includes("MintNFT")}
      onClose={() => {
        setShowingModal("");
      }}
    >
      <UploadingFilesToIPFS />
    </Modal>
  );
};

export default MintNFTModal;
