import type { NextPage } from "next";
import Link from "next/link";
import { format } from "date-fns";
import styled, { css } from "styled-components";
import { CharacterImg } from "../components/characters";
import { NewIcon } from "../components/icons";
import Layout from "../components/layout";
import { THEME } from "../constant/colors";
import { useCallback, useEffect, useState } from "react";
import { useToken } from "../hooks/useTokenContext";

const Home: NextPage = () => {
  const [level, setLevel] = useState(1);
  const [cIndex, setCIndex] = useState(0);
  const [exp, setExp] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const token = localStorage.getItem("token");
  const [question, setQuestion] = useState(null as any);

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST || "/api"}/question`, {
          headers: {
            Authorization: `${token}`,
          },
        })
      ).json();
      setQuestion(result.data);
      setExp(parseInt(localStorage.getItem("exp") || "0"));
      setLevel(parseInt(localStorage.getItem("level") || "1"));
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (exp >= 100) {
      setExp(exp - 100);
      setLevel((l) => l + 1);
      localStorage.setItem("exp", exp.toString());
      localStorage.setItem("level", level.toString());
      setIsAnimation(true);
      setTimeout(() => setCIndex(level), 500);
      setTimeout(() => setIsAnimation(false), 1000);
    }
  }, [exp]);

  return (
    <Layout>
      <StatusContainer>
        <BetweenEnd>
          <LevelContainer>
            <Level>
              Lv.<span>{level}</span>
            </Level>
            키우미
          </LevelContainer>
          <Exp>
            <span>{exp}</span> / 100
          </Exp>
        </BetweenEnd>
        <ExpGage percent={exp / 100}></ExpGage>
      </StatusContainer>
      <Today>{format(new Date(), "yyyy . MM . dd")}</Today>
      <CharacterContainer
        isAnimation={isAnimation}
        onClick={() => setExp((e) => e + 30)}
      >
        {isAnimation && <ChangeImage src={`/assets/change.gif?${level}`} />}
        <div>
          <CharacterImg level={cIndex} />
        </div>
      </CharacterContainer>
      <TodayQuestion>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
        >
          <path
            d="M19.3828 20.374L22.752 23.9189L20.6572 25.7793L17.1123 22C16.3408 22.4102 15.5205 22.7275 14.6514 22.9521C13.792 23.1768 12.9033 23.2891 11.9854 23.2891C10.96 23.2891 9.97852 23.1572 9.04102 22.8936C7.14648 22.3467 5.51562 21.3701 4.14844 19.9639C3.50391 19.2998 2.92773 18.5332 2.41992 17.6641C1.94141 16.8242 1.57031 15.9209 1.30664 14.9541C1.04297 13.9873 0.911133 12.9863 0.911133 11.9512C0.911133 10.9062 1.04297 9.90039 1.30664 8.93359C1.83398 6.99023 2.78125 5.32031 4.14844 3.92383C4.8125 3.25 5.55957 2.65918 6.38965 2.15137C7.20996 1.66309 8.09375 1.28711 9.04102 1.02344C9.98828 0.75 10.9697 0.613281 11.9854 0.613281C13.001 0.613281 13.9824 0.745117 14.9297 1.00879C16.8242 1.55566 18.4551 2.52734 19.8223 3.92383C20.4961 4.60742 21.0771 5.37402 21.5654 6.22363C22.0537 7.06348 22.4248 7.9668 22.6787 8.93359C22.9424 9.90039 23.0742 10.9062 23.0742 11.9512C23.0742 12.7812 22.9863 13.5869 22.8105 14.3682C22.6445 15.1494 22.4053 15.9014 22.0928 16.624C21.458 18.0498 20.5547 19.2998 19.3828 20.374ZM20.1738 11.9512C20.1738 11.1895 20.0762 10.4424 19.8809 9.70996C19.4902 8.26465 18.7871 7.01953 17.7715 5.97461C17.2832 5.4668 16.7314 5.02734 16.1162 4.65625C14.8564 3.89453 13.4795 3.51367 11.9854 3.51367C10.8525 3.51367 9.79297 3.73828 8.80664 4.1875C7.82031 4.62695 6.95605 5.22754 6.21387 5.98926C5.47168 6.75098 4.88574 7.64453 4.45605 8.66992C4.03613 9.69531 3.82617 10.7891 3.82617 11.9512C3.82617 13.1133 4.03613 14.207 4.45605 15.2324C4.88574 16.248 5.47168 17.1367 6.21387 17.8984C6.95605 18.6602 7.82031 19.2656 8.80664 19.7148C9.79297 20.1543 10.8525 20.374 11.9854 20.374C13.0498 20.374 14.0557 20.1738 15.0029 19.7734L12.249 16.8145L14.2266 14.8955L17.4053 18.2793C18.2549 17.498 18.9287 16.5654 19.4268 15.4814C19.9248 14.3975 20.1738 13.2207 20.1738 11.9512Z"
            fill="#D8D8D8"
          />
        </svg>
        <QuestionContent>{question?.question_content || ""}</QuestionContent>
        {question?.is_child_answered ? (
          "오늘의 질문에 답변했어요!"
        ) : (
          <Link href="/new">
            <NewDiary>
              <NewIcon />
              답변하기
            </NewDiary>
          </Link>
        )}
      </TodayQuestion>
    </Layout>
  );
};

export default Home;

const StatusContainer = styled.div`
  padding: 2rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const BetweenEnd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LevelContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.8rem;
  color: ${THEME.black900};
  font-weight: 700;
`;

const Level = styled.div`
  color: ${THEME.black400};
  font-weight: 500;
  font-size: 1.8rem;
  span {
    font-size: inherit;
    color: ${THEME.darker};
    font-size: 1.8rem;
    font-size: 24px;
  }
`;

const Exp = styled.div`
  color: ${THEME.black500};
  font-weight: 500;
  span {
    color: ${THEME.black800};
  }
`;

const ExpGage = styled.div<{ percent: number }>`
  position: relative;
  width: 100%;
  height: 0.75rem;
  background: ${THEME.black200};
  border-radius: 9999px;
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 9999px;
    height: 100%;
    width: ${(p) => p.percent * 100}%;
    background: ${THEME.primary};
    transition: width 0.5s ease;
    @keyframes w {
      from {
        max-width: 0;
      }
      to {
        max-width: ${(p) => p.percent * 100}%;
      }
    }
    animation: w 0.5s ease forwards;
  }
`;

const Today = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${THEME.black600};
  width: 100%;
  gap: 0.5rem;
  :before,
  :after {
    content: "";
    background: ${THEME.primary};
    width: 6px;
    height: 6px;
    border-radius: 9999px;
  }
`;

const CharacterContainer = styled.div<{ isAnimation: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3rem 5rem;
  div,
  :after {
    transition: transform 0.2s;
  }
  margin-top: 2rem;
  ${(p) =>
    p.isAnimation &&
    css`
      div,
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
  svg {
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

const ChangeImage = styled.img`
  position: absolute;
  z-index: 2;
  width: 80%;
  bottom: 1rem;
`;

const TodayQuestion = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;

const QuestionContent = styled.div`
  font-size: 1.2rem;
  color: ${THEME.black900};
  text-align: center;
  padding: 0 5rem;
  font-weight: 500;
`;

const NewDiary = styled.a`
  display: block;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  gap: 1rem;
  color: ${THEME.darker};
  font-size: 1.2rem;
  font-weight: 700;
`;
