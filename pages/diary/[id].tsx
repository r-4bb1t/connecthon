import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/footer";

const DiaryDetail = () => {
  const Data: any = [
    {
      id: "1",
      question: "부모님에게 서운함을 느꼈던 순간이 언제인가요?",
      answer: " 바로 어제 서운했던 것 같기도 하네요",
      created: "2022-07-25",
      emotion: "https://picsum.photos/100",
    },
    {
      id: "2",
      question: "부모님과 함께 먹고 싶은 음식이 있다면?",
      answer: "부모님이 잘하시는 김치볶음밥을 먹고 싶습니다",
      created: "2022-07-26",
      emotion: "https://picsum.photos/100",
    },
    {
      id: "3",
      question: "부모님이 모르는 학교에서의 일이 있다면?",
      answer: "얼마전에 학교에서 게임 몰래 했어요",
      created: "2022-07-27",
      emotion: "https://picsum.photos/100",
    },
    {
      id: "4",
      question: "부모님이 최근에 미웠던 순간은 언제였나요?",
      answer: "모니터 새거 갖고싶은데 안사주셔서 삐졌습니다",
      created: "2022-07-28",
      emotion: "https://picsum.photos/100",
    },
    {
      id: "5",
      question: "부모님에게 서운함을 느꼈던 순간이 언제인가요?",
      answer: " 바로 어제 서운했던 것 같기도 하네요",
      created: "2022-07-25",
      emotion: "https://picsum.photos/100",
    },
    {
      id: "6",
      question: "부모님과 함께 먹고 싶은 음식이 있다면?",
      answer: "부모님이 잘하시는 김치볶음밥을 먹고 싶습니다",
      created: "2022-07-26",
      emotion: "https://picsum.photos/100",
    },
    {
      id: "7",
      question: "부모님이 모르는 학교에서의 일이 있다면?",
      answer: "얼마전에 학교에서 게임 몰래 했어요",
      created: "2022-07-27",
      emotion: "https://picsum.photos/100",
    },
    {
      id: "8",
      question: "부모님이 최근에 미웠던 순간은 언제였나요?",
      answer: "모니터 새거 갖고싶은데 안사주셔서 삐졌습니다",
      created: "2022-07-28",
      emotion: "https://picsum.photos/100",
    },
    {
      id: "9",
      question: "부모님이 최근에 미웠던 순간은 언제였나요?",
      answer: "모니터 새거 갖고싶은데 안사주셔서 삐졌습니다",
      created: "2022-07-28",
      emotion: "https://picsum.photos/100",
    },
    {
      id: "10",
      question: "부모님이 최근에 미웠던 순간은 언제였나요?",
      answer: "모니터 새거 갖고싶은데 안사주셔서 삐졌습니다",
      created: "2022-07-28",
      emotion: "https://picsum.photos/100",
    },
  ];

  const router = useRouter();
  const id = router.query.id;

  const cur_diary = Data.find((diary: any) => diary.id === id);

  return (
    <>
      <img src={cur_diary.emotion} alt="emotion" />
      <div>{cur_diary.question}</div>
      <div>{cur_diary.answer}</div>
      <Footer />
    </>
  );
};

export default DiaryDetail;
