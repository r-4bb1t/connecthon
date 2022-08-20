import Link from "next/link";
import React from "react";
import { Diary } from "../../constant/types";
import Divider from "../divider";
import DiaryRow from "./diaryrow";

const DiaryList = ({ diaries }: { diaries: Diary[] }) => {
  return (
    <>
      {diaries.map((diary) => (
        <Link href={`/diary/${diary._id}`} key={diary._id}>
          <a>
            <DiaryRow key={diary._id} diary={diary} />
          </a>
        </Link>
      ))}
    </>
  );
};

export default DiaryList;
