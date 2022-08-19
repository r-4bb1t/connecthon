import type { NextPage } from "next";
import { useState } from "react";
import styled, { css } from "styled-components";
import Layout from "../components/layout";

enum TAB {
  mine,
  family,
}

const Home: NextPage = () => {
  const [tab, setTab] = useState(TAB.mine);
  return (
    <Layout>
      마이페이지
      <Profile>
        <div>보호자</div>
        <div>김보호</div>
        <div>자식</div>
        <div>김애깅</div>
      </Profile>
      <Tab>
        <TabItem selected={tab === TAB.mine} onClick={() => setTab(TAB.mine)}>
          내가 찜한 활동
        </TabItem>
        <TabItem
          selected={tab === TAB.family}
          onClick={() => setTab(TAB.family)}
        >
          가족이 찜한 활동
        </TabItem>
      </Tab>
      <LikedList>
        <LikedItem>a</LikedItem>
        <LikedItem>a</LikedItem>
        <LikedItem>a</LikedItem>
        <LikedItem>a</LikedItem>
        <LikedItem>a</LikedItem>
      </LikedList>
    </Layout>
  );
};

export default Home;

const Tab = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const TabItem = styled.div<{ selected: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(p) =>
    p.selected &&
    css`
      font-weight: bold;
    `}
`;

const LikedList = styled.ul``;

const LikedItem = styled.li``;

const Profile = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  padding: 2rem;
  div:nth-child(odd) {
    font-weight: bold;
  }
`;
