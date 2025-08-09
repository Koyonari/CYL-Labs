"use client";

import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

export default function Reality() {
  const images = [
    { name: "vistiq", src: "vistiq.png", offset: 80 },
    { name: "realest", src: "realest.png", offset: 40 },
    { name: "royal", src: "royal.png", offset: 40 },
    { name: "savoria", src: "savoria.png", offset: 0 },
    { name: "essentia", src: "essentia.png", offset: 40 },
  ];

  return (
    <div className="min-h-screen bg-[#020202] relative">
      <div className="w-full h-[20%] bg-black absolute top-[-10%] blur-2xl"></div>
      <Wrapper className="relative flex flex-col justify-between py-32 gap-32 overflow-hidden max-sm:py-16 max-sm:gap-8">
        <motion.div
          className="flex gap-4"
          animate={{ x: "-80%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="h-[40vh] bg-cover aspect-3/4"
              style={{
                backgroundImage: `url('/${image.src}')`,
                marginTop: image.offset,
              }}
            />
          ))}
          {images.map((image, i) => (
            <div
              key={i}
              className="h-[40vh] bg-cover aspect-3/4"
              style={{
                backgroundImage: `url('/${image.src}')`,
                marginTop: image.offset,
              }}
            />
          ))}
        </motion.div>
        <div className="flex flex-col px-6 gap-8">
          <h1 className="text-[64px] text-white text-center font-semibold max-sm:text-[40px]">
            What You Expect vs What You Get
          </h1>
          <p className="text-[20px] text-white text-center leading-[1.2] tracking-normal opacity-70 max-sm:text-[20px]">
            Founded in 2018, we’ve helped over 120 clients transform their
            homes, gardens, and interiors through thoughtful, lasting design.
          </p>
        </div>
        <div className="w-[20%] h-full bg-[#020202] absolute left-[-10%] top-0 blur-2xl"></div>
        <div className="w-[20%] h-full bg-[#020202] absolute right-[-10%] top-0 blur-2xl"></div>
      </Wrapper>
    </div>
  );
}
