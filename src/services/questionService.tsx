import { useState } from "react";
import CountryDTO from "../data/countryDto";

/**
 * Represents a question in the quiz.
 */
interface Questions {
  country: CountryDTO;
  answers: string[];
  correctAnswer: string;
}

/**
 * Builds an array of questions based on the provided countries.
 * @param countries - The list of countries to build questions from.
 * @returns An array of Questions.
 */
export const buildQuestions = (countries: CountryDTO[]): Questions[] => {
  return countries.map((country: CountryDTO) => ({
    country: country,
    answers: [country.name, "Vietnam", "Finland", "Austria"],
    correctAnswer: country.name,
  }));
};

/**
 * Custom React hook for managing the current question in the quiz.
 * @returns An object containing the current question and a function to increment the current question.
 */
export const useQuestion = () => {
  const [currentQuestion, setcurrentQuestion] = useState<number>(0);

  /**
   * Increments the current question by 1.
   */
  const incrementCurrentQuestion = () => {
    setcurrentQuestion((prevQuestion) =>
      prevQuestion < 9 ? prevQuestion + 1 : prevQuestion
    );
  };

  return { currentQuestion, incrementCurrentQuestion };
};
