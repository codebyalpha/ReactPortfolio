import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Col } from "react-bootstrap";

function Layout() {
  useEffect(() => {
    setTheme();
  });

  const [mode, setMode] = useState<boolean | undefined>();
  const [menu, setMenu] = useState<boolean | undefined>(true);
  const gettheme = (name: boolean | undefined) => {
    setMode(name);
    setTheme();
  };
  const getmenu = (name: boolean | undefined) => {
    setMenu(name);
  };

  const setTheme = () => {
    var store: any = document.querySelector(":root");
    if (mode == true) {
      store.style.setProperty("--primary", "#ffffff");
      store.style.setProperty("--secondary", "#000000");
    } else {
      store.style.setProperty("--primary", "#000000");
      store.style.setProperty("--secondary", "#ffffff");
    }
  };

  return (
    <>
      <Header changetheme={gettheme} menuchange={getmenu} />
      <Col
        style={
          menu
            ? {
                filter: "none",
                transition: "0.3s ease filter",
                overflow: "hidden",
              }
            : {
                filter: "blur(4px)",
                transition: "0.3s ease filter",
                overflow: "hidden",
              }
        }
      >
        <Outlet />
        <Footer />
      </Col>
    </>
  );
}

export default Layout;
