import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/card";
import { FilterIcon, MenuIcon } from "../components/icons";
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
      <ActivityTitle>액티비티</ActivityTitle>
      <Filters>
        <MenuFilter>
          <MenuIcon />
          <MenuText>무료만 보기</MenuText>
        </MenuFilter>
        <span
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <FilterIcon />
        </span>
      </Filters>
      <ActivityCards>
        {Data.map((each: any) => (
          <Card
            key={each.id}
            image={each.image}
            title={each.title}
            description={each.description}
          />
        ))}
      </ActivityCards>
      <Modal isOpen={isOpen} setOpen={setOpen} />
    </Layout>
  );
};

const ActivityTitle = styled.header`
  font-size: 40px;
  text-align: center;
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;

const MenuFilter = styled.div`
  display: flex;
  align-items: center;
`;

const MenuText = styled.p`
  margin-left: 10px;
`;

const ActivityCards = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Home;
