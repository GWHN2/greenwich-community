import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import { SessionDataState, ShowingModalState } from "../../data/globalState";
import { mintNFT, MintNFTProps } from "../../service/nft-service";
import Button from "../common/Button";
import Modal from "../common/Modal";
import UploadingFilesToIPFS from "../Rating/UploadingFilesToIPFS";

const MintNFTModal = () => {
  const [showingModal, setShowingModal] = useRecoilState(ShowingModalState);
  const [metadata, setMetadata] = useState<MintNFTProps>();
  const [loading, setLoading] = useState(false);
  const sessionData = useRecoilValue(SessionDataState);

  const handleMint = async () => {
    if (!metadata) {
      toast.error("Please select a file to upload");
      return;
    }
    setLoading(true);
    try {
      const mintNFTresponse = await mintNFT({
        ...metadata,
        owner: sessionData?.principalId as string,
      });
      console.log(mintNFTresponse);
      if (mintNFTresponse.Ok) {
        toast.success("NFT minted successfully");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Modal
      isOpen={showingModal.includes("MintNFT")}
      onClose={() => {
        setShowingModal("");
      }}
      className="flex flex-col items-center justify-center"
    >
      <UploadingFilesToIPFS
        callback={(metadata) => {
          setMetadata(metadata);
        }}
      />
      <div className="">
        <Button onClick={handleMint} loading={loading}>
          {loading ? "Minting NFT" : "Mint NFT"}
        </Button>
      </div>
    </Modal>
  );
};

export default MintNFTModal;
