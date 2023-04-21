import React, { useState, useEffect } from "react";
import "./Clock.css";
import { Col, Container, Row } from "react-bootstrap";

function Clock() {
  const [sec, setSec] = useState<any>();
  const [mint, setMint] = useState<any>();
  const [hour, setHour] = useState<any>();

  setInterval(() => {
    setSec(new Date().getSeconds());
    setMint(new Date().getMinutes());
  }, 1000);

  useEffect(() => {
    setHour(new Date().getHours());
  }, [mint]);

  const arr = [
    { cname: "T12", name: 12 },
    { cname: "T1", name: 1 },
    { cname: "T2", name: 2 },
    { cname: "T3", name: 3 },
    { cname: "T4", name: 4 },
    { cname: "T5", name: 5 },
    { cname: "T6", name: 6 },
    { cname: "T7", name: 7 },
    { cname: "T8", name: 8 },
    { cname: "T9", name: 9 },
    { cname: "T10", name: 10 },
    { cname: "T11", name: 11 },
  ];

  const chnageStyle: any = {
    color: "white",
    scale: "1.3",
    border: "1px solid red",
    borderRadius: "50%",
    padding: "1px 5px",
    zIndex: "999",
  };

  return (
    <Container className="clockContainer">
      <Row className="clockrow">
        {arr.map((item: any) => {
          return (
            <Col
              className={item.cname}
              style={hour == item.name ? chnageStyle : { color: "red" }}
            >
              {item.name}
            </Col>
          );
        })}
        <Row className="clockmid"></Row>
        <Row
          className="clocksec"
          style={{ transform: `rotate(${eval(sec) * 6}deg)` }}
        ></Row>
        <Row
          className="clockmint"
          style={{ transform: `rotate(${eval(mint) * 6}deg)` }}
        ></Row>
      </Row>
    </Container>
  );
}

export default Clock;
