import axios from "axios";
import { randomUUID } from "crypto";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import styled, { css } from "styled-components";
import { THEME } from "../../constant/colors";
import { useAlertContext } from "../../hooks/useAlertContext";
import { useLoading } from "../../hooks/useLoadingContext";
import { CharacterImg } from "../characters";
import { StepActive, StepInactive } from "../icons";
import uuid from "react-uuid";

type SecondProps = {
  setPage: Dispatch<SetStateAction<number>>;
  name: string;
  id: string;
  pw: string;
};

export const Second = ({ setPage, name, id, pw }: SecondProps) => {
  const { push } = useAlertContext();
  const [inviteCode, setInviteCode] = useState("");
  const router = useRouter();
  const { load, endLoad } = useLoading();

  const handleLogin = async () => {
    push({
      message: (
        <Message>
          부모님이 알려주신 초대 코드를 입력해주세요!
          <Input onChange={(e) => setInviteCode(e.target.value)} />
        </Message>
      ),
      buttonText: "확인",
      onClose: async () => {
        console.log(inviteCode);
        if (inviteCode) {
          try {
            load();
            const result = await axios.post(
              `${process.env.NEXT_PUBLIC_API_HOST}/user/sign-up?token=${inviteCode}`,
              {
                type: "mother",
                user_type: "child",
                account: id,
                password: pw,
                nickname: uuid().slice(0, 8),
                character_name: name,
              }
            );
            endLoad();

            if (result.data.detail === "success") {
              push({
                message: "회원가입이 완료되었습니다. 로그인해주세요.",
                buttonText: "확인",
                onClose: () => {
                  router.push("/");
                },
              });
            } else {
              push({
                message: "잘못된 코드이거나, 오류가 발생했습니다.",
                buttonText: "확인",
                onClose: () => {},
              });
            }
          } catch (e) {
            endLoad();
            push({
              message: "잘못된 코드이거나, 오류가 발생했습니다.",
              buttonText: "확인",
              onClose: () => {},
            });
          }
        }
      },
    });
  };

  return (
    <>
      <Header>
        <Back onClick={() => setPage((p) => p - 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="8 8 32 32"
            fill="none"
          >
            <path
              d="M28 16L20.3536 23.6464C20.1583 23.8417 20.1583 24.1583 20.3536 24.3536L28 32"
              stroke="#3C3C3C"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </Back>
      </Header>
      <OnboardSecondContainer>
        <OnboardSecondHeader>
          <Steps>
            <StepActive />
            <StepActive />
            <StepActive />
          </Steps>
          <HeaderTitle>
            <span>{name}</span>가
          </HeaderTitle>
          <HeaderTitle>깨어났습니다!</HeaderTitle>
          <HeaderTitle>일기장을 만들어볼까요?</HeaderTitle>
        </OnboardSecondHeader>
        <OnboardSecondBody>
          <CharacterContainer isAnimation={true}>
            <CharacterAnimation>
              <CharacterImg level={0} />
            </CharacterAnimation>
          </CharacterContainer>
        </OnboardSecondBody>
        <OnboardSecondFooter>
          <SecondFooterButton
            onClick={() => {
              handleLogin();
            }}
          >
            일기장 만들기
          </SecondFooterButton>
        </OnboardSecondFooter>
      </OnboardSecondContainer>
    </>
  );
};

const Header = styled.header`
  height: 4rem;
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: white;
  display: flex;
  align-items: center;
  color: ${THEME.black900};
  font-size: 20px;
  font-weight: 700;
  gap: 0.5rem;
  svg {
    margin-top: 4px;
  }
`;

const Back = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

const OnboardSecondContainer = styled.div`
  padding: 3rem 0;
`;

const OnboardSecondHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4rem;
  gap: 0.5rem;
  margin-bottom: 2rem;
  z-index: 10000000;
`;

const HeaderTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  line-height: 2rem;

  color: #6d6d6d;
  margin: 0;
  span {
    color: #3c3c3c;
    font-size: 1.2rem;
  }
`;

const OnboardSecondBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharacterContainer = styled.div<{ isAnimation: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3rem 5rem;
  > div,
  :after {
    transition: transform 0.2s;
  }
  margin-top: 2rem;
  ${(p) =>
    p.isAnimation &&
    css`
      div:first-child,
      :after {
        transform: scale(0.5);
      }
    `}
  :after {
    position: absolute;
    bottom: 0;
    width: 6rem;
    content: "";
    background: ${THEME.black300};
    height: 1rem;
    border-radius: 50%;
    @keyframes shadow {
      from,
      to {
        transform: scale(1, 1);
      }
      25% {
        transform: scale(0.9, 1);
      }
      50% {
        transform: scale(1.1, 1);
      }
      75% {
        transform: scale(0.95, 1);
      }
    }
    animation: shadow 1s infinite;
  }
  > div:first-child {
    @keyframes gelatine {
      from,
      to {
        transform: scale(1, 1) translateY(0);
      }
      25% {
        transform: scale(0.9, 1.1);
      }
      50% {
        transform: scale(1.1, 0.9) translateY(30px);
      }
      75% {
        transform: scale(0.95, 1.05) translateY(-20px);
      }
    }
    animation: gelatine 1s infinite;
  }
`;

const CharacterAnimation = styled.div``;

const OnboardSecondFooter = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  height: 5rem;
`;

const SecondFooterButton = styled.button`
  background: #fcba58;
  border-radius: 31.5px;
  width: 20rem;
  height: 3rem;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  border: none;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  border: 2px solid #ececec;
  border-radius: 31.5px;
  box-sizing: border-box;
  width: 320px;
  height: 56px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  opacity: 60%;
  background: white;
  padding-left: 20px;
  :focus {
    outline: none;
    color: black;
  }
`;
