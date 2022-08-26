import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Debug "mo:base/Debug";
import Error "mo:base/Error";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import P "mo:base/Prelude";
import Principal "mo:base/Principal";

import Types "types";
shared(msg) actor class Nft() = Self{
    private stable var owner: Principal = msg.caller;
    private stable var name: Text = "UoGDIP721";
    private stable var symbol: Text = "UOG721";
    private type TokenAddress = Principal;
    private type TokenId = Nat;
    private stable var TokenCounter : Nat = 0;
    private stable var tokenIdToMetadataTmp: [(TokenId, Types.metadata)] = [];
    private stable var tokenIdToOwnerTmp: [(TokenId, Principal)] = [];
    private stable var balancesTmp: [(Principal, Nat)] = [];
    private stable var tokenIdToApproveTmp: [(TokenId, Principal)] = [];
    private stable var addressApproveAllTmp: [(Principal, [Principal])] = [];
    private let tokenIdToMetadata: HashMap.HashMap<TokenId, Types.metadata> = HashMap.fromIter<TokenId, Types.metadata>(tokenIdToMetadataTmp.vals(), 0, Nat.equal, Hash.hash);
    private let tokenIdToOwner: HashMap.HashMap<TokenId, Principal> = HashMap.fromIter<TokenId, Principal>(tokenIdToOwnerTmp.vals(), 0, Nat.equal, Hash.hash);
    private let balances: HashMap.HashMap<Principal, Nat> = HashMap.fromIter(balancesTmp.vals(), 0, Principal.equal, Principal.hash);
    private let tokenIdToApprove: HashMap.HashMap<TokenId, Principal> = HashMap.fromIter(tokenIdToApproveTmp.vals(), 0, Nat.equal, Hash.hash);
    private let addressApproveAll: HashMap.HashMap<Principal, [Principal]> = HashMap.fromIter(addressApproveAllTmp.vals(), 0, Principal.equal, Principal.hash);

    public query func getName(): async Text {
        return name;
    };

    public query func getSymbol(): async Text {
        return symbol;
    };
     public query func getOwnerCanister(): async Principal {
        return owner;
    };

    public query func balanceOf(address: Principal): async Types.BalanceResult {
        switch(balances.get(address)) {
            case(null) return #Ok(0);
            case(?balance) return #Ok(balance);
        };
    };

    public query func ownerOf(tokenId: TokenId) : async ?Principal {
       return _ownerOf(tokenId);
    };

    public query func getTokenInfo(tokenId: TokenId): async ?Types.metadata {
        return tokenIdToMetadata.get(tokenId);
    };

    public shared(msg) func approve(tokenId: TokenId, to: Principal) : async () {
        switch(tokenIdToOwner.get(tokenId)) {
            case (null) {throw Error.reject("No Owner of token")};
            case (?owner) {
                assert owner == msg.caller;
                assert owner != to;
                assert not _isApprovedForAll(owner, to);
                _approve(tokenId, to);
            };
        };
    };

    public shared(msg) func setApprovalForAll(to: Principal, isApprove: Bool) : async () {
        assert msg.caller != to;

        switch(isApprove) {
            case true {
                switch(addressApproveAll.get(msg.caller)) {
                    case (null) {
                        addressApproveAll.put(msg.caller, [to]);
                    };
                    case (?list) {
                        var arr = Array.filter<Principal>(list, func (a) { a != to});
                        arr := Array.append<Principal>(arr, [to]);
                        addressApproveAll.put(msg.caller, arr);
                    }; 
                };
            };
            case false {
                switch(addressApproveAll.get(msg.caller)) {
                    case (null) {
                        addressApproveAll.put(msg.caller, []);
                    };
                    case (?list) {
                        var arr = Array.filter<Principal>(list, func (a) { a != to});
                        addressApproveAll.put(msg.caller, arr);
                    }; 
                };
            };
        };
    };

    public query func getApproved(tokenId: TokenId): async Principal {
        switch(tokenIdToApprove.get(tokenId)) {
            case (null) {return throw Error.reject("Token has not approve yet")};
            case (?to) {return to}
        }
    };

    public query func isApprovedForAll(owner: Principal, to: Principal): async Bool {
        return _isApprovedForAll(owner, to);
    };

    public shared(msg) func transfer(tokenId: TokenId, to: Principal): async Types.TxReceipt {
       _transfer(msg.caller, to, tokenId);
       return #Ok(true);
    };

    public shared(msg) func transferFrom(from : Principal, to : Principal, tokenId : Nat) : async () {
		assert _isApprovedOrOwner(from, tokenId);
		
		_transfer(from, to, tokenId);
	};

    public shared(msg) func mint(metadata: Types.metadata) : async Types.MintResult {
      TokenCounter += 1;
      _mint(msg.caller, TokenCounter, metadata);
		return #Ok(TokenCounter);
	};

  public query func getAllNfts(): async [(TokenId, Types.metadata)] {
      return Iter.toArray<(TokenId, Types.metadata)>(tokenIdToMetadata.entries());
  };

  public shared query({caller}) func getMyNfts(principalId : Principal): async [Types.NftResp] {
    var tokenIds = Buffer.Buffer<(TokenId)>(0);
    Iter.iterate(
        tokenIdToOwner.entries(),func ((tokenId: TokenId, owner: Principal), index: Nat) {
          if (owner == caller) {
            tokenIds.add(tokenId);
          };
        });

    var result = Buffer.Buffer<Types.NftResp>(10);
    for (i in Iter.fromArray(tokenIds.toArray())) {
      var data = _unwrap(tokenIdToMetadata.get(i));
        if (data.owner == principalId){
            var new_data: Types.NftResp = {
                id= i;
                name= data.name;
                url= data.url;
                description= data.description;
                owner= data.owner;
            };

            result.add(new_data);
        };
    };

    return result.toArray();
  };
    //Internal

    private func _isApprovedForAll(owner: Principal, to: Principal): Bool {
        switch(addressApproveAll.get(owner)) {
            case(null) return false;
            case (?list) {
                for (p in list.vals()) {
                    if (p == to) {
                        return true;
                    };
                };
                return false;
            };
        };
    };

    private func _approve(tokenId: TokenId, to: Principal) : () {
        tokenIdToApprove.put(tokenId, to);
    };

    private func _ownerOf(tokenId: TokenId) : ?Principal {
        return tokenIdToOwner.get(tokenId);
    };

    private func _isOwnerOf(tokenId: TokenId, _owner: Principal): Bool {
        switch(tokenIdToOwner.get(tokenId)) {
            case(null) return false;
            case(?owner){ if(owner == _owner) {
                return true
            }else{
                return false;
            };
        };
        };
    };

    private func _transfer(from : Principal, to : Principal, tokenId : Nat) : () {
		assert _exists(tokenId);
		var owner = _ownerOf(tokenId);
		
		_removeApprove(tokenId);
		
		_decrementBalance(_unwrap(owner));
		_incrementBalance(to);
		tokenIdToOwner.put(tokenId, to);
	};

    private func _exists(tokenId : Nat) : Bool {
		return Option.isSome(tokenIdToMetadata.get(tokenId));
	};

    private func _incrementBalance(address : Principal) {
		switch (balances.get(address)) {
			case (?v) {
				balances.put(address, v + 1);
			};
			case null {
				balances.put(address, 1);
			}
		}
	};
	
	private func _decrementBalance(address : Principal) {
		switch (balances.get(address)) {
			case (?v) {
				balances.put(address, v - 1);
			};
			case null {
				balances.put(address, 0);
			}
		}
	};

    private func _removeApprove(tokenId : Nat) : () {
		ignore tokenIdToApprove.remove(tokenId);
	};

    private func _isApprovedOrOwner(spender : Principal, tokenId : Nat) : Bool {
		assert _exists(tokenId);
		let owner = _unwrap(_ownerOf(tokenId));
		return spender == owner or _hasApprovedAndSame(tokenId, spender) or _isApprovedForAll(owner, spender);
	};

    private func _hasApprovedAndSame(tokenId : Nat, spender : Principal) : Bool {
		switch(_getApproved(tokenId)) {
			case (?v) {
				return v == spender;
			};
			case null { return false }
		}
	};

    private func _getApproved(tokenId : Nat) : ?Principal {
		assert _exists(tokenId) == true;
		switch(tokenIdToApprove.get(tokenId)) {
			case (?v) { return ?v };
			case null {
				return null;
			};
		}
	};

    private func _mint(to : Principal, tokenId : Nat, metadata : Types.metadata) : () {
		assert not _exists(tokenId);		
		_incrementBalance(to);
		tokenIdToOwner.put(tokenId, to);
		tokenIdToMetadata.put(tokenId,metadata)
	};

    private func _unwrap<T>(x : ?T) : T =
        switch x {
            case null { P.unreachable() };
            case (?x_) { x_ };
    };

    private func _burn(tokenId : Nat) {
		let owner = _unwrap(_ownerOf(tokenId));
		
		_removeApprove(tokenId);
		_decrementBalance(owner);
		
		ignore tokenIdToOwner.remove(tokenId);
	};
	
	system func preupgrade() {
		tokenIdToMetadataTmp := Iter.toArray(tokenIdToMetadata.entries());
		tokenIdToOwnerTmp := Iter.toArray(tokenIdToOwner.entries());
		balancesTmp := Iter.toArray(balances.entries());
		tokenIdToApproveTmp := Iter.toArray(tokenIdToApprove.entries());
		addressApproveAllTmp := Iter.toArray(addressApproveAll.entries());
	};
	
	system func postupgrade() {
		tokenIdToMetadataTmp := [];
		tokenIdToOwnerTmp := [];
		balancesTmp := [];
		tokenIdToApproveTmp := [];
		addressApproveAllTmp := [];
	};
}