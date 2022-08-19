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
        <>
          <DiaryRow key={diary.id} diary={diary} />
          <Divider />
        </>
      ))}
    </>
  );
};

export default DiaryList;
