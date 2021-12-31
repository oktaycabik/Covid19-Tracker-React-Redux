import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getCovid } from "./redux/covid19/covid19Slice";
import { Container, Col, Row } from "reactstrap";
import Infected from "./compenents/Infected";
import Deaths from "./compenents/Deaths";
import "./app.css";
import Recorvered from "./compenents/Recorvered";
import Active from "./compenents/Active";

function App() {
  const [input, setinput] = useState("world");
  const dispatch = useDispatch();
  const covid = useSelector((state) => state.covid.covid);
  const country = useSelector((state) => state.covid.country);
  useEffect(() => {
    dispatch(getCovid(input));
    dispatch(getCountry());
  }, [dispatch, input]);
  console.log(covid);
  return (
    <Container>
      <Row className="mt-3 text-center">
        <Col>
        <h1>COVİD-19 TRACKER</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Infected /> {/* Compenent */}
        </Col>
        <Col>
          <Deaths /> {/* Compenent */}
        </Col>
        <Col>
          <Recorvered /> {/* Compenent */}
        </Col>
        <Col>
          <Active /> {/* Compenent */}
        </Col>
      </Row>
      <Row>
        <Col>
          <select 
            className="mt-5 " 
            value={input}
            onChange={(e) => setinput(e.target.value)}
            name="country"
            id="country"
          >
            {country.map((a, key) => (
              <option key={key} value={a.Country_text}>
                {a.Country_text}
              </option>
            ))}
          </select>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
