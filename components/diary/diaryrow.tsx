import React from "react";
import styled from "styled-components";
import Divider from "../divider";

const DiaryRow = ({ diary }: any) => {
  console.log(diary);
  return (
    <Body>
      <Container>
        <DiaryImage src={diary.emotion} />

        <DiaryDetail>
          <DiaryDetailTop>
            <DiaryTitle>Q 선물</DiaryTitle>
            <DiaryDate>1일전</DiaryDate>
          </DiaryDetailTop>
          <DiaryDescription>
            산타클로스가 크리스마스때 주신 선물이 가장 기억에 남는데, 알고보니
            엄마가 ...
          </DiaryDescription>
        </DiaryDetail>
      </Container>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #ededed;
  border-radius: 20px;
  align-items: center;

  width: 90%;
`;

const DiaryImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 17px 0 0 17px;
  border-right: 2px solid #ededed;
`;

const DiaryDate = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #d2d2d2;
`;

const DiaryDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 20px;
`;

const DiaryDetailTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DiaryTitle = styled.p`
  margin: 0;
  color: #999999;
`;

const DiaryDescription = styled.p`
  margin-top: 5px;
  margin-bottom: 0;
  color: #515151;
`;

export default DiaryRow;
