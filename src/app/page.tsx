"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Hero from "./components/hero";
import Reality from "./components/Reality";
import UVPs from "./components/UVPs";
import Quiz from "./components/Quiz";
import Mamiko from "./components/Mamiko";
import FamilyMookata from "./components/FamilyMookata";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Wrapper from "./components/Wrapper";

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const realityRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const [maxScrollDistance, setMaxScrollDistance] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const calculateHeight = () => {
      if (containerRef.current) {
        const totalHeight = containerRef.current.scrollHeight;
        setPageHeight(totalHeight);

        const viewportHeight = window.innerHeight;
        const footerSectionHeight = viewportHeight * 2;
        const maxScroll = totalHeight - footerSectionHeight - 200;
        setMaxScrollDistance(maxScroll);
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
    [0, -Math.min(maxScrollDistance, pageHeight - window.innerHeight)]
  );

  const { scrollYProgress: realityProgress } = useScroll({
    target: realityRef,
    offset: ["start start", "end start"],
  });

  const { scrollY } = useScroll();
  const realityY = useSpring(useTransform(scrollY, [0, 1000], [0, -200]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const uvpY = useSpring(
    useTransform(realityProgress, [0.2, 1], [0, -window.innerHeight]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  useEffect(() => {
    const limitedHeight = Math.max(pageHeight, window.innerHeight);
    document.body.style.height = `${limitedHeight}px`;
    return () => {
      document.body.style.height = "";
    };
  }, [pageHeight, maxScrollDistance]);

  const handleMessageSent = () => {};

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <motion.div style={{ top }} className="absolute w-full">
        <main className="relative" ref={containerRef}>
          <div ref={mainContentRef} className="relative z-30">
            <Hero />
            <motion.div
              className="relative z-10"
              style={{ top: realityY }}
              ref={realityRef}
            >
              <Reality />
              <motion.div
                className="relative bg-white z-10"
                style={{ top: uvpY }}
              >
                <UVPs />
                <Quiz />
                <motion.div className="relative z-10">
                  <Mamiko />
                  <FamilyMookata />
                </motion.div>
                <div className="min-h-[200vh] relative">
                  <div className="min-h-screen sticky top-0">
                    <Footer />
                  </div>
                  <Wrapper className="w-full min-h-screen bg-white absolute top-0 z-10 !py-0">
                    <Contact onMessageSent={handleMessageSent} />
                  </Wrapper>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </motion.div>
    </div>
  );
}
