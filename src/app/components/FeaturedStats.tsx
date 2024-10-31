import React from "react";

const features = [
  {
    title: "Lightning Fast",
    description:
      "Experience near-instantaneous token swaps with Alephium's high-performance blockchain.",
    iconPath: "/icon1.svg",
  },
  {
    title: "Secure & Trustless",
    description:
      "Enjoy the benefits of decentralized finance with secure, smart contract-based swaps.",
    iconPath: "/icon2.svg",
  },
  {
    title: "Low Fees",
    description:
      "Benefit from Alephium's efficient architecture for minimal transaction fees.",
    iconPath: "/icon3.svg",
  },
];

const FeaturedStats = () => {
  return (
    <section className="py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, iconPath }, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full`}
              >
                <img src={iconPath} alt={title} className="w-17 h-17" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm text-gray-400">{description}</p>
              <p className="font-medium flex text-white mt-5 hover:text-gray-400 cursor-pointer">
                {" "}
                {/* Added cursor-pointer here */}
                Get started
                <svg
                  className="w-6 h-6 ml-4 -mr-2"
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
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStats;
