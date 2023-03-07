import React from "react";
import worldMap from "./../assets/worldMap.png";
import RevenueManagement from "./RevenueManagement";
import CustomerComment from "./CustomerComment";

const CustomerReview = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center mx-28">
        {/* <div className="h-64 md:h-96 lg:h-128 bg-fixed bg-center bg-cover filter brightness-50">
          <img
            className="h-full  filter brightness-50"
            src={worldMap}
            alt="worldMap"
          />
        </div> */}
        <div className="inline-block p-4 text-white h-full">
          <div className="flex justify-center items-center  w-full h-full text-center">
            <div
              className="
h-full w-full bg-white   rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 
"
            >
              <div className="grid  place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                <CustomerComment />
                <CustomerComment />
                <CustomerComment />
              </div>
              <div class="flex justify-between items-center px-36">
                <div class="flex items-center">
                  <span class="text-gray-500  hover:text-gray-800 cursor-pointer ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                  </span>
                </div>
                <div class="flex items-center">
                  <span class="text-white bg-purple-700 px-1 m-2  cursor-pointer mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
