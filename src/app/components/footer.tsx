"use client";

import { Instagram } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
        delay: 0.2,
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
        delay: 0.3,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const staggerChildren: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const footerItemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const buttonHover: Variants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.25, 0, 1],
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  const logoTextVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <>
      <motion.section
        ref={ref}
        className="secondary-text h-screen flex flex-col justify-between py-[100px] px-[80px] pb-[60px]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Footer section */}
        <motion.div
          className="pb-0 flex flex-row justify-between"
          variants={fadeInUp}
        >
          <motion.div
            className="footer-left flex flex-col"
            variants={fadeInLeft}
          >
            <motion.h4
              className="inter-bold text-[36px] pb-3"
              variants={fadeInUp}
            >
              Stay in the Loop
            </motion.h4>
            <motion.div
              className="text-[13px] inter-semibold flex flex-row items-center gap-[40px]"
              variants={fadeInUp}
            >
              <motion.input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-[#474747] placeholder-gray-400 px-6 py-4 rounded-lg text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#E8492A] min-w-sm"
                variants={fadeInUp}
                whileFocus={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              />
              <motion.button
                className="min-w-[160px] font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)] text-sm border hover:cursor-pointer border-[#E8492A]"
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
              >
                SUBSCRIBE
              </motion.button>
            </motion.div>
            <motion.div
              className="flex flex-row gap-2 pt-2"
              variants={fadeInUp}
            >
              <motion.div className="flex items-center" variants={fadeInUp}>
                <motion.input
                  type="checkbox"
                  id="email-agreement"
                  className="appearance-none w-4 h-4 bg-transparent border-2 border-[#E8492A] rounded-sm hover:cursor-pointer checked:border-[#E8492A] checked:bg-[#E8492A] relative checked:after:content-['✓'] checked:after:absolute checked:after:top-[-2px] checked:after:left-[1px] checked:after:text-white checked:after:text-xs checked:after:font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
              </motion.div>
              <motion.label
                htmlFor="email-agreement"
                className="text-sm cursor-pointer"
                variants={fadeInUp}
                whileHover={{ opacity: 0.8 }}
              >
                I agree to receive emails from CYL Labs.
              </motion.label>
            </motion.div>
          </motion.div>

          <motion.div
            className="footer-right flex flex-row gap-26"
            variants={fadeInRight}
          >
            <motion.div
              className="footer-pages flex flex-row gap-16"
              variants={staggerChildren}
            >
              <motion.div
                className="footer-page flex flex-col gap-4"
                variants={fadeInUp}
              >
                <motion.h4
                  className="inter-semibold text-lg"
                  variants={footerItemVariants}
                >
                  Home
                </motion.h4>
                <motion.div
                  className="footer-items inter-semibold text-xs flex flex-col gap-4"
                  variants={staggerChildren}
                >
                  {[
                    "Services",
                    "Why Us?",
                    "Exposure",
                    "Contact Us",
                    "Highlights",
                  ].map((item, index) => (
                    <motion.p
                      key={index}
                      variants={footerItemVariants}
                      whileHover={{
                        x: 5,
                        color: "#E8492A",
                        transition: { duration: 0.2 },
                      }}
                      className="cursor-pointer"
                    >
                      {item}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="footer-page flex flex-col gap-4"
                variants={fadeInUp}
              >
                <motion.h4
                  className="inter-semibold text-lg"
                  variants={footerItemVariants}
                >
                  Pricing
                </motion.h4>
                <motion.div
                  className="footer-items inter-semibold text-xs flex flex-col gap-4"
                  variants={staggerChildren}
                >
                  {["Plans", "Add-ons", "Breakdown"].map((item, index) => (
                    <motion.p
                      key={index}
                      variants={footerItemVariants}
                      whileHover={{
                        x: 5,
                        color: "#E8492A",
                        transition: { duration: 0.2 },
                      }}
                      className="cursor-pointer"
                    >
                      {item}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="footer-page flex flex-col gap-4"
                variants={fadeInUp}
              >
                <motion.h4
                  className="inter-semibold text-lg"
                  variants={footerItemVariants}
                >
                  Contact
                </motion.h4>
                <motion.div
                  className="footer-items inter-semibold text-xs flex flex-col gap-4"
                  variants={staggerChildren}
                >
                  <motion.p
                    variants={footerItemVariants}
                    whileHover={{
                      x: 5,
                      color: "#E8492A",
                      transition: { duration: 0.2 },
                    }}
                    className="cursor-pointer"
                  >
                    Contact Us
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="footer-socials flex flex-col gap-4"
              variants={fadeInUp}
            >
              <motion.h4
                className="inter-semibold text-lg"
                variants={footerItemVariants}
              >
                Socials
              </motion.h4>
              <motion.div
                className="social inter-semibold text-xs flex flex-row gap-2 items-center cursor-pointer"
                variants={footerItemVariants}
                whileHover={{
                  x: 5,
                  color: "#E8492A",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  whileHover={{
                    rotate: 15,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Instagram size={16} />
                </motion.div>
                <p>Instagram</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Big animated name */}
        <div className="relative overflow-hidden py-54 text-[320px] text-center inter-semibold flex justify-center">
          <motion.h1
            className="text-white top-[50%] absolute transform translate-y-[-55%]"
            variants={logoTextVariants}
          >
            cyllabs.
          </motion.h1>
          <motion.h1
            className="accent-text animate-[animate_7s_ease-in-out_infinite] absolute transform translate-y-[-55%]"
            variants={logoTextVariants}
          >
            cyllabs.
          </motion.h1>
        </div>
      </motion.section>

      {/* Animation style */}
      <style>{`
        @keyframes animate {
        0%, 100% {
          clip-path: polygon(
            0% 60%, 10% 55%, 20% 58%, 30% 62%, 40% 60%,
            50% 58%, 60% 55%, 70% 57%, 80% 60%, 90% 62%, 100% 60%,
            100% 100%, 0% 100%
          );
        }

        25% {
          clip-path: polygon(
            0% 58%, 10% 60%, 20% 62%, 30% 60%, 40% 57%,
            50% 55%, 60% 58%, 70% 62%, 80% 60%, 90% 57%, 100% 55%,
            100% 100%, 0% 100%
          );
        }

        50% {
          clip-path: polygon(
            0% 55%, 10% 57%, 20% 60%, 30% 62%, 40% 60%,
            50% 58%, 60% 55%, 70% 52%, 80% 55%, 90% 58%, 100% 60%,
            100% 100%, 0% 100%
          );
        }

        75% {
          clip-path: polygon(
            0% 57%, 10% 60%, 20% 62%, 30% 60%, 40% 58%,
            50% 55%, 60% 57%, 70% 60%, 80% 62%, 90% 60%, 100% 58%,
            100% 100%, 0% 100%
          );
        }
      }

      `}</style>
    </>
  );
}
