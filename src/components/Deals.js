import React from "react";
import deals from "./../assets/deals.png";

const Deals = () => {
  return (
    <div className="xs:px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-64 flex justify-center items-center mt-10 w-full px-12 pr-12">
      <div className="flex flex-col justify-center items-center space-y-6 w-full">
        <div className="grid  place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 -gap-10 w-full">
          {" "}
          <div className="flex flex-col space-y-4">
            <div className="text-4xl  font-bold flex space-x-2">
              <p> Create custom</p> <p className="text-purple-700">deals</p>
            </div>
            <p className="text-purple-700 font-bold text-4xl">quickly</p>
            <p className="">
              {" "}
              Trials, spend commitments, promotions, custom<br></br> credits are
              all just clicks away
            </p>
          </div>
          <div className="object-cover  w-[32rem] h-[20rem]">
            <img className="w-full h-full" src={deals} alt="logo" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Deals;
