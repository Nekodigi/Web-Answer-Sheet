import { createContext } from "react";

type AnswersContextProps = {
  answers: number[];
  setAnswers: (answer: number[]) => void;
};
export const AnswersContext = createContext<AnswersContextProps>(
  {} as AnswersContextProps
);
