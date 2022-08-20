import React, { useState } from "react";
//@ts-ignore
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import Datepicker from "./datepicker/datepicker";

const Modal = ({ isOpen, setOpen }: any) => {
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

  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleSelectCity = (current: any) => {
    if (!selectedCity.includes(current)) {
      let temp: any = [...selectedCity, current];
      setSelectedCity(temp);
    } else {
      let temp: any = selectedCity.filter((e) => e !== current);
      setSelectedCity(temp);
    }
  };

  const handleSelectCategory = (current: any) => {
    if (!selectedCategory.includes(current)) {
      let temp: any = [...selectedCategory, current];
      setSelectedCategory(temp);
    } else {
      let temp: any = selectedCategory.filter((e) => e !== current);
      setSelectedCategory(temp);
    }
  };

  return (
    <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <ThemesTitle>분류</ThemesTitle>
          <ThemesList>
            {category.map((each: string) => {
              if (selectedCategory.includes(each)) {
                return (
                  <SelectedTheme
                    onClick={() => {
                      handleSelectCategory(each);
                    }}
                  >
                    {each}
                  </SelectedTheme>
                );
              } else {
                return (
                  <Theme
                    onClick={() => {
                      handleSelectCategory(each);
                    }}
                    key={each}
                  >
                    {each}
                  </Theme>
                );
              }
            })}
          </ThemesList>

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

const SelectedTheme = styled.div`
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
  background-color: #fcba58;
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

const SelectedLocation = styled.div`
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
  background-color: #fcba58;
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
