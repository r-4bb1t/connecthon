import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Diary } from "../../constant/types";
import DiaryRow from "./diaryrow";

const DiaryList = ({ diaries }: { diaries: Diary[] }) => {
  return (
    <>
      {diaries?.length > 0 ? (
        <Content>
          {diaries.map((diary) => (
            <Link href={`/diary/${diary._id}`} key={diary._id}>
              <a>
                <DiaryRow key={diary._id} diary={diary} />
              </a>
            </Link>
          ))}
        </Content>
      ) : (
        <None>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="128"
            viewBox="0 0 135 128"
            fill="none"
          >
            <path
              d="M134.195 67.8414C134.195 57.963 128.324 49.4619 119.879 45.5998C120.984 42.8173 121.595 39.7835 121.595 36.6102C121.595 23.1024 110.623 12.1491 97.0811 12.1491C94.3065 12.1491 91.6392 12.6144 89.1537 13.4659C85.1201 5.48129 76.8338 0 67.2604 0C57.687 0 49.6664 5.30447 45.5628 13.0844C43.4318 12.4795 41.1841 12.1491 38.8572 12.1491C25.3202 12.1491 14.3432 23.0977 14.3432 36.6102C14.3432 39.6579 14.9074 42.5754 15.9286 45.2695C7.07801 48.9593 0.857391 57.6745 0.857391 67.846C0.857391 78.0176 6.48112 85.8719 14.6416 89.841C14.4457 91.0927 14.3385 92.3723 14.3385 93.6751C14.3385 107.183 25.3109 118.136 38.8526 118.136C41.7204 118.136 44.467 117.638 47.0224 116.74C51.4384 123.171 58.8528 127.391 67.2557 127.391C75.6587 127.391 83.3948 122.98 87.7735 116.308C90.6413 117.485 93.7842 118.136 97.0811 118.136C110.618 118.136 121.595 107.188 121.595 93.6751C121.595 92.2234 121.46 90.8042 121.217 89.4269C128.94 85.3089 134.195 77.1894 134.195 67.846V67.8414Z"
              fill="#EFEFEF"
            />
            <path
              d="M45.1745 91.0649C52.7324 91.0649 58.8592 84.938 58.8592 77.3802C58.8592 69.8224 52.7324 63.6956 45.1745 63.6956C37.6167 63.6956 31.4899 69.8224 31.4899 77.3802C31.4899 84.938 37.6167 91.0649 45.1745 91.0649Z"
              fill="#DEDEDE"
            />
            <path
              d="M92.6146 91.0649C100.172 91.0649 106.299 84.938 106.299 77.3802C106.299 69.8224 100.172 63.6956 92.6146 63.6956C85.0568 63.6956 78.93 69.8224 78.93 77.3802C78.93 84.938 85.0568 91.0649 92.6146 91.0649Z"
              fill="#DEDEDE"
            />
            <path
              d="M53.8415 78.2927C61.3993 78.2927 67.5261 72.1658 67.5261 64.608C67.5261 57.0502 61.3993 50.9233 53.8415 50.9233C46.2836 50.9233 40.1568 57.0502 40.1568 64.608C40.1568 72.1658 46.2836 78.2927 53.8415 78.2927Z"
              fill="white"
            />
            <path
              d="M83.0354 78.2927C90.5932 78.2927 96.72 72.1658 96.72 64.608C96.72 57.0502 90.5932 50.9233 83.0354 50.9233C75.4775 50.9233 69.3507 57.0502 69.3507 64.608C69.3507 72.1658 75.4775 78.2927 83.0354 78.2927Z"
              fill="white"
            />
            <path
              d="M81.2108 78.2926C86.7532 78.2926 91.2462 73.7996 91.2462 68.2572C91.2462 62.7148 86.7532 58.2218 81.2108 58.2218C75.6684 58.2218 71.1754 62.7148 71.1754 68.2572C71.1754 73.7996 75.6684 78.2926 81.2108 78.2926Z"
              fill="#979797"
            />
            <path
              d="M55.666 78.2926C61.2084 78.2926 65.7014 73.7996 65.7014 68.2572C65.7014 62.7148 61.2084 58.2218 55.666 58.2218C50.1236 58.2218 45.6306 62.7148 45.6306 68.2572C45.6306 73.7996 50.1236 78.2926 55.666 78.2926Z"
              fill="#979797"
            />
            <path
              d="M42.4376 45.481C45.1981 47.3213 50.7191 47.3214 53.4797 41.8003"
              stroke="#C2C2C2"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M93.6213 45.481C90.8607 47.3213 85.3397 47.3214 82.5792 41.8003"
              stroke="#C2C2C2"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M62.1394 83.1967C63.8981 81.8316 69.3755 78.6743 74.8026 83.1967"
              stroke="#979797"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <Title>
            아직 작성한 일기가 없어요!
            <div>오늘의 질문에 답변해보세요!</div>
          </Title>
        </None>
      )}
    </>
  );
};

export default DiaryList;

const Content = styled.div`
  padding-top: 1rem;
  padding-bottom: 6rem;
`;

const None = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    @keyframes swing {
      0%,
      100% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(10deg);
      }
      20% {
        transform: rotate(-10deg);
      }
      30% {
        transform: rotate(5deg);
      }
      40% {
        transform: rotate(-5deg);
      }
      50% {
        transform: rotate(0deg);
      }
    }
    animation: swing 1.5s ease infinite;
  }
`;

const Title = styled.div`
  color: #c1c1c1;
  font-size: 17px;
  font-weight: 600;
  line-height: 2;
  text-align: center;
  margin-top: 2rem;
  div {
    color: #dfdfdf;
    font-size: 17px;
  }
`;
