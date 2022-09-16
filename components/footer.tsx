import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { THEME } from "../constant/colors";
import { useAlertContext } from "../hooks/useAlertContext";
import { useLoading } from "../hooks/useLoadingContext";
import { ActivityIcon, ListIcon, MainIcon, NewIcon, MypageIcon } from "./icons";

const Footer = ({ preventRouterChange }: { preventRouterChange: boolean }) => {
  const { push, alerts, close } = useAlertContext();
  const router = useRouter();
  const { load } = useLoading();
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
          load();
          router.push(href);
        },
      });
    }
    if (!preventRouterChange) {
      load();
      router.push(href);
    }
  };

  return (
    <Main>
      <FooterItem
        onClick={() => goto("/main")}
        selected={router.asPath === "/main"}
      >
        <MainIcon selected={router.asPath === "/main"} />
        메인
      </FooterItem>
      <FooterItem
        onClick={() => goto("/diary")}
        selected={router.asPath.startsWith("/diary")}
      >
        <ListIcon selected={router.asPath.startsWith("/diary")} />
        일기
      </FooterItem>
      <FooterItem
        onClick={() => goto("/activities")}
        selected={router.asPath === "/activities"}
      >
        <ActivityIcon selected={router.asPath === "/activities"} />
        활동
      </FooterItem>
      <FooterItem
        onClick={() => goto("/mypage")}
        selected={router.asPath === "/mypage"}
      >
        <MypageIcon selected={router.asPath === "/mypage"} />
        마이홈
      </FooterItem>
    </Main>
  );
};

const Main = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  height: 5rem;

  position: fixed;
  z-index: 100000;
  left: 0;
  right: 0;
  bottom: 0px;
  background-color: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 -4px 36px rgba(0, 0, 0, 0.07);
`;

const FooterItem = styled.button<{ selected: boolean }>`
  text-align: center;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 4rem;
  gap: 4px;
  font-size: 0.8rem;
  color: ${(p) => (p.selected ? THEME.darker : THEME.black400)};
`;

export default Footer;
