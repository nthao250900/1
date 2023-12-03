import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const CollectionStyle = styled.div`
  background-color: ${Colors.lightGray1};
  .collection {
    padding: 80px 0;
    background-color: ${Colors.lightGray1};
    &__cards {
      margin-top: 48px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 242px 242px;
      gap: 16px;
      .item {
        position: relative;
        .image {
          height: 100%;
          img {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
        }
        .button {
          position: absolute;
          left: 31px;
          bottom: 26px;
          &__collection {
            padding: 10px 40px;
            background-color: ${Colors.pantonePurple};
            color: ${Colors.dark};
            border-radius: 2px;
            border: 1px solid ${Colors.pantonePurple};
            transition: border 0.4s ease;
            &:hover {
              border-color: ${Colors.textColor};
            }
          }
        }
        &:first-child {
          grid-column: 1/3;
          grid-row: 1/3;
        }
        &:nth-child(2) {
          grid-column: 3/4;
          grid-row: 1/3;
        }
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    .collection {
      padding: 40px 20px;
      &__cards {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        .item {
          width: 100%;
          .image {
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
`;
