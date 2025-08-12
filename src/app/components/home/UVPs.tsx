"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function UVPs() {
  const [containerStart, setContainerStart] = useState(0);
  const [mobileContainerStart, setMobileContainerStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (containerRef.current) {
      setContainerStart(
        containerRef.current.getBoundingClientRect().top +
          window.innerHeight -
          200
      );
    }
  }, [containerRef.current]);

  const brushY = useSpring(
    useTransform(
      scrollY,
      [containerStart - window.innerHeight, containerStart],
      [100, 0]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const [vw, setVw] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
  }, []);

  useEffect(() => {
    if (mobileContainerRef.current) {
      setMobileContainerStart(
        mobileContainerRef.current.getBoundingClientRect().top +
          window.innerHeight -
          200
      );
    }
  }, [mobileContainerRef.current]);

  const card1X = useSpring(
    useTransform(
      scrollY,
      [mobileContainerStart - window.innerHeight * 0.5, mobileContainerStart],
      [0, vw]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const card2Rotate = useSpring(
    useTransform(
      scrollY,
      [mobileContainerStart, mobileContainerStart + window.innerHeight * 0.5],
      [10, 0]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const card2X = useSpring(
    useTransform(
      scrollY,
      [
        mobileContainerStart + window.innerHeight * 0.5,
        mobileContainerStart + window.innerHeight,
      ],
      [0, vw]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const card3Rotate = useSpring(
    useTransform(
      scrollY,
      [
        mobileContainerStart + window.innerHeight,
        mobileContainerStart + window.innerHeight * 1.5,
      ],
      [-10, 0]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const card3X = useSpring(
    useTransform(
      scrollY,
      [
        mobileContainerStart + window.innerHeight * 1.5,
        mobileContainerStart + window.innerHeight * 2,
      ],
      [0, vw]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const card4Rotate = useSpring(
    useTransform(
      scrollY,
      [
        mobileContainerStart + window.innerHeight * 2,
        mobileContainerStart + window.innerHeight * 2.5,
      ],
      [15, 0]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const card4X = useSpring(
    useTransform(
      scrollY,
      [
        mobileContainerStart + window.innerHeight * 2.5,
        mobileContainerStart + window.innerHeight * 3,
      ],
      [0, vw]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <div className="min-h-screen flex justify-center max-sm:min-h-[500vh]">
      <div className="max-w-[1600px] px-16 py-24 max-md:px-6 max-sm:py-24 max-sm:gap-10 relative max-sm:h-fit max-sm:sticky max-sm:top-0">
        <div className="flex flex-col gap-16 max-sm:hidden" ref={containerRef}>
          <div className="flex flex-col gap-8 max-sm:gap-5">
            <h1 className="w-1/2 text-[64px] text-[#020202] font-semibold max-[1200px]:w-4/5 max-sm:w-full max-sm:text-[40px]">
              Why we
              <span className="text-[#FD5001]">beat</span> your other options.
            </h1>
            <p className="text-[20px] text-[#999999] opacity-90 leading-[1.2] tracking-normal max-sm:text-[20px]">
              Built to win against DIY, freelancers, and template shops.
            </p>
          </div>
          <div className="h-full flex flex-col gap-2">
            <div className="h-full max-h-[1000px] grid grid-cols-3 grid-rows-2 gap-2 max-[1200px]:grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-4 max-md:max-h-fit">
              <div
                className="min-h-[340px] flex items-end row-span-2 bg-cover text-white max-[1200px]:row-span-1 relative"
                style={{ backgroundImage: "url('/sanity.png')" }}
              >
                <div className="w-full flex flex-col gap-4 p-10 max-[1200px]:p-8 max-md:p-6 relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                    }}
                  ></div>
                  <h2 className="text-[32px] font-semibold relative z-10">
                    Update it yourself in minutes
                  </h2>
                  <p className="text-[20px] leading-[1.2] tracking-normal relative z-10">
                    Simple CMS. Change pages, prices, and photos without calling
                    a developer.
                  </p>
                </div>
              </div>
              <div
                className="min-h-[340px] flex flex-col relative p-10 overflow-hidden max-[1200px]:p-8 max-md:p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(255, 106, 0) 0%, rgb(255, 81, 0) 100%)",
                }}
              >
                <div className="h-full flex flex-col justify-between text-white leading-[1.2]">
                  <h2 className="text-[32px] font-semibold z-10">
                    No juniors. No handoffs.
                  </h2>
                  <p className="text-[20px] text-right leading-[1.2] tracking-normal z-20">
                    No relays, no interns. <br /> One expert team owns <br />{" "}
                    the whole build.
                  </p>
                </div>
                <motion.div
                  className="h-[150%] absolute bottom-[-280px] aspect-1/5 z-10 max-md:bottom-[-260px]"
                  style={{ y: brushY }}
                >
                  <Image src="/brush.png" alt="" fill />
                </motion.div>
                <div className="w-3/5 bg-white absolute blur-3xl aspect-square left-[-5%] bottom-[-15vh] max-[1200px]:bottom-[-10vh] max-md:left-[-15%] max-md:bottom-[-20vh]"></div>
              </div>
              <div
                className="min-h-[340px] row-span-2 bg-cover bg-right bg-bottom relative p-10 max-[1200px]:row-span-1 max-[1200px]:p-8 max-md:p-6"
                style={{ backgroundImage: "url('/competitors.png')" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                  }}
                ></div>
                <div className="flex flex-col gap-4 text-white relative z-10">
                  <h2 className="text-[32px] font-semibold">
                    Beat your competitors
                  </h2>
                  <p className="text-[20px] leading-[1.2] tracking-normal">
                    Send us their sites. We design yours to win head to head.
                  </p>
                </div>
              </div>
              <div
                className="min-h-[340px] flex flex-col items-center relative p-10 gap-4 max-[1200px]:p-8 max-md:p-6"
                style={{
                  background: "linear-gradient(90deg, #000000, #6D6D6D)",
                }}
              >
                <div className="w-full flex flex-col gap-2 text-white">
                  <h2 className="text-[64px] font-semibold">24/7</h2>
                  <p className="text-[20px] leading-[1.2] tracking-normal">
                    Priority support
                  </p>
                </div>
                <div className="w-full h-full max-w-[300px] flex justify-center items-center relative">
                  <div className="w-full flex items-center bg-white rounded-[12px] shadow-2xl p-4 gap-3 z-10">
                    <div className="w-10 h-10 bg-[#FD5001] rounded-full"></div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[20px] font-semibold">cyllabs</p>
                      <p className="tracking-normal">Support Ticket</p>
                    </div>
                  </div>
                  <motion.div
                    className="w-full flex items-center bg-white rounded-[12px] shadow-2xl absolute mt-5 p-4 gap-3"
                    initial={{ y: 100, opacity: 0, scale: 0.9 }}
                    whileInView={{ y: 0, opacity: 1, scale: 0.9 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 bg-[#FD5001] rounded-full"></div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[20px] font-semibold">cyllabs</p>
                      <p className="tracking-normal">Support Ticket</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-24 sm:hidden"
          ref={mobileContainerRef}
        >
          <div className="flex justify-center">
            <div className="w-[90%] relative aspect-square">
              <motion.div
                className="w-full h-full absolute z-40"
                style={{
                  x: card1X,
                }}
              >
                <div
                  className="flex flex-col relative p-10 aspect-square overflow-hidden max-[1200px]:p-8 max-md:p-6"
                  style={{
                    background:
                      "linear-gradient(180deg, rgb(255, 106, 0) 0%, rgb(255, 81, 0) 100%)",
                  }}
                >
                  <div className="h-full flex flex-col justify-between text-white leading-[1.2]">
                    <h2 className="text-[32px] font-semibold z-10">
                      No juniors. No handoffs.
                    </h2>
                  </div>
                  <motion.div
                    className="h-[150%] absolute bottom-[-280px] aspect-1/5 z-10 max-md:bottom-[-260px]"
                    style={{ y: brushY }}
                  >
                    <Image src="/brush.png" alt="" fill />
                  </motion.div>
                  <div className="w-3/5 bg-white absolute blur-3xl aspect-square left-[-5%] bottom-[-15vh] max-[1200px]:bottom-[-10vh] max-md:left-[-15%] max-md:bottom-[-20vh]"></div>
                </div>
              </motion.div>
              <motion.div
                className="w-full h-full absolute z-30"
                style={{
                  x: card2X,
                  rotate: card2Rotate,
                }}
              >
                <div
                  className="z-30 flex items-end bg-cover aspect-square text-white relative"
                  style={{ backgroundImage: "url('/sanity.png')" }}
                >
                  <div className="w-full flex flex-col gap-4 p-10 max-[1200px]:p-8 max-md:p-6 relative">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                      }}
                    ></div>
                    <h2 className="text-[32px] font-semibold relative z-10">
                      Update it yourself in minutes
                    </h2>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="w-full h-full absolute z-20"
                style={{
                  x: card3X,
                  rotate: card3Rotate,
                }}
              >
                <div
                  className="flex flex-col items-center relative aspect-square p-10 gap-8 max-[1200px]:p-8 max-md:p-6"
                  style={{
                    background: "linear-gradient(90deg, #000000, #6D6D6D)",
                  }}
                >
                  <div className="w-full flex flex-col gap-2 text-white">
                    <h2 className="text-[64px] font-semibold">24/7</h2>
                    <p className="text-[20px] leading-[1.2] tracking-normal">
                      Priority support
                    </p>
                  </div>
                  <div className="w-full max-w-[300px] flex justify-center items-center relative">
                    <div className="w-full flex items-center bg-white rounded-[12px] shadow-2xl p-4 gap-3 z-10">
                      <div className="w-10 h-10 bg-[#FD5001] rounded-full"></div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[20px] font-semibold">cyllabs</p>
                        <p className="tracking-normal">Support Ticket</p>
                      </div>
                    </div>
                    <motion.div
                      className="w-full flex items-center bg-white rounded-[12px] shadow-2xl absolute mt-5 p-4 gap-3"
                      initial={{ y: 100, opacity: 0, scale: 0.9 }}
                      whileInView={{ y: 0, opacity: 1, scale: 0.9 }}
                      viewport={{ once: true, amount: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-10 h-10 bg-[#FD5001] rounded-full"></div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[20px] font-semibold">cyllabs</p>
                        <p className="tracking-normal">Support Ticket</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="w-full h-full absolute z-10"
                style={{
                  x: card4X,
                  rotate: card4Rotate,
                }}
              >
                <div
                  className="bg-cover bg-right bg-bottom relative aspect-square p-10 max-[1200px]:p-8 max-md:p-6"
                  style={{ backgroundImage: "url('/competitors.png')" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                    }}
                  ></div>
                  <div className="flex flex-col gap-4 text-white relative z-10">
                    <h2 className="text-[32px] font-semibold">
                      Beat your competitors
                    </h2>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-8 max-sm:gap-5">
            <h1 className="w-1/2 text-[64px] text-[#020202] font-semibold max-[1200px]:w-4/5 max-sm:w-full max-sm:text-[40px]">
              Why we <span className="text-[#FD5001]">beat</span> your other
              options
            </h1>
            <p className="text-[20px] text-[#999999] opacity-90 leading-[1.2] tracking-normal max-sm:text-[20px]">
              Build to win against DIY, freelancers, and template shops.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
