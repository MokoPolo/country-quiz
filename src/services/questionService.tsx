import { useState } from "react";
import CountryDTO from "../data/countryDto";

interface Questions {
  country: CountryDTO;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export const buildQuestions = (countries: CountryDTO[]): Questions[] => {
  return countries.map((country: CountryDTO) => ({
    country: country,
    question: `Which country is ${country.capital} the capital?`,
    answers: [country.name, "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: country.name,
  }));
};

export const useQuestion = () => {
  const [currentQuestion, setcurrentQuestion] = useState<number>(0);

  const incrementCurrentQuestion = () => {
    console.log(currentQuestion);
    setcurrentQuestion((prevQuestion) =>
      prevQuestion < 9 ? prevQuestion + 1 : prevQuestion
    );
  };

  return { currentQuestion, incrementCurrentQuestion };
};
