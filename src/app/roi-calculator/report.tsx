"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Navbar from "../components/navbarv2";

interface ReportProps {
  estimatedReach: number;
  weeklyMessages: number;
  ticket: number;
  actualConvRate: number;
  revenueNow: number;
  revenueWithSite: number;
  moneyLeft: number;
  setStep: (step: number) => void;
}

export default function Report({
  estimatedReach,
  weeklyMessages,
  ticket,
  actualConvRate,
  revenueNow,
  revenueWithSite,
  moneyLeft,
  setStep,
}: ReportProps) {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Glow Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
   {/* Orange Gradient Glow (underneath) */}
<div
  className="absolute bottom-[-20vh] right-[-40vw] w-[200vw] h-[160vh] md:bottom-[-100px] md:right-[-180px] md:w-[1700px] md:h-[1500px] 2xl:w-[3360px] rounded-full blur-[100px] md:blur-[120px] z-0"
  style={{
    background: `radial-gradient(circle,
      #ff3c00 90%,
      #fc5a2f 40%,
      #fd7f53 65%,
      #fff7e3 95%,
      #ffffff 100%)`,
  }}
/>

{/* White solid fade gradient */}
<div
  className="absolute bottom-0 right-[-100vw] w-[300vw] h-[60vh] md:right-[-400px] md:w-[2340px] md:h-[800px] 2xl:w-[3360px] rounded-full z-10 pointer-events-none"
  style={{
    background: `linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 15%,
      rgba(255, 255, 255, 0.5) 35%,
      rgba(255, 255, 255, 0.85) 65%,
      rgba(255, 255, 255, 1) 100%
    )`,
  }}
/>

{/* White radial glow fading upward */}
<div
  className="absolute bottom-[-100vh] right-[-100vw] w-[300vw] h-[200vh] md:bottom-[-900px] md:right-[-560px] md:w-[2340px] md:h-[2080px] 2xl:w-[3360px] rounded-full z-20 pointer-events-none"
  style={{
    background: `radial-gradient(
      ellipse at bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 35%,
      rgba(255, 255, 255, 0.7) 55%,
      rgba(255, 255, 255, 0.3) 75%,
      rgba(255, 255, 255, 0) 100%
    )`,
    filter: "blur(160px)",
    mixBlendMode: "screen",
  }}
/>

      </div>

      {/* Content Container */}
      <div className="relative z-30">
        <Navbar theme="dark" />

        {/* Top Content (Dark BG) */}
        <div className="text-white pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tighter">
              Your funnel report.
              <br />
              <span className="text-gray-300">Here’s the breakdown.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-400">
              Find out why you’re leaving money behind.
            </p>

            <div className="mt-16 sm:mt-24 space-y-4 text-2xl sm:text-3xl xl:text-4xl tracking-tight">
              <p className="text-white">
                <span className="font-light">With </span>
                <span className="font-bold">
                  {estimatedReach.toLocaleString()}
                </span>
                <span className="font-light"> impressions</span>
              </p>
              <p className="text-white">
                <span className="font-bold">{weeklyMessages}</span>
                <span className="font-light"> weekly messages</span>
              </p>
              <p className="text-white">
                <span className="font-bold">${ticket}</span>
                <span className="font-light"> average cost</span>
              </p>
            </div>

            <p className="mt-8 text-2xl sm:text-3xl xl:text-4xl font-bold tracking-tight">
              Your conversion rate is{" "}
              <span className="text-white">
                {(actualConvRate * 100).toFixed(2)}%
              </span>
              <span className="inline-flex items-center ml-4 text-sm text-gray-200">
                <span className="mr-1">What is conversion rate?</span>
                <span className="relative group">
                  <Info size={18} className="cursor-pointer" />
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 p-2 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-normal text-center">
                    Percentage of people who message you after seeing your
                    profile.
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Content (Light BG) */}
        <div className="text-black pt-16 sm:pt-24 pb-24 sm:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tighter">
              What if we introduced a website?
            </h2>
            <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tighter text-gray-200">
              Another platform to increase conversions.
            </h3>
            <p className="mt-8 text-xl sm:text-2xl text-gray-700">
              With an average conversion rate of 3%.
            </p>

            <div className="mt-12 sm:mt-16 flex flex-col gap-4 text-2xl sm:text-3xl xl:text-4xl font-bold">
              <div className="flex gap-2 text-black">
                <p className="whitespace-nowrap">Current revenue:</p>
                <p className="text-black">${revenueNow.toLocaleString()}</p>
              </div>
              <div className="flex gap-2 text-orange-600">
                <p className="whitespace-nowrap">Possible revenue:</p>
                <p className="text-orange-600">
                  ${revenueWithSite.toLocaleString()}
                </p>
              </div>
            </div>

            <p className="mt-12 text-2xl sm:text-3xl xl:text-4xl font-bold tracking-tight">
  That’s{" "}
  <span className="text-orange-600">
    ${moneyLeft.toLocaleString()} dollars
  </span>{" "}
  left on the table.
  <span className="inline-flex items-baseline ml-4 text-sm text-orange-600">
    <span className="mr-1">How we calculated it</span>
    <span className="relative group">
      <Info size={18} className="cursor-pointer" />
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 p-2 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 text-center">
        Based on industry average conversion rates and your estimated reach, messages, and ticket size.
      </span>
    </span>
  </span>
</p>


            <div className="mt-20 sm:mt-28">
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tighter">
                Want to find out how to{" "}
                <span className="text-orange-600">fix</span> the leak?
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-gray-600">
                Anyone can build a website,{" "}
                <span className="font-bold text-black">cyllabs.</span> builds a
                solution.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
  <a
    href="#"
    className="inline-block text-orange-600 text-2xl sm:text-3xl font-bold tracking-tight group"
  >
    Book a consult
    <span className="inline-block transition-transform group-hover:translate-x-2">
      {" "}
      &rarr;
    </span>
  </a>
  <Button
    onClick={() => setStep(0)}
    className="text-xl px-60 py-3 text-gray-500 font-bold bg-transparent border-none shadow-none hover:bg-gray-100"
  >
    Restart ↻
  </Button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

