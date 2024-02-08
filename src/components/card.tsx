import React from "react";
import QuestionNumber from "./questionNumber";
import QuestionButton from "./questionButton";
import { useFetchAllCountries } from "../services/countryService";

const Card: React.FC = () => {
  const count: number = 10;
  const currentQuestion: number = 2;

  const countries = useFetchAllCountries();
  console.log(countries);
  return (
    <div className="card w-[800px] text-[#E2E4F3] bg-darkPurple rounded-xl flex items-center flex-col p-7 drop-shadow">
      <h2 className="text-[#8B8EAB] text-boldd">Country Quiz</h2>
      <div className="flex flex-row">
        {Array.from({ length: count }, (_, index) => (
          <div key={index}>
            <QuestionNumber
              active={index === currentQuestion ? true : false}
              number={index + 1}
            />
          </div>
        ))}
      </div>
      <p className="text-semiboldd m-10 w-[350px] text-center">
        Which country is 'countryname' the capital?
      </p>
      <div className="grid grid-cols-2">
        <QuestionButton text="Answer 1" />
        <QuestionButton text="Answer 2" />
        <QuestionButton text="Answer 3" />
        <QuestionButton text="Answer 4" />
      </div>
    </div>
  );
};

export default Card;
