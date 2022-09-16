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
import { useGame } from "../hooks/useGameContext";
import Head from "next/head";

const New: NextPage = () => {
  const { push } = useAlertContext();
  const { load } = useLoading();
  const router = useRouter();
  const [question, setQuestion] = useState(null as any);
  const { token } = useToken();
  const [mode, setMode] = useState("answer" as "activity" | "answer");
  const [activityId, setActivityId] = useState("");
  const [activityName, setActivityName] = useState("");
  const { gainExp } = useGame();

  const toggleLike = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST || "/api"}/activity/${activityId}`,
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = useCallback(async () => {
    if (mode === "activity") return;
    try {
      const result = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST || "/api"}/question`, {
          headers: {
            Authorization: `${token}`,
          },
        })
      ).json();
      setQuestion(result.data);
    } catch (e) {
      console.log(e);
    }
  }, [mode, token]);

  useEffect(() => {
    fetchData();
  }, [mode, token]);

  useEffect(() => {
    if (
      router.query["activity_id"] &&
      typeof router.query["activity_id"] == "string" &&
      typeof router.query["activity_name"] == "string"
    ) {
      setMode("activity");
      setActivityId(router.query["activity_id"]);
      setActivityName(router.query["activity_name"]);
    }
  }, [router]);

  const handleSubmit = async (emoticon: string) => {
    if (!answer) {
      push({
        message: "내용을 입력해주세요.",
        onClose: () => {},
        buttonText: "확인",
      });
      return;
    }
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST || "/api"}/diary/${
          mode === "answer" ? question.diary_id : `${activityId}?type=activity`
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            emotion: emoticon,
            answer: answer,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (result.ok) {
        await toggleLike();
        gainExp(30);
        push({
          message: "일기를 작성했어요!",
          onClose: () => {
            load();
            router.push("/diary");
          },
          buttonText: "확인",
        });
      } else
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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout
        preventRouterChange={answer !== ""}
        title="일기쓰기"
        hasBackButton
      >
        <Main>
          <Content>
            <TodayQuestion>
              {mode === "answer" ? (
                <>
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
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    viewBox="0 0 23 26"
                    fill="none"
                  >
                    <path
                      d="M10.1723 21.0419L10.2087 21.0762L10.1723 21.0419C9.76143 21.4784 9.70246 22.0706 9.89012 22.5523C10.0778 23.0341 10.5149 23.411 11.0994 23.411H12.8118C13.3642 23.411 13.7776 23.0547 13.9552 22.5994C14.1328 22.1442 14.0773 21.5843 13.6886 21.1713L13.2326 20.6868C13.7478 20.5351 14.2547 20.2971 14.7492 19.9746C15.5802 19.4327 16.3391 18.6784 17.0054 17.7335C18.2853 15.9186 19.05 13.6175 19.05 11.5761C19.05 7.3739 15.8317 3.95 11.8695 3.95C7.90741 3.95 4.68914 7.3739 4.68914 11.5761C4.68914 13.6176 5.45377 15.9186 6.73375 17.7336C7.40005 18.6784 8.15895 19.4327 8.98993 19.9746C9.48443 20.2971 9.99137 20.535 10.5066 20.6867L10.1723 21.0419ZM11.0801 22.0334L11.0335 22.0516L11.0801 22.0334C11.0786 22.0295 11.0769 22.0256 11.0757 22.0229C11.0779 22.0191 11.0819 22.0129 11.0891 22.0035C11.1002 21.989 11.1169 21.9694 11.1415 21.942C11.1961 21.8813 11.2854 21.7872 11.4298 21.635C11.5408 21.5181 11.6843 21.3668 11.8695 21.1701L12.6856 22.0372C12.6873 22.039 12.6882 22.0419 12.6868 22.0457C12.6861 22.0474 12.6853 22.0481 12.685 22.0483C12.685 22.0484 12.6849 22.0484 12.6847 22.0484H11.0994C11.0909 22.0484 11.0896 22.0479 11.0888 22.0475C11.0888 22.0475 11.0881 22.0472 11.0869 22.0458C11.0855 22.0442 11.0829 22.0407 11.0801 22.0334ZM11.8697 19.523H11.8697H11.8697H11.8697H11.8697H11.8697H11.8696H11.8696H11.8696H11.8696H11.8696H11.8696H11.8696H11.8696H11.8696H11.8696H11.8696H11.8696H11.8696H11.8695H11.8695H11.8695H11.8695H11.8695H11.8695H11.8695H11.8695H11.8695H11.8695H11.8695H11.8695H11.8695H11.8695H11.8694H11.8694H11.8694H11.8694H11.8694H11.8694H11.8694C10.266 19.5229 8.79369 18.412 7.71924 16.8553C6.64559 15.2998 5.97753 13.3104 5.97753 11.5761C5.97753 8.11957 8.62355 5.31266 11.8695 5.31266C15.1155 5.31266 17.7615 8.11957 17.7615 11.5761C17.7615 13.3119 17.0929 15.3014 16.0189 16.8565C14.9442 18.4128 13.4719 19.5229 11.8697 19.523Z"
                      fill="#D2D2D2"
                      stroke="#D2D2D2"
                      strokeWidth="0.1"
                    />
                    <path
                      d="M11.9404 6.73853C11.6123 6.73853 11.3462 7.02119 11.3462 7.36988C11.3462 7.71856 11.6122 8.00123 11.9404 8.00123C13.9063 8.00123 15.5056 9.70054 15.5056 11.7893C15.5056 12.1379 15.7716 12.4206 16.0998 12.4206C16.428 12.4206 16.694 12.1379 16.694 11.7893C16.694 9.00426 14.5615 6.73853 11.9404 6.73853Z"
                      fill="#D2D2D2"
                    />
                  </svg>
                  오늘 다녀온 활동은 어땠나요?
                </>
              )}
            </TodayQuestion>
            <QuestionContent>
              {mode === "answer"
                ? question?.question_content || ""
                : activityName}
            </QuestionContent>
            <Textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <ButtonContainer>
              <SubmitButtonContainer>
                {answer ? (
                  <SubmitButton onClick={() => setEmojiOpen((s) => !s)}>
                    {emojiOpen ? "닫기" : "작성완료"}
                  </SubmitButton>
                ) : (
                  <SubmitButtonDisabled>작성완료</SubmitButtonDisabled>
                )}

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
                        <Emoji.ordinary
                          onClick={() => handleSubmit("ordinary")}
                        />
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
    </>
  );
};

export default New;

const Main = styled.div`
  padding: 0 1rem;
  height: 100%;
  background: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 1rem;
`;

const Content = styled.main`
  border: 1.5px solid ${THEME.black200};
  border-radius: 20px;
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-grow: 1;
`;

const Textarea = styled.textarea`
  flex-grow: 1;
  background-color: white;
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

  text-size-adjust: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;

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

const SubmitButtonDisabled = styled.button`
  border-radius: 9999px;
  z-index: 2;
  background: #b7b7b7;
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
