import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/card";
import { FilterIcon, MenuIcon, ToggleIcon } from "../components/icons";
import Layout from "../components/layout";
import Modal from "../components/modal";

const Home: NextPage = () => {
  const [isOpen, setOpen] = useState(false);

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

  return (
    <Layout>
      <Filters>
        <MenuFilter>
          {/* <MenuIcon /> */}
          {/* <MenuText>무료만 보기</MenuText> */}
          <MenuOpen>
            분류
            <MenuIcon />
          </MenuOpen>
          <DateShow>2022.08.20</DateShow>
        </MenuFilter>
        <FreeColumn
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <ToggleIcon />
          <ToggleText>무료체험</ToggleText>
        </FreeColumn>
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
      <Modal isOpen={isOpen} setOpen={setOpen} />
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
  width: 75px;
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

export default Home;
