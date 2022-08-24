import { useRouter } from "next/router";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { UserDataState } from "../data/globalState";
import { ACCESS_TOKEN } from "../data/localStorage";
import { UserData } from "../data/type";
import Button from "./common/Button";
import ConnectToPlug from "./ConnectToPlug";

const Header = () => {
  const userData = useRecoilValue<UserData>(UserDataState);
  const resetUserData = useResetRecoilState(UserDataState);
  const router = useRouter();

  return (
    <header id="header" className="w-full bg-white drop-shadow-md">
      <div className="container flex flex-row items-center justify-between h-24 p-4">
        <div className="dropdown-container">
          <Button
            onClick={() => {
              if (!userData?._id) {
                router.push("/login");
              } else {
                resetUserData();
                localStorage.removeItem(ACCESS_TOKEN);
              }
            }}
          >
            {userData?._id ? "Logout" : "Login"}
          </Button>
        </div>
        <ConnectToPlug />
      </div>
    </header>
  );
};

export default Header;
