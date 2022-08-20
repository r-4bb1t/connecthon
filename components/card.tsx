import React from "react";
import styled from "styled-components";

interface CardType {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardType) => {
  return (
    <CardContainer>
      <CardImage src={image} />
      <CardDetail>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardDetail>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 40vw;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardDetail = styled.div``;

const CardTitle = styled.p`
  text-align: center;
`;

const CardDescription = styled.p`
  text-align: center;
`;

export default Card;
