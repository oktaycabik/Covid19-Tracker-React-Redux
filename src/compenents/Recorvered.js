import React from "react";
import { useSelector } from "react-redux";

import { Card, CardTitle, CardSubtitle } from "reactstrap";

function Recorvered() {
  const covid = useSelector((state) => state.covid.covid);
  return (
    <>
       <Card  className="px-3 py-3  recovered">
            <CardTitle><h5>Recorvered</h5></CardTitle>
            <CardTitle><h4>{covid["Total Recovered_text"]}</h4></CardTitle>
            <CardTitle>Last Updated at:</CardTitle>
            <CardTitle>{covid["Last Update"]}</CardTitle>
            <CardSubtitle>
              <h6>Number of deaths caused by COVID-19 <br />{covid.Country_text}</h6>
            </CardSubtitle>
          </Card>
    </>
  );
}

export default Recorvered;
