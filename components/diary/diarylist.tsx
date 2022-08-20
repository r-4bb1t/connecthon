import Link from "next/link";
import React from "react";
import Divider from "../divider";
import DiaryRow from "./diaryrow";

const DiaryList = ({ diaries }: any) => {
  //   console.log(diaries);
  return (
    // <>
    //   <div>DiaryList</div>
    //   <div>Issue 2</div>
    // </>
    <>
      {diaries.map((diary: any) => (
        <Link href={`/diary/${diary.id}`} key={diary.id}>
          <a>
            <DiaryRow key={diary.id} diary={diary} />
          </a>
        </Link>
      ))}
    </>
  );
};

export default DiaryList;
