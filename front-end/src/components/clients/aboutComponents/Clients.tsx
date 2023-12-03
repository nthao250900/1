import React from "react";
import { ClientsStyle } from "./styles/ClientsStyle";
import Container from "../Container";
import Brands from "../Brands";

const Clients = () => {
  return (
    <ClientsStyle>
      <Container>
        <div className='top'>
          <div className='title'>
            <h1>Big Companies Are Here</h1>
          </div>
          <div className='description'>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>
        <Brands />
      </Container>
    </ClientsStyle>
  );
};

export default Clients;
