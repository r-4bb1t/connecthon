import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/layout";
import { useAlertContext } from "../hooks/useAlertContext";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { THEME } from "../constant/colors";
import { Emoji } from "../components/icons";
import { useToken } from "../hooks/useTokenContext";
import { useLoading } from "../hooks/useLoadingContext";

const New: NextPage = () => {
  const { push } = useAlertContext();
  const { token } = useToken();
  const { load, endLoad } = useLoading();
  const router = useRouter();

  const [question, setQuestion] = useState(null as any);

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST || "/api"}/question`, {
          headers: {
            Authorization: token,
          },
        })
      ).json();
      setQuestion(result.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (emoticon: string) => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST || "/api"}/diary/${
          question.diary_id
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            emotion: emoticon,
            answer: answer,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3R5cGUiOiJjaGlsZCIsInVzZXJfaWQiOiI2MzAwNmJjNzY5MjMxMDZlODU1NGIzYTgiLCJvdGhlcl90eXBlIjoicGFyZW50Iiwib3RoZXJfaWQiOiI2MzAwNmYyZTVmNjU3MDIyYzZhZWVmMjYifQ.b4mlsM_a77N6lq8D3rC-rEPwEzFpLJ6tIvCcT3bqV_c",
          },
        }
      );

      console.log(await result.json());

      if (result.ok)
        push({
          message: "일기를 작성했어요!",
          onClose: () => {
            load();
            router.push("/diary");
          },
          buttonText: "확인",
        });
      else
        push({
          message: "일기 작성에 실패했어요. 다시 시도해주세요.",
          onClose: () => {},
          buttonText: "확인",
        });
    } catch (e) {
      console.log(e);
    }
  };

  const [answer, setAnswer] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);

  return (
    <Layout preventRouterChange title="일기쓰기" hasBackButton>
      <Main>
        <Content>
          <TodayQuestion>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path
                d="M11.1479 12.0786L13.0571 14.0874L11.8701 15.1416L9.86133 13C9.42415 13.2324 8.95931 13.4123 8.4668 13.5396C7.97982 13.6668 7.47624 13.7305 6.95605 13.7305C6.375 13.7305 5.81885 13.6558 5.2876 13.5063C4.21403 13.1965 3.28988 12.6431 2.51514 11.8462C2.1499 11.4699 1.8234 11.0355 1.53564 10.543C1.26449 10.0671 1.0542 9.55518 0.904785 9.00732C0.755371 8.45947 0.680664 7.89225 0.680664 7.30566C0.680664 6.71354 0.755371 6.14355 0.904785 5.5957C1.20361 4.49447 1.7404 3.54818 2.51514 2.75684C2.89144 2.375 3.31478 2.0402 3.78516 1.75244C4.25 1.47575 4.75081 1.2627 5.2876 1.11328C5.82438 0.958333 6.38053 0.880859 6.95605 0.880859C7.53158 0.880859 8.08773 0.955566 8.62451 1.10498C9.69808 1.41488 10.6222 1.96549 11.397 2.75684C11.7788 3.14421 12.1081 3.57861 12.3848 4.06006C12.6615 4.53597 12.8717 5.04785 13.0156 5.5957C13.165 6.14355 13.2397 6.71354 13.2397 7.30566C13.2397 7.77604 13.1899 8.23258 13.0903 8.67529C12.9963 9.118 12.8607 9.54411 12.6836 9.95361C12.3239 10.7616 11.812 11.4699 11.1479 12.0786ZM11.5962 7.30566C11.5962 6.87402 11.5409 6.45068 11.4302 6.03564C11.2088 5.21663 10.8104 4.51107 10.2349 3.91895C9.95817 3.63118 9.64551 3.38216 9.29688 3.17188C8.58301 2.74023 7.80273 2.52441 6.95605 2.52441C6.31413 2.52441 5.7137 2.65169 5.15479 2.90625C4.59587 3.15527 4.10612 3.49561 3.68555 3.92725C3.26497 4.35889 2.93294 4.86523 2.68945 5.44629C2.4515 6.02734 2.33252 6.64714 2.33252 7.30566C2.33252 7.96419 2.4515 8.58398 2.68945 9.16504C2.93294 9.74056 3.26497 10.2441 3.68555 10.6758C4.10612 11.1074 4.59587 11.4505 5.15479 11.7051C5.7137 11.9541 6.31413 12.0786 6.95605 12.0786C7.55924 12.0786 8.12923 11.9652 8.66602 11.7383L7.10547 10.0615L8.22607 8.97412L10.0273 10.8916C10.5088 10.4489 10.8906 9.92041 11.1729 9.30615C11.4551 8.69189 11.5962 8.02507 11.5962 7.30566Z"
                fill="#D2D2D2"
              />
            </svg>
            오늘의 질문
          </TodayQuestion>
          <QuestionContent>{question?.question_content}</QuestionContent>
          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <ButtonContainer>
            <SubmitButtonContainer>
              <SubmitButton onClick={() => setEmojiOpen((s) => !s)}>
                {emojiOpen ? "닫기" : "작성완료"}
              </SubmitButton>
              <AnimatePresence>
                {emojiOpen && (
                  <EmojiMessage
                    initial={{ opacity: 0, y: 100, scale: 0.7 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.7,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <EmojiTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path
                          d="M11.1479 12.0786L13.0571 14.0874L11.8701 15.1416L9.86133 13C9.42415 13.2324 8.95931 13.4123 8.4668 13.5396C7.97982 13.6668 7.47624 13.7305 6.95605 13.7305C6.375 13.7305 5.81885 13.6558 5.2876 13.5063C4.21403 13.1965 3.28988 12.6431 2.51514 11.8462C2.1499 11.4699 1.8234 11.0355 1.53564 10.543C1.26449 10.0671 1.0542 9.55518 0.904785 9.00732C0.755371 8.45947 0.680664 7.89225 0.680664 7.30566C0.680664 6.71354 0.755371 6.14355 0.904785 5.5957C1.20361 4.49447 1.7404 3.54818 2.51514 2.75684C2.89144 2.375 3.31478 2.0402 3.78516 1.75244C4.25 1.47575 4.75081 1.2627 5.2876 1.11328C5.82438 0.958333 6.38053 0.880859 6.95605 0.880859C7.53158 0.880859 8.08773 0.955566 8.62451 1.10498C9.69808 1.41488 10.6222 1.96549 11.397 2.75684C11.7788 3.14421 12.1081 3.57861 12.3848 4.06006C12.6615 4.53597 12.8717 5.04785 13.0156 5.5957C13.165 6.14355 13.2397 6.71354 13.2397 7.30566C13.2397 7.77604 13.1899 8.23258 13.0903 8.67529C12.9963 9.118 12.8607 9.54411 12.6836 9.95361C12.3239 10.7616 11.812 11.4699 11.1479 12.0786ZM11.5962 7.30566C11.5962 6.87402 11.5409 6.45068 11.4302 6.03564C11.2088 5.21663 10.8104 4.51107 10.2349 3.91895C9.95817 3.63118 9.64551 3.38216 9.29688 3.17188C8.58301 2.74023 7.80273 2.52441 6.95605 2.52441C6.31413 2.52441 5.7137 2.65169 5.15479 2.90625C4.59587 3.15527 4.10612 3.49561 3.68555 3.92725C3.26497 4.35889 2.93294 4.86523 2.68945 5.44629C2.4515 6.02734 2.33252 6.64714 2.33252 7.30566C2.33252 7.96419 2.4515 8.58398 2.68945 9.16504C2.93294 9.74056 3.26497 10.2441 3.68555 10.6758C4.10612 11.1074 4.59587 11.4505 5.15479 11.7051C5.7137 11.9541 6.31413 12.0786 6.95605 12.0786C7.55924 12.0786 8.12923 11.9652 8.66602 11.7383L7.10547 10.0615L8.22607 8.97412L10.0273 10.8916C10.5088 10.4489 10.8906 9.92041 11.1729 9.30615C11.4551 8.69189 11.5962 8.02507 11.5962 7.30566Z"
                          fill="#D2D2D2"
                        />
                      </svg>
                      오늘 기분은 어떠셨어요?
                    </EmojiTitle>
                    <EmojiTable>
                      <Emoji.happy onClick={() => handleSubmit("happy")} />
                      <Emoji.surprised
                        onClick={() => handleSubmit("surprised")}
                      />
                      <Emoji.ordinary onClick={() => handleSubmit("newtral")} />
                      <Emoji.sad onClick={() => handleSubmit("sad")} />
                      <Emoji.angry onClick={() => handleSubmit("angry")} />
                    </EmojiTable>
                  </EmojiMessage>
                )}
              </AnimatePresence>
            </SubmitButtonContainer>
          </ButtonContainer>
        </Content>
      </Main>
    </Layout>
  );
};

export default New;

const Main = styled.div`
  padding: 0 1rem;
  height: 100%;
  background: white;
