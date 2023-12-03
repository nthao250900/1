import styled from "styled-components";
export const StyleActionUser = styled.div`
  .action {
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    &__left {
      width: 40%;
      .avatar {
        position: relative;
        .image {
          width: 100%;
          height: 400px;
          cursor: pointer;
        }
        .upload-image {
          position: absolute;
          width: 100%;
          height: 25%;
          bottom: 0;
          left: 0;
          background-color: #777777;
          /* filter: blur(3px); */
          opacity: 0.6;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0 0 10px 10px;
          transition: height 0.4s ease;
          cursor: pointer;
          transition: all 0.4s ease;
          color: #ffffff;
          &:hover {
            background-color: #ffffff;
            color: #000;
          }
          i {
            font-size: 25px;
          }
        }
      }
      .bottom {
        margin-top: 20px;
      }
    }
    &__right {
      width: calc(60% - 20px);
    }
    .form {
      margin: 10px 0;
      .input {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
      }
      i {
        cursor: pointer;
        transform: scale(1);
        transition: transform 0.4s ease;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
