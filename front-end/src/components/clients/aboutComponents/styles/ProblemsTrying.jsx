import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const ProblemsTryingStyle = styled.div`
  .problems {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 60px;
    padding: 24px 0;
    margin: 48px 0;
    &__left {
      width: 394px;
      .heading {
        p {
          width: 100%;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.2px;
          color: ${Colors.dangerColor};
          margin-bottom: 24px !important;
        }
      }
      .title {
        h2 {
          width: 100%;
          font-size: 20px;
          font-weight: 700;
          line-height: 32px;
          letter-spacing: 0.1px;
          color: ${Colors.textColor};
        }
      }
    }
    &__right {
      height: calc(100% - 394px);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: ${Colors.secondTextColor};
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    .problems {
      padding: 24px 20px;
      flex-direction: column;
      align-items: flex-start;
      &__left {
        max-width: 100%;
        margin: 0;
      }
    }
  }
`;
