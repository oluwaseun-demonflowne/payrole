import React from "react";
import { TbWorld } from "react-icons/tb";

const GlobalPayroll = () => {
  return (
    <section className="px-4 md:px-40 py-10 md:py-20">
      <div className="space-y-4 text-5xl font-bold">
        <h1>Global Payroll</h1>
        <h1>Platform made for</h1>
        <h1 className="text-[#3981f7]">Employee</h1>
      </div>
      <p className="mt-7">
        Easily automate payroll, taxes, and compliance with a seamless
        experience.
      </p>
      <div className="flex md:flex-row flex-col md:items-center mt-8 gap-4 ">
        <button className="bg-black w-40 border text-white rounded-full px-5 py-2 ">
          Learn more
        </button>
        <div className="flex gap-1">
          <p className="">
            Hire and pay compliantly in{" "}
            <span className="font-bold">100+ countries</span>
          </p>
          <TbWorld className="text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default GlobalPayroll;
