import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import DiaryList from "../../components/diary/diarylist";
import { Emoji } from "../../components/icons";
import Layout from "../../components/layout";
import { THEME } from "../../constant/colors";
import { Diary } from "../../constant/types";
import { useToken } from "../../hooks/useTokenContext";

const DiaryPage: NextPage = () => {
  const [diaries, setDiaries] = useState([] as Diary[]);
  const { token, user } = useToken();

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(
          `${
            process.env.NEXT_PUBLIC_API_HOST || "/api"
          }/user/diaries?child_id=${user?.user_id}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
      ).json();
      setDiaries(result.data);
    } catch (e) {
      console.log(e);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <Layout title={`${user?.user_type === "parent" ? "아이의 " : ""} 일기`}>
      {user?.user_type === "parent" && (
        <MoodListContainer>
          <MoodList>
            이번 주 아이의 기분입니다.<Subtitle>(오늘로부터 7일)</Subtitle>
            <MoodItemList>
              {(Object.keys(Emoji) as (keyof typeof Emoji)[]).map((mood, i) => (
                <MoodItem key={i}>
                  {Emoji[mood]({ onClick: () => {} })}
                  {
                    diaries
                      ?.slice(0, 7)
                      .filter((diary) => diary.emotion === mood).length
                  }
                </MoodItem>
              ))}
            </MoodItemList>
          </MoodList>
        </MoodListContainer>
      )}
      <DiaryList diaries={diaries} />
    </Layout>
  );
};

export default DiaryPage;

const MoodListContainer = styled.div`
  padding: 0 20px;
`;

const MoodList = styled.div`
  border: 1px solid ${THEME.black200};
  border-radius: 20px;
  padding: 20px 20px 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${THEME.black700};
  font-weight: 600;
  margin-top: 1rem;
  font-size: 1.25rem;
  svg {
    width: 30px;
    height: 30px;
  }
`;

const Subtitle = styled.div`
  color: ${THEME.black500};
  font-size: 0.875rem;
  line-height: 2;
`;

const MoodItemList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
`;

const MoodItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
