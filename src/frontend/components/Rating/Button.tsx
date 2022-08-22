import React from "react";

type ButtonProps = {
  gotoPage: (page: number) => {};
  page: number;
  selectedPage: number;
};

const Button = ({ gotoPage, page, selectedPage }: ButtonProps) => {
  return (
    <button
      className={`${
        selectedPage === page - 1 && "bg-gray-200"
      } w-8 h-8 rounded m-3 flex items-center justify-center shadow hover:bg-black hover:text-white`}
      onClick={() => gotoPage(page - 1)}
    >
      <span className="flex items-center justify-center">{page}</span>
    </button>
  );
};

export default Button;
