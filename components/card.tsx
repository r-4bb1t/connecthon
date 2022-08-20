import React from "react";
import styled from "styled-components";
import { THEME } from "../constant/colors";
import { Cafe, Culture, Education, Exhibition, Farm, Park } from "./category";
import { PickedIcon, PickedIconToggled } from "./icons";

interface CardType {
  image: string;
  title: string;
  description: string;
  type?: "list" | "wishlist" | "history";
}

const Card = ({ image, title, description, type = "list" }: CardType) => {
  return (
    <CardContainer>
      <CardImage src={image} />
      <CardDetail>
        <CardDetailTop>
          <Cafe />

          {/* <PickedIcon /> */}
          <PickedIconToggled />
        </CardDetailTop>
        <CardTitleContainer>
          <CardTitle>{title}</CardTitle>
        </CardTitleContainer>
        <CardDescription>
          <CardTarget>유아(5~7)세</CardTarget>
          <CardLandmark>서울역사박물관</CardLandmark>
        </CardDescription>
        <ButtonContainer>
          {type === "wishlist" && <WishlistButton>다녀왔어요</WishlistButton>}
          {type === "history" && <HistoryButton>일기보기</HistoryButton>}
        </ButtonContainer>
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

const CardTitleContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding: 0 12px;
  margin-bottom: 8px;
  margin-top: 8px;
  color: #3c3c3c;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTarget = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #999999;
  margin: 0;
  padding: 5px 12px;
  padding-top: 0;
`;

const CardLandmark = styled.p`
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

const ButtonContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

const WishlistButton = styled.button`
  border: none;
  background: ${THEME.darker};
  color: white;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  border-radius: 9999px;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
`;

const HistoryButton = styled(WishlistButton)`
  background: ${THEME.black200};
  color: ${THEME.black700};
`;

export default Card;
