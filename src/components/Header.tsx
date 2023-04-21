import React, { useState } from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import { useRef } from "react";
export interface ChildProps {
  changetheme: (name: boolean | undefined) => void;
  menuchange: (name: boolean | undefined) => void;
}

function Header(props: ChildProps) {
  const [hamburger, setHamburger] = useState<boolean | undefined>(true);
  const callback = (name: boolean | undefined) => {
    props.changetheme(name);
  };
  const menu = (name: boolean | undefined) => {
    props.menuchange(name);
    setHamburger(name);
  };

  return (
    <Container className="hcontainer">
      <Row className="hrow">
        <Col
          className="logo"
          style={
            hamburger
              ? { filter: "none", transition: "0.3s ease filter" }
              : { filter: "blur(4px)", transition: "0.3s ease filter" }
          }
        >
          ALPHA
        </Col>
        <Navbar themeconvert={callback} menu={menu} />
      </Row>
    </Container>
  );
}

export default Header;
