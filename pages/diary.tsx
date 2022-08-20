import type { NextPage } from "next";
import React, { useState } from "react";
import DiaryList from "../components/diary/diarylist";
import Layout from "../components/layout";

const Data: any = [
  {
    id: "1",
    title: "Diary 1",
    description: "This is diary 1",
  },
  {
    id: "2",
    title: "Diary 2",
    description: "This is diary 2",
  },
  {
    id: "3",
    title: "Diary 3",
    description: "This is diary 3",
  },
  {
    id: "4",
    title: "Diary 4",
    description: "This is diary 4",
  },
];

const Diary: NextPage = () => {
  const [diaries, setDiaries] = useState(Data);

  return (
    <Layout>
      <DiaryList diaries={diaries} />
    </Layout>
  );
};

export default Diary;
