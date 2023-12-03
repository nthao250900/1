import Colors from "modules/Colors";
import styled from "styled-components";
export const CardBlogStyled = styled.div`
  .item {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    background-color: ${Colors.white};
    position: relative;

    .new {
      position: absolute;
      top: 20px;
      left: 20px;
      p {
        background-color: ${Colors.dangerColor};
        color: ${Colors.white};
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.2px;
        text-transform: uppercase;
        padding: 0 10px;
        border-radius: 5px;
      }
    }
    .image {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .content {
      padding: 25px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 10px;
      .tags {
        ul {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          li {
            color: ${Colors.secondTextColor};
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0.2px;
            &.active {
              color: ${Colors.primaryColor};
            }
          }
        }
      }
      .title {
        h4 {
          font-size: 20px;
          font-weight: 400;
          line-height: 30px;
          letter-spacing: 0.2px;
          color: ${Colors.textColor};
          transition: all 0.4s ease;
        }
      }
      .description {
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.2px;
          color: ${Colors.secondTextColor};
        }
      }
      .date_comment {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        &__item {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5px;
          p {
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0.2px;
            color: ${Colors.secondTextColor};
          }
        }
      }
      .button {
        .link {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.2px;
          color: ${Colors.secondTextColor};
          transition: color 0.4s ease;
          &:hover {
            color: ${Colors.primaryColor};
          }
        }
      }
    }
  }
`;
