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
import ModalCategory from "../components/modalcategory";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import Modaldate from "../components/modaldate";
import { ActivityTypes, CardType } from "../constant/types";
import { useToken } from "../hooks/useTokenContext";

const Home: NextPage = () => {
  const [isOpenCategory, setOpenCategory] = useState(false);
  const [isOpenDate, setOpenDate] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([
    "공원탐방",
    "교육체험",
    "문화행사",
    "농장체험",
    "전시관람",
    "키즈카페",
  ] as string[]);
  const [startDate, setStartDate] = useState(new Date());
  const [activities, setActivities] = useState([] as any[]);
  const { token } = useToken();

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
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout title="활동">
      <Filters>
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

          <DateShow
            onClick={() => {
              setOpenDate(!isOpenDate);
            }}
          >
            {startDate.getFullYear()}.{startDate.getMonth() + 1}.
            {startDate.getDate()}
          </DateShow>
        </MenuFilter>
      </Filters>
      <ActivityCards>
        {activities
          .filter((a) => selectedCategory.includes(a.type))
          .map((each: any) => (
            <Card
              key={each.id}
              image={each.image_url}
              url={each.page_url}
              title={each.title}
              activityType={each.type}
              location={each.location}
              target={each.target}
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
  padding-bottom: 12px;
`;

const MenuFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
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
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #999999;
`;

export default Home;
