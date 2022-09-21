import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/card";
import {
  FilterIcon,
  MenuIcon,
  ToggleIcon,
  ToggleIconToggled,
} from "../components/icons";
import Layout from "../components/layout";
import ModalCategory from "../components/filtermodal/modalcategory";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import Modaldate from "../components/filtermodal/modaldate";
import { ActivityTypes, CardType } from "../constant/types";
import { useToken } from "../hooks/useTokenContext";
import Modalcity from "../components/filtermodal/modalcity";

const Activities: NextPage = () => {
  const [isOpenCategory, setOpenCategory] = useState(false);
  const [isOpenDate, setOpenDate] = useState(false);
  const [isOpenCity, setOpenCity] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([] as string[]);
  const [selectedCity, setSelectedCity] = useState([] as string[]);
  const [realCategory, setRealCategory] = useState([] as string[]);
  const [startDate, setStartDate] = useState(new Date());
  const [realStartDate, setRealStartDate] = useState(new Date());
  const [curColumn, setCurColumn] = useState(0);
  const [activities, setActivities] = useState([] as any[]);
  const { token, user } = useToken();
  const [types, setTypes] = useState([
    "공원탐방",
    "교육체험",
    "전시관람",
    "문화행사",
    "농장체험",
    "키즈카페",
  ]);

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST || "/api"}/activities`,
          {
            headers: {
              Authorization: token,
            },
          }
        )
      ).json();
      setActivities(result.data);
    } catch (e) {
      console.log(e);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <Layout title="활동">
      <Filters>
        <OuterFilter>
          <MenuFilter>
            <MenuOpen
              onClick={() => {
                setOpenCategory(!isOpenCategory);
              }}
            >
              {selectedCategory.length > 1 ? (
                <>
                  {selectedCategory[0]}외 {selectedCategory.length - 1}
                </>
              ) : selectedCategory.length == 1 ? (
                <>{selectedCategory[0]}</>
              ) : (
                <>분류</>
              )}
              <MenuIcon />
            </MenuOpen>
            {user?.user_type === "parent" && (
              <MenuOpenCity
                onClick={() => {
                  setOpenCity(!isOpenCity);
                  setCurColumn(0);
                }}
              >
                {selectedCity.length > 1 ? (
                  <>
                    {selectedCity[0]}외 {selectedCity.length - 1}
                  </>
                ) : selectedCity.length == 1 ? (
                  <>{selectedCity[0]}</>
                ) : (
                  <>지역구</>
                )}
                <MenuIcon />
              </MenuOpenCity>
            )}
            <DateShow
              onClick={() => {
                setOpenCity(!isOpenCity);
                setCurColumn(1);
              }}
            >
              {startDate.getFullYear()}.{startDate.getMonth() + 1}.
              {startDate.getDate()}
            </DateShow>
          </MenuFilter>

          {user?.user_type === "parent" && (
            <SecondRow>
              <TotalNumText>
                총 <span>45</span>개
              </TotalNumText>
              <FreeColumn>
                {!showFree ? (
                  <span
                    onClick={() => {
                      setShowFree(!showFree);
                    }}
                  >
                    <ToggleIcon />
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setShowFree(!showFree);
                    }}
                  >
                    <ToggleIconToggled />
                  </span>
                )}

                <ToggleText>무료활동</ToggleText>
              </FreeColumn>
            </SecondRow>
          )}
        </OuterFilter>
      </Filters>
      <ActivityCards>
        {activities?.filter(
          (a) =>
            (realCategory.length === 0 || realCategory.includes(a.type)) &&
            new Date(a.event_start_date.substring(0, 10)).getTime() <=
              new Date(realStartDate).getTime() &&
            new Date(a.event_end_date.substring(0, 10)).getTime() >=
              new Date(realStartDate).getTime()
        ).length > 0 ? (
          activities
            .filter(
              (a) =>
                (realCategory.length === 0 || realCategory.includes(a.type)) &&
                new Date(a.event_start_date.substring(0, 10)).getTime() <=
                  new Date(realStartDate).getTime() &&
                new Date(a.event_end_date.substring(0, 10)).getTime() >=
                  new Date(realStartDate).getTime()
            )
            .map((each: any) => (
              <Card
                _id={each._id}
                key={each._id}
                image={each.image_url}
                url={each.page_url}
                title={each.title}
                activityType={types[each.activity_category_id]}
                location={each.location}
                liked={each.liked}
                target={each.target}
                description={each.description}
                startDate={each.event_start_date}
                endDate={each.event_end_date}
                reservationStartDate={each.reservation_start_date}
                reservationEndDate={each.reservation_end_date}
              />
            ))
        ) : (
          <None>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="137"
              height="128"
              viewBox="0 0 137 128"
              fill="none"
            >
              <path
                d="M134.195 67.8414C134.195 57.963 128.324 49.4619 119.879 45.5998C120.984 42.8173 121.595 39.7835 121.595 36.6102C121.595 23.1024 110.623 12.1491 97.0811 12.1491C94.3065 12.1491 91.6392 12.6144 89.1538 13.4659C85.1202 5.48129 76.8338 0 67.2604 0C57.687 0 49.6664 5.30447 45.5629 13.0844C43.4318 12.4795 41.1842 12.1491 38.8573 12.1491C25.3202 12.1491 14.3432 23.0977 14.3432 36.6102C14.3432 39.6579 14.9074 42.5754 15.9287 45.2695C7.07804 48.9593 0.857422 57.6745 0.857422 67.846C0.857422 78.0176 6.48115 85.8719 14.6416 89.841C14.4458 91.0927 14.3385 92.3723 14.3385 93.6751C14.3385 107.183 25.3109 118.136 38.8526 118.136C41.7204 118.136 44.467 117.638 47.0224 116.74C51.4384 123.171 58.8528 127.391 67.2557 127.391C75.6587 127.391 83.3948 122.98 87.7735 116.308C90.6413 117.485 93.7843 118.136 97.0811 118.136C110.618 118.136 121.595 107.188 121.595 93.6751C121.595 92.2234 121.46 90.8042 121.217 89.4269C128.94 85.3089 134.195 77.1894 134.195 67.846V67.8414Z"
                fill="#EFEFEF"
              />
              <path
                d="M45.1746 91.0649C52.7325 91.0649 58.8593 84.938 58.8593 77.3802C58.8593 69.8224 52.7325 63.6956 45.1746 63.6956C37.6168 63.6956 31.49 69.8224 31.49 77.3802C31.49 84.938 37.6168 91.0649 45.1746 91.0649Z"
                fill="#DEDEDE"
              />
              <path
                d="M92.6148 91.0649C100.173 91.0649 106.299 84.938 106.299 77.3802C106.299 69.8224 100.173 63.6956 92.6148 63.6956C85.057 63.6956 78.9302 69.8224 78.9302 77.3802C78.9302 84.938 85.057 91.0649 92.6148 91.0649Z"
                fill="#DEDEDE"
              />
              <path
                d="M53.9093 79.6147C61.4671 79.6147 67.5939 73.4878 67.5939 65.93C67.5939 58.3722 61.4671 52.2454 53.9093 52.2454C46.3514 52.2454 40.2246 58.3722 40.2246 65.93C40.2246 73.4878 46.3514 79.6147 53.9093 79.6147Z"
                fill="white"
              />
              <path
                d="M83.1031 79.6147C90.6609 79.6147 96.7878 73.4878 96.7878 65.93C96.7878 58.3722 90.6609 52.2454 83.1031 52.2454C75.5453 52.2454 69.4185 58.3722 69.4185 65.93C69.4185 73.4878 75.5453 79.6147 83.1031 79.6147Z"
                fill="white"
              />
              <path
                d="M81.6292 76.3929C87.1716 76.3929 91.6646 71.8998 91.6646 66.3574C91.6646 60.815 87.1716 56.322 81.6292 56.322C76.0868 56.322 71.5938 60.815 71.5938 66.3574C71.5938 71.8998 76.0868 76.3929 81.6292 76.3929Z"
                fill="#979797"
              />
              <path
                d="M55.1033 76.3929C60.6457 76.3929 65.1387 71.8998 65.1387 66.3574C65.1387 60.815 60.6457 56.322 55.1033 56.322C49.5609 56.322 45.0679 60.815 45.0679 66.3574C45.0679 71.8998 49.5609 76.3929 55.1033 76.3929Z"
                fill="#979797"
              />
              <path
                d="M28.6701 46.2845C26.3556 40.6579 31.1139 32.3947 33.737 30.0243C36.5103 32.0948 40.8925 41.2372 39.3334 46.2403C37.7743 51.2435 31.0638 52.104 28.6701 46.2845Z"
                fill="white"
              />
              <ellipse cx="68" cy="82.9546" rx="5" ry="5.6299" fill="#979797" />
              <circle
                cx="121.467"
                cy="55.4675"
                r="10.7567"
                transform="rotate(14.022 121.467 55.4675)"
                fill="white"
                stroke="#979797"
                strokeWidth="4"
              />
              <path
                d="M118.133 66.3477L115.189 77.2032"
                stroke="#979797"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <NoneTitle>
              찾으시는 활동이 아직 없어요.
              <div>다른 활동을 찾아주세요!</div>
            </NoneTitle>
          </None>
        )}
      </ActivityCards>
      <ModalCategory
        isOpenCategory={isOpenCategory}
        setOpenCategory={setOpenCategory}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setRealCategory={setRealCategory}
      />
      <Modaldate
        startDate={startDate}
        setStartDate={setStartDate}
        setRealStartDate={setRealStartDate}
        isOpenDate={isOpenDate}
        setOpenDate={setOpenDate}
      />
      <Modalcity
        isOpenCity={isOpenCity}
        setOpenCity={setOpenCity}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        startDate={startDate}
        setStartDate={setStartDate}
        curColumn={curColumn}
        setCurColumn={setCurColumn}
      />
    </Layout>
  );
};

export default Activities;

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100000;
  background-color: white;
  width: 100%;
  padding: 0 25px;
`;

const MenuFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding-right: 3rem;
  margin-top: -10px;
`;

const TotalNumText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #999999;
  span {
    padding-left: 5px;
    color: #515151;
  }
`;

const MenuOpen = styled.div`
  display: flex;
  border: 1px solid #dedede;
  border-radius: 20px;
  width: auto;
  padding: 10px;
  height: 34px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #999999;
`;

const OuterFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuOpenCity = styled.div`
  display: flex;
  border: 1px solid #dedede;
  border-radius: 20px;
  width: auto;
  padding: 10px;
  height: 34px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #999999;
`;

const DateShow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dedede;
  border-radius: 20px;
  height: 34px;
  padding: 15px;
  color: #999999;
`;

const ActivityCards = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 7rem;
  padding-bottom: 6rem;
  height: 100%;
  flex-grow: 1;
`;

const FreeColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ToggleText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #999999;
`;

const None = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    @keyframes swing {
      0% {
        transform: translateX(0%);
      }
      15% {
        transform: translateX(-15px) rotate(-5deg);
      }
      30% {
        transform: translateX(10px) rotate(3deg);
      }
      45% {
        transform: translateX(-5px) rotate(-3deg);
      }
      60% {
        transform: translateX(5px) rotate(2deg);
      }
      75% {
        transform: translateX(0px) rotate(-1deg);
      }
      100% {
        transform: translateX(0%);
      }
    }
    animation: swing 1.5s ease infinite;
  }
`;

const NoneTitle = styled.div`
  color: #c1c1c1;
  font-size: 17px;
  font-weight: 600;
  line-height: 2;
  margin-top: 2rem;
  text-align: center;
  div {
    color: #dfdfdf;
    font-size: 17px;
  }
`;
