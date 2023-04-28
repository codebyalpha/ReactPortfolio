import React, { useEffect, useState } from "react";
import "./Project.css";
import Clock from "../projects/Clock/Clock";
import { Col, Container, Row } from "react-bootstrap";
import clockimg from "../projects/Clock/clock.png";
import weatherimg from "../projects/Weather/weather.jpg";
import Modal from "../components/Modal";
import Weather from "../projects/Weather/Weather";
import { Link, Outlet } from "react-router-dom";

function Project() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [project, setProject] = useState<boolean>(false);

  let projects = [
    {
      id: 1,
      icon: clockimg,
      languages: ["React with Typescript", "CSS"],
      component: <Clock />,
      name: "Clock",
    },
    {
      id: 2,
      icon: weatherimg,
      languages: ["React with Typescript", "CSS"],
      component: <Weather />,
      name: "Weather",
    },
  ];

  function setDetail(val: any) {
    setIsOpen(!isOpen);
  }

  const scrollPage = () => {
    window.scrollTo(0, 510);
    setProject(true);
  };

  return (
    <>
      <Container className="projectcontainer">
        {projects.map((item: any) => {
          return (
            <Row className="projectcont" onClick={() => setDetail(item)}>
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
              <Row className="viewproject">
                <Link to={"/project/" + item.name} onClick={scrollPage}>
                  <button>View</button>
                </Link>
              </Row>
            </Row>
          );
        })}
      </Container>
      <Row style={{ display: "grid", placeItems: "center" }}>
        {project ? (
          <div className="wrapper nine">
            <div>
              <h3 className="rotate">
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>J</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
              </h3>
            </div>
          </div>
        ) : null}
        <Outlet />
      </Row>
    </>
  );
}

export default Project;
