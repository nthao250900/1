import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const StatsStyled = styled.div`
  padding: 80px 0;
  margin-top: 24px;
  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    flex-wrap: wrap;
    width: 100%;
    &__item {
      .metrics {
        h1 {
          font-size: 58px;
          font-weight: 700;
          line-height: 80px;
          letter-spacing: 0.2px;
          color: ${Colors.textColor};
          text-align: center;
        }
      }
      .title {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: ${Colors.secondTextColor};
        text-align: center;
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    padding: 0;

    .stats {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
