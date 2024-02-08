import React from "react";

interface QuestionButtonProps {
  text: string;
  onClick: () => void;
}

const QuestionButton: React.FC<QuestionButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-[#E2E4F3] w-[260px] h-[60px] bg-lightPurple rounded-lg m-3 hover:bg-activeGradient"
    >
      {text}
    </button>
  );
};

export default QuestionButton;
