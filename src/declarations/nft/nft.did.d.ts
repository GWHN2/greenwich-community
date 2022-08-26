import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type ApiError = { 'InvalidAddress' : null } |
  { 'InvalidTokenId' : null } |
  { 'Unauthorized' : null } |
  { 'Other' : null };
export type BalanceResult = { 'Ok' : bigint } |
  { 'Err' : ApiError };
export type MintResult = { 'Ok' : bigint } |
  { 'Err' : ApiError };
export interface Nft {
  'approve' : ActorMethod<[TokenId, Principal], undefined>,
  'balanceOf' : ActorMethod<[Principal], BalanceResult>,
  'getAllNfts' : ActorMethod<[], Array<[TokenId, metadata]>>,
  'getApproved' : ActorMethod<[TokenId], Principal>,
  'getMyNfts' : ActorMethod<[Principal], Array<NftResp>>,
  'getName' : ActorMethod<[], string>,
  'getOwnerCanister' : ActorMethod<[], Principal>,
  'getSymbol' : ActorMethod<[], string>,
  'getTokenInfo' : ActorMethod<[TokenId], [] | [metadata]>,
  'isApprovedForAll' : ActorMethod<[Principal, Principal], boolean>,
  'mint' : ActorMethod<[metadata], MintResult>,
  'ownerOf' : ActorMethod<[TokenId], [] | [Principal]>,
  'setApprovalForAll' : ActorMethod<[Principal, boolean], undefined>,
  'transfer' : ActorMethod<[TokenId, Principal], TxReceipt>,
  'transferFrom' : ActorMethod<[Principal, Principal, bigint], undefined>,
}
export interface NftResp {
  'id' : bigint,
  'url' : string,
  'owner' : Principal,
  'name' : string,
  'description' : string,
}
export type TokenId = bigint;
export type TxReceipt = { 'Ok' : boolean } |
  { 'Err' : ApiError };
export interface metadata {
  'url' : string,
  'owner' : Principal,
  'name' : string,
  'description' : string,
}
export interface _SERVICE extends Nft {}
