import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchToken = async (e: any) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_HOST}/user/sign-in`,
        {
          id: username,
          password: password,
        }
      );
      console.log(username, password);
      console.log(result);

      localStorage.setItem("token", result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Background>
      <Header>
        <LogoCharacter src="/images/Logo.svg" />
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
              console.log(username);
              setUsername(e.target.value);
            }}
          ></ID>
          <PW
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              console.log(password);
              setPassword(e.target.value);
            }}
          ></PW>
          <LoginButton>로그인</LoginButton>
        </LowerModal>
      </BottomModal>
    </Background>
  );
};

const Background = styled.div`
  height: 100vh;
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

const LogoCharacter = styled.img`
  margin-top: 30px;
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
  padding-left: 20px;
  :focus {
    outline: none;
    color: black;
  }
`;

const PW = styled.input`
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
  padding-left: 20px;
  :focus {
    outline: none;
    color: black;
  }
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

export default Login;
