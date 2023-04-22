import React, { useState } from "react";
import "./Modal.css";
import { Icon } from "@iconify/react";
import { Container, Row } from "react-bootstrap";
import Clock from "../projects/Clock/Clock";

const Modal = ({ setClose }: any) => {
  const [componet, setComponent] = useState("Clock");

  return (
    <>
      <Container>
        <Container className="Modalcontainer">
          <Row className="modalrow">
            <Clock />
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
