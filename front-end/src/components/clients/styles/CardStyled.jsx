import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const StyleCard = styled.div`
  position: relative;
  .minus-wishlist {
    position: absolute;
    color: red;
    top: 10px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.4s ease;
    &:hover {
      transform: scale(1.1);
      color: ${Colors.secondaryColor1};
    }
  }
  .sale {
    position: absolute;
    background-color: ${Colors.secondaryColor1};
    padding: 2px 15px;
    border-radius: 0 15px 15px 0;
    top: 30px;
    left: 0px;
    p {
      color: ${Colors.white};
      font-size: 16px;
      font-weight: 500;
    }
  }
  .card {
    border-radius: 8px;
    transition: box-shadow 0.4s ease;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex-direction: ${(props) => (props.view === "grid" ? "column" : "row")};

    p {
      margin-bottom: 0;
    }
    .image {
      width: ${(props) => (props.view === "grid" ? "100%" : "50%")};
      height: ${(props) => (props.view === "grid" ? "350px" : "300px")};
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .content {
      padding: 25px ${(props) => (props.view === "grid" ? "0px" : "20px")};
      width: ${(props) => (props.view === "grid" ? "100%" : "50%")};
      display: flex;
      align-items: ${(props) =>
        props.view === "grid" ? "center" : "flex-start"};
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      .title {
        width: 90%;
        h5 {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.1px;
          margin-bottom: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
        }
      }
      .description {
        p {
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.2px;
          color: ${Colors.secondTextColor};
        }
      }
      .price {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        p {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.1px;
        }
        &__old {
          color: ${Colors.mutedColor};
        }
        &__new {
          color: ${Colors.secondaryColor1};
        }
      }
      .colors {
        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6.08px;
          margin-bottom: 0;
          li {
            width: 16px;
            height: 16px;
            border-radius: 50%;
          }
        }
      }
      .read__more {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.1px;
        margin-bottom: 0;
        color: ${Colors.textColor};
        transition: all 0.4s ease;
        &:hover {
          color: ${Colors.primaryColor};
        }
      }
    }
    &:hover {
      box-shadow: 2px 2px 6px -3px rgba(91, 91, 91, 0.8);
      -webkit-box-shadow: 2px 2px 6px -3px rgba(91, 91, 91, 0.8);
      -moz-box-shadow: 2px 2px 6px -3px rgba(91, 91, 91, 0.8);
    }
  }

  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    .image {
    }
  }
`;
