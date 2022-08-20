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
import { useToken } from "../../hooks/useTokenContext";

const DiaryParents = () => {
  const [name, setName] = useState("지현이");
  const [MoodCounts, setMoodCounts] = useState([0, 0, 0, 0, 0]);
  const [diaries, setDiaries] = useState([] as Diary[]);

  const { token } = useToken();

  const IncrementMoodCount = (id: any) => {
    let temp = Array.from(MoodCounts);
    temp[id]++;
    setMoodCounts(temp);
  };

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST || "/api"}/diaries`, {
          headers: {
            Authorization: `${token}`,
          },
        })
      ).json();
      setDiaries(result.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    diaries.map((diary) => {
      if (diary.emotion === "happy") {
        IncrementMoodCount(0);
      } else if (diary.emotion == "surprised") {
        IncrementMoodCount(1);
      } else if (diary.emotion == "neutral") {
        IncrementMoodCount(2);
      } else if (diary.emotion == "sad") {
        IncrementMoodCount(3);
      } else if (diary.emotion == "angry") {
        IncrementMoodCount(4);
      }
    });
  }, [diaries]);

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

const MoodDescription = styled.div`
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

const MoodPeriod = styled.div`
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

const MoodCount = styled.div`
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
