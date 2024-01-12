import React from "react";

const Button = ({ name, background }) => {
  return (
    <button
      className={`px-4 py-[6px] bg-${background} text-white  rounded-md ${
        background ? "border-0" : "border-solid border border-slate-300"
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
