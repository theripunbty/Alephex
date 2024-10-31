import React from "react";

const CryptoInvesting = () => {
  return (
    <section className="py-10 bg-transparent sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12 items-center">
          <div className="2xl:pl-16">
            <h2 className="mt-10 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Take your first step
              <br /> into fast, safe and secure crypto investing
            </h2>
            <p className="mt-9 text-xl leading-relaxed text-gray-300">
              AlephEx brings fast, low-cost token swaps right to your wallet.
              Trade directly, keep full control, and experience true DeFi
              freedom.
            </p>
            <button className="mt-7 px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-800 transition duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoInvesting;
