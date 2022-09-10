import React, { useState } from "react";
//@ts-ignore
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import { ToggleIcon, ToggleIconToggled } from "../icons";

const ModalCategory = ({
  isOpenCategory,
  setOpenCategory,
  selectedCategory,
  setSelectedCategory,
  setRealCategory,
}: any) => {
  const category = [
    "공원탐방",
    "교육체험",
    "문화행사",
    "농장체험",
    "전시관람",
    "키즈카페",
  ];

  const handleSelectCategory = (current: string) => {
    if (!selectedCategory.includes(current)) {
      let temp = [...selectedCategory, current];
      setSelectedCategory(temp);
    } else {
      let temp = selectedCategory.filter((e: string) => e != current);
      setSelectedCategory(temp);
    }
  };

  return (
    <Sheet
      isOpen={isOpenCategory}
      snapPoints={[550]}
      onClose={() => setOpenCategory(false)}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <ThemesTitle>분류</ThemesTitle>
          <ThemesList>
            {category.map((each: string) => (
              <Theme
                key={each}
                onClick={() => {
                  handleSelectCategory(each);
                }}
              >
                <ThemeTitle>{each}</ThemeTitle>
                {!selectedCategory.includes(each) ? (
                  <ToggleIcon />
                ) : (
                  <ToggleIconToggled />
                )}
              </Theme>
            ))}
          </ThemesList>

          <ModalFooter>
            <ModalButton
              onClick={() => {
                setRealCategory(selectedCategory);
                setOpenCategory(false);
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

export default ModalCategory;
