"use client";
import Image from "next/image";
import { inView, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : null,
  });

  return (
    <section id="about" className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 relative"
          >
            <Image src={"/about/img2.jpg"} width={559} height={721} alt="" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="xl:max-w-[470px]"
          >
            <h2 className="h2 my-[30px]">About Us</h2>
            <p>
              We are a company that specializes in providing hire services for
              our Hotel On Wheels camper bus, limousine and executive cars. What
              is Hotel on Wheels bus This is a fully equipped self catering done
              decker camper bus tailor made to meet the needs of various
              clients. The bus can carry up to 18 passengers with dining room
              designed for 8.
              <h4>*** What's in the bus Lower deck ***</h4>
               Dining room with 32
              Inch TV, sofas, aircon mini whiskey bar Sleeping room with 4
              movable bunk beds each with 32inch TV, air con. Kitchen with
              sink,fridge,microwave,8 bottle wine cooler, ice maker, 4 plate
              stove Shower- automated Toilet Storage
              <h4>*** Top deck ***</h4>
              Top bigger sleeping rooms with 32 Inch TV, aircon. Up to five
              sharing can sleep in each Whiskey bar Verandar with seating space
              for 10. Verandar can be extended up to 3 metres high when bus
              stationery.
              <h3>Available Packages</h3>
              <ul>
                <li>1. Hotel On Wheels Bus Only </li>
                <li>2. limousine hire only </li>
                <li>3. Combo of HOW Bus and limousine </li>
                <li>** executive 4x4 cars available on request</li>
              </ul>
            </p>
            {/* stats */}
            <div className="my-5 xl:my-10 min-h-[35px]">
              {inView && <Stats />}
            </div>
            <p>
              <h3> How to hire our services</h3>
              <ul>
                <li>1. Choose your preferred hire dates</li>
                <li>2. Discuss your planned route for roads' suitability </li>
                <li>3. Book your dates based on availity </li>
                <li>4. Bus comes with a professional chauffer and an onboard hostess </li>
              </ul>

              We can  link you to various independent  Tour agents we work with  
              if you need their services for make your hire period even more memorable
              with added activities and sightings. 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
