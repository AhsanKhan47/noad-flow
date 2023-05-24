import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { CardIcons } from "./cardIcons";
import { cardsData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
interface cardType {
  img: string;
  location: string;
  name: string;
  description: string;
  noOfBed: number;
  noOfTable: number;
  noOfShower: number;
}
import "../../app/globals.css";
export default function Card({ search }: any) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {cardsData.topPicksData
          .filter((card: cardType) =>
            card.name
              .toLowerCase()
              .replace(/\s{2,}/g, " ")
              .includes(search)
          )
          .map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-secondary rounded-lg ">
                <Link href="#">
                  <div className="w-full">
                    <Image
                      src={card.img}
                      alt="House Picture"
                      height={400}
                      width={400}
                      className=" rounded-t-md "
                    />
                  </div>
                </Link>
                {/*Card Description starts */}
                <div className="p-4">
                  <h2 className=" text-xs font-medium text-primary-light">
                    {card.location}
                  </h2>
                  <p className="font-semibold text-lg">{card.name}</p>
                  <p className="font-normal text-primary-light text-sm leading-5">
                    {card.description}
                  </p>
                  {/* Icons */}
                  <CardIcons
                    bed={card.noOfBed}
                    table={card.noOfTable}
                    shower={card.noOfShower}
                  />
                  {/*Card Description ends */}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
