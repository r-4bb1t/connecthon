import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/layout";
import { useAlertContext } from "../hooks/useAlertContext";
import question from "../constant/question.json";
import { useEffect } from "react";

const New: NextPage = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.back();
  };
  const { push } = useAlertContext();

  const todayQuestion =
    question[Math.floor(new Date().getTime() / 3600) % question.length];

  return (
    <Layout>
      <div>새 일기 쓰기</div>
      <TodayQuestion>
        오늘의 일기 주제
        <QuestionTitle>{todayQuestion.title}</QuestionTitle>
        <QuestionContent>{todayQuestion.content}</QuestionContent>
      </TodayQuestion>
      <Textarea />
      <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
      <CancleButton
        onClick={() => {
          push({
            message: (
              <>
                정말 삭제하시겠어요?
                <br />
                작성한 내용이 모두 사라져요.
              </>
            ),
            twoButton: true,
            buttonText: "삭제",
            onClose: () => {
              router.back();
            },
          });
        }}
      >
        취소
      </CancleButton>
    </Layout>
  );
};

export default New;

const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
`;

const SubmitButton = styled.button``;

const CancleButton = styled(SubmitButton)``;

const TodayQuestion = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionTitle = styled.div``;

const QuestionContent = styled.div``;
