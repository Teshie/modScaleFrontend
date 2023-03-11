import React from "react";
import monetise from "./../assets/monetise.png";
import pricingModel from "./../assets/pricingModel.png";

const Monetize = () => {
  return (
    <div className="flex justify-center items-center overflow-x-auto">
      <div className="  xs:px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-64 ">
        <div className="px-12 pr-12 flex justify-center items-start">
          <div className=" md:text-4xl lg:text-4xl 2xl:text-4xl flex justify-center items-center flex-col text-xl xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row font-bold  space-x-2 ">
            <p className="">The fastest way to monetize</p>
            <p className="text-purple-700">your product usage</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 w-full ">
          <div className="flex flex-col justify-center items-center space-y-6 w-full">
            <div className="grid  place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  ">
              {" "}
              <div className="object-cover   xs:h-[10rem] sm:h-[10rem] md:h-[19rem] lg:h-[19rem] xl:h-[19rem] 2xl:h-[19rem]">
                <img className="w-full h-full" src={monetise} alt="logo" />
              </div>{" "}
              <div className="flex flex-col justify-center items-start xs:items-center sm:items-center md:items-start lg:items-start xl:items-start 2xl:items-start space-y-4">
                <p className="text-xl md:text-4xl lg:text-4xl 2xl:text-4xl font-bold">
                  Robust, scalable
                </p>{" "}
                <p className="text-purple-700 font-bold text-xl md:text-4xl lg:text-4xl 2xl:text-4xl">
                  metering infrastructure
                </p>{" "}
                <p className="">
                  Flexibly measure high throughput usage data to <br></br>bill
                  on usage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetize;
