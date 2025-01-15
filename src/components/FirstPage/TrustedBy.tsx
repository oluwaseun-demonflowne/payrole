import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <section className="px-4 md:px-40 space-y-5 py-20">
      <h1 className="text-5xl font-bold">
        Trusted by <span className="text-[#3981f7]">Established</span> Companies
      </h1>
      <div className="flex flex-wrap gap-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <Image
            key={i}
            src={`/brands/brand${i + 1}.png`}
            alt="brand"
            unoptimized
            className="h-10"
            width={100}
            height={100}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
