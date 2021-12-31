import React from "react";
import { useSelector } from "react-redux";

import { Card, CardTitle, CardSubtitle } from "reactstrap";

function Active() {
  const covid = useSelector((state) => state.covid.covid);
  return (
    <>
      <Card className="px-3 py-3  active">
            <CardTitle><h5>Active</h5></CardTitle>
            <CardTitle><h4>{covid["Active Cases_text"]===""? 0 :covid["Active Cases_text"]}</h4></CardTitle>
            <CardTitle>Last Updated at:</CardTitle>
            <CardTitle>{covid["Last Update"]}</CardTitle>
            <CardSubtitle>
            <h6>Number of active cases of COVID-19 <br />{covid.Country_text}</h6>  
            </CardSubtitle>
          </Card>
    </>
  );
}

export default Active;
