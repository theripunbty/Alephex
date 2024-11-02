import "./globals.css";
import { AlephiumWalletProvider } from "@alephium/web3-react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AlephiumWalletProvider network="devnet">
          <Navbar />
          {children}
          <Footer />
        </AlephiumWalletProvider>
      </body>
    </html>
  );
}
