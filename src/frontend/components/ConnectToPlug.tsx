//@ts-nocheck
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import logo from "../../public/images/plug.png";
import { SessionDataState } from "../data/globalState";
import { SessionData } from "../data/type";
import { canisterId, host } from "../service/actor-locator";
import { shortenAddress } from "../utils/stringsFunction";

const ConnectToPlug = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [sessionData, setSessionData] =
    useRecoilState<SessionData>(SessionDataState);
  const [publicKey, setPublicKey] = useState();

  useEffect(() => {
    (async () => {
      try {
        const result = await window.ic.plug.isConnected();
        setIsConnected(result);
        if (result) {
          const sessionData: SessionData =
            window.ic.plug.sessionManager.sessionData;
          setSessionData(sessionData);
        }
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [publicKey]);

  const onBntConnectPlug = async () => {
    try {
      if (!isConnected) {
        const whitelist = [canisterId.token];
        const onConnectionUpdate = async () => {};
        const _publicKey = await window.ic.plug.requestConnect({
          whitelist,
          host,
          onConnectionUpdate,
          timeout: 50000,
        });
        setPublicKey(_publicKey);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div
      className="p-1 cursor-pointer rounded-xl plug-gradient"
      onClick={() => {
        onBntConnectPlug();
      }}
    >
      <div className="p-1 font-semibold bg-white rounded-lg">
        {isConnected ? (
          <span>{shortenAddress(sessionData?.accountId || "", 10)}</span>
        ) : (
          <div className="flex flex-row items-center">
            <div className="relative w-6 h-6">
              <Image
                src={logo}
                alt="plug logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            Connect to Plug
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectToPlug;
