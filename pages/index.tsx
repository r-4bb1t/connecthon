import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { NewIcon } from "../components/icons";
import Layout from "../components/layout";
import { useTodayQuestion } from "../hooks/useTodayQuestion";

const Home: NextPage = () => {
  const todayQuestion = useTodayQuestion();

  return (
    <Layout>
      <CharacterContainer>
        <Character src="/assets/character.png" />
      </CharacterContainer>
      <TodayQuestion>
        오늘의 일기 주제
        <QuestionTitle>{todayQuestion.title}</QuestionTitle>
        <QuestionContent>{todayQuestion.content}</QuestionContent>
        <Link href="/new">
          <NewDiary>
            <NewIcon />
          </NewDiary>
        </Link>
      </TodayQuestion>
    </Layout>
  );
};

export default Home;

const CharacterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`;

const Character = styled.img`
  width: 100%;
`;

const TodayQuestion = styled.div`
  position: relative;
`;

const QuestionTitle = styled.div``;

const QuestionContent = styled.div``;

const NewDiary = styled.a`
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  border: 1px solid black;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
`;
