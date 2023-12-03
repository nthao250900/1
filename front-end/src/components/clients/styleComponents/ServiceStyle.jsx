import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const ServiceStyle = styled.div`
  padding: 80px 0;
  .content {
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      flex-direction: column;
      width: 30%;
      &__image {
        width: 72px;
        height: 72px;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
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
      &__description {
        max-width: 323px;
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.2px;
          color: ${Colors.secondTextColor};
          margin-bottom: 0;
          text-align: center;
        }
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    .content {
      margin-top: 30px;
      flex-direction: column;
      gap: 100px;
      .item {
        width: 100%;
        gap: 5px;
      }
    }
  }
`;
