import React from "react";
import "./Project.css";
import Clock from "../projects/Clock/Clock";
import { Col, Container, Row } from "react-bootstrap";
import clockimg from "../projects/Clock/clock.png";

function Project() {
  return (
    <Container className="projectcontainer">
      <Row className="projectcont">
        <Row className="projectrow">
          <Col>
            <img src={clockimg} alt="" />
          </Col>
          <Col className="projectintro">
            <li>React</li>
            <li>CSS</li>
            <li>TypeScript</li>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Project;
