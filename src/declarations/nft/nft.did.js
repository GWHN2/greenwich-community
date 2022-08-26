export const idlFactory = ({ IDL }) => {
  const TokenId = IDL.Nat;
  const ApiError = IDL.Variant({
    'InvalidAddress' : IDL.Null,
    'InvalidTokenId' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'Other' : IDL.Null,
  });
  const BalanceResult = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : ApiError });
  const metadata = IDL.Record({
    'url' : IDL.Text,
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'description' : IDL.Text,
  });
  const NftResp = IDL.Record({
    'id' : IDL.Nat,
    'url' : IDL.Text,
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'description' : IDL.Text,
  });
  const MintResult = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : ApiError });
  const TxReceipt = IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : ApiError });
  const Nft = IDL.Service({
    'approve' : IDL.Func([TokenId, IDL.Principal], [], []),
    'balanceOf' : IDL.Func([IDL.Principal], [BalanceResult], ['query']),
    'getAllNfts' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenId, metadata))],
        ['query'],
      ),
    'getApproved' : IDL.Func([TokenId], [IDL.Principal], ['query']),
    'getMyNfts' : IDL.Func([IDL.Principal], [IDL.Vec(NftResp)], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getOwnerCanister' : IDL.Func([], [IDL.Principal], ['query']),
    'getSymbol' : IDL.Func([], [IDL.Text], ['query']),
    'getTokenInfo' : IDL.Func([TokenId], [IDL.Opt(metadata)], ['query']),
    'isApprovedForAll' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        ['query'],
      ),
    'mint' : IDL.Func([metadata], [MintResult], []),
    'ownerOf' : IDL.Func([TokenId], [IDL.Opt(IDL.Principal)], ['query']),
    'setApprovalForAll' : IDL.Func([IDL.Principal, IDL.Bool], [], []),
    'transfer' : IDL.Func([TokenId, IDL.Principal], [TxReceipt], []),
    'transferFrom' : IDL.Func([IDL.Principal, IDL.Principal, IDL.Nat], [], []),
  });
  return Nft;
};
export const init = ({ IDL }) => { return []; };
