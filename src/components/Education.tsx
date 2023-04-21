import React from "react";
import "./Education.css";
import { Container, Row, Col } from "react-bootstrap";
import hitlogo from "../image/hitlogo-remove.png";
import springbellslogo from "../image/springbellslogo.png";
import applegrovelogo from "../image/Applegrovelogo.webp";

const educationDetail = [
  {
    logo: hitlogo,
    qualification: "Bachelors in Computer Application",
    year: "2018-2021",
    schName: "Hari Institute of Technology",
    place: "Saharanpur, Uttar Pradesh",
  },
  {
    logo: springbellslogo,
    qualification: "Senior secondary",
    year: "2018",
    schName: "ASM Inter College",
    place: "Saharanpur, Uttar Pradesh",
  },
  {
    logo: applegrovelogo,
    qualification: "Junior secondary",
    year: "2013",
    schName: "Apple Grove School",
    place: "Saharanpur, Uttar Pradesh",
  },
];

function Education() {
  return (
    <Container className="educontainer">
      <h1>Education</h1>
      {educationDetail.map((item: any) => {
        return (
          <Row className="educationdetail">
            <Col className="educationlogo">
              <img src={item.logo} alt="" width={"150px"} />
            </Col>
            <Col className="educationintro">
              <h2 style={{ margin: 0 }}>{item.qualification}</h2>
              <h3>{item.year}</h3>
              <p>{item.schName}</p>
              <p>{item.place}</p>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default Education;
