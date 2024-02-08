import React from "react";
import QuestionNumber from "./questionNumber";
import QuestionButton from "./questionButton";
import { useFetchCountries } from "../services/countryService";
import { buildQuestions, useQuestion } from "../services/questionService";

const Card: React.FC = () => {
  const count: number = 10;
  const { currentQuestion, incrementCurrentQuestion } = useQuestion();

  const countries = useFetchCountries(count);
  const questions = buildQuestions(countries);

  function handleAnswer(): void {
    incrementCurrentQuestion();
  }

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
        Which country is '{questions[currentQuestion]?.country?.capital}' the
        capital?
      </p>
      <div className="grid grid-cols-2">
        <QuestionButton
          text={questions[currentQuestion]?.answers[0]}
          onClick={() => handleAnswer()}
        />
        <QuestionButton
          text={questions[currentQuestion]?.answers[1]}
          onClick={() => handleAnswer()}
        />
        <QuestionButton
          text={questions[currentQuestion]?.answers[2]}
          onClick={() => handleAnswer()}
        />
        <QuestionButton
          text={questions[currentQuestion]?.answers[3]}
          onClick={() => handleAnswer()}
        />
      </div>
    </div>
  );
};

export default Card;
