import React from "react";
import { VideoStyle } from "./styles/VideoStyle";
import Container from "../Container";

import { BigPlayButton, Player } from "video-react";
const Video = () => {
  return (
    <VideoStyle>
      <Container>
        <Player
          playsInline
          poster='/images/poster.jpg'
          src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        >
          <BigPlayButton position='center' className='button-play' />
        </Player>
      </Container>
    </VideoStyle>
  );
};

export default Video;
