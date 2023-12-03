import Colors from "modules/Colors";
import styled from "styled-components";

export const VideoStyle = styled.div`
  padding: 112px 31px;
  .button-play {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: ${Colors.primaryColor};
    border-color: ${Colors.primaryColor};
    transition: all 0.4s ease;
  }
  .video-react-icon-play-arrow:before,
  .video-react .video-react-bezel .video-react-bezel-icon-play:before,
  .video-react .video-react-play-control:before,
  .video-react .video-react-big-play-button:before {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video-react:hover .video-react-big-play-button,
  .video-react .video-react-big-play-button {
    transition: all 0.4s ease;
  }
  .video-react:hover .video-react-big-play-button,
  .video-react .video-react-big-play-button:focus {
    color: ${Colors.primaryColor};
    border-color: ${Colors.primaryColor};
    background-color: transparent;
  }
`;
