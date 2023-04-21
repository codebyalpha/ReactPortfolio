import React, { useEffect, useState } from "react";
import "./About.css";
import aboutimg from "../image/about.gif";
import { Container, Row, Col } from "react-bootstrap";
import Languages from "../components/Languages";
import { Icon } from "@iconify/react";
import LanguagesDetail from "../components/LanguagesDetail";
import Education from "../components/Education";

function About() {
  const [profileName, setProfileNme] = useState("HTML");
  const [profileDetail, setProfileDetail] = useState<any>(
    [] || { id: "", name: "", pefection: "", topics: [], def: "", icon: "" }
  );

  const workingLanguage = [
    {
      id: 1,
      name: "HTML",
      pefection: "95%",
      topics: ["Basic HTML tags"],
      def: "HTML stands for Hyper Text Markup Language, which is the most widely used language on Web to develop web pages.",
      icon: <Icon icon="vscode-icons:file-type-html" />,
    },
    {
      id: 2,
      name: "CSS",
      pefection: "90%",
      topics: ["CSS3 Basics", "Box Modal", "Flex Layout", "Grid Layout"],
      def: "CSS stands for Cascading Style Sheets. t is a markup language that defines the appearance of web pages. Using this, you can control all the fonts, text, colors, backgrounds, margins, and layouts of a website and make the website look professional.",
      icon: <Icon icon="vscode-icons:file-type-css" />,
    },
    {
      id: 3,
      name: "JavaScript",
      pefection: "85%",
      topics: [
        "JavaScript Basics",
        "Operators",
        "Destructuring",
        "Array Methods",
        "API Integrations",
        "ES6",
        "ES7",
      ],
      def: "JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact.",
      icon: <Icon icon="logos:javascript" />,
    },
    {
      id: 4,
      name: "React Js",
      pefection: "70%",
      topics: [
        "JSX",
        "NPM",
        "React Hooks",
        "Functional Components",
        "React Context",
        "High Order Components",
      ],
      def: "ReactJS is a robust JavaScript library used in dynamic web application development. It makes JavaScript coding more simple and improves your application's performance",
      icon: <Icon icon="logos:react" />,
    },
  ];

  const getName = (val: any) => {
    setProfileNme(val);
    workingLanguage.map((item: any) => {
      if (profileName == item.name) {
        setProfileDetail(item);
      }
    });
  };

  return (
    <Container className="aboutcontainer">
      <Row className="aboutrow">
        <Row className="abouthead">
          <p>About me</p>
          <h1>Here's my Story</h1>
        </Row>
        <Row className="aboutbody">
          <Col className="aboutintro">
            I’m Sharad, a developer, <span>creative code, </span> and
            self-proclaimed designer who{" "}
            <span>specializes in front-end development.</span> My mission is to
            translate user-focussed designs into pixel-perfect websites that run
            blazing fast.
            <br />
            <br />
            I’m currently working as a junior
            <span>
              {" "}
              React JS developer at Nobillio technologies Pvt. Ltd.
            </span>{" "}
            where I help develop a website for online Recharges, billl payments
            etc. that combines powerful functionality.
            <br />
            <br />
            Prior to Nobillio, I joined{" "}
            <span>Ducat training Institute, Ghaziabad</span> where i learnt
            HTML, CSS and Javascript.
          </Col>
          <Col>
            <img src={aboutimg} alt="" width={"100%"} />
          </Col>
        </Row>
      </Row>
      <Row className="lan">
        {workingLanguage.map((item: any) => {
          return (
            <Languages image={item.icon} name={item.name} getName={getName} />
          );
        })}
      </Row>
      <Row>
        <LanguagesDetail profile={profileName} work={workingLanguage} />
      </Row>
      <Row>
        <Education />
      </Row>
    </Container>
  );
}

export default About;
