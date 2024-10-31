"use client";

import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`relative w-full h-screen flex flex-col justify-center bg-cover bg-center bg-transparent mb-20 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-20 -mt-20">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 text-center lg:text-left">
          <div>
            <h1 className="text-4xl font-bold text-white lg:mt-8 sm:text-6xl">
              Swap Tokens with
              <br /> Ease on Alephium
            </h1>
            <p className="mt-4 text-base lg:mt-8 sm:text-xl text-gray-200">
              Fast, secure, and decentralized token swaps powered by Alephium
              blockchain
            </p>

            <a
              href="#"
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition bg-gradient-to-r from-blue-500 to-blue-700 lg:inline-flex hover:from-blue-600 hover:to-blue-800 rounded-full lg:mt-16"
              role="button"
            >
              Start Swapping
              <svg
                className="w-6 h-6 ml-8 -mr-2"
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

          {/* Token Swapping Container */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900/80 backdrop-blur-lg shadow-lg rounded-xl p-6 mx-auto w-full max-w-sm">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Token Swap
            </h2>
            <div className="flex flex-col gap-4">
              <label className="text-gray-400">From</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full px-4 py-3 border-none rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="ETH">ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>

              <label className="text-gray-400">To</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full px-4 py-3 border-none rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="ALPH">ALPH</option>
                  <option value="BTC">BTC</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>

              <button className="w-full px-4 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Swap Tokens
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
