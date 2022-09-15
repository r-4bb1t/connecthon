import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../../components/layout";
import { useAlertContext } from "../../../hooks/useAlertContext";
import { useState } from "react";
import { THEME } from "../../../constant/colors";
import { useToken } from "../../../hooks/useTokenContext";
import { useLoading } from "../../../hooks/useLoadingContext";
import { useGame } from "../../../hooks/useGameContext";
import Head from "next/head";

const Reply: NextPage = () => {
  const { push } = useAlertContext();
  const { load } = useLoading();
  const router = useRouter();
  const id = router.query["id"];
  const { token, user } = useToken();
  const { gainExp } = useGame();

  const handleSubmit = async () => {
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
        `${process.env.NEXT_PUBLIC_API_HOST || "/api"}/diary/${id}`,
        {
          method: "POST",
          body: JSON.stringify({
            answer: answer,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (result.ok) {
        gainExp(10);
        push({
          message: "답변을 작성했어요!",
          onClose: () => {
            load();
            router.push("/diary");
          },
          buttonText: "확인",
        });
      } else
        push({
          message: "답변 작성에 실패했어요. 다시 시도해주세요.",
          onClose: () => {},
          buttonText: "확인",
        });
    } catch (e) {
      console.log(e);
    }
  };

  const [answer, setAnswer] = useState("");

  if (user?.user_type !== "parent") return null;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout
        preventRouterChange={answer !== ""}
        title="답장쓰기"
        hasBackButton
      >
        <Main>
          <Content>
            <Title>To.아이에게</Title>
            <Textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <ButtonContainer>
              <SubmitButtonContainer>
                {answer ? (
                  <SubmitButton onClick={() => handleSubmit()}>
                    보내기
                  </SubmitButton>
                ) : (
                  <SubmitButtonDisabled>보내기</SubmitButtonDisabled>
                )}
              </SubmitButtonContainer>
            </ButtonContainer>
          </Content>
        </Main>
      </Layout>
    </>
  );
};

export default Reply;

const Main = styled.div`
  padding: 0 1rem;
  height: 100%;
  background: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-grow: 1;
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

const Title = styled.div`
  font-weight: 600;
  font-size: 17px;
  color: ${THEME.black600};
  height: 3rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
