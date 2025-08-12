"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import { Button } from "@/components/ui/button";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const [maxScrollDistance, setMaxScrollDistance] = useState(0);
  const [vh, setVh] = useState(0);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const initialVh = window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight;
    setVh(initialVh);

    const calculateHeight = () => {
      if (containerRef.current) {
        const totalHeight = containerRef.current.scrollHeight;
        setPageHeight(totalHeight);

        const highlightsOffset = 200;
        const maxScroll = totalHeight - initialVh - highlightsOffset;
        setMaxScrollDistance(Math.max(0, maxScroll));
      }
    };

    calculateHeight();
    const observer = new ResizeObserver(calculateHeight);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const top = useTransform(
    smoothProgress,
    [0, 1],
    [0, -Math.min(maxScrollDistance, pageHeight - vh)]
  );

  const highlightsTop = useSpring(useTransform(scrollY, [0, 1000], [0, -200]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const limitedHeight = maxScrollDistance + vh;
    document.body.style.height = `${limitedHeight}px`;
    return () => {
      document.body.style.height = "";
    };
  }, [pageHeight, maxScrollDistance, vh]);

  const [mobileContainerStart, setMobileContainerStart] = useState(0);
  const [vw, setVw] = useState(0);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

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
                    Find out how much that decision is costing you and the
                    simple fix to start winning more customers.
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
            <Wrapper className="flex flex-col !gap-48 max-sm:!gap-32">
              <div className="flex flex-col justify-between gap-16 max-[1200px]:flex-col max-sm:gap-0">
                <div className="flex flex-col gap-8 max-[1200px]:w-1/2 max-md:w-full">
                  <h2 className="text-[64px] font-semibold max-[1200px]:text-[48px] max-sm:text-[40px]">
                    Free guide: how we stopped{" "}
                    <span className="text-[#FD5001]">$12K</span> from leaving in{" "}
                    <span className="text-[#FD5001]">30 days</span>
                  </h2>
                  <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                    Here&apos;s just a small part of what&apos;s inside. The
                    full guide shows every number, mistake, and fix we used so
                    your customers stop choosing someone else.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 max-[1200px]:grid-cols-2 max-md:grid-cols-1 max-sm:hidden">
                  <div
                    className="flex flex-col justify-start bg-cover bg-center aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:bg-[position:0%_70%] max-md:aspect-auto"
                    style={{ backgroundImage: "url('/money.png')" }}
                  >
                    <h3 className="text-[24px] font-semibold">
                      Spot the silent sales leaks draining your business every
                      month
                    </h3>
                  </div>
                  <div
                    className="flex flex-col justify-start bg-cover bg-top aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:bg-center max-md:aspect-auto"
                    style={{ backgroundImage: "url('/competitors.png')" }}
                  >
                    <h3 className="text-[24px] font-semibold">
                      Why cheap or DIY sites make customers click away instantly
                    </h3>
                  </div>
                  <div
                    className="flex flex-col justify-start bg-cover bg-top blur-lg aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:aspect-auto"
                    style={{ backgroundImage: "url('/clock.png')" }}
                  >
                    <h3 className="text-[24px] font-semibold">
                      The fastest way to get a trust-building site live without
                      wasting time or money
                    </h3>
                  </div>
                  <div className="col-span-2 pt-16 max-[1200px]:col-span-full max-[1200px]:px-0">
                    <p className="w-3/4 text-[48px] font-semibold max-md:w-full max-sm:text-[40px]">
                      The <span className="text-[#FD5001]">3rd</span> one will shock you, keep scrolling.
                    </p>
                  </div>
                </div>
                <div className="min-h-[300vh] relative sm:hidden">
                  <div
                    className="h-fit flex flex-col sticky pt-24 gap-24 top-0"
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
                            className="flex flex-col justify-start bg-cover bg-center aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:bg-[position:0%_70%] max-md:aspect-auto"
                            style={{ backgroundImage: "url('/money.png')" }}
                          >
                            <h3 className="text-[24px] font-semibold">
                              Spot the silent sales leaks draining your business
                              every month
                            </h3>
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
                            className="flex flex-col justify-start bg-cover bg-top aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:bg-center max-md:aspect-auto"
                            style={{
                              backgroundImage: "url('/competitors.png')",
                            }}
                          >
                            <h3 className="text-[24px] font-semibold">
                              Why cheap or DIY sites make customers click away
                              instantly
                            </h3>
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
                            className="flex flex-col justify-start bg-cover bg-top blur-lg aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:aspect-auto"
                            style={{ backgroundImage: "url('/clock.png')" }}
                          >
                            <h3 className="text-[24px] font-semibold">
                              The fastest way to get a trust-building site live
                              without wasting time or money
                            </h3>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-8 max-sm:gap-5">
                      <p className="w-full text-[48px] font-semibold max-sm:text-[40px]">
                        Unlock this and{" "}
                        <span className="text-[#FD5001]">8 other causes</span>{" "}
                        in the guide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-16 max-[1200px]:flex-col">
                <div className="w-1/2 flex flex-col gap-4 max-[1200px]:w-1/2 max-md:w-full">
                  <h2 className="text-[64px] font-semibold max-[1200px]:text-[48px] max-sm:text-[40px]">
                    No website? You&apos;re sending customers to your{" "}
                    <span className="text-[#FD5001]">competitors</span>.
                  </h2>
                  <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                    Here&apos;s an example from one of our clients who turned things
                    around:
                  </p>
                </div>

                <div className="w-2/5 flex flex-col items-end gap-8 text-right max-[1200px]:w-3/4 max-[1200px]:items-start max-[1200px]:text-left">
                  <div className="flex flex-col items-end gap-8 max-[1200px]:items-start">
                    <div className="flex flex-col items-end gap-2 max-[1200px]:items-start">
                      <p className="text-[80px] font-semibold">$12,000+</p>
                      <h3 className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                        Sales saved from competitors
                      </h3>
                    </div>
                    <div className="flex flex-col items-end gap-2 max-[1200px]:items-start">
                      <p className="text-[80px] font-semibold">600+</p>
                      <h3 className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                        Clicks generated
                      </h3>
                    </div>
                  </div>
                  <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal mt-4">
                    One of our clients,{" "}
                    <span className="text-[#FD5001]">Family Mookata</span>, saw{" "}
                    <span className="text-[#FD5001]">600+ clicks</span> in
                    <span className="text-[#FD5001]"> one month</span>, worth
                    <span className="text-[#FD5001]"> $12k</span> in sales kept
                    from competitors.
                  </p>
                </div>
              </div>
              <div className="flex gap-16">
                <div className="w-full flex flex-col gap-8">
                  <h1 className="text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
                    Stop guessing.{" "}
                    <span className="text-[#999999]">
                      {" "}
                      Start <span className="text-[#FD5001]">winning</span>{" "}
                      customers.
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
                <div className="w-full relative aspect-square">
                  <Image
                    className="object-cover"
                    src="/phone.png"
                    alt=""
                    fill
                  />
                </div>
              </div>
            </Wrapper>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
