import React from "react";
import { ProblemsTryingStyle } from "./styles/ProblemsTrying";
import Container from "../Container";

const ProblemsTrying = () => {
  return (
    <ProblemsTryingStyle>
      <Container>
        <div className='problems'>
          <div className='problems__left'>
            <div className='heading'>
              <p>Problems trying</p>
            </div>
            <div className='title'>
              <h2>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h2>
            </div>
          </div>
          <div className='problems__right'>
            <div className='description'>
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </ProblemsTryingStyle>
  );
};

export default ProblemsTrying;
