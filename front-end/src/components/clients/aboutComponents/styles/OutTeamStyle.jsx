import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const OutTeamStyled = styled.div`
  padding: 112px 0;
  .our_team {
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .title {
        h2 {
          font-size: 40px;
          font-weight: 700;
          line-height: 50px;
          letter-spacing: 0.2px;
          color: ${Colors.textColor};
        }
      }
      .description {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: ${Colors.secondTextColor};
        width: 469px;
        text-align: center;
      }
    }
    .cards {
      margin-top: 112px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      justify-content: center;
      gap: 30px;
      &__item {
        .content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          .username {
            h5 {
              font-size: 16px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0.1px;
              color: ${Colors.textColor};
            }
          }
          .profession {
            p {
              font-size: 14px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0.2px;
              color: ${Colors.secondTextColor};
            }
          }
          .icons {
            display: flex;
            align-items: center;
            gap: 20px;
            color: ${Colors.primaryColor};
            .fa-brands {
              font-size: 24px;
              transform: scale(1);
              cursor: pointer;
              transition: transform 0.4s ease;
              &:hover {
                transform: scale(1.1);
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
    padding: 0;
    .our_team {
      padding: 0 20px;
      .cards {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
