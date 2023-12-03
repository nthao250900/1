import { MaxScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const BestsellerProductStyled = styled.div`
  background-color: ${Colors.lightGray1};
  padding: 48px 38px;
  .title {
    border-bottom: 1px solid ${Colors.lightGray2};
    padding-bottom: 24px;
    h3 {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.1px;
      color: ${Colors.textColor};
      text-transform: uppercase;
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 50px;
  }
  @media only screen and (${MaxScreenDevice.tablet_800}) {
    padding: 24px 20px 48px;
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (${MaxScreenDevice.mobileL}) {
    .cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
