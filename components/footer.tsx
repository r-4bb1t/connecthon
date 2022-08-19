import Link from "next/link";
import styled from "styled-components";
import {
  ActivityIcon,
  ListIcon,
  MainIcon,
  NewIcon,
  SettingIcon,
} from "./icons";

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
      <Link href="/new">
        <FooterItem>
          <NewIcon />
        </FooterItem>
      </Link>
      <Link href="/activities">
        <FooterItem>
          <ActivityIcon />
        </FooterItem>
      </Link>
      <Link href="/setting">
        <FooterItem>
          <SettingIcon />
        </FooterItem>
      </Link>
    </Main>
  );
};

const Main = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

const FooterItem = styled.a`
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid black;
`;

export default Footer;
