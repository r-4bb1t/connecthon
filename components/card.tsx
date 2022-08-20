import React from "react";
import styled from "styled-components";
import { Cafe, Culture, Education, Exhibition, Farm, Park } from "./category";
import { PickedIcon, PickedIconToggled } from "./icons";

interface CardType {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardType) => {
  return (
    <CardContainer>
      <CardImage src={image} />
      <CardDetail>
        <CardDetailTop>
          <Cafe />

          {/* <PickedIcon /> */}
          <PickedIconToggled />
        </CardDetailTop>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <CardTarget>유아(5~7)세</CardTarget>
          <CardLandmark>서울역사박물관</CardLandmark>
        </CardDescription>
      </CardDetail>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 43vw;
  box-sizing: border-box;
  border: 1px solid #dedede;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardDetail = styled.div``;

const CardDetailTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-bottom: 0px;
`;

const CardTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  padding: 0 12px;
  margin-bottom: 8px;
  margin-top: 8px;
  color: #3c3c3c;
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTarget = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #999999;
  margin: 0;
  padding: 12px;
  padding-top: 0;
`;

const CardLandmark = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #d2d2d2;
  margin: 0;
  padding: 12px;
  padding-top: 0;
`;

export default Card;
