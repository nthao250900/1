import React from "react";
import { BannerFeatureStyle } from "../styleComponents/BannerFeatureStyle";
import TopSession from "./TopSession";
import Container from "../Container";

const BannerFeatureProduct = () => {
  const datafake = [
    {
      image: ["banner-feature-product-1.png", "banner-feature-product-2.png"],
      link: [
        {
          text: "Feature Products",
          url: "#",
        },
      ],
      heading: undefined,
      title: "We love what we do",
      description:
        "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics. Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
    },
  ];
  return (
    <Container>
      <BannerFeatureStyle>
        <div className='left'>
          {datafake?.[0].image.map((item: string, key: number) => (
            <img src={`/images/${item}`} alt={`${key}`} key={key} />
          ))}
        </div>

        <TopSession
          link={datafake?.[0]?.link}
          title={datafake?.[0].title}
          description={datafake?.[0].description}
        />
      </BannerFeatureStyle>
    </Container>
  );
};

export default BannerFeatureProduct;
