import React from "react";

const IndustryStats = () => {
  return (
    <section className="py-10 bg-transparent sm:py-16 lg:py-24 mt-20 mb-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl">
            Swap, Buy and sell with the <br /> lowest fees in the industry
          </h2>
          <p className="mt-6 text-base font-regular text-gray-300">
            Swap, Buy and sell 150+ cryptocurrencies with 20+ tokens on the
            platform <br />
            itself to make better trades
          </p>

          <div className="flex flex-col items-center justify-center px-16 mt-1 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-4 mb-96 sm:px-0">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-8 py-2 text-base font-base text-white transition-all duration-200 hover:text-gray-300"
              role="button"
            >
              {" "}
              Learn More{" "}
              <svg
                className="w-6 h-6 ml-2 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryStats;
