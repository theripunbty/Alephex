import "./globals.css";
import { AlephiumConnectProvider } from "@alephium/web3-react"; // Import the providers
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AlephiumConnectProvider network={"mainnet"}>
      <html lang="en">
        <body className="antialiased">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AlephiumConnectProvider>
  );
}
