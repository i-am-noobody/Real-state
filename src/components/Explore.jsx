import React from "react";

const Explore = () => {
  return (
    <div className="px-14 py-6 flex flex-col bg-black border-solid border border-primary">
      <img
        src="Abstract Design.png"
        alt="stars"
        className="h-[24px] w-[60px] mt-8"
      />
      <h2 className="text-white font-medium text-[22px] mt-4">
        Start Your Real State Journey Today
      </h2>
      <div className="flex flex-row justify-between my-3 items-center">
        <p className="text-spanText text-[16px] max-w-[800px]">
          Your dream property is just a click away. Whether you're looking for a
          new home, a strategic investment, or expert real estate advice,
          Estatein is here to assist you every step of the way. Take the first
          step towards your real estate goals and explore our available
          properties or get in touch with our team for personalized assistance.
        </p>
        <button className="bg-buttonColor py-2 px-4 text-white rounded-md">
          Explore Properties
        </button>
      </div>
    </div>
  );
};

export default Explore;
