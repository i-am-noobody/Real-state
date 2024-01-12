import React from "react";
import Box from "../Box";

const About1 = () => {
  return (
    <div className="px-14 flex flex-row mt-8">
      <div className="flex flex-col w-1/2 max-w-1/2 ">
        <img
          src="Abstract Design.png"
          alt="stars"
          className="h-[24px] w-[60px] mt-10"
        />
        <h2 className="text-white font-normal text-[30px] mt-6">Our Journey</h2>
        <p className="text-spanText text-[16px] mt-4">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary. Over the years, we've expanded
          our reach, forged valuable partnerships, and gained the trust of
          countless clients.
        </p>
        <div className="flex flex-row mt-8 gap-3">
          <Box number="200+" text="Happy Customers" />
          <Box number="10k+" text="Properties for Clients" />
          <Box number="16+" text="Years of Experience" />
        </div>
      </div>
      <div>
        <img src="about.png" alt="about" className="h-[400px]" />
      </div>
    </div>
  );
};

export default About1;
