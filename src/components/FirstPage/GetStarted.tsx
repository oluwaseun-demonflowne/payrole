import React from "react";

const GetStarted = () => {
  return (
    <section className="px-4 md:px-40 flex flex-col md:items-center space-y-2 pb-20">
      <h1 className="text-5xl md:text-center font-bold">
        Get Started<span className="text-[#3981f7]">Today</span>
      </h1>
      <p className="text-sm mt-2">
        Streamline your global business and grow your team effortlessly.
      </p>
      <button className="bg-black mt-4 border text-white rounded-full w-44 px-5 py-2 ">
        Create Account
      </button>
    </section>
  );
};

export default GetStarted;
