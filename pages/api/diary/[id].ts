// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: any, res: any) {
  res.status(200).json({
    _id: "asdf",
    question_id: "asdf",
    question_content: "제목",
    is_read: false,
    child_answer:
      "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
    from_days: 10,
    is_parent_answered: true,
    emotion: "angry",
  });
}
