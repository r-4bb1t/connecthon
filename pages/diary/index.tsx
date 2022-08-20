import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import DiaryList from "../../components/diary/diarylist";
import Layout from "../../components/layout";

const Diary: NextPage = () => {
  const [diaries, setDiaries] = useState([] as any);

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST || "/api"}/diaries`)
      ).json();
      setDiaries(result);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <DiaryList diaries={diaries} />
    </Layout>
  );
};

export default Diary;
