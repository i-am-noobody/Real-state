import React from "react";

const Second = () => {
  return (
    <div className="flex flex-row w-full bg-black p-6 justify-between">
      <div className="w-[300px] min-w-[300px] flex flex-col bg-primary justify-center items-center rounded-lg gap-2 py-4 relative">
        <img src="Icon Container.png" alt="cont" />
        <p className="text-white text-[16px]">Find Your Dream Home</p>
        <div className="absolute top-3 right-5">
          <img src="Icon.png" alt="arrow" />
        </div>
      </div>

      <div className="w-[300px] min-w-[300px] flex flex-col bg-primary justify-center items-center rounded-lg gap-2 py-4 relative">
        <img src="Icon Container (1).png" alt="cont" />
        <p className="text-white text-[16px]">Unlock Property Value</p>
        <div className="absolute top-3 right-5">
          <img src="Icon.png" alt="arrow" />
        </div>
      </div>

      <div className="w-[300px] min-w-[300px] flex flex-col bg-primary justify-center items-center rounded-lg gap-2 py-4 relative">
        <img src="Icon Container (2).png" alt="cont" />
        <p className="text-white text-[16px]">Effortless Property Management</p>
        <div className="absolute top-3 right-5">
          <img src="Icon.png" alt="arrow" />
        </div>
      </div>

      <div className="w-[300px] min-w-[300px] flex flex-col bg-primary justify-center items-center rounded-lg gap-2 py-4 relative">
        <img src="Icon Container (3).png" alt="cont" />
        <p className="text-white text-[16px]">
          Smart Investment, Informed Decisions
        </p>
        <div className="absolute top-3 right-5">
          <img src="Icon.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Second;
