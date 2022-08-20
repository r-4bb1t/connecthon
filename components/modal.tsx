import React, { useState } from "react";
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import Datepicker from "./datepicker/datepicker";

const Modal = ({ isOpen, setOpen }: any) => {
  return (
    <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <ThemesTitle>분류</ThemesTitle>
          <ThemesList>
            <Theme>공원탐방</Theme>
            <Theme>교육체험</Theme>
            <Theme>문화행사</Theme>
            <Theme>농장체험</Theme>
            <Theme>전시관람</Theme>
            <Theme>서울형키즈카페</Theme>
            <Theme>공원탐방</Theme>
            <Theme>교육체험</Theme>
            <Theme>문화행사</Theme>
            <Theme>농장체험</Theme>
            <Theme>전시관람</Theme>
            <Theme>서울형키즈카페</Theme>
          </ThemesList>

          <LocationsTitle>지역</LocationsTitle>
          <LocationsList>
            <Location>강남구</Location>
            <Location>서초구</Location>
            <Location>마포구</Location>
            <Location>노원구</Location>
            <Location>관악구</Location>
            <Location>서대문구</Location>
            <Location>송파구</Location>
            <Location>은평구</Location>
            <Location>강남구</Location>
            <Location>서초구</Location>
            <Location>마포구</Location>
            <Location>노원구</Location>
            <Location>관악구</Location>
            <Location>서대문구</Location>
            <Location>송파구</Location>
            <Location>은평구</Location>
          </LocationsList>
          <DatePicker>
            <DatePickerTitle>날짜 선택</DatePickerTitle>
            <Datepicker />
          </DatePicker>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

const ThemesTitle = styled.p`
  text-align: center;
  font-size: 20px;
`;

const ThemesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const Theme = styled.div`
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
`;

const LocationsTitle = styled.p`
  text-align: center;
  font-size: 20px;
`;

const LocationsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const Location = styled.div`
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
`;

const DatePicker = styled.div``;

const DatePickerTitle = styled.p`
  text-align: center;
  font-size: 20px;
`;

export default Modal;
