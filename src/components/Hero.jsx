import React from "react";
import Button from "./Button";
import Box from "./Box";

const Hero = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col bg-black px-14 py-4 w-1/2 gap-3">
        <div className="mt-[70px]">
          <h1 className="text-[50px] text-white">
            Discover Your Dream <br /> Property with Estatein
          </h1>
          <p className="text-[14px] text-spanText mt-4">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className="flex flex-row gap-6 mt-6">
          <Button name="Learn More" />
          <Button name="Browse Property" background={"buttonColor"} />
        </div>
        <div className="flex flex-row mt-7 gap-3">
          <Box number="200+" text="Happy Customers" />
          <Box number="10k+" text="Properties for Clients" />
          <Box number="16+" text="Years of Experience" />
        </div>
      </div>
      <div className="w-full">
        <img src="hero (2).png" alt="heroo" className="w-full h-[502px]" />
      </div>
      <div className="absolute  left-[42%] top-[20%]">
        <img src="rounds.png" alt="roundss" className="h-[150px]" />
      </div>
    </div>
  );
};

export default Hero;
