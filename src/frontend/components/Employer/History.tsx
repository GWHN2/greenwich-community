import {
  CheckCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const History = () => {
  const historyList = [
    {
      type: "receive",
      date: "2020-01-01",
      amount: "100",
      status: "success",
      address:
        "tv33p-ulie3-wscdo-mcwsx-fahci-espiz-vvtkm-mpf5f-zv5sb-ysahj-5qe",
    },
    {
      type: "send",
      date: "2020-01-01",
      amount: "143",
      status: "pending",
      address:
        "tv33p-ulie3-wscdo-mcwsx-fahci-espiz-vvtkm-mpf5f-zv5sb-ysahj-5qe",
    },
    {
      type: "send",
      date: "2020-01-01",
      amount: "143",
      status: "success",
      address:
        "tv33p-ulie3-wscdo-mcwsx-fahci-espiz-vvtkm-mpf5f-zv5sb-ysahj-5qe",
    },
    {
      type: "receive",
      date: "2020-01-01",
      amount: "100",
      status: "success",
      address:
        "tv33p-ulie3-wscdo-mcwsx-fahci-espiz-vvtkm-mpf5f-zv5sb-ysahj-5qe",
    },
  ];
  return (
    <div>
      {historyList.map((item, index) => {
        return (
          <div className="" key={index}>
            <HistoryItem {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default History;

const HistoryItem = ({
  type,
  date,
  amount,
  status,
  address,
}: {
  type: string;
  date: string;
  amount: string;
  status: string;
  address: string;
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-between p-2 my-2 space-x-4
       bg-gray-100 rounded-xl border-2 
        ${status === "success" ? "border-green-400" : "border-yellow-400"}
        `}
    >
      <div
        className={`${
          status === "success" ? "text-green-400" : "text-yellow-400"
        }`}
      >
        {status === "success" ? (
          <span className="flex flex-row items-center justify-center">
            <CheckCircleIcon className="w-6" /> Success
          </span>
        ) : (
          <span className="flex flex-row items-center justify-center">
            <EllipsisHorizontalIcon className="w-6" /> Pending
          </span>
        )}
      </div>
      <div className="flex flex-col items-start justify-center w-3/4 font-semibold">
        <span>
          {type.capitalize()}: <span className="gradient-text">{amount}</span>
        </span>
        <span>
          {type === "send" ? "To" : "From"}: {address.shorten(30)}
        </span>
      </div>
      <span className="text-xs font-medium text-gray-400">{date}</span>
    </div>
  );
};
