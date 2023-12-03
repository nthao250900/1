import React from "react";
import { OutTeamStyled } from "./styles/OutTeamStyle";
import Container from "../Container";

const OutTeam = () => {
  return (
    <OutTeamStyled>
      <Container>
        <div className='our_team'>
          <div className='top'>
            <div className='title'>
              <h2>Meet Our Team</h2>
            </div>
            <div className='description'>
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
          <div className='cards'>
            {Array.from({ length: 3 }).map((item: any, key: number) => (
              <div className='cards__item' key={key}>
                <div className='image'>
                  <img src={`/images/team-1.jpg`} alt='' />
                </div>
                <div className='content'>
                  <div className='username'>
                    <h5>Username</h5>
                  </div>
                  <div className='profession'>
                    <h6>Profession</h6>
                  </div>
                  <div className='icons'>
                    <i className='fa-brands fa-facebook'></i>
                    <i className='fa-brands fa-instagram'></i>
                    <i className='fa-brands fa-twitter'></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </OutTeamStyled>
  );
};

export default OutTeam;
