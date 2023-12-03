import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const ClientsStyle = styled.div`
  padding: 80px 0;
  background-color: ${Colors.lightGray1};

  .top {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .title {
      h1 {
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0.2px;
        color: ${Colors.textColor};
      }
    }
    .description {
      width: 547px;
      p {
        width: 100%;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: ${Colors.secondTextColor};
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    margin: 0 20px;
    .top {
      padding: 0 20px;
      .title {
        text-align: center;
      }
      .description {
        width: 100%;
        p {
        }
      }
    }
  }
`;
