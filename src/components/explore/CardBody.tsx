"use client";
import React, { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules

import "../../app/globals.css";

import { Filter, Search } from "../shared/icons";
import Card from "./Card";
export default function CardBody() {
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
      {/* Cards */}
      <Card search={search} />
      <h1 className="font-normal text-2xl my-8">
        Members looking to travel to your location -{" "}
        <span className="text-primary-dark">Ljubjana</span>
      </h1>
      <Card search={search} />
      <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2  lg:grid-cols-3"></div>
      <div></div>
    </div>
  );
}
