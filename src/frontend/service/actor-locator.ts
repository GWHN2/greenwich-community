import {
  createActor as createTokenActor,
  canisterId as tokenCanisterId,
} from "../../declarations/token";
import {
  createActor as createNftActor,
  canisterId as nftCanisterId,
} from "../../declarations/nft";

export const host = process.env.NEXT_PUBLIC_IC_HOST;
export const canisterId = tokenCanisterId || nftCanisterId;

export const makeActor = (canisterId: any, createActor: any) => {
  return createActor(canisterId, {
    agentOptions: {
      host: host,
    },
  });
};

export function makeTokenActor() {
  return makeActor(tokenCanisterId, createTokenActor);
}
export function makeNftActor() {
  return makeActor(nftCanisterId, createNftActor);
}
