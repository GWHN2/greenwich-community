import {
  BookOpenIcon,
  CashIcon,
  ClockIcon,
  DocumentReportIcon,
  HomeIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShoppingBagIcon,
  SparklesIcon,
  StarIcon,
  SwitchHorizontalIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { UserRuleState } from "../data/globalState";
import logo from "../../public/images/logo.png";
import AccordionMenu from "./AccordionMenu";

const SideBar = () => {
  const userRule = useRecoilValue(UserRuleState);
  const getMenuItem = useMemo(() => {
    switch (userRule.toLocaleLowerCase()) {
      case "admin":
        return [
          {
            title: "View student Profile",
            icon: <InformationCircleIcon />,
            path: "/admin/student-profile",
          },
          {
            title: "Manage Courses",
            icon: <BookOpenIcon />,
            path: "/admin/courses",
          },
          {
            title: "Manage Events",
            icon: <SparklesIcon />,
            path: "/admin/events",
          },
        ];
      case "student":
        return [
          {
            title: "Home",
            icon: <HomeIcon />,
            path: "/",
          },
          {
            title: "View Profile",
            icon: <UserCircleIcon />,
            path: "/profile",
          },
          {
            title: "Courses and Books",
            icon: <BookOpenIcon />,
            path: "/courses&books",
          },
          {
            title: "Rating",
            icon: <StarIcon />,
            path: "/rating",
          },
          {
            title: "Grades",
            icon: <DocumentReportIcon />,
            path: "/grades",
          },
          {
            title: "Marketplace",
            icon: <ShoppingBagIcon />,
            path: "/marketplace",
          },
          {
            title: "Event",
            icon: <SparklesIcon />,
            path: "/event",
          },
          {
            title: "Transfer Tokens",
            icon: <SwitchHorizontalIcon />,
            path: "/transfer",
          },
        ];
      case "employer":
        return [
          {
            title: "Deposit for companies",
            icon: <CashIcon />,
            path: "/employer/deposit-for-companies",
          },
          {
            title: "View student Profile",
            icon: <InformationCircleIcon />,
            path: "/employer/student-profile",
          },
          {
            title: "Make Advertisement",
            icon: <NewspaperIcon />,
            path: "/employer/advertisement",
          },
          {
            title: "Transaction history",
            icon: <ClockIcon />,
            path: "/employer/transaction-history",
          },
        ];
      default:
        return [
          {
            title: "Home",
            icon: <HomeIcon />,
            path: "/",
          },
        ];
    }
  }, [userRule]);
  return (
    <aside
      id="SideBar"
      className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-primary-600"
    >
      <div className="sticky top-0 w-full">
        <a
          href="https://www.facebook.com/uniofgreenwich/"
          className="flex items-center pl-2.5 mb-5"
        >
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="mr-3 overflow-hidden rounded-full"
          />
          <span className="self-center ml-3 text-xl font-semibold text-white whitespace-nowrap">
            UoG Community
          </span>
        </a>
        <ul className={`pr-2 flex flex-col items-start justify-between`}>
          {getMenuItem.map((item, index) => (
            <li key={index} className="w-full">
              <AccordionMenu
                icon={item.icon}
                title={item.title}
                path={item.path}
              />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
