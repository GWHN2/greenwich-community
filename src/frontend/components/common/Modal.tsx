import { XIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Button from "./Button";

interface IProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal = (props: IProps) => {
  const { isOpen, onClose, title, children } = props;
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return (
    <div
      onClick={() => {
        setShowModal(false);
        if (onClose) onClose();
      }}
      className={`fixed z-50 flex items-center justify-center w-screen h-screen 
      transition-all duration-500 cursor-pointer bg-black/30
      ${!showModal && "hidden"}
      `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg cursor-default"
      >
        <div className="flex items-center justify-between p-5 ">
          <h3 className="text-xl">{title}</h3>
          <button
            className="float-right p-1 text-black bg-gray-300 rounded-full"
            onClick={() => {
              setShowModal(false);
              if (onClose) onClose();
            }}
          >
            <XIcon className="w-6" />
          </button>
        </div>
        <div className="relative flex-auto p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
