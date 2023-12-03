import React from "react";
import { StatsStyled } from "./styles/stats";
import Container from "../Container";

const data = [
  {
    metrics: "15K",
    title: "Happy Customers",
  },
  {
    metrics: "150K",
    title: "Monthly Visitors",
  },
  {
    metrics: "15",
    title: "Countries  Worldwide",
  },
  {
    metrics: "100+",
    title: "Top Partners",
  },
];

const Stats = () => {
  return (
    <StatsStyled>
      <Container>
        <div className='stats'>
          {data?.map(
            (
              item: {
                metrics: string;
                title: string;
              },
              key: number
            ) => (
              <div className='stats__item' key={key}>
                <div className='metrics'>
                  <h1>{item.metrics}</h1>
                </div>
                <div className='title'>
                  <p>{item.title}</p>
                </div>
              </div>
            )
          )}
        </div>
        <h1>s</h1>
      </Container>
    </StatsStyled>
  );
};

export default Stats;
