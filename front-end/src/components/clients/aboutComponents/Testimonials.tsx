import React from "react";
import { TestimonialsStyled } from "./styles/TestimonialsStyle";
import Container from "../Container";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <TestimonialsStyled>
      <div className='content'>
        <div className='content__left'>
          <div className='view-box'>
            <div className='heading'>
              <h5>WORK WITH US</h5>
            </div>
            <div className='title'>
              <h2>Now Let’s grow Yours</h2>
            </div>
            <div className='description'>
              <p>
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th{" "}
              </p>
            </div>
            <Link to={"/"} className='button'>
              Button
            </Link>
          </div>
        </div>
        <div className='content__right'>
          <img src='/images/about-client.jpg' alt='' />
        </div>
      </div>
    </TestimonialsStyled>
  );
};

export default Testimonials;
