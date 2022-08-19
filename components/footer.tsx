import Link from "next/link";
import styled from "styled-components";

const Footer = () => {
  return (
    <Main>
      <Link href="/">
        <FooterItem>메인</FooterItem>
      </Link>
      <Link href="/diary">
        <FooterItem>
          일기모음
          <br />
          (캘린더)
        </FooterItem>
      </Link>
      <Link href="/activities">
        <FooterItem>액티비티</FooterItem>
      </Link>
      <Link href="/setting">
        <FooterItem>설정</FooterItem>
      </Link>
    </Main>
  );
};

const Main = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
