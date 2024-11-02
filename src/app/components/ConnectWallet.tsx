"use client";
import React from 'react';
import { useWallet } from '@alephium/web3-react';
import { useConnect } from '@alephium/web3-react';
import { NodeProvider, web3 } from '@alephium/web3';

const ConnectWallet = () => {
  const wallet = useWallet();
  const { connect } = useConnect();

  const handleConnectWallet = async () => {
    try {
      const nodeProvider = new NodeProvider("http://localhost:22973");
      web3.setCurrentNodeProvider(nodeProvider);
      await connect();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <button
      onClick={handleConnectWallet}
      className="inline-flex items-center justify-center px-6 py-2 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
    >
      {wallet.account ? 
        `Connected: ${wallet.account.address.slice(0, 6)}...${wallet.account.address.slice(-4)}` : 
        'Connect Wallet'
      }
    </button>
  );
};

export default ConnectWallet;