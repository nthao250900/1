import React, { ReactNode } from "react";
import Container from "./Container";
import { CarouselStyle } from "./styleComponents/CarouselStyle";
import { NavLink } from "react-router-dom";

type Props = {
  backgroundColor?: string;
  heading: string;
  title: string;
  description: string;
  textBottom?: string;
  image: string;
  widthImage?: string;
  objectFit?: string;
  phone?: string;
  fax?: string;
  brands?: ReactNode;
};

const Carousel = ({
  backgroundColor = "linear-gradient(to right top, #96e9fb, #abecd6)",
  heading,
  title,
  description,
  textBottom,
  image,
  widthImage = "60%",
  objectFit = "cover",
  phone,
  fax,
  brands,
}: Props) => {
  return (
    <CarouselStyle
      widthImage={widthImage}
      objectFit={objectFit}
      backgroundColor={backgroundColor}
    >
      <div className='content'>
        <div className='content__left'>
          <div className='year'>
            <h5>{heading}</h5>
          </div>
          <div className='title'>
            <h1>{title}</h1>
          </div>
          <div className='description'>
            <p>{description}</p>
          </div>
          {phone && (
            <div className='phone'>
              <p>Phone: </p>
              <p>{phone}</p>
            </div>
          )}
          {fax && (
            <div className='fax'>
              <p>fax: </p>
              <p>{fax}</p>
            </div>
          )}
          {brands && <div className='brands'>{brands}</div>}
          {textBottom && (
            <div className='button'>
              <NavLink to={"#"} className='see-more'>
                {textBottom}
              </NavLink>
            </div>
          )}
        </div>
        <div className='content__right'>
          <img src={image} alt='carousel-1' />
        </div>
      </div>
    </CarouselStyle>
  );
};

export default Carousel;
