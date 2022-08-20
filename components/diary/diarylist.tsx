import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Diary } from "../../constant/types";
import Divider from "../divider";
import DiaryRow from "./diaryrow";

const DiaryList = ({ diaries }: { diaries: Diary[] }) => {
  return (
    <>
      {diaries.length > 0 ? (
        diaries.map((diary) => (
          <Link href={`/diary/${diary._id}`} key={diary._id}>
            <a>
              <DiaryRow key={diary._id} diary={diary} />
            </a>
          </Link>
        ))
      ) : (
        <None>아직 작성한 일기가 없어요!</None>
      )}
    </>
  );
};

export default DiaryList;

const None = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
