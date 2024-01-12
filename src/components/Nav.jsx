import React from "react";

const Nav = () => {
  return (
    <div className="bg-primary flex flex-row py-3 justify-between w-full px-14">
      <img src="Logo.png" alt="logo" className="h-[40px]" />
      <ul className="flex flex-row text-white justify-center items-center font-thin gap-5 cursor-pointer">
        <a href="/">
          {" "}
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About Us</li>
        </a>
        <li>Properties</li>
        <li>Services</li>
      </ul>
      <div className="text-white justify-center items-center flex px-3 py-1 bg-black rounded-md cursor-pointer">
        Contact Us
      </div>
    </div>
  );
};

export default Nav;
