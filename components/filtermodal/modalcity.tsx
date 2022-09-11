import React, { useState } from "react";
import Sheet from "react-modal-sheet";
import styled, { css } from "styled-components";
import { THEME } from "../../constant/colors";
import Datepicker from "../datepicker/datepicker";
import Divider from "../divider";

const Modalcity = ({
  isOpenCity,
  setOpenCity,
  selectedCity,
  setSelectedCity,
  startDate,
  setStartDate,
  curColumn,
  setCurColumn,
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

  const handleSelectCity = (current: string) => {
    if (!selectedCity.includes(current)) {
      let temp: any = [...selectedCity, current];
      setSelectedCity(temp);
    } else {
      let temp: any = selectedCity.filter((e: string) => e !== current);
      setSelectedCity(temp);
    }
  };

  return (
    <Sheet
      isOpen={isOpenCity}
      snapPoints={[870]}
      onClose={() => setOpenCity(!isOpenCity)}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <ModalTitle>필터</ModalTitle>
          <Divider />
          <ModalColumns>
            <ModalColumnTitle
              selected={curColumn === 0}
              onClick={() => {
                setCurColumn(0);
              }}
            >
              지역
            </ModalColumnTitle>
            <ModalColumnTitle
              selected={curColumn === 1}
              onClick={() => {
                setCurColumn(1);
              }}
            >
              날짜
            </ModalColumnTitle>
          </ModalColumns>
          <Divider />
          <ModalCityContent>
            {curColumn === 0 ? (
              city.map((each) => (
                <>
                  <CityBox
                    key={each}
                    onClick={() => {
                      handleSelectCity(each);
                    }}
                    selected={selectedCity.includes(each)}
                  >
                    <CityTitle>{each}</CityTitle>
                  </CityBox>
                </>
              ))
            ) : (
              <DatePicker>
                <Datepicker startDate={startDate} setStartDate={setStartDate} />
              </DatePicker>
            )}
          </ModalCityContent>
        </Sheet.Content>
        <ModalFooter>
          <ModalButton
            onClick={() => {
              setOpenCity(false);
            }}
          >
            적용하기
          </ModalButton>
        </ModalFooter>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

const DatePicker = styled.div`
  margin-top: 30px;
  width: 100vw;
`;

const ModalTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #999999;
`;

const ModalColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const ModalColumnTitle = styled.div<{ selected: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3c3c3c;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  position: relative;
  ${(p) =>
    p.selected &&
    css`
      ::after {
        content: "";
        position: absolute;
        bottom: -2px;
        height: 3px;
        border-radius: 9999px;
        width: 30%;
        background-color: ${THEME.darker};
      }
    `}
`;

const ModalCityContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 17px 14px;
  margin-top: 20px;
  align-items: center;
`;

const CityBox = styled.div<{ selected: boolean }>`
  width: 160px;
  border: 1px solid ${(p) => (p.selected ? THEME.black800 : THEME.black500)};
  color: ${(p) => (p.selected ? THEME.black900 : THEME.black700)};

  border-radius: 10px;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CityTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  padding: 2rem;
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

export default Modalcity;
