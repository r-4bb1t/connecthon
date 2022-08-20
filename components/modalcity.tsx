import React, { useState } from "react";
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import Datepicker from "./datepicker/datepicker";
import Divider from "./divider";

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
              onClick={() => {
                setCurColumn(0);
              }}
            >
              지역
            </ModalColumnTitle>
            <ModalColumnTitle
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
                  {!selectedCity.includes(each) ? (
                    <CityBox
                      key={each}
                      onClick={() => {
                        handleSelectCity(each);
                      }}
                    >
                      <CityTitle>{each}</CityTitle>
                    </CityBox>
                  ) : (
                    <CityBoxToggled
                      key={each}
                      onClick={() => {
                        handleSelectCity(each);
                      }}
                    >
                      <CityTitle>{each}</CityTitle>
                    </CityBoxToggled>
                  )}
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
  color: #999999;
`;

const ModalColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ModalColumnTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3c3c3c;
  width: 50vw;
  text-align: center;
`;

const ModalCityContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const CityBox = styled.div`
  width: 160px;
  height: 60px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  margin: 10px auto;
`;

const CityBoxToggled = styled.div`
  width: 160px;
  height: 60px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px auto;
`;

const CityTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #999999;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: white;
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
  margin-bottom: 30px;
`;

export default Modalcity;
