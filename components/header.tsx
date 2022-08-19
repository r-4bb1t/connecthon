import styled from "styled-components";

const Header = () => {
  return <Main>header</Main>;
};

export default Header;

const Main = styled.header`
  height: 4rem;
  border-bottom: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
