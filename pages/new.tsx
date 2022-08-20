import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/layout";
import { useAlertContext } from "../hooks/useAlertContext";
import { useEffect, useState } from "react";
import { useTodayQuestion } from "../hooks/useTodayQuestion";
import { AnimatePresence, motion } from "framer-motion";

const emoji = ["🥰", "😭", "😛", "😋", "😎"];

const New: NextPage = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.back();
  };
  const { push } = useAlertContext();

  const todayQuestion = useTodayQuestion();

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [emojiLoading, setEmojiLoading] = useState(true);

  return (
    <Layout>
      <div>새 일기 쓰기</div>
      <TodayQuestion>
        오늘의 일기 주제
        <QuestionTitle>{todayQuestion.title}</QuestionTitle>
        <QuestionContent>{todayQuestion.content}</QuestionContent>
      </TodayQuestion>
      <Textarea />
      <ButtonContainer>
        <SubmitButtonContainer>
          <SubmitButton onClick={() => setEmojiOpen((s) => !s)}>
            {emojiOpen ? "X" : "등록"}
          </SubmitButton>
          <AnimatePresence>
            {emojiOpen &&
              emoji.map((e, i) => (
                <Emoji
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{
                    x: -75 * Math.cos((Math.PI / (emoji.length - 1)) * i),
                    y: -75 * Math.sin((Math.PI / (emoji.length - 1)) * i),
                    opacity: 1,
                  }}
                  exit={{ x: 0, y: 0, opacity: 0 }}
                  onAnimationComplete={() => setEmojiLoading(false)}
                  onAnimationStart={() => setEmojiLoading(true)}
                  onClick={emojiLoading ? () => {} : handleSubmit}
                  key={i}
                >
                  {e}
                </Emoji>
              ))}
          </AnimatePresence>
        </SubmitButtonContainer>
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
      </ButtonContainer>
    </Layout>
  );
};

export default New;

const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SubmitButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
`;

const SubmitButton = styled.button`
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
  z-index: 2;
`;

const CancleButton = styled.button`
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
`;

const TodayQuestion = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionTitle = styled.div``;

const QuestionContent = styled.div``;

const Emoji = styled(motion.button)`
  position: absolute;
  width: 3rem;
  height: 3rem;
  transform-origin: 1.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgrey;
  border-radius: 9999px;
`;
