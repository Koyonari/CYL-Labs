"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Hero from "./components/Hero";
import Reality from "./components/Reality";
import UVPs from "./components/UVPs";
import Quiz from "./components/Quiz";
import Highlights from "./components/highlights";
import Mamiko from "./components/Mamiko";
import FamilyMookata from "./components/FamilyMookata";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const footerRevealRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const realityRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!contactRef.current || !footerRevealRef.current || !footerRef.current)
        return;

      const contact = contactRef.current;
      const footer = footerRef.current;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Distance from top of document
      const contactTop = contact.offsetTop;
      const contactHeight = contact.offsetHeight;

      // The scroll position where we start revealing the footer
      const footerStartReveal = contactTop + contactHeight - windowHeight;

      // We'll give it a reveal distance of 1 screen height
      const revealDistance = windowHeight;

      if (scrollY < footerStartReveal) {
        // Before reveal starts - show only bottom quarter of footer
        footer.style.transform = `translateY(${windowHeight * 0.25}px)`;
        // Footer is not interactive
        footer.style.pointerEvents = "none";
      } else if (
        scrollY >= footerStartReveal &&
        scrollY <= footerStartReveal + revealDistance
      ) {
        // Progress from bottom 1/4 visible -> fully visible
        const revealProgress = (scrollY - footerStartReveal) / revealDistance;
        const footerTranslateY = windowHeight * 0.25 * (1 - revealProgress);
        footer.style.transform = `translateY(${footerTranslateY}px)`;

        // Enable footer interaction
        if (revealProgress > 0.3) {
          footer.style.pointerEvents = "auto";
        } else {
          footer.style.pointerEvents = "none";
        }
      } else {
        // Fully revealed
        footer.style.transform = `translateY(0px)`;
        footer.style.pointerEvents = "auto";
      }
    };

    // Initial call
    handleScroll();

    // Add listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
    document.body.style.height = `${pageHeight}px`;
    return () => {
      document.body.style.height = "";
    };
  }, [pageHeight]);

  const handleMessageSent = () => {};

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <motion.div style={{ top }} className="absolute w-full">
        <main ref={containerRef} className="relative">
          <div
            ref={footerRef}
            className="fixed inset-0 z-10 secondary-bg overflow-x-hidden will-change-transform h-screen"
            style={{ pointerEvents: "none" }}
          >
            <Footer />
          </div>
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
                <div ref={contactRef} className="will-change-transform">
                  <Contact onMessageSent={handleMessageSent} />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div
            ref={footerRevealRef}
            className="relative z-20 h-screen"
            style={{ pointerEvents: "none" }}
          />
        </main>
      </motion.div>
    </div>
  );
}
