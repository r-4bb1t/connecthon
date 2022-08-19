import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Main>
      <Header />
      <div>{children}</div>
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
