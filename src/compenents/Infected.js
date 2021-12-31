import React from "react";
import { useSelector } from "react-redux";

import { Card, CardTitle, CardSubtitle } from "reactstrap";

function Infected() {
  const covid = useSelector((state) => state.covid.covid);
  return (
    <>
      <Card className="px-3 py-3 infected">
        <CardTitle>
          <h5>Infected</h5>
        </CardTitle>
        <CardTitle>
          <h4>{covid["Total Cases_text"]}</h4>
        </CardTitle>
        <CardTitle>Last Updated at:</CardTitle>
        <CardTitle>{covid["Last Update"]}</CardTitle>
        <CardSubtitle>
          <h6>
            Number of infect cases of COVID-19 <br />
            {covid.Country_text}
          </h6>
        </CardSubtitle>
      </Card>
    </>
  );
}

export default Infected;
