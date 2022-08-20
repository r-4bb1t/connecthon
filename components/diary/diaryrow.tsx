import React from "react";
import styled from "styled-components";
import { Diary } from "../../constant/types";
import Divider from "../divider";

const DiaryRow = ({ diary }: { diary: Diary }) => {
  return (
    <Body>
      <Container>
        <DiaryImage src={`/assets/emotion_background/${diary.emotion}.png`} />
        <DiaryDetail>
          <DiaryDetailTop>
            <DiaryTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  d="M11.1479 12.0786L13.0571 14.0874L11.8701 15.1416L9.86133 13C9.42415 13.2324 8.95931 13.4123 8.4668 13.5396C7.97982 13.6668 7.47624 13.7305 6.95605 13.7305C6.375 13.7305 5.81885 13.6558 5.2876 13.5063C4.21403 13.1965 3.28988 12.6431 2.51514 11.8462C2.1499 11.4699 1.8234 11.0355 1.53564 10.543C1.26449 10.0671 1.0542 9.55518 0.904785 9.00732C0.755371 8.45947 0.680664 7.89225 0.680664 7.30566C0.680664 6.71354 0.755371 6.14355 0.904785 5.5957C1.20361 4.49447 1.7404 3.54818 2.51514 2.75684C2.89144 2.375 3.31478 2.0402 3.78516 1.75244C4.25 1.47575 4.75081 1.2627 5.2876 1.11328C5.82438 0.958333 6.38053 0.880859 6.95605 0.880859C7.53158 0.880859 8.08773 0.955566 8.62451 1.10498C9.69808 1.41488 10.6222 1.96549 11.397 2.75684C11.7788 3.14421 12.1081 3.57861 12.3848 4.06006C12.6615 4.53597 12.8717 5.04785 13.0156 5.5957C13.165 6.14355 13.2397 6.71354 13.2397 7.30566C13.2397 7.77604 13.1899 8.23258 13.0903 8.67529C12.9963 9.118 12.8607 9.54411 12.6836 9.95361C12.3239 10.7616 11.812 11.4699 11.1479 12.0786ZM11.5962 7.30566C11.5962 6.87402 11.5409 6.45068 11.4302 6.03564C11.2088 5.21663 10.8104 4.51107 10.2349 3.91895C9.95817 3.63118 9.64551 3.38216 9.29688 3.17188C8.58301 2.74023 7.80273 2.52441 6.95605 2.52441C6.31413 2.52441 5.7137 2.65169 5.15479 2.90625C4.59587 3.15527 4.10612 3.49561 3.68555 3.92725C3.26497 4.35889 2.93294 4.86523 2.68945 5.44629C2.4515 6.02734 2.33252 6.64714 2.33252 7.30566C2.33252 7.96419 2.4515 8.58398 2.68945 9.16504C2.93294 9.74056 3.26497 10.2441 3.68555 10.6758C4.10612 11.1074 4.59587 11.4505 5.15479 11.7051C5.7137 11.9541 6.31413 12.0786 6.95605 12.0786C7.55924 12.0786 8.12923 11.9652 8.66602 11.7383L7.10547 10.0615L8.22607 8.97412L10.0273 10.8916C10.5088 10.4489 10.8906 9.92041 11.1729 9.30615C11.4551 8.69189 11.5962 8.02507 11.5962 7.30566Z"
                  fill="#D8D8D8"
                />
              </svg>
              <div>{diary.question_content}</div>
            </DiaryTitle>
            <DiaryDate>
              {diary.from_today === 0 ? (
                <>오늘</>
              ) : (
                <>{diary.from_today}일 전</>
              )}
            </DiaryDate>
          </DiaryDetailTop>
          <DiaryDescription>{diary.child_answer}</DiaryDescription>
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
  display: grid;
  grid-template-columns: 90px 1fr;
  border: 2px solid #ededed;
  border-radius: 24px;
  align-items: center;
  width: 90vw;
`;

const DiaryImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-right: 2px solid #ededed;
`;

const DiaryDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #d2d2d2;
  flex-shrink: 0;
`;

const DiaryDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 20px;
`;

const DiaryDetailTop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4rem;
`;

const DiaryAlarm = styled.div`
  background-color: #fcba58;
  border-radius: 100%;
  position: relative;
  width: 6px;
  height: 6px;
  top: -15px;
  right: -10px;
`;

const DiaryTitle = styled.p`
  margin: 0;
  color: #999999;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    flex-shrink: 0;
  }
  div {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;

const DiaryDescription = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  color: #515151;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
`;

export default DiaryRow;
