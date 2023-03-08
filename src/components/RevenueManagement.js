import React from "react";
import { revenueManagement } from "../data/data";
import customerRetention from "./../assets/customerRetention.png";
import icon from "./../assets/Icon.png";

const RevenueManagement = () => {
  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className="flex flex-col justify-center items-center space-y-6">
        <p className="xs:text-xs sm:text-sm md:text-md lg:text-4xl xl:text-4xl  font-bold flex space-x-2">
          <p>Automate software revenue</p>
          <p className="text-purple-700">management without any code</p>
        </p>
        <div className="grid  place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-16">
          {revenueManagement.map((items) => {
            return (
              <div className="h-76 cursor-pointer hover:shadow-lg hover:bg-white hover:rounded-lg  w-56   flex flex-col justify-center items-center">
                <div>
                  <img
                    className="objectCover w-32 h-32"
                    src={items.img}
                    alt="customer retention"
                  />
                </div>
                <div>
                  <p className="font-bold  text-center w-44 mt-4">
                    {items.title}
                  </p>
                </div>
                <div>
                  <p className="text-center text-basic p-4">
                    {items.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RevenueManagement;
