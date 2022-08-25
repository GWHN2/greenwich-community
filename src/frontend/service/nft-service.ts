import { makeNftActor } from "./actor-locator";

export type MintNFTProps = {
  url: string;
  name: string;
  description: string;
};

export const mintNFT = async ({ url, name, description }: MintNFTProps) => {
  const actorService = await makeNftActor();
  const metadata = {
    name,
    description,
    url,
  };
  const result = await actorService.mint(metadata);
  return result;
};

export const getMyNfts = async () => {
  const actorService = await makeNftActor();
  const result = await actorService.getMyNfts();
  return result;
};
