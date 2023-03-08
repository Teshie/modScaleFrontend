import React from "react";
import logo from "./../assets/logo.png";

const Header = () => {
  const handleButtonClick = () => {
    window.open(
      "https://calendly.com/modscale/intro-to-modscale?primary_color=762be2",
      "_blank"
    );
  };
  return (
    <div className=" flex justify-between items-center mx-20 w-full mb-10">
      <div>
        <img className="cover h-10" src={logo} alt="logo" />
      </div>
      <div className="block sm:hidden">
        <div
          onClick={handleButtonClick}
          className=" flex justify-center space-x-1 items-center text-center font bg-purple-700 text-white px-3 rounded"
        >
          <button className="cursor-pointer ">
            <a>Talk to us</a>
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
  );
};

export default Header;
