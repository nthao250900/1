import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const BrandStyled = styled.div`
  background-color: ${(props) => props.backgroundColor};

  .brand {
    padding: 50px;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    &__list {
      width: calc(100% / ${(props) => props.length});
      img {
        width: 100%;
        height: 59px;
        object-fit: contain;
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    .brand {
      flex-direction: column;
      gap: 20px;
      &__list {
        width: 100%;
      }
    }
  }
`;
