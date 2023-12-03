import Colors from "modules/Colors";
import styled from "styled-components";
export const StyledOrderCompleted = styled.div`
  width: 50%;
  height: auto;
  margin: 150px auto;
  border-left: 1px dotted ${Colors.pink};
  border-bottom: 1px dotted ${Colors.pink};
  position: relative;

  .clock {
    position: absolute;
    left: -47px;
    top: 0;
    width: 94px;
    height: 94px;
    object-fit: contain;
  }
  .checklist {
    position: absolute;
    right: -35px;
    bottom: -35px;
    width: 70px;
    height: 70px;
    object-fit: contain;
  }
  .check_completed {
    padding: 20px;
    border-radius: 50%;
    position: relative;
    /* background-color: ${Colors.white}; */
  }
  .title {
    font-family: "Josefin Sans";
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: ${Colors.navyBlue};
    margin: 31px 0;
  }
  .description {
    max-width: 50%;
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: ${Colors.textColor2};
  }
`;
export const Shape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
  transition: border-radius 13s ease;
  background-color: #ecd2fa59;
  animation: border 10s infinite;
  z-index: -1;
  @keyframes border {
    0% {
      border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
    }
    50% {
      border-radius: 31% 69% 59% 41% / 28% 24% 76% 72%;
    }
    100% {
      border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
    }
  }
`;
