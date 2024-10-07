"use client";
// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const testimonialData = [
  {
    img: "/testimonials/img-1.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat iusto doloribus illum, perspiciatis asperiores corrupti incidunt. Ratione, veniam similique. Deserunt vero assumenda doloremque asperiores culpa consequuntur delectus impedit, ipsam eaque nam, magnam cum quo. Obcaecati, quia dolorem nemo libero ad perspiciatis adipisci magnam itaque iure incidunt reprehenderit non.",
    personName: "Wode Maya",
    location: "Gaborone",
  },
  {
    img: "/testimonials/img-2.jpg",
    message:
      " Yesterday, after landing from Paris, the Botswana Olympic Team had the honour of being transported in a Hotel on Wheels literally, a hotel on wheels. The bus, which took the team from Sir Seretse Khama Airport to the stadium, offers a unique service, the first of its kind in Botswana—a moving hotel.Speaking to this publication, the driver, Raymond Shumba, said that as a team, they pledged to transport  the Olympic team as their first client. Shumba further revealed that it took a year to transform the bus into its current state. The bus, which operates on solar energy and is equipped with beds, a stove, a fridge, showers, and more, is set to be officially launched in two weeks. We had to pledge to give them the first experience, and I must say it was a great experience driving such icons, concluded Shumba.",
    personName: "Botswana Olympics team 2024",
    location: "Gaborone",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="bg-soft_green xl:h-[880px]"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    src={slide.img}
                    width={470}
                    height={470}
                    quality={100}
                    alt=""
                    className="hidden xl:flex"
                  />
                  <div className="flex-1 bg-white/20 text-white p-12">
                    <p className="text-lg leading-9 mb-8">{slide.message}</p>
                    <p className="text-xl font-bold">{slide.personName}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
