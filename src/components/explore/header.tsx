"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/Ai";
import { BiSearchAlt2 } from "react-icons/Bi";
import { exploreCards2 } from "@/data/data";
import { useState } from "react";
import Image from "next/image";

import { Filter, Search } from "../shared/icons";
import { CardIcons } from "./cardIcons";
export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <div className="mx-auto w-[90%] ">
      <div>
        <h1 className="text-[24px] md:text-[32px] font-semibold text-primary mt-12">
          Explore homes
        </h1>
        <div>
          <div className="relative top-7 left-2 md:top-8  text-primary w-0  ">
            <Search />
          </div>

          <div className=" w-full flex gap-1 flex-row align-baseline justify-between items-ends ">
            <div>
              {" "}
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="rounded-md  border-primary-light focus:outline-none border-solid border-[1px] px-8 text-base h-[36px] w-[100%] md:rounded-xl md:h-[46px] md:w-[416px]"
                type="search"
                placeholder="Search"
                name=""
                id=""
              />
            </div>
            {/* Filter Btn */}
            <button className="flex items-center gap-1  text-primary-dark  bg-secondary rounded-xl text-sm md:gap-2 md:text-base px-2 md:px-6">
              <Filter />
              <p>Filter</p>
            </button>
          </div>
        </div>
      </div>
      <h1 className="font-normal text-2xl my-8">
        Top Picks For You - <span className="text-primary-dark">Amsterdam</span>
      </h1>
      <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2  lg:grid-cols-3">
        {exploreCards2
          .filter((card) =>
            card.name
              .toLowerCase()
              .replace(/\s{2,}/g, " ")
              .trim()
              .includes(search)
          )
          .map((card, index) => (
            <div key={index} className="bg-secondary rounded-lg ">
              <div className="w-full">
                <Image
                  src={card.img}
                  alt="House Picture"
                  height={400}
                  width={400}
                  className=" rounded-t-md "
                />
              </div>
              {/* Description starts */}
              <div className="p-4">
                <h2 className=" text-xs font-medium text-primary-light">
                  {card.location}
                </h2>
                <p className="font-semibold text-lg">{card.name}</p>
                <p className="font-normal text-primary-light text-sm leading-5">
                  {card.description}
                </p>
                {/* Icons */}
                <CardIcons bed={card.noOfBed} />
                {/* Description ends */}
              </div>
            </div>
          ))}
      </div>

      {/* {exploreCards
        .filter((card) => card.name.toLowerCase().includes(search))
        .map((card, index) => (
          <div key={index} className="border-red-800">
            {card.name}
            {card.id}
          </div>
        ))} */}
    </div>
  );
}
