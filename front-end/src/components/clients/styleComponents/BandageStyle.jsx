import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const BandageStyle = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 138px;
  margin-top: 80px;
  .border-bottom {
    border-bottom: 2px solid ${(props) => props.colorsBorderBottom};
  }
  .bandage {
    width: 100%;
    height: 138px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
      h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0.1px;
        color: ${Colors.textColor};
        margin-bottom: 0;
      }
    }
    &__icons {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 20px;
      margin-bottom: 0;
      li {
        a {
          color: ${Colors.primaryColor};
        }
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    .bandage {
      padding: 40px 54px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 24.5px;
    }
  }
`;
