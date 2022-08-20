import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useAlertContext } from "../hooks/useAlertContext";
import { ActivityIcon, ListIcon, MainIcon, NewIcon, MypageIcon } from "./icons";

const Footer = ({ preventRouterChange }: { preventRouterChange: boolean }) => {
  const { push, alerts, close } = useAlertContext();
  const router = useRouter();
  const goto = (href: string) => {
    if (preventRouterChange) {
      alerts.map((a) => close(a.id));
      push({
        message: (
          <>
            정말 삭제하시겠어요?
            <br />
            작성한 내용이 모두 사라져요.
          </>
        ),
        twoButton: true,
        buttonText: "삭제",
        onClose: () => {
          router.push(href);
        },
      });
    }
    if (!preventRouterChange) {
      router.push(href);
    }
  };

  return (
    <Main>
      <FooterItem onClick={() => goto("/")}>
        <MainIcon />
      </FooterItem>
      <FooterItem onClick={() => goto("/diary")}>
        <ListIcon />
      </FooterItem>
      <FooterItem onClick={() => goto("/activities")}>
        <ActivityIcon />
      </FooterItem>
      <FooterItem onClick={() => goto("/mypage")}>
        <MypageIcon />
      </FooterItem>
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

const FooterItem = styled.button`
  text-align: center;
  padding: 1rem 0;
  border: none;
  background: none;
  border-top: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
