import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const TestimonialsStyled = styled.div`
  .content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 640px;
    &__left {
      width: 60%;
      height: 100%;
      background-color: #2a7cc7;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .view-box {
        width: 438px;
        height: 238px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 24px;
        .heading {
          h5 {
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.1px;
            color: ${Colors.white};
          }
        }
        .title {
          h2 {
            font-size: 40px;
            font-weight: 700;
            line-height: 50px;
            letter-spacing: 0.2px;
            color: ${Colors.white};
          }
        }
        .description {
          p {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.2px;
            color: ${Colors.white};
          }
        }
        .button {
          padding: 15px 40px;
          border: 1px solid ${Colors.white};
          font-size: 14px;
          font-weight: 700;
          line-height: 22px;
          letter-spacing: 0.2px;
          color: ${Colors.white};
          border-radius: 5px;
          transition: all 0.4s ease;
          &:hover {
            border-color: ${Colors.primaryColor};
            color: ${Colors.primaryColor};
          }
        }
      }
    }
    &__right {
      width: 40%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    padding: 0 20px;
    .content {
      flex-direction: column;
      align-items: center;
      &__left {
        padding: 0 20px;
        width: 100%;
        .view-box {
          width: 100%;
          height: 40%;
          padding: 20px 0;
          align-items: center;
          text-align: center;
          gap: 15px;
          .title {
            h2 {
              font-size: 22px;
            }
          }
          .description {
            p {
              font-size: 14px;
            }
          }
          .button {
            padding: 5px 40px;
          }
        }
      }
      &__right {
        width: 100%;
        height: 60%;
        margin: 0 0 20px;
      }
    }
  }
`;
