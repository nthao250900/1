import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import styled from "styled-components";
export const BlogStyled = styled.div`
  padding: 50px 0;
  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 35.5px;
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    .cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
