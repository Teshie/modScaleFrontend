import "./App.css";
import logo from "./assets/logo.png";
import headerBackground from "./assets/headerbg.png";
import avatar from "./assets/avatar.svg";
import illust from "./assets/illust.png";
import illustration from "./assets/illustration.png";
import Monetize from "./components/Monetize";
import Deals from "./components/Deals";
import PricingModel from "./components/PricingModel";
import RevenueManagement from "./components/RevenueManagement";
import CustomerReview from "./components/CustomerReview";
import Subscription from "./components/Subscription";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/emails/users/", { email })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thank you for subscribing!",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.email,
        });

        // console.log(err);
      });
  };
  return (
    <div className="w-full bg ">
      <div className="h-[43rem] relative z-50">
        <img className="h-full" src={headerBackground} alt="logo" />
      </div>
      <div className="absolute z-50  top-4 w-full p-2 flex justify-center space-x-6">
        <div className="flex justify-between mx-16 w-full px-10">
          <div>
            <img className="cover h-7" src={logo} alt="logo" />
          </div>
          <div className="">
            <div className=" flex justify-around items-center">
              <div className=" flex justify-center space-x-1 items-center text-center font bg-purple-700 text-white px-3  rounded">
                <button className="cursor-pointer">
                  <a href="https://calendly.com/teshie">Talk to us</a>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute  top-6 w-full p-2 grid  place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="flex justify-around items-center">
            <div className="flex  flex-col space-y-4 items-start">
              {/* <div>
              <img className="cover h-7" src={logo} alt="logo" />
            </div> */}
              <p className="lounchText">
                Launch and optimize any <br></br>SaaS pricing with <br></br>
                confidence.
              </p>
              <div className="middleText">
                <p className=" flex ">
                  ModScale{" "}
                  <p className="text-purple-700 mr-1 ml-1">
                    maximizes your revenue
                  </p>{" "}
                  while
                </p>
                <p>
                  {" "}
                  saving time and resources to stay focused on<br></br> what's
                  most important
                </p>
              </div>
              <div className="flex-flex-col space-y-4 mt-4">
                <div>
                  <p className="lastText text-xl">
                    Infrastructure constraints in monetizing your go-to-market
                    <br></br>
                    strategy? Struggling to find out the right pricing model?
                    <br></br> We've got you!
                  </p>
                </div>
                <div className="">
                  <form onSubmit={handleSubmit}>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="search"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your company email"
                        required
                      />
                      <button
                        type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Get early access
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="  mt-10">
            <img
              className="w-[35] h-[497px] object-cover"
              src={illustration}
              alt="illustration image"
            />
          </div>
        </div>
      </div>
      <div className=" relative z-30">
        <Monetize />
        <Deals />
        <PricingModel />
        <RevenueManagement />
        <div className="flex justify-center items-center mb-10 text-4xl font-bold">
          <p>Why customers love us?</p>
        </div>
        <CustomerReview />
        <Subscription />
      </div>
      <div>
        <img
          class="absolute top-16 right-0 bottom-0 z-10"
          src={avatar}
          alt="Background image"
        />
      </div>
    </div>
  );
}

export default App;
