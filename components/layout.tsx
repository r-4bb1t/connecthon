import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";
import { THEME } from "../constant/colors";

const Layout = ({
  preventRouterChange,
  title,
  children,
  hasBackButton = false,
}: {
  preventRouterChange?: boolean;
  title?: string;
  children: ReactNode;
  hasBackButton?: boolean;
}) => {
  return (
    <Main>
      <Header title={title} hasBackButton={hasBackButton} />
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
`;

const Children = styled.div`
  padding: 4rem 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: ${THEME.background}; */
`;
