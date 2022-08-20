// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: any, res: any) {
  res.status(200).json({
    id: "1",
    question: "부모님에게 서운함을 느꼈던 순간이 언제인가요?",
    answer: " 바로 어제 서운했던 것 같기도 하네요",
    created: "2022-07-25",
    emotion: "https://picsum.photos/100",
  });
}
