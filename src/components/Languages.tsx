import React from "react";
import "./Languages.css";
import { Container, Row, Col } from "react-bootstrap";

interface ChildProps {
  name: string;
  image: any;
  getName: Function;
}

function Languages(props: ChildProps) {
  return (
    <Container className="lancontainer">
      <Row className="lanrow" onClick={() => props.getName(props.name)}>
        <Col className="lanicon">{props.image}</Col>
        <p className="lanname">{props.name}</p>
      </Row>
    </Container>
  );
}

export default Languages;
