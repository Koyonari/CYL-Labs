"use client";

import { ArrowUpLeft } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function Evaluator() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

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
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0, 1], // Custom easing for professional feel
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        delay: 0.4, // Added delay for left content
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: { 
      opacity: 0, 
      x: 30 
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
        delay: 1.1, // Delay to start after text appears
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
        delay: 1.4, // Delay to start after text appears
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };
  const arrowAnimation: Variants = {
    hidden: { 
      opacity: 0, 
      x: 20,
      rotate: 0
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
          ease: "easeInOut"
        }
      },
    },
  };

  return (
    <motion.section 
      ref={ref}
      className="evaluator flex flex-row px-20 h-screen gap-20 justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="evaluator-content flex flex-row gap-24 items-start">
        <motion.div 
          className="evaluator-left text-6xl w-3xl helvetica-bold tracking-tight"
          variants={fadeInLeft}
        >
          How much money is your website not making you?
          <motion.span 
            className="text-[#999999]"
            variants={fadeInUp}
          >
            <br/>
            Find out in under a minute — for{" "}
            <motion.span 
              className="text-[#FC350B] relative inline-block"
              variants={singaporeanHighlight}
            >
              <motion.span
                className="absolute inset-0 bg-[#FC350B] opacity-20 rounded-md"
                variants={highlightSweep}
              />
              <span className="relative z-10 px-2">Singaporean</span>
            </motion.span>
            {" "}businesses that rely on trust.
          </motion.span>
        </motion.div>
        
        <motion.div 
          className="evaluator-right w-3/10 flex flex-col gap-14 pt-4"
          variants={fadeInRight}
        >
          <motion.p 
            className="text-2xl/6 text-[#999999] text-right helvetica-light"
            variants={fadeInUp}
          >
            Most websites look fine but lose trust and sales. This quick ROI check shows what you're missing — and how to fix it.
          </motion.p>
          
          <motion.div 
            className="text-[#FC350B] text-5xl top-0 flex flex-row items-center helvetica-bold tracking-tight justify-end"
            variants={fadeInUp}
          >
            <motion.div variants={arrowAnimation}>
              <ArrowUpLeft size={48} strokeWidth={3} className="pt-1"/>
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
