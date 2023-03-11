import React from "react";

const BannerFooter = () => {
  return (
    <div className="width mx-auto rounded-lg  subscriptionBanner mt-24">
      <div className="h-64 px-10 subscriptionBanner rounded-lg  grid place-items-center gap-10 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="font-bold text-xl md:text-4xl lg:text-4xl 2xl:text-4xl">
          <p>
            Join the revolution <br></br> and take your product monetization to
            the next level
          </p>
        </div>
        <form className="w-full md:w-2/3 lg:w-4/5">
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
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              id="search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your email..."
              required
            />
            <button
              type="submit"
              class="text-white flex justify-center space-x-2 absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <p>Get</p>{" "}
              <p className="hidden xs:hidden sm:inline md:inline lg:inline xl:inline 2xl:inline">
                early access
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerFooter;
