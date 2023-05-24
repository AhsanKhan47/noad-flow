"use client";
import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/Gi";
import { AiOutlineClose } from "react-icons/Ai";

import Link from "next/link";
import { useState } from "react";
import { navbarData } from "@/data/data";
import Wrapper from "./shared/wrapper";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-primary text-white">
      <Wrapper>
        <div className="w-[90%] mx-auto flex flex-row  items-center justify-between">
          <div className="h-fit z-30 w-[30px] py-2 md:w-[40px] lg:w-[90px] ">
            <Image
              src={navbarData.logo}
              alt="noads logo"
              height={100}
              width={100}
            />
          </div>
          {/* Hamburger */}
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden z-50 text-2xl"
          >
            {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>

          {/* mobile Links starts */}
          <div
            className={`absolute top-0 left-0 z-20 ${
              open ? "-translate-y-0" : "-translate-y-full"
            }  bg-primary h-screen w-full   transition-transform duration-300 ease-in-out filter`}
          >
            <ul className="flex flex-col items-center justify-around h-1/2 mt-12 ">
              {navbarData.links.map((link, key) => (
                <Link href={link.href} key={key}>
                  {link.label}
                </Link>
              ))}
              {navbarData.links2.map((link, key) => (
                <Link href={link.href} key={key}>
                  {link.label}
                </Link>
              ))}
            </ul>
            <ul> </ul>
          </div>
          {/* mobile Links ends */}

          <div className="flex flex-row items-center justify-between w-full text-base sm:hidden md:hidden lg:flex">
            {" "}
            <ul>
              {navbarData.links.map((link, key) => (
                <Link className=" ml-12" href={link.href} key={key}>
                  {link.label}
                </Link>
              ))}
            </ul>
            <ul>
              {navbarData.links2.map((link, key) => (
                <Link className=" ml-12" href={link.href} key={key}>
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
}
