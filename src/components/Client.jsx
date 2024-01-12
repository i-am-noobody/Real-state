import React from "react";

const Client = ({ title, description, src, name, address }) => {
  return (
    <div className="border-solid border border-primary flex flex-col gap-5 px-4 py-5 w-[400px] max-w-[400px] rounded-md">
      <div className="flex flex-row gap-1">
        <div className="h-[30px] w-[30px] relative rounded-full bg-primary">
          <img
            src="star.png"
            alt="star"
            className="absolute top-1 left-[6px]"
          />
        </div>
        <div className="h-[30px] w-[30px] relative rounded-full bg-primary">
          <img
            src="star.png"
            alt="star"
            className="absolute top-1 left-[6px]"
          />
        </div>
        <div className="h-[30px] w-[30px] relative rounded-full bg-primary">
          <img
            src="star.png"
            alt="star"
            className="absolute top-1 left-[6px]"
          />
        </div>
        <div className="h-[30px] w-[30px] relative rounded-full bg-primary">
          <img
            src="star.png"
            alt="star"
            className="absolute top-1 left-[6px]"
          />
        </div>
        <div className="h-[30px] w-[30px] relative rounded-full bg-primary">
          <img
            src="star.png"
            alt="star"
            className="absolute top-1 left-[6px]"
          />
        </div>
      </div>
      <h2 className="text-white text-[18px]">{title}</h2>
      <p className="text-spanText text-[13px]">{description}</p>
      <div className="flex flex-row gap-2">
        <img
          src={src}
          alt="bhatiz"
          className="h-[50px] w-[50px] rounded-full"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-white text-[16px]">{name}</h3>
          <p className="text-spanText text-[14px]">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
