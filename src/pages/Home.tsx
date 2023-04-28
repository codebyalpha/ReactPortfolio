import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../image/UI Developer.gif";
import lightbg from "../image/blob.svg";
import darkbg from "../image/blob1.svg";
import avtar from "../image/avatar.svg";
import "./Home.css";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import Weather from "../projects/Weather/Weather";

function Home(props: any) {
  // const navigate = useNavigate();

  return (
    <Container className="Homecontainer">
      <Row className="homerow">
        <Col className="homeintro">
          <p>
            <Icon icon="la:grin-solid" />
            I'm <span> SHARAD</span>
          </p>
          <p className="profile">Front End Developer</p>
          <Col>
            <a
              href="https://drive.google.com/u/0/uc?id=1o7pWu_ulZX2GqY6BBgJUSWO0z9vB4W3p&export=download"
              className="buttonDownload"
            >
              Download CV
            </a>
          </Col>
        </Col>
        <Col className="homeimage">
          <img src={img} alt="" width={"100%"} />
        </Col>
      </Row>
      <h2 className="introhead">
        Let me <span style={{ color: "var(--intro)" }}>Introduce</span> Myself
      </h2>
      <Row className="section2">
        <Col className="introimg" style={{ flexBasis: "40%" }}>
          {props.mode ? (
            <img src={darkbg} alt="" />
          ) : (
            <img src={lightbg} alt="" />
          )}
          <div className="avtar">
            <img src={avtar}></img>
          </div>
        </Col>
        <Col className="introbody" style={{ flexBasis: "60%" }}>
          <div>
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ <br /> <br /> I am good in classics like
              <i> HTML,CSS, Javascript and React JS. </i> <br /> <br />
            </p>
            <p>
              My field of Interest's are building new
              <i> Web Technologies and Products </i> and also in areas related
              to
              <i> Deep Learning and Natural Launguage Processing.</i>
            </p>
            <br />
            <br />
            <p>
              Whenever possible, I also apply my passion for developing products
              with <i>Node.js</i> and{" "}
              <i>Modern Javascript Library and Frameworks.</i>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="socailconnection">
        <h1>find me on</h1>
        <h3>
          Feel free to <span> connect </span> with me
        </h3>
        <Col className="socialicons">
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

export default Home;
