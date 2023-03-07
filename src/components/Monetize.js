import React from "react";
import monetise from "./../assets/monetise.png";

const Monetize = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center space-y-6">
        <p className="text-4xl font-bold flex space-x-2">
          <p>The fastest way to monetize</p>
          <p className="text-purple-700">your product usage</p>
        </p>
        <div className="grid  place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 -gap-10">
          {" "}
          <div className="  w-[33rem] h-[20rem]">
            <img className="w-full h-full" src={monetise} alt="logo" />
          </div>{" "}
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-bold">Robust, scalable</p>
            <p className="text-purple-700 font-bold text-3xl">
              metering infrastructure
            </p>
            <p className="">
              {" "}
              Flexibly measure high throughput usage data to <br></br>bill on
              usage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetize;
