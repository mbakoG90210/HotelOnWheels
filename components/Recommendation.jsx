"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Autoplay } from "swiper/modules";

// swiper styles
import "swiper/css";

// components
import { Button } from "./ui/button";
import Image from "next/image";

// {/* These are the features, ammenities and extras of the bus. Wording to be changed later*/}

const recommendationData = [
  {
    name: "Power Sources",
    image: "/recommendation/plug.jpg",
    location: null,
    desc: "The bus has 4 sources of power - a full working solar system Installed - a backup silent generator - direct connection from electricity supplier plug to bus - solar battery boosting from main engine  bus alternator",
    price: null,
    testimonial: {
      message:
        "There were so many sockets, none of my guests and I ever had to worry about a flat battery all trip",
      personName: "Robert Rene",
    },
  },
  {
    name: "Ammenities",
    image: "/recommendation/shower.jpg",
    location: "Top Deck, Bottom Deck, Extensible Verandah",
    desc: "Fully fitted kitchen with Double Fridge, cooking area, Bar Serving area, lounge area, Full auotmated shower with hot water",
    price: null,
    testimonial: {
      message: "Everything you need in a ready to go 5 star package",
      personName: "Emily Jhonson",
    },
  },
  {
    name: "Limosine and 4x4 Rentals",
    image: "/recommendation/limo.jpg",
    location: "Optional Extras",
    desc: "Executive  9 seater limousine with a carrying capacity of 9 passengers that can accompany the Hotel Bus on select trips as well as more rugged executive 4x4 vehicles.",
    price: 120,
    testimonial: {
      message:
        "The limousine has wifi, fridge, tv screen , sofas and air conditioner. Whether you are in the bus or in the limo, you truly do travel in style",
      personName: "Michael Anderson",
    },
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Recommendation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative"
    >
      {/* slider */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                  {/* text */}
                  <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                    <h2 className="h2 mb-4">{hotel.name}</h2>
                    <p className="text-soft_green text-sm mb-6">
                      {hotel.location}
                    </p>
                    <p className="mb-[60px]">{hotel.desc}</p>
                    {/*  <div className="flex items-center gap-x-[50px]">
                      <Button variant="accent" className="px-[44px]">
                        Book Now
                      </Button>
                      <div className="text-black">
                        <span className="font-bold text-2xl">
                          {hotel.price}
                        </span>
                        <span className="text-sm">/Night</span>
                      </div> 
                    </div> */}
                  </div>
                  {/* image & testimonial */}
                  <div className="order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]">
                    <div>
                      <Image
                        src={hotel.image}
                        width={905}
                        height={528}
                        quality={100}
                        alt=""
                        className="xl:rounded-tl-[20px] xl:rounded-bl-[20px]"
                      />
                      <div className="bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10">
                        <p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
                          {hotel.testimonial.message}
                        </p>
                        <p className="text-xl font-bold">
                          {hotel.testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      {/* pattern */}
      <Image
        src={"/recommendation/pattern.svg"}
        width={240}
        height={240}
        alt=""
        className="hidden xl:flex absolute left-[135px] -bottom-[120px]"
      />
    </motion.section>
  );
};

export default Recommendation;
