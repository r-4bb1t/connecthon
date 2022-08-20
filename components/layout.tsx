import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";
import { THEME } from "../constant/colors";

const Layout = ({
  preventRouterChange,
  children,
}: {
  preventRouterChange?: boolean;
  children: ReactNode;
}) => {
  return (
    <Main>
      <Header />
      <Children>{children}</Children>
      <Footer preventRouterChange={preventRouterChange || false} />
    </Main>
  );
};

export default Layout;

const Main = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${THEME.background};
`;

const Children = styled.div`
  padding: 4rem 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
