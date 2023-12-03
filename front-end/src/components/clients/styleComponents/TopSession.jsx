import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const TopSessionStyled = styled.div`
  .top__session {
    text-align: center;
    .link {
      &__tag {
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: ${Colors.primaryTextColor};
      }
    }
    .heading {
      h2 {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0.2px;
        color: ${Colors.secondTextColor};
      }
    }
    .title {
      h3 {
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0.2px;
        margin-bottom: 0;
        color: ${Colors.textColor};
      }
    }
    .description {
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.2px;
        margin-bottom: 0;
        color: ${Colors.secondTextColor};
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    .top__session {
      .title {
        h3 {
          font-size: 20px;
        }
      }
      .description {
        p {
          font-size: 15px;
        }
      }
    }
  }
  @media ${MinScreenDevice.laptop} {
    .top__session {
      .title {
        h3 {
          font-size: 28px;
        }
      }
    }
  }
`;
