import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import DiaryList from "../../components/diary/diarylist";
import Layout from "../../components/layout";
import { Diary } from "../../constant/types";
import { useToken } from "../../hooks/useTokenContext";

const DiaryPage: NextPage = () => {
  const { token } = useToken();
  const [diaries, setDiaries] = useState([] as Diary[]);
  const token = localStorage.getItem("token");
  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST || "/api"}/diaries`, {
          headers: {
<<<<<<< HEAD
            Authorization: token,
=======
            Authorization: `${token}`,
>>>>>>> ff12220 (token setting changed)
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
    <Layout title="일기">
      <DiaryList diaries={diaries} />
    </Layout>
  );
};

export default DiaryPage;
