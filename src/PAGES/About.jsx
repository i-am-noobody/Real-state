import React from "react";
import Nav from "../components/Nav";
import About1 from "../components/AboutComponents/About1";
import Footer from "../components/Footer";
import About2 from "../components/AboutComponents/About2";

const About = () => {
  return (
    <div className="bg-black">
      <Nav />
      <About1 />
      <About2 />
    </div>
  );
};

export default About;
