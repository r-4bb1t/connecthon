import React from "react";
import styled from "styled-components";
import Divider from "../divider";

const DiaryRow = ({ diary }: any) => {
  console.log(diary);
  return (
    <>
      <Container>
        <DiaryImage src={diary.emotion} />
        {/* <DiaryDate>{diary.created}</DiaryDate> */}
        <DiaryDetail>
          <DiaryTitle>{diary.question}</DiaryTitle>
          <DiaryDescription>{diary.answer}</DiaryDescription>
        </DiaryDetail>
      </Container>
      <Divider />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const DiaryImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

const DiaryDate = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DiaryDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const DiaryTitle = styled.p``;

const DiaryDescription = styled.p``;

export default DiaryRow;
