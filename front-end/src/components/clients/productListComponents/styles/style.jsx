import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const ProductListStyled = styled.div`
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    h5 {
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: ${Colors.secondTextColor};
    }
    &__center {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      i {
        padding: 8px;
        border: 1px solid ${Colors.secondTextColor};
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.4s ease;
        &:hover,
        &.active {
          color: ${Colors.primaryColor};
          border-color: ${Colors.primaryColor};
        }
      }
    }
    &__right {
      .button__filter {
        margin-left: 15px;
        background-color: ${Colors.primaryColor};
        color: ${Colors.white};
        padding: 5px 27px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.2px;
      }
    }
  }
  .cards {
    padding: 50px 0;
    display: grid;
    grid-template-columns: repeat(
      ${(props) => (props.viewCard === "grid" ? 4 : 2)},
      1fr
    );
    gap: 20px;
  }
  @media ${MaxScreenDevice.laptop} {
    width: calc(100% - 40px);
    margin: 0 auto;
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    .top {
      flex-direction: column;
      gap: 15px;
    }
    .cards {
      padding: 50px 20px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const BannerTopStyled = styled.div`
  background-color: ${Colors.lightGray1};
  width: 100%;
  height: auto;
  padding: 48px 0;
  .banner {
    margin-top: 24px;

    display: flex;
    align-items: center;
    gap: 15px;
    .item {
      width: calc(100% / 5);
      height: 223px;
      position: relative;
      .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${Colors.white};
        h3 {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.1px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.2px;
        }
      }
      .image {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    padding: 0 20px;
    .banner {
      flex-direction: column;
      .item {
        width: 100%;
        height: 300px;
      }
    }
  }
`;
