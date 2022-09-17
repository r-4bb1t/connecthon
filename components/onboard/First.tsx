import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { THEME } from "../../constant/constant";
import { SleepingCharacter, StepActive, StepInactive } from "../icons";

type FirstProps = {
  name: string;
  setName: Function;
  setPage: Dispatch<SetStateAction<number>>;
};

export const First = ({ name, setName, setPage }: FirstProps) => {
  return (
    <OnboardFirstContainer>
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
      <OnboardFirstHeader>
        <Steps>
          <StepActive />
          <StepActive />
          <StepInactive />
        </Steps>
        <HeaderTitle>특별한 이름을 정해서 캐릭터를 깨워주세요!</HeaderTitle>
      </OnboardFirstHeader>
      <OnboardFirstBody>
        <NameInput
          value={name}
          onChange={(e) => {
            if (e.target.value.length <= 6) {
              setName(e.target.value);
            }
          }}
          placeholder="한글만 입력해주세요(최대 6자)"
        />
        <SleepingCharacter width={"16rem"} height={"16rem"} />
      </OnboardFirstBody>
      <OnboardFirstFooter>
        <FirstFooterButton
          disabled={name.length <= 0 || !/^[가-힣]*$/.test(name)}
          onClick={() => {
            if (Number(name.length)) {
              setPage((p) => p + 1);
            }
          }}
        >
          캐릭터 깨우기
        </FirstFooterButton>
      </OnboardFirstFooter>
    </OnboardFirstContainer>
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
const OnboardFirstContainer = styled.div`
  padding: 3rem 0;
`;

const OnboardFirstHeader = styled.div`
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
  margin-bottom: 1rem;
  z-index: 10000000;
`;

const HeaderTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: center;
  color: #3c3c3c;
  width: 11rem;
`;

const OnboardFirstBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  flex-direction: column;
`;

const NameInput = styled.input`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 2rem;
  color: black;
  text-align: center;
  border: none;
  border-bottom: 2px solid #d2d2d2;
  width: 11.5rem;
  ::placeholder {
    color: #d2d2d2;
  }
  &:focus {
    outline: none;
  }
  margin-bottom: 3.5rem;
`;

const OnboardFirstFooter = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  height: 5rem;
`;

const FirstFooterButton = styled.button`
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
  :disabled {
    background: #b7b7b7;
  }
`;
