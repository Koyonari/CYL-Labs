"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CalculatorIndustry({
  industry,
  setSection,
  setIndustry,
}: {
  industry: string;
  setSection: (section: string) => void;
  setIndustry: (industry: string) => void;
}) {
  const [mode, setMode] = useState("input");

  if (mode === "input") {
    return (
      <div className="h-full max-h-[500px] flex flex-col flex-grow justify-between py-8 overflow-hidden">
        <div className="flex flex-col gap-6">
          <div className="text-[64px] text-white font-semibold">
            <h1>What industry are you in?</h1>
            <h1 className="text-[#999999]">
              We’ll tailor the results to your field.
            </h1>
          </div>
          <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
            Pick the industry that best fits your business — we’ll use it to
            give more accurate.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] text-[#FEF1E1] font-semibold">
            Your industry
          </h2>
          <button
            className="w-fit text-[64px] text-[#999999] font-semibold cursor-pointer"
            onClick={() => setMode("select")}
          >
            Select your industry
          </button>
        </div>
        <div className="flex justify-end">
          <Button
            className="w-fit h-fit bg-white rounded-full !px-8 !py-4 text-[20px] font-semibold"
            onClick={() => setSection("price")}
          >
            Read it for yourself
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
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    );
  }

  if (mode === "select") {
    return (
      <div className="h-full max-h-[500px] flex flex-grow justify-between my-16 overflow-hidden">
        <div className="flex flex-col gap-6 font-semibold">
          <h2 className="text-[36px] text-[#FEF1E1]">Your industry</h2>
          <ul className="flex flex-col text-[36px] text-[#999999] gap-4">
            <li>Fitness</li>
            <li className="text-[48px] text-[#FEF1E1] ml-6">Pet Grooming</li>
            <li>Baking</li>
            <li>Photography</li>
            <li>Tuition</li>
            <li>Interior Design</li>
          </ul>
        </div>
        <p className="w-1/4 text-[30px] text-[#FEF1E1] text-right leading-[1.1]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }
}
