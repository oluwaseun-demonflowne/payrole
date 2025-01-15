import Image from "next/image";
import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="flex items-center gap-10 px-40 pb-10">
      <div className="flex text-[15px] gap-1 items-center">
        <Image
          className="w-7"
          src="/logo.png"
          unoptimized
          alt="Payrole Logo"
          width={100}
          height={100}
        />
        <h1 className="">Payrole</h1>
      </div>
      <h1 className="flex items-center">
        <BiCopyright />
        2025 All Rights Reserved
      </h1>
    </footer>
  );
};

export default Footer;
