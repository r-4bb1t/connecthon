import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Layout from "../../components/layout";
import { Diary } from "../../constant/types";

const DiaryDetail = () => {
  const router = useRouter();
  const id = router.query.id;

  const [diary, setDiary] = useState(null as unknown as Diary);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const fetchData = useCallback(async () => {
    const result = await (
      await fetch(`${process.env.NEXT_APP_API_HOST ?? "/api"}/diary/${id}`)
    ).json();
    setDiary(result);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Main>
        {/* <img src={diary?.emotion} alt="emotion" /> */}
        <div>{diary?.question_content}</div>
        <div>{diary?.child_answer}</div>
        <StampContainer
          isOpened={diary?.is_read}
          onClick={() => setIsMessageModalOpen(true)}
        >
          <img src="/assets/stamp.png" />
        </StampContainer>
      </Main>
      <AnimatePresence>
        {isMessageModalOpen && (
          <ModalBackground onClick={() => setIsMessageModalOpen(false)}>
            <Modal
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
            >
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~
              넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^ 울딸~~ 넘잘햇어^^
              <div>2022년 8월 21일</div>
            </Modal>
          </ModalBackground>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default DiaryDetail;

const Main = styled.main`
  position: relative;
  padding-bottom: 12rem;
`;

const StampContainer = styled.div<{ isOpened: boolean }>`
  position: fixed;
  right: 0;
  bottom: 4rem;
  width: 10rem;
  height: 10rem;
  padding: 2rem;
  @keyframes bounce2 {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
  ${(p) =>
    !p.isOpened &&
    css`
      animation: bounce2 2s ease infinite;
    `}
  img {
    width: 100%;
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
`;

const Modal = styled(motion.div)`
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 10rem;
  background-color: white;
  position: fixed;
  top: 5rem;
  bottom: 0;
  left: 1rem;
  right: 1rem;
`;
