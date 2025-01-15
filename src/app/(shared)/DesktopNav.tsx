import Image from "next/image";
import Link from "next/link";
import React from "react";

export const links = [
  "How it works",
  "Features",
  "Pricing",
  "Resources",
];

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex  items-center justify-between px-20 py-5">
      <div className="flex gap-5">
        <Image
          className="w-7"
          src="/logo.png"
          unoptimized
          alt="Payrole Logo"
          width={100}
          height={100}
        />
        <h1 className="font-medium text-lg">Payrole</h1>
      </div>
      <ul className="flex gap-10 font-medium">
        <li>How it works</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className="flex gap-7 items-center font-medium">
        <Link href="/login">Login</Link>
        <Link
          className="bg-[#f4f4f5] h-12 px-4 rounded-full flex items-center justify-center"
          href="/login"
        >
          Learn more
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNav;
