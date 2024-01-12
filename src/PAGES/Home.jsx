import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Second from "../components/Second";
import Third from "../components/Third";
import Testimonial from "../components/Testimonial";
import Faqs from "../components/Faqs";
import Explore from "../components/Explore";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className=" w-full">
        <Hero />
      </div>
      <Second />
      <Third />
      <Testimonial />
      <Faqs />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
