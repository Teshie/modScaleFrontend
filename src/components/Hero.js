import React, { useState } from "react";
import illustration from "./../assets/illustration.png";
import logo from "./../assets/logo.png";
import axios from "axios";
import Swal from "sweetalert2";

const Hero = () => {
  const [email, setEmail] = useState("");
  const handleButtonClick = () => {
    window.open(
      "https://calendly.com/modscale/intro-to-modscale?primary_color=762be2",
      "_blank"
    );
  };

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
    <div className="mt-6 absolute z-50   w-full p-2 flex justify-center space-x-6">
      <div className="relative    w-full  flex justify-around items-center">
        <div className="flex flex-col ">
          <div className="flex  flex-col space-y-4 items-start">
            <img
              className="absolute top-2 hidden xs:hidden sm:hidden md:hidden lg:inline xl:inline 2xl:inline cover h-10"
              src={logo}
              alt="logo"
            />

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
                <p className="xs:text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl lastText">
                  Infrastructure constraints in monetizing your go-to-market
                  <br></br>
                  strategy? Struggling to find out the right pricing model?
                  <br></br> We've got you!
                </p>
              </div>
              <div className="h-[61px]">
                <form onSubmit={handleSubmit}>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-gray-500"
                      >
                        <path
                          d="M1.72764 4.30705C1.95534 4.43695 2.6417 4.82275 3.78677 5.46426C4.93187 6.10576 5.80909 6.5997 6.41848 6.94611C6.48543 6.98408 6.62767 7.06662 6.84527 7.19384C7.06291 7.32116 7.24374 7.42403 7.38764 7.50251C7.53163 7.58095 7.70571 7.66895 7.91005 7.76637C8.11432 7.8637 8.30687 7.93692 8.48767 7.98538C8.6685 8.03425 8.8359 8.05845 8.98989 8.05845H8.99999H9.01012C9.16411 8.05845 9.33158 8.03422 9.51241 7.98538C9.69314 7.93692 9.88587 7.86362 10.09 7.76637C10.2942 7.66884 10.4682 7.58093 10.6122 7.50251C10.7562 7.42403 10.9369 7.32116 11.1546 7.19384C11.3722 7.06651 11.5146 6.98408 11.5816 6.94611C12.1975 6.5997 13.7646 5.71993 16.2824 4.30688C16.7712 4.0309 17.1796 3.69789 17.5077 3.30808C17.836 2.91844 18 2.50968 18 2.08205C18 1.72469 17.8408 1.41879 17.5227 1.16436C17.2046 0.909884 16.8279 0.782715 16.3928 0.782715H1.60707C1.09148 0.782715 0.694702 0.923451 0.4168 1.20492C0.138933 1.48645 0 1.83835 0 2.26058C0 2.60164 0.184212 2.97123 0.552461 3.36912C0.920675 3.76704 1.31253 4.07971 1.72764 4.30705Z"
                          fill="#A9B4CD"
                        />
                        <path
                          d="M16.9954 5.1768C14.7992 6.37855 13.1316 7.31249 11.9933 7.97845C11.6116 8.20575 11.302 8.38318 11.0642 8.51031C10.8264 8.63754 10.5102 8.76747 10.115 8.90004C9.71998 9.03282 9.35184 9.099 9.01026 9.099H9.00002H8.98992C8.64841 9.099 8.28006 9.03282 7.88503 8.90004C7.49001 8.76747 7.17355 8.63754 6.93582 8.51031C6.69817 8.38318 6.38843 8.20575 6.00678 7.97845C5.10271 7.44254 3.43868 6.50853 1.01461 5.1768C0.632816 4.97121 0.294648 4.73556 0 4.47034V10.9179C0 11.2755 0.157298 11.5812 0.47207 11.8356C0.786772 12.0902 1.16519 12.2174 1.60718 12.2174H16.3929C16.8348 12.2174 17.2132 12.0902 17.5279 11.8356C17.8428 11.5811 18 11.2755 18 10.9179V4.47034C17.712 4.73007 17.3773 4.96573 16.9954 5.1768Z"
                          fill="#A9B4CD"
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
        <div className="hidden lg:inline">
          <div className="flex flex-col items-end">
            <div className=" flex justify-center space-x-1 items-center text-center font bg-purple-700 text-white px-3 rounded">
              <button onClick={handleButtonClick} className="cursor-pointer">
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
            <div className="  mt-10 xs:hidden sm:hidden md:hidden lg:inline xl:inline 2xl:inline ">
              <img
                className="w-[35rem]  object-cover"
                src={illustration}
                alt="illustration image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
