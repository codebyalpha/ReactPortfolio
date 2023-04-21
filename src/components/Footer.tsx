import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <Container className="footercontainer">
      <Row className="footerrow">
        <Col>
          Designed and Developed by <span>Sharad Choudhary</span>
        </Col>
        <Col>Copyright © 2023 </Col>
        <Col className="fsocialicons">
          <Icon icon="line-md:twitter" />
          <Icon icon="line-md:facebook" />
          <Icon icon="line-md:instagram" />
          <Icon icon="line-md:linkedin" />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
