import React from "react";
import Client from "./Client";

const Testimonial = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col px-14 py-4">
        <img
          src="Abstract Design.png"
          alt="stars"
          className="h-[24px] w-[60px] mt-8"
        />
        <h2 className="text-white text-[22px] mt-6">What Our Clients Say?</h2>
        <div className="flex flex-row justify-between items-center">
          <p className="text-spanText text-[16px]">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
          <button className="bg-primary text-white py-2 px-4 rounded-md">
            {" "}
            View All Testimonials
          </button>
        </div>

        <div className="flex flex-row justify-between mt-3">
          <Client
            title="Exceptional Service"
            description="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
            src="sagar.JPG"
            name="Sagar Manandhar"
            address="Samakhusi,Ktm"
          />

          <Client
            title="Efficient and Reliable"
            description="Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results."
            src="sujan.JPG"
            name="Sujan Gurung"
            address="Tarkeshwor,Ktm"
          />

          <Client
            title="Trusted Advisors"
            description="The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!"
            src="mikten.JPG"
            name="Mikten Dong Lama"
            address="Kharibot,Ktm"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
