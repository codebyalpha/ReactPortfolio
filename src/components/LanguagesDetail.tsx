import React, { useEffect, useState } from "react";
import "./LanguagesDetail.css";
import { Col, Container, Row } from "react-bootstrap";
// import listtype from "../image/fast-forward-svgrepo-com.svg";

interface ChildProps {
  profile: any;
  work: any;
}

function LanguagesDetail(props: ChildProps) {
  const { profile, work } = props;
  const [detail, setDetail] = useState({
    name: "",
    icon: "",
    def: "",
    pefection: "",
    topics: [],
  });
  useEffect(() => {
    work.map((item: any) => {
      if (profile == item.name) {
        setDetail(item);
      }
    });
  });

  const width = {
    width: `calc(${detail.pefection} + 5px)`,
    transition: "0.4s ease-in width",
    backgroundImage:
      "linear-gradient(to right, var(--intro), var(--secondary))",
  };

  const progressN = {
    left: detail.pefection,
    transition: "0.4s ease-in left",
  };

  return (
    <Container className="ldcontainer">
      <h1>{detail.name.toLocaleUpperCase()}</h1>
      <Row className="ldrow">
        <Row className="progresshead">
          <span className="progressbody" style={width}></span>
          <span className="progressnumber" style={progressN}>
            {parseInt(detail.pefection)}
          </span>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Col>
            {detail.topics.map((item: any) => {
              return <li className="topics">{item}</li>;
            })}
          </Col>
          <Col className="detailicon">{detail.icon}</Col>
        </Row>
      </Row>
    </Container>
  );
}

export default LanguagesDetail;
