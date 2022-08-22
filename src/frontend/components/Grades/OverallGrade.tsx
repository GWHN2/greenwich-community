import Image from "next/image";
import React from "react";
import GradesSection from "./GradesSection";

interface Props {
  grades: number;
}

const OverallGrade = ({ grades }: Props) => {
  return (
    <div className="relative p-4 bg-white rounded-lg shadow-lg">
      <span className={`text-primary-400 font-medium`}>
        SU2022 Overall Grade:{" "}
      </span>

      <GradesSection grade={grades} className="text-2xl" />
    </div>
  );
};

const Label = ({
  label,
  text,
  className,
}: {
  label?: string;
  text: string;
  className?: string;
}) => {
  return (
    <div className="flex flex-row p-2 rounded-lg ">
      {label && (
        <div className={`text-primary-400 font-medium`}>{label}:&nbsp;</div>
      )}
      <span className={`text-center text-primary-400 ${className}`}>
        {text}
      </span>
    </div>
  );
};
export default OverallGrade;
