import Image from "next/image";
import React from "react";

const Onboarded = () => {
  return (
    <section className="px-40 space-y-2 py-20">
      <h1 className="text-5xl font-bold">
        From offer letter to Onboarded in
        {" "}
        <span className="text-[#3981f7]">Minutes</span>
      </h1>
      <p className="text-sm">
        Create a custom contract that’s compliant with local laws, send it to
        sign, and they&apos;ll get onboarded almost instantly.
      </p>
      <div className=" flex items-start">
        <Image
          src={"/onboard.png"}
          alt="brand"
          unoptimized
          className="w-[600px] mt-10"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default Onboarded;
