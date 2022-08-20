import React from "react";
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import Datepicker from "./datepicker/datepicker";
import { ToggleIcon, ToggleIconToggled } from "./icons";

const Modaldate = ({
  isOpenDate,
  setOpenDate,
  startDate,
  setStartDate,
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
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

const DatePicker = styled.div``;

const DatePickerTitle = styled.p`
  text-align: center;
  font-size: 20px;
`;

export default Modaldate;
