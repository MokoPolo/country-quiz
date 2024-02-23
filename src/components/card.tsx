import React from "react";
import QuestionNumber from "./questionNumber";
import QuestionButton from "./questionButton";
import { useFetchCountries } from "../services/countryService";
import { buildQuestions, useQuestion } from "../services/questionService";

/**
 * Renders a card component for the country quiz.
 * @returns JSX.Element
 */
const Card: React.FC = () => {
  const count: number = 10;
  const { currentQuestion, incrementCurrentQuestion } = useQuestion();

  const countries = useFetchCountries(count);
  const questions = buildQuestions(countries);

  function handleAnswer(event: React.MouseEvent): void {
    const selectedAnswer = (event.target as HTMLElement).textContent;
    console.log(selectedAnswer); // <-- selected answer
    console.log(questions[currentQuestion]?.correctAnswer); // <-- correct answer
    //console.log(currentQuestion);
    // feb 23
    // for now take the current element and put if it's correct or not next to the text
    // in future maybe give id's so I can mark the other ones as correct or incorrect

    // Rest of your code...

    // mark which buttons are correct or incorrect
    // if wrong then put x on the button and show the correct answer
    // if right then put a checkmark on the button

    // set a timer to move to the next question
    incrementCurrentQuestion();

    // If it's the last question, show the results
    if (currentQuestion === count - 1) {
      const quizContainer = document.getElementById("quizContainer");
      if (quizContainer) {
        quizContainer.style.display = "none";
      }
      const resultsContainer = document.getElementById("resultsContainer");
      if (resultsContainer) {
        resultsContainer.style.display = "";
      }
    }
  }

  return (
    <div className="card w-[800px] text-[#E2E4F3] bg-darkPurple rounded-xl flex items-center flex-col p-7 drop-shadow">
      <div id="quizContainer">
        <h2 className="text-[#8B8EAB] text-boldd">Country Quiz</h2>
        <div className="flex flex-row">
          {Array.from({ length: count }, (_, index) => (
            <div key={index}>
              <QuestionNumber
                active={index <= currentQuestion ? true : false}
                number={index + 1}
              />
            </div>
          ))}
        </div>
        {currentQuestion % 2 === 0 ? (
          <p className="text-semiboldd m-10 w-[390px] text-center">
            Which country is '{questions[currentQuestion]?.country?.capital}'
            the capital?
          </p>
        ) : (
          <p className="text-semiboldd m-10 w-[390px] text-center">
            Which country does this flag{" "}
            <img
              src={questions[currentQuestion]?.country?.flag}
              alt="flag"
              className="w-6 h-4 inline align-middle"
            />{" "}
            belong to?
          </p>
        )}
        <div className="grid grid-cols-2">
          <QuestionButton
            id="answer0"
            text={questions[currentQuestion]?.answers[0]}
            onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
              handleAnswer(event)
            }
          />
          <QuestionButton
            id="answer1"
            text={questions[currentQuestion]?.answers[1]}
            onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
              handleAnswer(event)
            }
          />
          <QuestionButton
            id="answer2"
            text={questions[currentQuestion]?.answers[2]}
            onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
              handleAnswer(event)
            }
          />
          <QuestionButton
            id="answer3"
            text={questions[currentQuestion]?.answers[3]}
            onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
              handleAnswer(event)
            }
          />
        </div>
      </div>
      <div id="resultsContainer" style={{ display: "none" }}>
        Results coming up!
      </div>
    </div>
  );
};

export default Card;
