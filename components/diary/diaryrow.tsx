import React from "react";
import styled from "styled-components";

const DiaryRow = ({ diary }: any) => {
  console.log(diary);
  return (
    <Container>
      <DiaryTitle>{diary.title}</DiaryTitle>
      <DiaryDescription>{diary.description}</DiaryDescription>
    </Container>
  );
};

const Container = styled.div``;

const DiaryTitle = styled.p``;

const DiaryDescription = styled.p``;

export default DiaryRow;
