import type { NextPage } from "next";
import { useState } from "react";
import styled, { css } from "styled-components";
import Layout from "../components/layout";

enum TAB {
  wishlist,
  history,
}

const Home: NextPage = () => {
  const [tab, setTab] = useState(TAB.wishlist);
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
        <TabItem
          selected={tab === TAB.wishlist}
          onClick={() => setTab(TAB.wishlist)}
        >
          함께 해요
        </TabItem>
        <TabItem
          selected={tab === TAB.history}
          onClick={() => setTab(TAB.history)}
        >
          함께 했어요
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
      font-weight: 700;
    `}
`;

const LikedList = styled.ul``;

const LikedItem = styled.li``;

const Profile = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  padding: 2rem;
  div:nth-child(odd) {
    font-weight: 700;
  }
`;
