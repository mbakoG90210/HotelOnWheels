"use client";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Footer = () => {
  return (
    <footer className="bg-soft_green-secondary relative pt-12 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <div className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12">
            {/* logo & text */}
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href="/">
                <Image
                  src="/footer/logo.svg"
                  width={80}
                  height={36}
                  alt=""
                  className="mb-2"
                />
              </Link>
              <p className="text-lg leading-9">
                Unit 6G, First Floor, Plot 54637, Mogobe Plaza, New CBD,
                Gaborone, Botswana
              </p>
            </div>
            {/* navigation & contact */}
            <div className="flex xl:gap-x-16 xl:ml-32">
              {/* navigation */}
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Book Destination</Link>
                  </li>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* contact */}
              <div className="flex-1">
                <h4 className="h4 mb-6">Contact Us</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>+267 396 0547</li>
                  <li>+267 76641063</li>
                  <li>info@hotelonwheelsbw.com</li>
                  <li>hotelonwheelsbw.com</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        {/* copyright text */}
        <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">
            Copyright &copy; 2024. All rights reserved. Developed by{" "}
            <Link href="https://mbakogoitsemang.pages.dev/">
              Mbako Goitsemang
            </Link>
          </p>
          <Socials containerStyles="flex gap-x-4 text-black mx-auto xl:mx-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
