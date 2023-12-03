import { MaxScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";

export const ContactStyled = styled.div`
  .visit-our-office {
    padding: 112px 0 0;

    .heading {
      text-align: center;
      h6 {
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: ${Colors.textColor};
      }
    }
    .title {
      width: 531px;
      margin: 0 auto;
      h2 {
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0.2px;
        color: ${Colors.textColor};
        text-align: center;
      }
    }
    .content {
      .cards {
        display: flex;
        align-items: center;
        justify-content: center;
        &__item {
          margin-top: 80px;
          padding: 80px 40px;
          width: calc(100% / 3);
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 20px;

          .icon {
            font-size: 55px;
            color: ${Colors.primaryColor};
          }
          .email,
          text {
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.2px;
            color: ${Colors.textColor};
            text-align: center;
            p {
              font-size: 14px;
            }
            h5 {
              font-size: 16px;
            }
          }
          .button {
            padding: 15px 36px;
            color: ${Colors.primaryColor};
            border: 1px solid ${Colors.primaryColor};
            background-color: transparent;
            border-radius: 37px;
            transition: all 0.4s ease;
            p {
              font-size: 14px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0.2px;
            }
            &:hover {
              background-color: ${Colors.primaryColor};
              color: ${Colors.white};
            }
          }
          &:nth-child(2) {
            background-color: ${Colors.darkBackgroundColor};
            .email,
            .text {
              color: ${Colors.white};
            }
          }
        }
      }
    }
  }
  .cta {
    margin-top: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    .heading {
      h6 {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: ${Colors.textColor};
      }
    }
    .title {
      margin: 16px 0;
      h2 {
        font-size: 58px;
        font-weight: 700;
        line-height: 80px;
        letter-spacing: 0.2px;
        color: ${Colors.textColor};
      }
    }
    .button {
      padding: 15px 40px;
      background-color: ${Colors.primaryColor};
      border-radius: 5px;
      border: 1px solid ${Colors.primaryColor};
      color: ${Colors.white};
      transition: all 0.4s ease;
      p {
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.2px;
      }
      &:hover {
        background-color: transparent;
        color: ${Colors.primaryColor};
      }
    }
  }
  @media only screen and (${MaxScreenDevice.mobileL}) {
    .visit-our-office {
      padding: 112px 20px 0;
      .title {
        width: 100%;
        margin: 0 auto;
      }
      .content {
        .cards {
          flex-direction: column;
          &__item {
            width: 100%;
          }
        }
      }
    }
  }
`;
