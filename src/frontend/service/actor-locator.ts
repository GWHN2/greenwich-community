import {
  createActor as createHelloActor,
  canisterId as helloCanisterId,
} from "../../declarations/hello";

export const host = process.env.NEXT_PUBLIC_IC_HOST;

export const makeActor = (canisterId: any, createActor: any) => {
  return createActor(canisterId, {
    agentOptions: {
      host: host,
    },
  });
};

export function makeHelloActor() {
  return makeActor(helloCanisterId, createHelloActor);
}
