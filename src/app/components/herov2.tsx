import { ArrowUpRight } from "lucide-react";
import Navbar from "./navbarv2";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 },
    },
  };

  return (
    <motion.section
      className="min-h-screen secondary-text relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Hero */}
      <div className="px-6 sm:px-10 md:px-14 mt-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text */}
        <motion.div className="w-full lg:w-1/2" variants={containerVariants}>
          <motion.p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4"
            variants={textVariants}
          >
            Craft your digital identity.
          </motion.p>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#999999] mb-6"
            variants={textVariants}
          >
            Make your first impression count.
          </motion.p>
          <motion.div
            className="flex flex-row text-lg sm:text-2xl md:text-3xl font-extrabold items-center group cursor-pointer"
            variants={ctaVariants}
            whileHover={{
              x: 8,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
            <motion.div
              animate={{ rotate: [0, 10, 0], x: [0, 2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            >
              <ArrowUpRight
                size={36}
                strokeWidth={3}
                className="ml-2 pt-1 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:pl-12"
          variants={imageVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full max-w-sm sm:max-w-md md:max-w-md xl:max-w-xl rounded-xl object-cover shadow-2xl lg:[height:calc(100vh-13rem)]"
          />
        </motion.div>
      </div>

      {/* Scroll down CTA */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.5,
          },
        }}
      >
        <div className="jetbrains-medium text-sm mb-2 animate-pulse">
          Scroll
        </div>
        <div className="relative">
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="absolute top-0 left-0 w-px h-4 bg-gradient-to-b from-transparent via-white to-transparent animate-shine"></div>
        </div>
      </motion.div>

      <style>{`
        @keyframes shine {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
}
