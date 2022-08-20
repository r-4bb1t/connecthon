import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/card";
import {
  FilterIcon,
  MenuIcon,
  ToggleIcon,
  ToggleIconToggled,
} from "../components/icons";
import Layout from "../components/layout";
import ModalCategory from "../components/modalcategory";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import Modaldate from "../components/modaldate";
import Modalcity from "../components/modalcity";

const Home: NextPage = () => {
  const [isOpenCategory, setOpenCategory] = useState(false);
  const [isOpenDate, setOpenDate] = useState(false);
  const [isOpenCity, setOpenCity] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([] as string[]);
  const [selectedCity, setSelectedCity] = useState([] as string[]);
  const [startDate, setStartDate] = useState(new Date());
  const [curColumn, setCurColumn] = useState(0);

  const Data: any = [
    {
      id: "1",
      image: "https://picsum.photos/200",
      title: "강릉 수영장",
      description: "아이들과 부모들이 함꼐 즐길 수 있는 신나는 액티비티",
    },
    {
      id: "2",
      image: "https://picsum.photos/200",
      title: "레고랜드",
      description: "아이들이 좋아하는 레고로 만들어진 꿈같은 놀이동산",
    },
    {
      id: "3",
      image: "https://picsum.photos/200",
      title: "강릉 수영장",
      description: "아이들과 부모들이 함꼐 즐길 수 있는 신나는 액티비티",
    },
    {
      id: "4",
      image: "https://picsum.photos/200",
      title: "레고랜드",
      description: "아이들이 좋아하는 레고로 만들어진 꿈같은 놀이동산",
    },
    {
      id: "5",
      image: "https://picsum.photos/200",
      title: "강릉 수영장",
      description: "아이들과 부모들이 함꼐 즐길 수 있는 신나는 액티비티",
    },
    {
      id: "6",
      image: "https://picsum.photos/200",
      title: "레고랜드",
      description: "아이들이 좋아하는 레고로 만들어진 꿈같은 놀이동산",
    },
    {
      id: "7",
      image: "https://picsum.photos/200",
      title: "강릉 수영장",
      description: "아이들과 부모들이 함꼐 즐길 수 있는 신나는 액티비티",
    },
    {
      id: "8",
      image: "https://picsum.photos/200",
      title: "레고랜드",
      description: "아이들이 좋아하는 레고로 만들어진 꿈같은 놀이동산",
    },
  ];
  console.log(startDate);
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
                <>분류</>
              )}
              <MenuIcon />
            </MenuOpenCity>
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

              <ToggleText>무료체험</ToggleText>
            </FreeColumn>
          </SecondRow>
        </OuterFilter>
      </Filters>
      <ActivityCards>
        {Data.map((each: any) => (
          <Card
            key={each.id}
            image={`/images/dummy_activity.svg`}
            title={each.title}
            description={each.description}
          />
        ))}
      </ActivityCards>
      <ModalCategory
        isOpenCategory={isOpenCategory}
        setOpenCategory={setOpenCategory}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Modaldate
        startDate={startDate}
        setStartDate={setStartDate}
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

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100000;
  background-color: #fbfbfb;
  width: 100%;
  padding: 0 25px;
`;

const MenuFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  padding: 4rem 0;
`;

const FreeColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ToggleText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #999999;
`;

const OuterFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding-right: 3rem;
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

export default Home;
