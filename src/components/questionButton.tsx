import React from "react";

interface QuestionButtonProps {
  text: string;
}

const QuestionButton: React.FC<QuestionButtonProps> = ({ text }) => {
  return (
    <button className="text-[#E2E4F3] w-[260px] h-[60px] bg-lightPurple rounded-lg m-3 hover:bg-activeGradient">
      {text}
    </button>
  );
};

export default QuestionButton;
