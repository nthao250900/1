import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const BannerFeatureStyle = styled.div`
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 90px;
  .left {
    display: flex;
    height: 498px;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .top__session {
    display: flex;
    width: 447px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    text-align: start;
  }
  @media ${MaxScreenDevice.laptop} {
    width: calc(100% - 40px);
    margin: 0 auto;
    .left {
      width: 60%;
    }
  }
  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.tablet_800}) {
    flex-direction: column;
    padding: 50px 20.5px 0.45px 20.5px;
    gap: 50px;
    .left {
      order: 2;
      width: 100%;
      img {
        width: 50%;
      }
    }
    .top__session {
      order: 1;
      padding: 0 46.5px;
      width: 100%;
    }
  }
`;
