"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Wrapper from "../Wrapper";
import { Button } from "@/components/ui/button";

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
      <div className="w-[200%] h-[20%] bg-black absolute blur-2xl left-[-50%] top-[-10%]"></div>
      <Wrapper className="relative flex flex-col justify-between py-32 gap-32 overflow-hidden max-sm:py-16 max-sm:gap-8">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {images.map((image, i) => (
              <div
                key={`first-${i}`}
                className="h-[40vh] bg-cover aspect-3/4"
                style={{
                  backgroundImage: `url('/${image.src}')`,
                  marginTop: image.offset,
                }}
              />
            ))}
            {images.map((image, i) => (
              <div
                key={`second-${i}`}
                className="h-[40vh] bg-cover aspect-3/4"
                style={{
                  backgroundImage: `url('/${image.src}')`,
                  marginTop: image.offset,
                }}
              />
            ))}
          </motion.div>
          <div className="w-1/2 h-full absolute top-0 left-0">
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                mixBlendMode: "saturation",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center px-6 gap-8 text-white text-center">
          <h1 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
            FREE PDF: Stop Losing Customers Online
          </h1>

          <p className="w-1/2 text-[20px] leading-[1.2] tracking-normal opacity-90 max-[1200px]:w-4/5 max-md:w-full max-sm:text-[20px]">
            Plain-English guide for SME owners.
          </p>

          <p className="w-1/2 text-[20px] leading-[1.2] tracking-normal opacity-70 max-[1200px]:w-4/5 max-md:w-full max-sm:text-[20px]">
            See what to show first so more visitors become customers, with a local case study and a simple options comparison. PDF. Quick read. View in browser.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "No sign up",
              "No download needed",
              "No email required",
            ].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {label}
              </span>
            ))}
          </div>

          <Button
            asChild
            className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold"
          >
            <Link href="/pdf">
              Open the Free Guide
              <svg
                className="min-w-6 min-h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 7H17M17 7V17M17 7L7 17"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Button>
        </div>

        <div className="w-[20%] h-full bg-[#020202] absolute left-[-10%] top-0 blur-2xl"></div>
        <div className="w-[20%] h-full bg-[#020202] absolute right-[-10%] top-0 blur-2xl"></div>
      </Wrapper>
    </div>
  );
}
