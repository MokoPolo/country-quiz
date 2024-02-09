import React from "react";

interface QuestionButtonProps {
  text: string;
  onClick: () => void;
}

/**
 * Renders a question button component.
 * @param {string} props.text - The text to display on the button.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} The rendered question button component.
 */
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
