import React from "react";

const CustomerSupport = () => {
  return (
    <section className="py-10 bg-transparent sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div></div> {/* Placeholder for potential future content */}
          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              24/7 access to full service customer support
            </h2>
            <p className="text-xl leading-relaxed text-gray-300 mt-9">
              We invest more resources than any other platform in making sure
              great support for real people is a click away, whenever you need
              it.
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

export default CustomerSupport;
