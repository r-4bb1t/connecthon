import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import DiaryList from "../../components/diary/diarylist";
import Layout from "../../components/layout";
import { Diary } from "../../constant/types";

const DiaryPage: NextPage = () => {
  const [diaries, setDiaries] = useState([] as Diary[]);

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST || "/api"}/diaries`, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3R5cGUiOiJjaGlsZCIsInVzZXJfaWQiOiI2MzAwNmJjNzY5MjMxMDZlODU1NGIzYTgiLCJvdGhlcl90eXBlIjoicGFyZW50Iiwib3RoZXJfaWQiOiI2MzAwNmYyZTVmNjU3MDIyYzZhZWVmMjYifQ.b4mlsM_a77N6lq8D3rC-rEPwEzFpLJ6tIvCcT3bqV_c",
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
