import React from "react";

interface QuestionNumberProps {
  number: number;
  active: boolean;
}

/**
 * Renders the question number component.
 * @param {number} props.number - The question number.
 * @param {boolean} props.active - Indicates if the question is active.
 * @returns {JSX.Element} The rendered question number component.
 */
const QuestionNumber: React.FC<QuestionNumberProps> = ({ number, active }) => {
  return (
    <div
      className={`rounded-full w-10 h-10 m-1 p-1 flex items-center justify-center ${
        active ? "bg-activeGradient" : "bg-lightPurple"
      }`}
    >
      {number}
    </div>
  );
};

export default QuestionNumber;
