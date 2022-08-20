import Link from "next/link";
import styled from "styled-components";
import { ActivityIcon, ListIcon, MainIcon, NewIcon, MypageIcon } from "./icons";

const Footer = () => {
  return (
    <Main>
      <Link href="/">
        <FooterItem>
          <MainIcon />
        </FooterItem>
      </Link>
      <Link href="/diary">
        <FooterItem>
          <ListIcon />
        </FooterItem>
      </Link>
      <Link href="/activities">
        <FooterItem>
          <ActivityIcon />
        </FooterItem>
      </Link>
      <Link href="/mypage">
        <FooterItem>
          <MypageIcon />
        </FooterItem>
      </Link>
    </Main>
  );
};

const Main = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 4rem;
  position: fixed;
  z-index: 100000;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
`;

const FooterItem = styled.a`
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
