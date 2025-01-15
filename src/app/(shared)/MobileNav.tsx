"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import { links } from "./DesktopNav";

const MobileNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const timeline1 = gsap.timeline({});
  const timeline2 = gsap.timeline({});

  useGSAP(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
      gsap.to("#drawer", {
        duration: 0.5,
        x: 0,
        ease: "power1.in",
        opacity: 1,
      });

      timeline1.to("#firsticon", {
        duration: 0.1,
        y: 4,
        ease: "power1.in",
      });
      timeline1.to("#firsticon", {
        duration: 0.1,
        rotate: -45,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        y: -4,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        rotate: 45,
        ease: "power1.in",
      });
    } else {
      document.body.style.overflow = "auto";
      gsap.to("#drawer", {
        ease: "power1.in",
        x: -900,
        duration: 0.1,
      });
      timeline1.to("#firsticon", {
        duration: 0.1,
        rotate: 0,
        ease: "power1.in",
      });
      timeline1.to("#firsticon", {
        duration: 0.1,
        y: 0,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        rotate: 0,
        ease: "power1.in",
      });
      timeline2.to("#secondicon", {
        duration: 0.1,
        y: 0,
        ease: "power1.in",
      });
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openDrawer]);
  return (
    <div className="bg-white z-[99]   top-0 w-[100%] lg:hidden flex px-4 items-center justify-between h-20 ">
      <Link href="/">
        <Image
          className="w-6"
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div
        // id="divnote"
        onClick={() => {
          setOpenDrawer((prev) => !prev);
        }}
        className="flex  cursor-pointer gap-1 flex-col  "
      >
        <p id="firsticon" className="bg-black w-7  h-1"></p>
        <p id="secondicon" className="bg-black w-7  h-1"></p>
      </div>
      <div
        id="drawer"
        className={`pt-10 flex ${
          openDrawer ? "" : "opacity-0"
        } text-slate-400  left-0 pl-4 z-[99] flex-col top-[79px] h-screen w-fdivl backdrop-blur-lg  absolute text-xl w-[100%] font-black gap-5`}
      >
        {links.map((i) => (
          <div
            onClick={() => {
              setOpenDrawer(false);
            }}
            className=""
            key={i}
          >
            <Link
              className={`hover:text-white text-[#3c3b3a]  `}
              href={`#${i}`}
              key={i}
            >
              {i}
            </Link>
          </div>
        ))}
        <div className=" text-[#3c3b3a] space-y-5  font-black  items-center">
          <button
            onClick={() => {
              // setShowLoginModal(true);
              setOpenDrawer(false);
            }}
            className=""
          >
            Log in
          </button>
          <button
            onClick={() => {
              // setShowRegisterModal(true);
              setOpenDrawer(false);
            }}
            className="border h-12 border-[#3c3b3a] w-48 flex items-center justify-center rounded-full "
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
