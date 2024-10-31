import React from "react";

const LearnMore = () => {
  return (
    <section className="py-10 bg-transparent sm:py-16 lg:py-24 mt-20 mb-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl">
            Powered by Alephium
          </h2>
          <p className="mt-6 text-base font-regular text-gray-300">
            Alephium is a high-performance blockchain platform that combines
            scalability, security, and decentralization.
            <br /> Its unique BlockFlow algorithm allows for efficient sharding
            and parallel transaction processing.
            <br />
            Learn More About Alephium
          </p>

          <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-700 lg:inline-flex hover:from-blue-600 hover:to-blue-800 rounded-full sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              Learn More{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
