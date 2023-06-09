import React from "react";
import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Weather from "./projects/Weather/Weather";
import Clock from "./projects/Clock/Clock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />}>
            <Route path="/project/clock" element={<Clock />} />
            <Route path="/project/weather" element={<Weather />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