`;

const Content = styled.main`
  border: 1.5px solid ${THEME.black200};
  border-radius: 20px;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  background-image: -moz-linear-gradient(
    top,
    transparent,
    transparent 40px,
    #ededed 40px,
    #ededed 41px,
    transparent 41px,
    transparent 47px,
    #ededed 0
  );
  background-image: -webkit-linear-gradient(
    top,
    transparent,
    transparent 40px,
    #ededed 40px,
    #ededed 42px,
    transparent 42px,
    transparent 46px,
    #ededed 0
  );

  height: 100%;
  width: 100%;
  background-attachment: local;
  background-size: 100% 48px;
  line-height: 48px;
  color: ${THEME.black900};
  font-weight: 600;
  outline: none;
  border: none;
  border-top: 1px solid #ededed;
  padding: 0 1rem;
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
  width: 100%;
`;

const SubmitButton = styled.button`
  border-radius: 9999px;
  z-index: 2;
  background: ${THEME.darker};
  font-size: 1.2rem;
  color: white;
  font-weight: 700;
  padding: 1rem 2rem;
  width: 9rem;
  border: none;
  margin-bottom: 3rem;
`;

const TodayQuestion = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${THEME.black500};
  margin: 1rem 0 0 1rem;
`;

const QuestionContent = styled.div`
  margin: 0 1rem;
  margin-bottom: 1rem;
  font-size: 17px;
  font-weight: 600;
  color: ${THEME.black700};
  line-height: 2;
`;

const EmojiMessage = styled(motion.div)`
  position: absolute;
  bottom: 8rem;
  width: 316px;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 20px;
  transform-origin: bottom;
  :after {
    content: "";
    position: absolute;
    bottom: -2rem;
    left: calc(50% - 10px);
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top: 20px solid white;
  }
`;

const EmojiTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${THEME.black600};
  font-size: 17px;
  font-weight: 600;
`;

const EmojiTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0 2rem;
  margin-top: 1rem;
  svg:hover {
    opacity: 0.5;
    transition: 0.2s;
  }
`;
