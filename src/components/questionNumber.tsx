import React from "react";

interface QuestionNumberProps {
  number: number;
  active: boolean;
}

const QuestionNumber: React.FC<QuestionNumberProps> = ({ number, active }) => {
  return (
    <div
      className={`rounded-full w-10 h-10 m-1 p-1 flex items-center justify-center ${
        active ? "bg-activeGradient" : "bg-[#343964]"
      }`}
    >
      {number}
    </div>
  );
};

export default QuestionNumber;
