import styled, { css } from "styled-components";
import { THEME } from "../../constant/colors";
import { CharacterImg } from "../characters";
import { StepActive, StepInactive } from "../icons";

type SecondProps = {
  setPage: Function;
  name: string;
};

export const Second = ({ setPage, name }: SecondProps) => {
  return (
    <>
      <Header>
        <Back onClick={() => setPage(1)}>
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
              setPage(3);
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
