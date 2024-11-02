"use client";

import React, { useEffect, useState } from "react";
import { useWallet } from '@alephium/web3-react';
import { TokenPair } from './types';

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [amountIn, setAmountIn] = useState('');
  const [tokenIn, setTokenIn] = useState('ETH'); // Default token
  const wallet = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSwap = async () => {
    if (!wallet.account) {
      console.error("Wallet not connected");
      return;
    }

    const tokenPair = new TokenPair(); // Initialize your token pair contract
    const sender = wallet.account.address;
    try {
      const amountInValue = BigInt(amountIn).toString(); // Convert to appropriate unit
      const amountOutMin = BigInt('0').toString(); // Set minimum output amount
      const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now

      await tokenPair.swapExactTokenForToken(
        tokenPair,
        sender,
        tokenIn,
        amountInValue,
        amountOutMin,
        sender,
        deadline
      );

      console.log("Swap successful");
    } catch (error) {
      console.error("Swap failed:", error);
    }
  };

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
              Fast, secure, and decentralized token swaps powered by Alephium blockchain
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <input
                type="number"
                placeholder="Amount"
                value={amountIn}
                onChange={(e) => setAmountIn(e.target.value)}
                className="w-full px-4 py-3 border-none rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={tokenIn}
                onChange={(e) => setTokenIn(e.target.value)}
                className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="USDT">USDT</option>
              </select>

              <button
                onClick={handleSwap}
                className="w-full px-4 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
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
