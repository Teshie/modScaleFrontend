import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Subscription = () => {
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
    <div className=" mt-36 mx-20 rounded">
      <div className="h-64 px-10 subscriptionBanner rounded-lg w-full grid place-items-center gap-10 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="font-bold text-xl md:text-4xl lg:text-4xl 2xl:text-4xl">
          <p>
            Join the revolution <br></br> and take your product monetization to
            the next level
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 lg:w-4/5">
          <div className="relative">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your email..."
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
      <div className="grid  place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
        <div className="flex space-x-10">
          <p className="text-gray-600">
            © Copyright Company 2023. All rights reserved.{" "}
          </p>
        </div>
        <div className="flex justify-center items-center space-x-10">
          <div>
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.78874 23C5.55374 23 2.53817 22.0591 0 20.4356C2.15499 20.5751 5.95807 20.2411 8.32358 17.9848C4.76508 17.8215 3.16026 15.0923 2.95094 13.926C3.25329 14.0426 4.6953 14.1826 5.50934 13.856C1.4159 12.8296 0.787928 9.23732 0.927477 8.14097C1.695 8.67749 2.99745 8.8641 3.50913 8.81744C-0.305207 6.08823 1.06703 1.98276 1.74151 1.09635C4.47882 4.88867 8.5812 7.01857 13.6564 7.13704C13.5607 6.71736 13.5102 6.28042 13.5102 5.83164C13.5102 2.61092 16.1134 0 19.3247 0C21.0025 0 22.5144 0.712754 23.5757 1.85284C24.6969 1.59011 26.3843 0.975068 27.2092 0.443205C26.7934 1.93611 25.4989 3.18149 24.7159 3.64308C24.7095 3.62731 24.7224 3.65878 24.7159 3.64308C25.4037 3.53904 27.2648 3.18137 28 2.68256C27.6364 3.52125 26.264 4.91573 25.1377 5.69642C25.3473 14.9381 18.2765 23 8.78874 23Z"
                fill="#848FAC"
              />
            </svg>{" "}
          </div>
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="28" height="28" rx="6" fill="#848FAC" />
              <path
                d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="14" fill="#848FAC" />
              <path
                d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="14" fill="#848FAC" />
              <path
                d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex space-x-6 text-black font-semibold">
          <div>Privacy Policy </div>
          <div>Terms & Conditions </div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
