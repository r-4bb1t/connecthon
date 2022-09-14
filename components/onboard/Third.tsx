import { useRouter } from "next/router";
import styled from "styled-components";
import { THEME } from "../../constant/colors";
import { ChildCharacter, ParentCharacter } from "../icons";

type ThirdProps = {
  userType: string;
  setUserType: Function;
  setPage: Function;
};

export const Third = ({ userType, setUserType, setPage }: ThirdProps) => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/main");
  };
  return (
    <ThirdContainer>
      <Header>
        <Back onClick={() => setPage(2)}>
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
      <ThirdHeader>
        <WelcomeTitle>키다에 오신걸 환영해요!</WelcomeTitle>
        <HeaderTitle>키다에서 어떤 역할로 활동할지 선택해주세요!</HeaderTitle>
      </ThirdHeader>
      <ThirdBody>
        <Card
          active={userType == "child"}
          onClick={() => {
            if (userType == "child") {
              setUserType("");
            } else {
              setUserType("child");
            }
          }}
        >
          <ChildCharacter active={userType == "child"} />
          <CardText active={userType == "child"}>아이입니다</CardText>
        </Card>
        <Card
          active={userType == "parent"}
          onClick={() => {
            if (userType == "parent") {
              setUserType("");
            } else {
              setUserType("parent");
            }
          }}
        >
          <ParentCharacter active={userType == "parent"} />
          <CardText active={userType == "parent"}>부모입니다</CardText>
        </Card>
      </ThirdBody>
      <ThirdFooter>
        <FooterButton active={Number(userType.length)} onClick={handleLogin}>
          다음
        </FooterButton>
      </ThirdFooter>
    </ThirdContainer>
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

const ThirdContainer = styled.div`
  padding: 3rem 0;
`;

const ThirdHeader = styled.div`
  /* height: 50vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomeTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #fcba58;
`;

const HeaderTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  text-align: center;
  color: #3c3c3c;
  width: 12.8rem;
`;

const ThirdBody = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  border: 2px solid ${(props) => (props.active ? "#FCBA58" : "#DEDEDE")};
  border-radius: 10px;
  width: 10rem;
  height: 14rem;
  color: ${(props) => (props.active ? "#FCBA58" : "#DEDEDE")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CardText = styled.p`
  position: absolute;
  width: 6rem;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.active ? "#FCBA58" : "#B7B7B7")}; ;
`;

const ThirdFooter = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  height: 5rem;
`;

const FooterButton = styled.button`
  background: ${(props) => (props.active ? "#FCBA58" : "#B7B7B7")};
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
