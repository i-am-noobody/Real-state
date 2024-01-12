import React from "react";
import SingleProperty from "./SingleProperty";

const Third = () => {
  return (
    <div className="bg-black flex flex-col">
      <div className="px-14 py-6">
        <div className="flex flex-col gap-4">
          <img
            src="Abstract Design.png"
            alt="stars"
            className="h-[24px] w-[60px]"
          />
          <h2 className="text-white text-[24px] font-medium">
            Featured Properties
          </h2>
          <div className="flex flex-row justify-between">
            <span className="text-spanText text-[16px] max-w-[70%]">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </span>
            <button className="px-4 py-2 bg-secondary text-white rounded-md">
              {" "}
              View All Properties
            </button>
          </div>
          <div className="flex flex-row justify-evenly">
            <SingleProperty
              name="Seaside Serenity Villa"
              src="Image.png"
              description="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
              bed="4"
              bath="3"
              price="$550,000"
            />

            <SingleProperty
              name="Metropolitian Heaven"
              src="metro.png"
              description="A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More"
              bed="2"
              bath="2"
              price="$250,000"
            />

            <SingleProperty
              name="Rustic Retreat Restaurant"
              src="Image (1).png"
              description="A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More"
              bed="3"
              bath="3"
              price="$600,000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
