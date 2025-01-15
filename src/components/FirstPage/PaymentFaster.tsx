import Image from "next/image";
import React from "react";

const PaymentFaster = () => {
  return (
    <section className="px-4 md:px-40 space-y-2 pb-20">
      <h1 className="text-5xl font-bold">
        Send Payment <span className="text-[#3981f7]">Faster</span>
      </h1>
      <p className="text-sm">
        We’ll keep you and your hires compliant with ever-changing taxes and
        regulations.
      </p>
      <div className=" flex items-start">
        <Image
          src={`/payroll1.png`}
          alt="brand"
          unoptimized
          className="w-[500px] mt-10"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default PaymentFaster;
