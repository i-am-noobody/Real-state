import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/PAGES/Home";
import About from "./src/PAGES/About";

const Routesss = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routesss;
