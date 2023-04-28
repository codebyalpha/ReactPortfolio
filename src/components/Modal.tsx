import React, { useState } from "react";
import "./Modal.css";
import { Icon } from "@iconify/react";
import { Container, Row } from "react-bootstrap";
import Clock from "../projects/Clock/Clock";
import Weather from "../projects/Weather/Weather";

const Modal = ({ setClose, compVal }: any) => {
  const [component, setComponent] = useState(compVal);

  return (
    <>
      <Container>
        <Container className="Modalcontainer">
          <Row className="modalrow">
            {component.toLowerCase() == "clock" ? <Clock /> : <Weather />}
            <Icon
              className="closeicon"
              icon="ph:x-bold"
              onClick={() => setClose(false)}
            />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Modal;
