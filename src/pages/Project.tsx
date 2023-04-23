import React, { useEffect, useState } from "react";
import "./Project.css";
import Clock from "../projects/Clock/Clock";
import { Col, Container, Row } from "react-bootstrap";
import clockimg from "../projects/Clock/clock.png";
import Modal from "../components/Modal";

function Project() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const setClose = (val: boolean) => {
    setIsOpen(val);
  };

  let projects = [
    {
      id: 1,
      icon: clockimg,
      languages: ["React", "CSS", "Typescript"],
      component: <Clock />,
      name: "Analog Clock",
    },
  ];

  return (
    <>
      <Container className="projectcontainer">
        {projects.map((item: any) => {
          return (
            <Row className="projectcont" onClick={() => setIsOpen(!isOpen)}>
              <Row className="projectrow">
                <Col>
                  <img src={item.icon} alt="" />
                </Col>
                <Col className="projectintro">
                  {item.languages.map((row: any) => {
                    return <li>{row}</li>;
                  })}
                </Col>
              </Row>
              <h2 style={{ textAlign: "center" }}>{`${item.name}`}</h2>
            </Row>
          );
        })}
        <Row style={{ transition: "1s ease all" }}>
          {isOpen ? <Modal setClose={setClose} /> : null}
        </Row>
      </Container>
    </>
  );
}

export default Project;
