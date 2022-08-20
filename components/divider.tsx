import React from "react";
import styled from "styled-components";

const Divider: any = () => {
  return <NewHr />;
};

const NewHr = styled.hr`
  width: 100vw;
  height: 1px;
  margin: 0px 0;
  border: 1px solid #ededed;
`;

export default Divider;
