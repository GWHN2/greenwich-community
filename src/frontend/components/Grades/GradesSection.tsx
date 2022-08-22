import React from "react";

const GradesSection = ({
  grade,
  className = "text-xl",
}: {
  grade: number;
  className?: string;
}) => {
  return (
    <div>
      {" "}
      <span
        className={`text-center text-primary-400 font-bold gradient-text ${className}`}
      >
        {grade.toFixed(2)}
      </span>
    </div>
  );
};

export default GradesSection;
