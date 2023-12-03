import React from "react";
import { ServiceStyle } from "../styleComponents/ServiceStyle";
import Container from "../Container";
import TopSession from "./TopSession";

const datafake = [
  {
    heading: "Featured Products",
    title: "THE BEST SERVICES",
    description: "Problems trying to resolve the conflict between",
    content: [
      {
        image: "easy-wins.png",
        title: "Easy Wins",
        description: "Get your best looking smile now!",
      },
      {
        image: "concrete.png",
        title: "Concrete",
        description:
          "Defalcate is most focused in helping you discover your most beautiful smile",
      },
      {
        image: "hack-growth.png",
        title: "Hack Growth",
        description: "Overcame any hurdle or any other problem.",
      },
    ],
  },
];

const Service = () => {
  return (
    <ServiceStyle>
      <Container>
        <TopSession
          heading={datafake?.[0]?.heading}
          title={datafake?.[0]?.title}
          description={datafake?.[0]?.description}
        />
        <div className='content'>
          {datafake?.[0]?.content?.map(
            (
              item: {
                image: string;
                title: string;
                description: string;
              },
              key: number
            ) => (
              <div className='item' key={key}>
                <div className='item__image'>
                  <img src={`/images/${item.image}`} alt={item.title} />
                </div>
                <div className='item__title'>
                  <h3>{item.title}</h3>
                </div>
                <div className='item__description'>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </ServiceStyle>
  );
};

export default Service;
