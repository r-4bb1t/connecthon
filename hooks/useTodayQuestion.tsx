import question from "../constant/question.json";

export const useTodayQuestion = () =>
  question[
    Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24)) % question.length
  ];
