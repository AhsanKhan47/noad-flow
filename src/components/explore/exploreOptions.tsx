import React from "react";
import Wrapper from "../shared/wrapper";
import Cardd from "./Card";

export default function ExploreOptions() {
  return (
    <Wrapper>
      <div className=" w-[90%] mx-auto my-12">
        <Cardd />
        <h1 className="font-normal text-2xl mb-3"> Explore options</h1>

        <div className=" sm:flex sm:flex-col md:flex-row gap-3  justify-start w-[80%]   flex-grow: 1; bg-secondary   mr-auto p-6 rounded-2xl">
          {/* child-1 */}
          <div className="w-full md:w-[50%]">
            <p className="text-primary-dark text-sm font-medium">
              Where do you want to go
            </p>
            <input
              className="bg-transparent border-[1.5px] w-full rounded-xl border-primary-light text-base px-3 py-2 focus:outline-none my-2"
              type="search"
              name=""
              placeholder="Search Destinations"
            />
          </div>
          {/* child-2 */}
          <div className="w-full md:w-[30%]">
            <p className="text-primary-dark text-sm font-medium">
              Select dates
            </p>
            <input
              className="bg-transparent w-full border-[1.5px] rounded-xl text-primary-dark border-primary-light text-xs md:text-base px-3 py-2 focus:outline-none my-2"
              type="date"
              name=""
              placeholder="Search Destinations"
            />
          </div>
          {/* child-3 */}
          <div className="w-full md:w-[30%] mt-auto   ">
            <button className="w-full hover:opacity-[.8] transition-all font-medium bg-btn-base text-white border-[1.5px] rounded-xl border-primary-light text-base px-3 py-2 focus:outline-none my-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
