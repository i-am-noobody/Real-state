import React from "react";

const About2 = () => {
  return (
    <div className="px-14 py-6 flex flex-row justify-between items-center">
      <div className="flex flex-col gap-2 w-[400px] max-w-[400px]">
        <img
          src="Abstract Design.png"
          alt="stars"
          className="h-[24px] w-[60px]"
        />
        <h2 className="text-white text-[30px] font-normal">Our Values</h2>
        <p className="text-spanText text-[17px] ">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>
      <div className="border-solid border-4 border-primary rounded-lg py-4 px-8 flex flex-col gap-5">
        <div className="flex flex-row w-[750px] max-w-[750px]  items-center gap-3">
          <div className="flex flex-col gap-3  ">
            <div className="flex flex-row gap-2 items-center">
              <img src="icon1.png" alt="icon1" />
              <h2 className="text-white text-[20px]">Trust</h2>
            </div>
            <p className="text-spanText text-[16px]">
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <div class="h-[120px]  bg-primary w-[3px]"></div>
          <div className="flex flex-col gap-3  ">
            <div className="flex flex-row gap-2 items-center">
              <img src="icon1.png" alt="icon1" />
              <h2 className="text-white text-[20px]">Trust</h2>
            </div>
            <p className="text-spanText text-[16px]">
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
        </div>
        <div className="w-[90%] h-[3px] bg-primary"></div>
        <div className="flex flex-row w-[750px] max-w-[750px] items-center gap-3">
          <div className="flex flex-col gap-3 w-1/2 max-w-1/2 ">
            <div className="flex flex-row gap-2 items-center">
              <img src="icon1.png" alt="icon1" />
              <h2 className="text-white text-[20px]">Trust</h2>
            </div>
            <p className="text-spanText text-[16px]">
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <div class="h-[120px]  bg-primary w-[3px]"></div>
          <div className="flex flex-col gap-3 w-1/2 max-w-1/2 ">
            <div className="flex flex-row gap-2 items-center">
              <img src="icon1.png" alt="icon1" />
              <h2 className="text-white text-[20px]">Trust</h2>
            </div>
            <p className="text-spanText text-[16px]">
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
