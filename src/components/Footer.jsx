import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-black px-14 py-6 flex flex-row justify-between">
        <div className="flex flex-col gap-3 w-[280px]">
          <div className="mt-2">
            <img src="Logo.png" alt="logos" className="h-[35px]" />
          </div>
          <div className="border-solid border border-primary py-2 px-4 flex flex-row items-center justify-between rounded-md">
            <div className="flex flex-row gap-2">
              <img src="msg.png" alt="message" className="w-[20px]" />
              <p className="text-spanText text-[14px]">Enter Your Email</p>
            </div>
            <button className=" py-0 px-2 text-spanText rounded-lg bg-buttonColor">
              Send
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <a className="text-spanText text-[17px]">Home</a>
          <a className="text-white text-[17px]">Hero Section</a>
          <a className="text-white text-[17px]">Features</a>
          <a className="text-white text-[17px]">Properties</a>
          <a className="text-white text-[17px]">Testimonials</a>
          <a className="text-white text-[17px]">FAQ's</a>
        </div>

        <div className="flex flex-col gap-3">
          <a className="text-spanText text-[17px]">About Us</a>
          <a className="text-white text-[17px]">Our Story</a>
          <a className="text-white text-[17px]">Our Works</a>
          <a className="text-white text-[17px]">How It Works</a>
          <a className="text-white text-[17px]">Our Team</a>
          <a className="text-white text-[17px]">Our Clients</a>
        </div>

        <div className="flex flex-col gap-3">
          <a className="text-spanText text-[17px]">Properties</a>
          <a className="text-white text-[17px]">Portfolio</a>
          <a className="text-white text-[17px]">Categories</a>
        </div>

        <div className="flex flex-col gap-3">
          <a className="text-spanText text-[17px]">Services</a>
          <a className="text-white text-[17px]">Valuation Mastery</a>
          <a className="text-white text-[17px]">Strategic Marketing</a>
          <a className="text-white text-[17px]">Negotiation Wizardy</a>
          <a className="text-white text-[17px]">Closing Success</a>
          <a className="text-white text-[17px]">Property Management</a>
        </div>

        <div className="flex flex-col gap-3">
          <a className="text-spanText text-[17px]">Contact Us</a>
          <a className="text-white text-[17px]">Contact Form</a>
          <a className="text-white text-[17px]">Our Offices</a>
        </div>
      </div>
      <div className="w-full px-14 py-6 bg-darkGray flex flex-row justify-between">
        <div className="flex flex-row gap-7 items-center">
          <p className="text-white font-normal text-[17px]">
            @2023 Estatein. All Rights Reserved
          </p>
          <p className="text-white font-normal text-[17px]">
            Terms and Conditions
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <div className="relative h-[40px] w-[40px] rounded-full bg-black">
            <img src="fb.png" alt="fb" className="absolute top-2 left-3" />
          </div>
          <div className="relative h-[40px] w-[40px] rounded-full bg-black">
            <img
              src="linkedin.png"
              alt="fb"
              className="absolute top-[10px] left-[10px]"
            />
          </div>
          <div className="relative h-[40px] w-[40px] rounded-full bg-black">
            <img src="twitter.png" alt="fb" className="absolute top-3 left-3" />
          </div>
          <div className="relative h-[40px] w-[40px] rounded-full bg-black">
            <img src="youtube.png" alt="fb" className="absolute top-3 left-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
