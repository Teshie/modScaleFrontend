import React from "react";

const CustomerComment = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div class="bg-white w-64 rounded-lg shadow-lg p-6">
          <div class="flex justify-start">
            <svg
              width="48"
              height="36"
              viewBox="0 0 48 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 36C14.216 33.588 22 22.832 22 12.55C22 4.61 16.428 0 10.398 0C5.168 0 0 3.594 0 9.958C0 15.162 3.81 19.472 8.792 20.256C8.358 24.264 4.462 30.078 0.032 31.748L2 36ZM28 36C40.216 33.588 48 22.832 48 12.55C48 4.61 42.428 0 36.398 0C31.168 0 26 3.594 26 9.958C26 15.162 29.81 19.472 34.792 20.256C34.358 24.264 30.462 30.078 26.032 31.748L28 36Z"
                fill="#F49E44"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 36C14.216 33.588 22 22.832 22 12.55C22 4.61 16.428 0 10.398 0C5.168 0 0 3.594 0 9.958C0 15.162 3.81 19.472 8.792 20.256C8.358 24.264 4.462 30.078 0.032 31.748L2 36ZM28 36C40.216 33.588 48 22.832 48 12.55C48 4.61 42.428 0 36.398 0C31.168 0 26 3.594 26 9.958C26 15.162 29.81 19.472 34.792 20.256C34.358 24.264 30.462 30.078 26.032 31.748L28 36Z"
                fill="url(#paint0_linear_1_108)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_108"
                  x1="24"
                  y1="0"
                  x2="24"
                  y2="36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B86BF8" />
                  <stop offset="1" stop-color="#7474F0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="mt-4 text-gray-800">
            <p class="text-base text-center">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator.
            </p>
          </div>
          <div class="flex items-center mt-4">
            <img
              class="h-8 w-8 rounded-full mr-2"
              src="https://i.pravatar.cc/50"
              alt="User Avatar"
            />
            <p class="text-gray-800 font-semibold">John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerComment;
