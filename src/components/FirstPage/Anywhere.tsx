import Image from "next/image";
import React from "react";

const Anywhere = () => {
  return (
    <section className="px-40 space-y-2 pb-20">
      <h1 className="text-5xl font-bold">
        Hire from <span className="text-[#3981f7]">Anywhere</span>
      </h1>
      <p className="text-sm">
        Leverage our local entities and expertise to avoid the usual time, cost,
        and risk of going it alone.
      </p>
      <div className=" flex items-start">
        <Image
          src={`/anywhere.png`}
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

export default Anywhere;
