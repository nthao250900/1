import React from "react";
import Carousel from "components/clients/Carousel";
import BannerFeatureProduct from "components/clients/homeComponents/BannerFeatureProduct";
import Collection from "components/clients/homeComponents/Collection";
import FeaturedProducts from "components/clients/homeComponents/FeaturedProducts";
import Service from "components/clients/homeComponents/Service";
import FeaturedPosts from "components/clients/homeComponents/FeaturedPosts";
import Bandage from "components/clients/homeComponents/Bandage";

const HomePageView = () => {
  return (
    <>
      <Carousel
        heading='Summer 2020'
        title='New Collection'
        description='We know how large objects will act, but things on a small scale.'
        textBottom='Shop Now'
        image='/images/carousel-1.png'
      />
      <Collection />
      <FeaturedProducts />
      <BannerFeatureProduct />
      <Service />
      <FeaturedPosts />
      <Bandage />
    </>
  );
};

export default HomePageView;
