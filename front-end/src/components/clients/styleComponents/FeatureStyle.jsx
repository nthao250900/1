import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const FeatureStyle = styled.div`
  padding: 80px 0;
  .cards {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(4, 239px);
    gap: 20.5px;
  }
  .button {
    margin-top: 71px;
    text-align: center;
    a {
      padding: 15px 40px;
      border: 1px solid ${Colors.primaryColor};
      border-radius: 5px;
      color: ${Colors.primaryColor};
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0.2px;
      transition: all 0.4s ease;
      &:hover {
        background-color: ${Colors.primaryColor};
        color: ${Colors.white};
      }
    }
  }
  @media ${MaxScreenDevice.laptop} {
    width: calc(100% - 40px);
    margin: 0 auto;
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    padding: 50px 0;
    .cards {
      margin-top: 80px;
      grid-template-columns: repeat(1, 100%);
      padding: 0 20px;
    }
  }
`;
