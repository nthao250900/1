import Colors from "modules/Colors";
import styled from "styled-components";
export const PaginationStyled = styled.div`
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-pagination {
    display: flex;
    align-items: center;
    .ant-pagination-item {
      border: 1px solid #e9e9e9;
      padding: 10px 5px;
      height: auto;
      transition: all 0.4s ease;
      a {
        color: ${Colors.primaryColor};
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.2px;
      }
      &.ant-pagination-item-active {
        border-color: ${Colors.primaryColor};
        background-color: ${Colors.primaryColor};
        a {
          color: ${Colors.white};
        }
      }
      &:hover {
        &.ant-pagination-item-active {
          a {
            color: ${Colors.primaryColor};
          }
        }
        border-color: ${Colors.primaryColor};
        background-color: transparent;
      }
    }
    .ant-pagination-prev,
    .ant-pagination-next {
      padding: 10px;
      height: auto;
      border: 1px solid #e9e9e9;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: ${Colors.primaryColor};
      transition: all 0.4s ease;
      &.ant-pagination-disabled {
        color: ${Colors.mutedColor};
      }
      &:hover {
        &.ant-pagination-disabled {
          border-color: unset;
        }

        border-color: ${Colors.primaryColor};
      }
    }
  }
`;
