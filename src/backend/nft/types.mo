module {
    public type dip_721_Info = {
        name: Text;
        symbol: Text;
        base_uri: Text;
    };

    public type attributeKeyValue = {
        key: Text;
        val: Text;
    };

    public type metadata = {
        name: Text;
        url: Text;
        description: Text;
    };

    public type ApiError = {
        #Unauthorized;
        #InvalidTokenId;
        #InvalidAddress;
        #Other;
    };

    public type Result<T, E> = {
        #Ok: T;
        #Err: E;
    };

    public type NftResp = {
        id: Nat;
        name: Text;
        url: Text;
        description: Text;
    };

    public type OwnerResult = Result<Principal, ApiError>;
    public type BalanceResult = Result<Nat, ApiError>;
    public type MintResult = Result<Nat, ApiError>;
    public type TxReceipt = Result<Bool, ApiError>;
};