import React from "react";

const Box = (props) => {
  return (
    <div className="flex flex-col w-[170px] min-w-[170px] py-2 bg-primary px-2 rounded-md">
      <h2 className="text-white text-[22px]">{props.number}</h2>
      <p className="text-spanText text-[16px]">{props.text}</p>
    </div>
  );
};

export default Box;
