import React from "react";
import Carousel from "../Carousel";
import ProblemsTrying from "./ProblemsTrying";
import Stats from "./Stats";
import Video from "./Video";
import OutTeam from "./OutTeam";
import Clients from "./Clients";
import Testimonials from "./Testimonials";
import Bandage from "../homeComponents/Bandage";
import Colors from "modules/Colors";
const AboutComponents = () => {
  return (
    <div>
      <Carousel
        backgroundColor='transparent'
        heading='ABOUT COMPANY'
        title='ABOUT US'
        description='We know how large objects will act, 
but things on a small scale'
        textBottom='Get Quote Now'
        image='/images/about.png'
        widthImage='40%'
        objectFit='contain'
      />
      <ProblemsTrying />
      <Stats />
      <Video />
      <OutTeam />
      <Clients />
      <Testimonials />
      <Bandage borderBottom={true} backgroundColor={Colors.white} />
    </div>
  );
};

export default AboutComponents;
