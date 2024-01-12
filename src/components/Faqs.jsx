import React from "react";
import SingleFaq from "./SingleFaq";

const Faqs = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col px-14 py-6">
        <img
          src="Abstract Design.png"
          alt="stars"
          className="h-[24px] w-[60px] mt-8"
        />
        <h2 className="text-white text-[24px] font-medium mt-4">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-row justify-between">
          <span className="text-spanText text-[16px] max-w-[70%]">
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </span>
          <button className="px-4 py-2 bg-secondary text-white rounded-md">
            {" "}
            View All FAQ'S
          </button>
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
