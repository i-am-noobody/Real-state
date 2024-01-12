import React from "react";

const SingleFaq = () => {
  return (
    <div className="border-solid border border-primary w-[370px] max-w-[370px] rounded-md px-5 py-3 flex flex-col gap-4">
      <h3 className="text-white text-[20px] ">
        How do I search for properties on Estatein?
      </h3>
      <p className="text-spanText text-[14px]">
        Learn how to use our user-friendly search tools to find properties that
        match your criteria.
      </p>
      <button className="border-solid border border-primary text-white w-[120px]  py-1 rounded-md">
        Read More
      </button>
    </div>
  );
};

export default SingleFaq;
