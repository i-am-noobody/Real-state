import React from "react";

const SingleProperty = ({ name, src, description, bath, bed, price }) => {
  return (
    <div className="border-solid border border-primary  rounded-md p-4 flex flex-col  gap-3 w-[400px] max-w-[400px]">
      <img src={src} alt="house" />
      <h2 className="text-white text-[22px]">{name}</h2>
      <p className="text-spanText text-[16px]">{description}</p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 px-2 py-1 border-solid border border-primary rounded-lg">
          <img src="bed.png" alt="bed" />
          <p className="text-white">{bed}-Bedroom</p>
        </div>

        <div className="flex flex-row gap-2 px-2 py-1 border-solid border border-primary rounded-lg">
          <img src="bathroom.png" alt="bed" />
          <p className="text-white">{bath}-Bathroom</p>
        </div>

        <div className="flex flex-row gap-2 px-2 py-1 border-solid border border-primary rounded-lg">
          <img src="villa.png" alt="bed" />
          <p className="text-white">Villa</p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="flex  flex-col">
          <p className="text-spanText text-[16px]">Price</p>
          <h3 className="text-white text-[22px]">{price}</h3>
        </div>
        <button className="bg-buttonColor text-white px-4 py-2 rounded-md">
          View Property Details
        </button>
      </div>
    </div>
  );
};

export default SingleProperty;
