import Link from "next/link";
import { motion, useScroll, useTransform, Variants, Easing } from "framer-motion";
import { useRef, ReactNode } from "react";
import Wrapper from "../Wrapper";
import { Button } from "@/components/ui/button";

const swissEase: Easing = [0.25, 0.1, 0.25, 1];
const subtleEase: Easing = [0.4, 0, 0.2, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      ease: swissEase,
    },
  },
};

const headingVariants: Variants = {
  hidden: { 
    y: 40, 
    opacity: 0,
    filter: "blur(8px)"
  },
  visible: { 
    y: 0, 
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: swissEase,
    }
  },
};

const textRevealVariants: Variants = {
  hidden: { 
    y: 20, 
    opacity: 0,
    scale: 0.98
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: subtleEase,
    }
  },
};

const buttonVariants: Variants = {
  hidden: { 
    y: 20, 
    opacity: 0,
    scale: 0.95
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: swissEase,
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: subtleEase,
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: subtleEase,
    }
  }
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
      delay: 0.8,  
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

interface ParallaxTextProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ children, offset = 20, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  
  return (
    <motion.div ref={ref} style={{ y }} {...props}>
      {children}
    </motion.div>
  );
};

interface AccentTextProps {
  children: ReactNode;
}

const AccentText: React.FC<AccentTextProps> = ({ children }) => {
  return (
    <motion.span
      className="text-[#FC350B] relative inline-block"
      variants={singaporeanHighlight}
    >
      <motion.span
        className="absolute inset-0 bg-[#FC350B] opacity-20 rounded-md"
        variants={highlightSweep}
      />
      <span className="relative z-10 px-1 sm:px-2">{children}</span>
    </motion.span>
  );
};

export default function Quiz(): React.ReactElement {
  return (
    <Wrapper className="flex justify-between gap-8 max-[1200px]:flex-col">
      <motion.div
        className="flex w-full justify-between gap-8 max-[1200px]:flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ParallaxText offset={-10}>
          <motion.h1
            className="w-3/5 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]"
            variants={headingVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              How much money is your website not making you?
            </motion.span>
            <motion.span 
              className="text-[#999999] font-semibold block mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {" "}For <AccentText>Singaporean</AccentText> businesses
              that rely on trust.
            </motion.span>
          </motion.h1>
        </ParallaxText>

        <div className="w-1/5 flex flex-col items-end gap-8 text-right max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full">
          <ParallaxText offset={10}>
            <motion.p
              className="text-[20px] text-[#999999] leading-[1.2] tracking-normal"
              variants={textRevealVariants}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Most websites look fine but lose trust and sales. This quick ROI
                check shows what you&apos;re missing — and how to fix it.
              </motion.span>
            </motion.p>
          </ParallaxText>

          <motion.div variants={buttonVariants}>
            <Button
              asChild
              className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold overflow-hidden relative group"
            >
              <Link href="/calculator">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover="hover"
                  whileTap="tap"
                  variants={{
                    hover: {
                      x: 2,
                      transition: { duration: 0.2, ease: subtleEase }
                    },
                    tap: {
                      x: 0,
                      transition: { duration: 0.1, ease: subtleEase }
                    }
                  }}
                >
                  <span>Find out in under a minute</span>
                  <motion.svg
                    className="min-w-6 min-h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    variants={{
                      hover: {
                        rotate: 45,
                        scale: 1.1,
                        transition: { duration: 0.3, ease: swissEase }
                      },
                      tap: {
                        rotate: 0,
                        scale: 1,
                        transition: { duration: 0.2, ease: swissEase }
                      }
                    }}
                  >
                    <motion.path
                      d="M7 7H17M17 7V17M17 7L7 17"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8, ease: swissEase }}
                    />
                  </motion.svg>
                </motion.div>

                {/* Subtle hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3, ease: subtleEase }}
                />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Wrapper>
  );
}
