import React from "react";
import QuestionNumber from "./questionNumber";

const Card: React.FC = () => {
  const count: number = 10;
  return (
    <div className="card w-[800px] text-[#E2E4F3] bg-[#393F6E] rounded-xl flex items-center flex-col p-7">
      <h2>Country Quiz</h2>
      <div className="flex flex-row">
        {Array.from({ length: count }, (_, index) => (
          <div key={index}>
            <QuestionNumber number={index + 1} />
          </div>
        ))}
      </div>
      <p>Which country is 'countryname' the capital?</p>
      <div>
        <button>Answer 1</button>
        <button>Answer 2</button>
        <button>Answer 3</button>
        <button>Answer 4</button>
      </div>
    </div>
  );
};

export default Card;
