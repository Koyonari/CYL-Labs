"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import { Button } from "@/components/ui/button";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const calculateHeight = () => {
      if (containerRef.current) {
        setPageHeight(containerRef.current.scrollHeight);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    const observer = new ResizeObserver(calculateHeight);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", calculateHeight);
      observer.disconnect();
    };
  }, []);

  const top = useTransform(
    smoothProgress,
    [0, 1],
    [0, -(pageHeight - window.innerHeight)]
  );

  const { scrollY } = useScroll();
  const highlightsTop = useSpring(useTransform(scrollY, [0, 1000], [0, -200]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.body.style.height = `${pageHeight}px`;
    return () => {
      document.body.style.height = "";
    };
  }, [pageHeight]);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <motion.div style={{ top }} className="absolute w-full">
        <div className="relative" ref={containerRef}>
          <div
            className="h-screen flex justify-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/abstract-desk.png')" }}
          >
            <Wrapper className="w-screen h-full flex flex-col justify-between relative !pt-0 z-10">
              <Navbar />
              <div className="flex flex-col items-end gap-8 text-white text-right">
                <h1 className="w-2/3 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
                Still Don&apos;t Have a Website?
                </h1>
                <div className="w-full flex flex-col items-end gap-8 text-right max-[1200px]:w-4/5 max-md:w-full">
                  <p className="w-1/3 opacity-70 text-[20px] leading-[1.2] tracking-normal max-[1200px]:w-full">
                  Find out how much that decision is costing you and the simple fix to start winning more customers.
                  </p>
                  <Button className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold">
                    Get the free guide
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
                  </Button>
                </div>
              </div>
            </Wrapper>
          </div>
          <motion.div
            className="bg-white relative z-10"
            style={{ top: highlightsTop }}
            ref={highlightsRef}
          >
            <Wrapper className="flex flex-col !gap-64">
              <div className="flex justify-between gap-16 max-[1200px]:flex-col">
                <div className="w-1/4 flex flex-col gap-8 max-[1200px]:w-1/2 max-md:w-full">
                  <h2 className="text-[64px] font-semibold max-[1200px]:text-[48px] max-sm:text-[40px]">
                  What&apos;s Inside the Free Guide
                  </h2>
                  <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                  Get the numbers, mistakes, and fixes that can put thousands back in your business.
                  </p>
                </div>
                <div className="w-3/5 flex flex-col gap-8 max-[1200px]:w-full">
                  <div className="flex flex-col pb-8 gap-4 border-b-2 border-b-[#EEEEEE]">
                    <h3 className="text-[24px] font-semibold">
                    Spot the silent sales leaks draining your business every month
                    </h3>
                  </div>
                  <div className="flex flex-col pb-8 gap-4 border-b-2 border-b-[#EEEEEE]">
                    <h3 className="text-[24px] font-semibold">
                    See the exact $ amount you&apos;re losing without a website
                    </h3>
                  </div>
                  <div className="flex flex-col pb-8 gap-4 border-b-2 border-b-[#EEEEEE]">
                    <h3 className="text-[24px] font-semibold">
                    Why cheap or DIY sites make customers click away instantly
                    </h3>
                  </div>
                  <div className="flex flex-col pb-8 gap-4 border-b-2 border-b-[#EEEEEE]">
                    <h3 className="text-[24px] font-semibold">
                    The fastest way to get a trust-building site live without wasting time or money
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-16">
                <div className="flex justify-between gap-8 max-[1200px]:flex-col">
                  <h1 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
                  No website? You’re sending customers to your competitors.
                 
                  </h1>
                  <p className="w-1/5 text-[20px] text-[#999999] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full">
                  We launched Family Mookata’s site — 600+ clicks in month one, worth $12k in sales kept from competitors.
                  </p>
                </div>

              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-8">
                  <h1 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
                  Stop guessing. {" "}
                    <span className="text-[#999999]">
                    {" "}
                    Start winning customers.
                    </span>
                  </h1>
                  <Button className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold">
                    Get the Free Guide
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
                  </Button>
                </div>
              </div>
            </Wrapper>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
