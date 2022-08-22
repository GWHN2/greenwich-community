import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { UserRuleState } from "../data/globalState";
import { UserRule } from "../data/type";
import Button from "./common/Button";
import ConnectToPlug from "./ConnectToPlug";

const Header = () => {
  const [userRule, setUserRule] = useRecoilState(UserRuleState);
  const rules: UserRule[] = ["Admin", "Student", "Employer"];
  return (
    <header id="header" className="w-full bg-white drop-shadow-md">
      <div className="container flex flex-row items-center justify-between h-24 p-4">
        <div className="dropdown-container">
          <Button>Seeing as {userRule}</Button>
          <div className="w-full p-2 bg-white rounded-lg shadow-xl dropdown-menu">
            {rules.map((rule, index) => (
              <span
                onClick={() => {
                  setUserRule(rule);
                }}
                className="py-2 font-semibold text-black cursor-pointer hover:text-primary-500"
                key={index}
              >
                {rule}
              </span>
            ))}
          </div>
        </div>
        <ConnectToPlug />
      </div>
    </header>
  );
};

export default Header;
