import React from "react";
import styled from "styled-components";

export const Park = () => {
  return (
    <ParkBackground>
      <ParkText>공원탐방</ParkText>
    </ParkBackground>
  );
};

const ParkBackground = styled.div`
  background: #d3f7e5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;
`;

const ParkText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 137%;
  display: flex;
  align-items: center;
  text-align: center;

  color: #06592e;
`;

export const Education = () => {
  return (
    <EducationBackground>
      <EducationText>교육체험</EducationText>
    </EducationBackground>
  );
};

const EducationBackground = styled.div`
  background: #fff5d0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;
`;

const EducationText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 137%;
  /* identical to box height, or 15px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #ca9d00;
`;

export const Culture = () => {
  return (
    <CultureBackground>
      <CultureText>교육체험</CultureText>
    </CultureBackground>
  );
};

const CultureBackground = styled.div`
  background: #ffe3e3;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;
`;

const CultureText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 137%;
  /* identical to box height, or 15px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #c15151;
`;

export const Farm = () => {
  return (
    <FarmBackground>
      <FarmText>농장체험</FarmText>
    </FarmBackground>
  );
};

const FarmBackground = styled.div`
  background: #efd7bb;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;
`;

const FarmText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 137%;
  /* identical to box height, or 15px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #987041;
`;

export const Exhibition = () => {
  return (
    <ExhibitionBackground>
      <ExhibitionText>전시관람</ExhibitionText>
    </ExhibitionBackground>
  );
};

const ExhibitionBackground = styled.div`
  background: #d3f7f4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;
`;

const ExhibitionText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 137%;
  /* identical to box height, or 15px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #065945;
`;

export const Cafe = () => {
  return (
    <CafeBackground>
      <CafeText>키즈카페</CafeText>
    </CafeBackground>
  );
};

const CafeBackground = styled.div`
  background: #d3daf7;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;
`;

const CafeText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 137%;
  /* identical to box height, or 15px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #31469b;
`;
