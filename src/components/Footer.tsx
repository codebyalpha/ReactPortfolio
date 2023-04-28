import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container className="footercontainer">
      <Row className="footerrow">
        <Col>
          Designed and Developed by <span>Sharad Choudhary</span>
        </Col>
        <Col>Copyright © 2023 </Col>
        <Col className="fsocialicons">
          {/* <Icon icon="line-md:twitter" /> */}
          <Link
            to="https://www.facebook.com/profile.php?id=100008568757483"
            target="_blank"
          >
            <Icon icon="line-md:facebook" />
          </Link>
          <Link to="https://www.instagram.com/i.am_sharad/" target="_blank">
            <Icon icon="line-md:instagram" />
          </Link>
          <Link
            to="https://www.linkedin.com/public-profile/settings"
            target="_blank"
          >
            <Icon icon="line-md:linkedin" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
