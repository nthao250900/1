import React from "react";
import { BandageStyle } from "../styleComponents/BandageStyle";
import Container from "../Container";
import Colors from "modules/Colors";

type Props = {
  backgroundColor?: string;
  borderBottom?: boolean;
  colorsBorderBottom?: string;
};

const Bandage = ({
  backgroundColor = Colors.lightGray1,
  borderBottom = false,
  colorsBorderBottom = Colors.lightGray1,
}: Props) => {
  return (
    <BandageStyle
      backgroundColor={backgroundColor}
      colorsBorderBottom={colorsBorderBottom}
    >
      <Container>
        <div className={`bandage ${borderBottom && "border-bottom"}`}>
          <div className='bandage__title'>
            <h3>Bandage</h3>
          </div>
          <ul className='bandage__icons'>
            <li>
              <a href='#'>
                <i className='fa-brands fa-facebook-f'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa-brands fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href='$'>
                <i className='fa-brands fa-twitter'></i>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </BandageStyle>
  );
};

export default Bandage;
