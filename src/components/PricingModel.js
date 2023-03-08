import React from "react";
import pricingModel from "./../assets/pricingModel.png";

const PricingModel = () => {
  return (
    <div className="flex justify-center items-center mt-10 w-full xs:px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-64">
      <div className="flex flex-col justify-center items-center space-y-6 w-full">
        <div className="grid  place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  w-full">
          {" "}
          <div className="flex justify-center items-center object-cover  w-[32rem] h-[20rem]">
            <img className="w-2/3" src={pricingModel} alt="logo" />
          </div>{" "}
          <div className="flex flex-col space-y-4">
            <div className="text-4xl font-bold flex space-x-2">
              <p> Launch new pricing</p>{" "}
              <p className="text-purple-700">models</p>
            </div>
            <p className="text-purple-700 text-4xl font-bold ">with breeze</p>
            <p className="">
              {" "}
              Auto-migrate customers, seamlessly switch<br></br> versions or
              launch new product editions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModel;
