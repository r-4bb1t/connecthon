import question from "../constant/question.json";

export const useTodayQuestion = () =>
  question[Math.floor(new Date().getTime() / 360000) % question.length];
