import React from "react";
import "./Project.css";
import Clock from "../projects/Clock";
import { Col, Container, Row } from "react-bootstrap";
import clockimg from "../projects/clock.png";

function Project() {
  return (
    <Container className="projectcontainer">
      <Row className="projectrow">
        <Col>
          <img src={clockimg} alt="" />
        </Col>
        <Col>a</Col>
      </Row>
      <Row className="projectrow">
        <Col>
          <img src={clockimg} alt="" />
        </Col>
        <Col>a</Col>
      </Row>
      <Row className="projectrow">
        <Col>
          <img src={clockimg} alt="" />
        </Col>
        <Col>a</Col>
      </Row>
    </Container>
    // <Container className="projectcontainer">
    //   <Row className="projectrow">
    //     <Col></Col>
    //     <Col className="projectdesc">a</Col>
    //   </Row>
    // </Container>
  );
}

export default Project;
