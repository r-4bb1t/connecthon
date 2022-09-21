import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useLoading } from "../hooks/useLoadingContext";
import { useToken } from "../hooks/useTokenContext";
import { useAlertContext } from "../hooks/useAlertContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [focus, setFocus] = useState("none" as "none" | "id" | "pw");
  const [px, setPx] = useState(0);

  const { load, endLoad } = useLoading();
  const { push } = useAlertContext();

  const router = useRouter();
  const { token, storeToken } = useToken();

  const fetchToken = async (e: any) => {
    e.preventDefault();
    load();
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_HOST}/user/sign-in`,
        {
          account: username,
          password: password,
        }
      );

      if (result.data.data) {
        console.log("data:::", result.data.data.token);
        storeToken(result.data.data.token);
        load();
        router.push("/main");
      } else {
        endLoad();
        push({
          message: "아이디와 비밀번호를 확인해주세요.",
          buttonText: "확인",
          onClose: () => {},
        });
      }
    } catch (e) {
      endLoad();
      push({
        message: "아이디와 비밀번호를 확인해주세요.",
        buttonText: "확인",
        onClose: () => {},
      });
      console.log(e);
    }
  };

  useEffect(() => {
    if (focus === "none") setPx(0);
    if (focus === "pw") setPx(Math.min(password.length - 10, 10) * 0.5);
    if (focus === "id") setPx(Math.min(username.length - 10, 10) * 0.5);
  }, [username, password, focus]);

  /*  useEffect(() => {
    if (token) {
      load();
      router.push("/main");
    }
  }, [token]); */

  return (
    <Background>
      <Header>
        <CharacterContainer>
          <LogoCharacter src="/images/LogoFrame.svg" />
          <LogoFace src="/assets/face.png">
            <LogoEyes src="/assets/eyes.gif" px={px} down={focus !== "none"} />
          </LogoFace>
        </CharacterContainer>
      </Header>
      <BottomModal>
        <UpperModal>
          <LogoText src="/images/KIDA.svg" />
          <SubText>부모와 아이를 이어주는 징검다리</SubText>
        </UpperModal>
        <LowerModal onSubmit={fetchToken}>
          <ID
            placeholder="아이디"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onFocus={() => {
              setFocus("id");
            }}
            onBlur={() => {
              if (focus === "id") setFocus("none");
            }}
          ></ID>
          <PW
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onFocus={() => {
              setFocus("pw");
            }}
            onBlur={() => {
              if (focus === "pw") setFocus("none");
            }}
          ></PW>
          <LoginButton>로그인</LoginButton>
          <SignupText>
            아직 회원이 아니시라면,{" "}
            <span
              onClick={() => {
                router.push("/onboard");
              }}
            >
              회원가입하기
            </span>
          </SignupText>
        </LowerModal>
      </BottomModal>
    </Background>
  );
};

const Background = styled.div`
  height: 100%;
  width: 100vw;
  background-color: #fcba58;
`;

const BottomModal = styled.div`
  position: fixed;
  bottom: 0;
  height: 80vh;
  width: 100vw;
  border-radius: 20px 20px 0px 0px;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharacterContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
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
  animation: bounce2 2s ease infinite;
`;

const LogoCharacter = styled.img``;

const LogoFace = styled.div<{ src: string }>`
  background-image: url(${(p) => p.src});
  width: 130px;
  height: 90px;
  position: absolute;
  top: 50px;
  left: calc(50% - 53px);
  @keyframes bounce2 {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  animation: bounce2 2s 0.1s ease infinite;
`;

const LogoEyes = styled.img<{ px: number; down: boolean }>`
  position: absolute;
  top: 12px;
  left: calc(50% - 46px);
  transform: ${(p) =>
    `translate(${p.px}px, ${p.down ? `${5 - Math.abs(p.px) / 2}px` : "0px"})`};
  transition: transform 0.2s;
`;

const UpperModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.img`
  width: 160px;
  margin-top: 60px;
`;

const SubText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  color: #bdbbbb;
`;

const LowerModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
`;

const ID = styled.input`
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

const PW = styled(ID)`
  margin-bottom: 30px;
`;

const LoginButton = styled.button`
  width: 320px;
  height: 56px;
  background: #fcba58;
  border-radius: 31.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  border: none;
  color: #ffffff;
`;

const SignupText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #b7b7b7;
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #ffb23f;
  }
`;

export default Login;
