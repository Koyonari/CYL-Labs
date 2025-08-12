"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import GoodConversions from "../components/report/GoodConversions";
import BadConversions from "../components/report/BadConversions";
import BadImpressions from "../components/report/BadImpressions";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [pageHeight, setPageHeight] = useState(0);
  const [data, setData] = useState({
    reach: 0,
    messages: 0,
    price: 0,
  });
  const [conversionRate, setConversionRate] = useState(0);
  const [currentRevenue, setCurrentRevenue] = useState(0);
  const [possibleRevenue, setPossibleRevenue] = useState(0);
  const [maxScrollDistance, setMaxScrollDistance] = useState(0);
  const [vh, setVh] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const storedData = localStorage.getItem("data");

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      setData({
        reach: parsedData.reach || 0,
        messages: parsedData.messages || 0,
        price: parsedData.price || 0,
      });

      if (parsedData.reach > 0 && parsedData.messages >= 0) {
        setConversionRate((parsedData.messages / parsedData.reach) * 100);
      } else {
        setConversionRate(0);
      }

      setCurrentRevenue(parsedData.price * parsedData.messages);
      setPossibleRevenue(parsedData.price * (parsedData.reach * 0.03));
    }
  }, []);

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

  const { scrollY } = useScroll();
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

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <motion.div style={{ top }} className="absolute w-full">
        <div className="relative" ref={containerRef}>
          <div
            className="h-screen flex justify-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/funnel-report.png')" }}
          >
            <Wrapper className="w-screen h-full flex flex-col justify-between relative !pt-0 z-10">
              <Navbar />
              <div className="flex flex-col items-end gap-8 text-white text-right">
                <h1 className="w-2/3 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
                  Your funnel report. Here&apos;s the breakdown.
                </h1>
                <p className="w-1/3 opacity-70 text-[20px] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-md:w-full">
                  Find out why you&apos;re leaving money behind.
                </p>
              </div>
            </Wrapper>
          </div>
          <motion.div
            className="bg-white relative z-10"
            style={{ top: highlightsTop }}
            ref={highlightsRef}
          >
            <Wrapper
              className="flex flex-col bg-cover !gap-48 max-[1200px]:flex-col"
              style={{ backgroundImage: "url('/gradient-3.png')" }}
            >
              <div className="flex justify-between gap-16 max-[1200px]:flex-col">
                <div className="w-1/4 flex flex-col gap-8 max-[1200px]:w-1/2 max-md:w-full">
                  <h2 className="text-[64px] font-semibold max-[1200px]:text-[48px] max-sm:text-[40px]">
                    How You’re Performing
                  </h2>
                  <p className="opacity-70 text-[20px] leading-[1.2] tracking-normal">
                    Your key website metrics, updated from real data.
                  </p>
                </div>
                <div className="w-3/5 flex flex-col gap-16 max-[1200px]:w-3/4">
                  <div className="flex justify-between flex-wrap gap-16">
                    <div className="flex flex-col gap-4">
                      <p className="text-[80px] font-semibold">
                        {Number(data.reach).toFixed(0).toLocaleString()}
                      </p>
                      <h3 className="opacity-70 text-[20x] leading-[1.2] tracking-normal">
                        Impressions
                      </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-[80px] font-semibold">
                        {Number(data.messages).toFixed(0).toLocaleString()}
                      </p>
                      <h3 className="opacity-70 text-[20x] leading-[1.2] tracking-normal">
                        Weekly messages
                      </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-[80px] font-semibold">
                        ${Number(data.price).toFixed(0).toLocaleString()}
                      </p>
                      <h3 className="opacity-70 text-[20x] leading-[1.2] tracking-normal">
                        Average cost
                      </h3>
                    </div>
                  </div>
                  <p className="text-[48px] font-semibold max-sm:text-[40px]">
                    Your conversion rate is{" "}
                    <span className="text-[#FD5001]">
                      {conversionRate.toFixed(2)}%
                    </span>
                    .
                  </p>
                </div>
              </div>
              {data.reach <= 400 ? (
                <BadImpressions
                  reach={data.reach}
                  messages={data.messages}
                  price={data.price}
                  currentRevenue={currentRevenue}
                  possibleRevenue={possibleRevenue}
                />
              ) : conversionRate >= 3 ? (
                <GoodConversions possibleRevenue={possibleRevenue} />
              ) : (
                <BadConversions
                  currentRevenue={currentRevenue}
                  possibleRevenue={possibleRevenue}
                />
              )}
              <div className="flex flex-col gap-16">
                <div className="w-full flex flex-col gap-8">
                  <h1 className="text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
                    Plug the leak now. Keep the revenue.
                  </h1>
                  <p className="opacity-70 text-[20px] leading-[1.2] tracking-normal">
                    You are leaving{" "}
                    <span className="text-[#FD5001]">money</span> behind every
                    month. We will show you how to keep it.
                  </p>
                  <Button className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold">
                    Get your revenue plan
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
                <div className="w-full relative aspect-2/1 max-sm:aspect-square">
                  <Image
                    className="object-cover"
                    src="/money.png"
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
