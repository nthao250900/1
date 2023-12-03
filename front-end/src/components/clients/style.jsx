import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const StyleContainer = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 0;
  /* background-color: ${Colors.white}; */
  @media only screen and (${MinScreenDevice.laptop}) and (${MaxScreenDevice.desktop}) {
  }
`;
