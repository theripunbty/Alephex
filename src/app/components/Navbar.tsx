"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NodeProvider, web3 } from "@alephium/web3";
import { useWallet } from "@alephium/web3-react";

const ConnectWallet: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const wallet = useWallet();

  const connectWallet = async () => {
    try {
      const nodeProvider = new NodeProvider("http://localhost:22973");
      web3.setCurrentNodeProvider(nodeProvider);

      if (wallet.account) {
        setAccount(wallet.account.address);
        setIsConnected(true);
        console.log("Wallet connected:", wallet.account.address);
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full"
      role="button"
    >
      {isConnected ? `Connected: ${account?.slice(0, 6)}...` : "Connect Wallet"}
    </button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="pb-4 bg-transparent lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-16">
          <div className="flex-shrink-0">
            <a href="#" title="Home" className="flex">
              <Image
                className="w-auto h-8 lg:h-5"
                src="/logo.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>

         
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-10">
            {["Swap", "Pool", "Markets", "About Us", "Support"].map((link) => (
              <a
                key={link}
                href="#"
                title={link}
                className="text-base font-medium text-white transition-all duration-200 hover:text-gray-400"
              >
                {link}
              </a>
            ))}
          </div>

          
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
            <ConnectWallet />
          </div>
        </nav>

        {isMenuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                {["Swap", "Pool", "Markets", "About Us", "Support"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      title={link}
                      className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="px-6 mt-6">
              <ConnectWallet />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
