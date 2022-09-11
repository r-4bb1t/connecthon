import React from "react";
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import Datepicker from "../datepicker/datepicker";

const Modaldate = ({
  isOpenDate,
  setOpenDate,
  startDate,
  setStartDate,
  setRealStartDate,
}: any) => {
  return (
    <Sheet
      isOpen={isOpenDate}
      snapPoints={[550]}
      onClose={() => setOpenDate(!isOpenDate)}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <DatePicker>
            <DatePickerTitle>날짜 선택</DatePickerTitle>
            <Datepicker startDate={startDate} setStartDate={setStartDate} />
          </DatePicker>
        </Sheet.Content>
        <ModalFooter>
          <ModalButton
            onClick={() => {
              setRealStartDate(startDate);
              setOpenDate(false);
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

const DatePicker = styled.div``;

const DatePickerTitle = styled.div`
  text-align: center;
  font-size: 20px;
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
  margin-bottom: 20px;
`;

export default Modaldate;
