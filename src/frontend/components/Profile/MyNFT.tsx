import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import {
  SessionDataState,
  UserDataState,
  UserRoleState,
} from "../../data/globalState";
import Button from "../common/Button";
import avatar from "../../../public/images/avatar.png";
import { useEffect, useState } from "react";
import { getMyNfts } from "../../service/nft-service";
import { NFTData } from "../../data/type";
import Titles from "../common/Titles";

export interface ProfileProps {
  image: any;
  username: string;
  dateOfBirth: string;
  StudentID: string;
  numOfToken: number;
}

const MyNFT = () => {
  const sectionData = useRecoilValue(SessionDataState);
  const userData = useRecoilValue(UserDataState);
  const [myNfts, setMyNfts] = useState<NFTData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const nfts = await getMyNfts(sectionData?.principalId as string);
        if (nfts) {
          setMyNfts(nfts);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Titles title="Your NFT" className="text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {myNfts &&
          myNfts.length > 0 &&
          myNfts.map((nft) => (
            <div
              className="flex flex-col items-center justify-around p-4 rounded-lg shadow-lg"
              key={nft.id}
            >
              <div className="w-60 h-60">
                <img
                  className="object-contain w-full h-full"
                  src={nft.url}
                  alt={nft.name}
                />
              </div>

              <span className="">Name: {nft.name}</span>
              <span className="">Description: {nft.description}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyNFT;
