// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: any, res: any) {
  res.status(200).json([
    {
      id: "1",
      question_content: "부모님에게 서운함을 느꼈던 순간이 언제인가요?",
      child_answer: " 바로 어제 서운했던 것 같기도 하네요",
      child_answered_at: "2022-08-19",
      emotion: "surprised",
    },
    {
      id: "2",
      question_content: "부모님과 함께 먹고 싶은 음식이 있다면?",
      child_answer: "부모님이 잘하시는 김치볶음밥을 먹고 싶습니다",
      child_answered_at: "2022-08-19",
      emotion: "worried",
    },
    {
      id: "3",
      question_content: "부모님이 모르는 학교에서의 일이 있다면?",
      child_answer: "얼마전에 학교에서 게임 몰래 했어요",
      child_answered_at: "2022-08-19",
      emotion: "happy",
    },
    {
      id: "4",
      question_content: "부모님이 최근에 미웠던 순간은 언제였나요?",
      child_answer: "모니터 새거 갖고싶은데 안사주셔서 삐졌습니다",
      child_answered_at: "2022-08-19",
      emotion: "angry",
    },
    {
      id: "5",
      question_content: "부모님에게 서운함을 느꼈던 순간이 언제인가요?",
      child_answer: " 바로 어제 서운했던 것 같기도 하네요",
      child_answered_at: "2022-08-19",
      emotion: "neutral",
    },
    {
      id: "6",
      question_content: "부모님과 함께 먹고 싶은 음식이 있다면?",
      child_answer: "부모님이 잘하시는 김치볶음밥을 먹고 싶습니다",
      child_answered_at: "2022-08-19",
      emotion: "angry",
    },
  ]);
}
