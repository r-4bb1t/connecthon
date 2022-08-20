import React, { useState } from "react";
//@ts-ignore
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import Datepicker from "./datepicker/datepicker";
import { ToggleIcon, ToggleIconToggled } from "./icons";

const Modal = ({
  isOpen,
  setOpen,
  selectedCategory,
  setSelectedCategory,
}: any) => {
  const city = [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];

  const category = [
    "공원탐방",
    "교육체험",
    "문화행사",
    "농장체험",
    "전시관람",
    "서울형키즈카페",
  ];

  const [selectedCity, setSelectedCity] = useState([] as string[]);

  const handleSelectCity = (current: string) => {
    if (!selectedCity.includes(current)) {
      let temp: any = [...selectedCity, current];
      setSelectedCity(temp);
    } else {
      let temp: any = selectedCity.filter((e) => e !== current);
      setSelectedCity(temp);
    }
  };

  const handleSelectCategory = (current: string) => {
    if (!selectedCategory.includes(current)) {
      let temp: any = [...selectedCategory, current];
      setSelectedCategory(temp);
    } else {
      let temp: any = selectedCategory.filter((e) => e !== current);
      setSelectedCategory(temp);
    }
  };

  return (
    <Sheet isOpen={isOpen} snapPoints={[550]} onClose={() => setOpen(false)}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <ThemesTitle></ThemesTitle>
          <ThemesList>
            {category.map((each: string) => {
              if (selectedCategory.includes(each)) {
                return (
                  <Theme
                    onClick={() => {
                      handleSelectCategory(each);
                    }}
                  >
                    <ThemeTitle key={each}>{each}</ThemeTitle>
                    <ToggleIconToggled />
                  </Theme>
                );
              } else {
                return (
                  <Theme
                    onClick={() => {
                      handleSelectCategory(each);
                    }}
                  >
                    <ThemeTitle key={each}>{each}</ThemeTitle>
                    <ToggleIcon />
                  </Theme>
                );
              }
            })}
          </ThemesList>
          {/* 
          <LocationsTitle>지역</LocationsTitle>
          <LocationsList>
            {city.map((each: string) => {
              if (selectedCity.includes(each)) {
                return (
                  <SelectedLocation
                    onClick={() => {
                      handleSelectCity(each);
                    }}
                    key={each}
                  >
                    {each}
                  </SelectedLocation>
                );
              } else {
                return (
                  <Theme
                    onClick={() => {
                      handleSelectCity(each);
                    }}
                    key={each}
                  >
                    {each}
                  </Theme>
                );
              }
            })}
          </LocationsList>
          <DatePicker>
            <DatePickerTitle>날짜 선택</DatePickerTitle>
            <Datepicker />
          </DatePicker> */}
          <ModalFooter>
            <ModalButton
              onClick={() => {
                setOpen(false);
              }}
            >
              적용하기
            </ModalButton>
          </ModalFooter>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

const ThemesTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #999999;
  text-align: center;
`;

const ThemesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

const ThemeTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #3c3c3c;
`;

const Theme = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalButton = styled.div`
  width: 139px;
  height: 50px;
  background: #fcba58;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;

const DatePicker = styled.div``;

const DatePickerTitle = styled.p`
  text-align: center;
  font-size: 20px;
`;

export default Modal;
