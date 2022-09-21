import axios from "axios";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { THEME } from "../../constant/colors";
import { useAlertContext } from "../../hooks/useAlertContext";
import { StepActive, StepInactive } from "../icons";

type SignupProps = {
  id: string;
  setId: Function;
  pw: string;
  setPw: Function;
  setPage: Dispatch<SetStateAction<number>>;
  userType: string;
};

const Signup = ({ id, setId, pw, setPw, setPage, userType }: SignupProps) => {
  const router = useRouter();
  const { push } = useAlertContext();
  const handleParentLogin = async () => {
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_HOST}/user/sign-up`,
        {
          type: "mother",
          user_type: "parent",
          account: id,
          password: pw,
          nickname: uuid().slice(0, 8),
        }
      );

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
          message: "회원가입에 실패했습니다.",
          buttonText: "확인",
          onClose: () => {},
        });
      }
    } catch (e) {
      push({
        message: "회원가입에 실패했습니다.",
        buttonText: "확인",
        onClose: () => {},
      });
      console.log(e);
    }
  };

  return (
    <SignupContainer>
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
      <SignupHeader>
        <Steps>
          <StepActive />
          <StepInactive />
          <StepInactive />
        </Steps>
        <HeaderTitle>사용하실 아이디와 비밀번호를 설정해주세요!</HeaderTitle>
      </SignupHeader>
      <SignupBody>
        <IdInput
          placeholder="아이디 입력"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></IdInput>
        <PwInput
          placeholder="비밀번호 입력"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
          type="password"
        ></PwInput>
      </SignupBody>
      <SignupFooter>
        <FooterButton
          disabled={!Number(id.length) || !Number(pw.length)}
          onClick={() => {
            if (Number(id.length) && Number(pw.length)) {
              if (userType === "parent") handleParentLogin();
              else setPage((p) => p + 1);
            }
          }}
        >
          다음
        </FooterButton>
      </SignupFooter>
    </SignupContainer>
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

const SignupContainer = styled.div`
  padding: 3rem 0;
`;

const SignupHeader = styled.div`
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
  width: 15rem;
`;

const SignupBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  flex-direction: column;
`;

const IdInput = styled.input`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 2rem;
  color: black;
  text-align: left;
  border: none;
  border-bottom: 2px solid #d2d2d2;
  width: 18rem;
  ::placeholder {
    color: #d2d2d2;
    text-align: left;
  }
  &:focus {
    outline: none;
  }
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const PwInput = styled.input`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 2rem;
  color: black;
  text-align: left;
  border: none;
  border-bottom: 2px solid #d2d2d2;
  width: 18rem;
  ::placeholder {
    color: #d2d2d2;
    text-align: left;
  }
  &:focus {
    outline: none;
  }
  margin-bottom: 2rem;
`;

const SignupFooter = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  height: 5rem;
`;

const FooterButton = styled.button`
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

export default Signup;
