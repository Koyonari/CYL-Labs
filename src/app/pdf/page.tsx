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
                  Still don't have a website? This might change your mind.
                </h1>
                <div className="w-full flex flex-col items-end gap-8 text-right max-[1200px]:w-4/5 max-md:w-full">
                  <p className="w-1/3 opacity-70 text-[20px] leading-[1.2] tracking-normal max-[1200px]:w-full">
                    Think your business is doing fine without a website? This
                    free guide will show you what it’s really costing you — and
                    how to fix it before it hurts more.
                  </p>
                  <Button className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold">
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
                    Highlights
                  </h2>
                  <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                    Where insight meets execution, and strategy drives results.
                    This is how we differ from other teams.
                  </p>
                </div>
                <div className="w-3/5 flex flex-col gap-8 max-[1200px]:w-full">
                  <div className="flex flex-col pb-8 gap-4 border-b-2 border-b-[#EEEEEE]">
                    <h3 className="text-[24px] font-semibold">
                      Why “doing fine” without a website is short term thinking
                    </h3>
                    <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                      Recognized for outstanding innovation in digital strategy
                      and creative marketing campaigns.
                    </p>
                  </div>
                  <div className="flex flex-col pb-8 gap-4 border-b-2 border-b-[#EEEEEE]">
                    <h3 className="text-[24px] font-semibold">
                      Real reasons customers bounce without saying a word
                    </h3>
                    <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                      Recognized for outstanding innovation in digital strategy
                      and creative marketing campaigns.
                    </p>
                  </div>
                  <div className="flex flex-col pb-8 gap-4">
                    <h3 className="text-[24px] font-semibold">
                      Why “doing fine” without a website is short term thinking
                    </h3>
                    <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                      Recognized for outstanding innovation in digital strategy
                      and creative marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-16">
                <div className="flex justify-between gap-8 max-[1200px]:flex-col">
                  <h1 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
                    Built with experience.{" "}
                    <span className="text-[#999999]">
                      Based on real conversations, real clients, and real{" "}
                      <span className="text-[#FD5001]">SME problems</span>.
                    </span>
                  </h1>
                  <p className="w-1/5 text-[20px] text-[#999999] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full">
                    Most websites look fine but lose trust and sales. This quick
                    ROI check shows what you're missing — and how to fix it.
                  </p>
                </div>
                {/* <div className="flex gap-4 text-[32px] text-[#020202] font-semibold">
                  <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="31"
                    viewBox="0 0 33 31"
                    fill="none"
                  >
                    <path
                      d="M0.0010089 30.7729L0.0478135 18.1635C0.0795737 9.60716 2.50532 3.16127 12.7246 0.0468046L12.7007 6.50161C7.89096 8.13502 6.37926 10.9816 6.50263 18.1875L12.6572 18.2103L12.6104 30.8197L0.0010089 30.7729ZM26.4675 18.2616L32.7722 18.285L32.7254 30.8944L20.116 30.8476L20.1628 18.2382C20.1946 9.68183 22.4702 3.23538 32.6895 0.120912L32.6656 6.57572C27.8558 8.20913 26.4943 11.0562 26.4675 18.2616Z"
                      fill="#020202"
                    />
                  </svg>
                  <div className="flex flex-col mt-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <div className="flex items-end gap-[5px]">
                          <h1>cyllabs</h1>
                          <div className="w-2 h-2 bg-[#FD5001] rounded-full mb-[5px]"></div>
                        </div>
                        <p>gave us everything we needed,</p>
                      </div>
                      <p>clean design without the scary agency quote.</p>
                    </div>
                    <p className="text-[20px] font-normal max-md:text-[16px]">
                      — Fiona, owner of Family Mookata{" "}
                    </p>
                  </div>
                </div> */}
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-8">
                  <h1 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
                    Get the free guide now,{" "}
                    <span className="text-[#999999]">
                      and avoid the mistakes that{" "}
                      <span className="text-[#FD5001]">most SMEs</span> are
                      making.
                    </span>
                  </h1>
                  <Button className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold">
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
