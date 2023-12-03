import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const CarouselStyle = styled.div`
  max-width: 1292px;
  margin: 0 auto;
  margin-top: 42px;
  width: 100%;
  height: 619px;
  background-image: ${(props) => props.backgroundColor};
  border-radius: 20px;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &__left {
      width: calc(100% - ${(props) => props.widthImage});
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      padding: 0 126px;
      gap: 20px;
      .year {
        h5 {
          color: #2a7cc7;
          text-transform: uppercase;
          font-weight: 600px;
        }
      }
      .title {
        h1 {
          font-size: 50px;
          font-weight: 700;
          text-transform: uppercase;
        }
      }
      .description {
        p {
          font-size: 17px;
          color: ${Colors.secondTextColor};
          font-weight: 400;
        }
      }
      .phone,
      .fax {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
        p {
          font-size: 20px;
          font-weight: 700;
          line-height: 32px;
          letter-spacing: 0.1px;
          color: ${Colors.textColor};
        }
      }
      .brands {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 34px;
        font-size: 20px;
        .brand__link {
          transition: all 0.4s ease;
          &:hover {
            color: ${Colors.primaryColor};
          }
        }
      }
      .button {
        margin-top: 30px;
        .see-more {
          background-color: ${Colors.primaryColor};
          padding: 15px 40px;
          text-transform: uppercase;
          font-size: 20px;
          font-weight: 600;
          color: ${Colors.white};
          border-radius: 5px;
        }
      }
    }
    &__right {
      width: ${(props) => props.widthImage};
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: ${(props) => props.objectFit};
      }
    }
  }
  @media ${MaxScreenDevice.laptop} {
    height: 450px;
    width: calc(100% - 40px);
    .content {
      &__left {
        width: 55%;
        .title {
          h1 {
            font-size: 25px;
          }
        }
      }
      &__right {
        width: 55%;
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    width: calc(100% - 40px);
    .content {
      flex-direction: column;
      padding: 0;
      gap: 20px;
      &__left {
        width: 100%;
        height: 50%;
        text-align: center;
        align-items: center;
        padding: 0;
        gap: 8px;
        .year {
          h5 {
            font-size: 15px;
          }
        }
        .title {
          h1 {
            font-size: 25px;
          }
        }
        .description {
          p {
            font-size: 16px;
          }
        }
        .button {
          margin-top: 0;
          .see-more {
            padding: 10px 20px;
            font-size: 15px;
          }
        }
      }
      &__right {
        width: 100%;
        height: 50%;
        img {
          object-fit: contain;
        }
      }
    }
  }
`;
