import React, { useState } from "react";
import { useRef } from "react";
import "./Navbar.css";
import { Col, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export interface ChildProps {
  themeconvert: (name: boolean | undefined) => void;
  menu: (name: boolean | undefined) => void;
}

function Navbar(props: ChildProps) {
  const [menu, setMenu] = useState<boolean | undefined>(false);
  const [theme, setTheme] = useState(true);
  const [activeTab, setActiveTab] = useState("Home");

  const themechange = () => {
    setTheme(!theme);
    props.themeconvert(theme);
  };
  const menuchange = (val: any) => {
    setActiveTab(val);
    val = !menu;
    if (window.innerWidth < 667) {
      setMenu(val || !menu);
      props.menu(menu);
    }
    window.scrollTo(0, 0);
  };

  const dark = {
    transform: "rotate(180deg)",
    transition: "0.5s ease transform",
    display: "block",
  };

  const light = {
    transform: "rotate(360deg)",
    transition: "0.5s ease transform",
    display: "block",
  };

  const navMenu = [
    { name: "Home", to: "/" },
    { name: "Project", to: "/project" },
    { name: "About", to: "/about" },
    { name: "Contact us", to: "/contact" },
    { name: "test", to: "/test" },
  ];

  const active = {
    color: "var(--intro)",
    fontWeight: "600",
    scale: "1.1",
  };

  return (
    <Container>
      <Col
        className="navbar"
        style={
          menu
            ? { width: "90%", transition: "0.4s ease width" }
            : { width: "0", transition: "0.4s ease width", borderLeft: "none" }
        }
      >
        <ul>
          {navMenu.map((item: any) => {
            return (
              <li>
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => menuchange(item.name)}
                  style={item.name == activeTab ? active : undefined}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Col>
          <Icon
            icon="line-md:light-dark-loop"
            className="theme"
            style={theme ? light : dark}
            onClick={themechange}
          />
        </Col>
      </Col>
      <Col className="hamburger" onClick={() => menuchange(!menu)}>
        <div
          className="div1"
          style={
            menu
              ? {
                  transform: "rotate(40deg)",
                  transformOrigin: "bottom left",
                  transition: "0.4s ease transform",
                }
              : {
                  transform: "rotate(0deg)",
                  transformOrigin: "bottom left",
                  transition: "0.4s ease transform",
                }
          }
        ></div>
        <div
          className="div2"
          style={
            menu
              ? { opacity: 0, transition: "0.4s ease opacity" }
              : { opacity: 1, transition: "0.4s ease opacity" }
          }
        ></div>
        <div
          className="div3"
          style={
            menu
              ? {
                  transform: "rotate(-40deg)",
                  transformOrigin: "top left",
                  transition: "0.4s ease transform",
                }
              : {
                  transform: "rotate(0deg)",
                  transformOrigin: "top left",
                  transition: "0.4s ease transform",
                }
          }
        ></div>
      </Col>
    </Container>
  );
}

export default Navbar;
