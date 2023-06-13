import React from "react";
import { styled } from "styled-components";
import { Ifood } from "../../interface/Ifood";

interface Iprops {
  food: Ifood;
}

const HomeFoodCard = ({ food }: Iprops) => {
  const { image, title } = food;
  return (
    <HomeFoodCardStyle>
      <Image src={image} alt="" />
      <Title>{title}</Title>
    </HomeFoodCardStyle>
  );
};
const HomeFoodCardStyle = styled.div`
  width: 300px;
  padding-bottom: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03, 1.03);
    transition: 0.2s;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const Title = styled.p`
  font-size: 14px;
  text-align: justify;
`;

export default HomeFoodCard;
