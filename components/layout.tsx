import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Main>
      <Header />
      <Children>{children}</Children>
      <Footer />
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
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
