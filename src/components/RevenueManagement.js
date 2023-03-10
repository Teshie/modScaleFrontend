import React from "react";
import { revenueManagement } from "../data/data";
import customerRetention from "./../assets/customerRetention.png";
import icon from "./../assets/Icon.png";

const RevenueManagement = () => {
  return (
    <div className="xs:px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-64 flex justify-center items-center mt-10  w-full px-12 pr-12">
      <div className="flex flex-col items-center justify-center  space-y-6">
        <p className=" justify-center mb-4 items-center md:text-4xl lg:text-4xl 2xl:text-4xl text-xl xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row flex-col  font-bold flex space-x-2">
          <p>Automate software revenue</p>
          <p className="text-purple-700">management without any code</p>
        </p>
        <div className="grid  place-items-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
          {revenueManagement.map((items) => {
            return (
              <div className="h-76 cursor-pointer hover:shadow-lg hover:bg-white hover:rounded-lg  w-56   flex flex-col justify-center items-center">
                <div>
                  <img
                    className="object-cover w-32 h-32"
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
