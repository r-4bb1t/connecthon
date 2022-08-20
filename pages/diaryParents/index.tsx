import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import DiaryList from "../../components/diary/diarylist";
import {
  HappyIcon,
  SurprisedIcon,
  NeutralIcon,
  SadIcon,
  AngryIcon,
} from "../../components/icons";
import { Diary } from "../../constant/types";

const DiaryParents = () => {
  const [name, setName] = useState("지현이");
  const Moods = [HappyIcon, SurprisedIcon, NeutralIcon, SadIcon, AngryIcon];
  const MoodCounts = [0, 1, 2, 1, 2];

  const [diaries, setDiaries] = useState([] as Diary[]);

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(`/api/diaries`, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3R5cGUiOiJwYXJlbnQiLCJ1c2VyX2lkIjoiNjMwMDZmMmU1ZjY1NzAyMmM2YWVlZjI2Iiwib3RoZXJfdHlwZSI6ImNoaWxkIiwib3RoZXJfaWQiOiI2MzAwNmJjNzY5MjMxMDZlODU1NGIzYTgifQ.YqjzsB7Gq8D7OYJxLD8pdYJt_0kbPiZmEkpFvcx70P8",
          },
        })
      ).json();
      console.log(result);
      setDiaries(result.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout title="아이의 일기">
      <Container>
        <MoodContainer>
          <MoodDescription>
            이번 주 <span>{name}</span>의 기분입니다.
          </MoodDescription>
          <MoodPeriod>(오늘로부터 7일)</MoodPeriod>
          <MoodStats>
            <Mood>
              <HappyIcon />
              <MoodCount>{MoodCounts[0]}</MoodCount>
            </Mood>
            <Mood>
              <SurprisedIcon />
              <MoodCount>{MoodCounts[1]}</MoodCount>
            </Mood>
            <Mood>
              <NeutralIcon />
              <MoodCount>{MoodCounts[2]}</MoodCount>
            </Mood>
            <Mood>
              <SadIcon />
              <MoodCount>{MoodCounts[3]}</MoodCount>
            </Mood>
            <Mood>
              <AngryIcon />
              <MoodCount>{MoodCounts[4]}</MoodCount>
            </Mood>
          </MoodStats>
        </MoodContainer>
        <DiaryList diaries={diaries} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 145px;
  border: 1.5px solid #ededed;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const MoodDescription = styled.p`
  margin: 0;
  color: #999999;
  margin-top: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 21px;
  text-align: center;
  span {
    color: #6a6a6a;
    font-size: 20px;
  }
`;

const MoodPeriod = styled.p`
  margin: 0;
  color: #d8d8d8;
  margin-top: 10px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  color: #d8d8d8;
`;

const MoodStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 15px;
`;

const Mood = styled.div``;

const MoodCount = styled.p`
  text-align: center;
  margin-top: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  text-align: center;

  color: #c8c8c8;
`;

export default DiaryParents;