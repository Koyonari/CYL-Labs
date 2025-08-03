"use client";
import { useRef } from "react";
import { ArrowUpLeft } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

export default function Evaluator() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const singaporeanHighlight: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const highlightSweep: Variants = {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        delay: 1.1,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const underlineAnimation: Variants = {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 1.4,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const arrowAnimation: Variants = {
    hidden: {
      opacity: 0,
      x: 20,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: [0, -5, 0],
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0, 1],
        rotate: {
          duration: 1.2,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="evaluator flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 min-h-screen gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 justify-center items-center py-8 lg:py-0"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="evaluator-content flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-start max-w-7xl mx-auto w-full">
        <motion.div
          className="evaluator-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl w-full lg:w-3xl helvetica-bold tracking-tight"
          variants={fadeInLeft}
        >
          How much money is your website not making you?
          <motion.span className="text-[#999999]" variants={fadeInUp}>
            <br />
            Find out in under a minute — for{" "}
            <motion.span
              className="text-[#FC350B] relative inline-block"
              variants={singaporeanHighlight}
            >
              <motion.span
                className="absolute inset-0 bg-[#FC350B] opacity-20 rounded-md"
                variants={highlightSweep}
              />
              <span className="relative z-10 px-1 sm:px-2">Singaporean</span>
            </motion.span>{" "}
            businesses that rely on trust.
          </motion.span>
        </motion.div>

        <motion.div
          className="evaluator-right w-full lg:w-3/10 flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-14 pt-0 lg:pt-4"
          variants={fadeInRight}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl leading-6 md:leading-7 lg:leading-8 text-[#999999] text-left lg:text-right helvetica-light"
            variants={fadeInUp}
          >
            Most websites look fine but lose trust and sales. This quick ROI
            check shows what you&apos;re missing — and how to fix it.
          </motion.p>

          <motion.div
            className="text-[#FC350B] text-3xl sm:text-4xl md:text-5xl  2xl:text-6xl flex flex-row items-center helvetica-bold tracking-tight justify-start lg:justify-end"
            variants={fadeInUp}
          >
            <motion.div variants={arrowAnimation}>
              <ArrowUpLeft
                size={32}
                strokeWidth={3}
                className="pt-1 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
              />
            </motion.div>
            <motion.div variants={fadeInRight}>
              Take the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">quiz</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#FD5001] rounded-full"
                  variants={underlineAnimation}
                />
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
