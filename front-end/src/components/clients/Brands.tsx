import React from "react";
import { BrandStyled } from "./styles/BrandStyled";
import Container from "./Container";
import Colors from "modules/Colors";

type Props = {
  backgroundColor?: string;
};

const Brands = ({ backgroundColor = "transparent" }: Props) => {
  return (
    <BrandStyled backgroundColor={backgroundColor} length={6}>
      <Container>
        <div className='brand'>
          {Array.from({ length: 6 }).map((item: any, key: number) => (
            <div className='brand__list'>
              <img src={`/images/brand-${key + 1}.png`} alt={`brand ${key}`} />
            </div>
          ))}
        </div>
      </Container>
    </BrandStyled>
  );
};

export default Brands;
