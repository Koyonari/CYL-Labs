import { ArrowUpRight } from "lucide-react";
import Navbar from "./navbarv2";
import { motion, Variants } from "framer-motion";
export default function Hero() {
  // Swiss design animation variants
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
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.4,
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.8,
      },
    },
  };

  return (
    <motion.section
      className="h-screen secondary-text relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Navbar */}
      <Navbar />
      {/* Main Hero */}
      <div className="px-14 mt-8 flex helvetica-bold justify-between">
        <motion.div className="w-2xl" variants={containerVariants}>
          <motion.p className="text-8xl mb-6" variants={textVariants}>
            Craft your digital identity.
          </motion.p>
          <motion.p
            className="text-6xl mb-8 text-[#999999]"
            variants={textVariants}
          >
            Make your first impression count.
          </motion.p>
          <motion.div
            className="flex flex-row text-5xl font-extrabold items-center group cursor-pointer"
            variants={ctaVariants}
            whileHover={{
              x: 8,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
            <motion.div
              animate={{
                rotate: [0, 10, 0],
                x: [0, 2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            >
              <ArrowUpRight
                size={48}
                strokeWidth={3}
                className="pt-1 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Image */}
        <motion.div
          variants={imageVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <img
            src="/hero.png"
            alt="Hero"
            className="w-md rounded-xl object-cover shadow-2xl"
            style={{ height: "calc(100vh - 12rem)" }}
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
        {/* Animated line */}
        <div className="relative">
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="absolute top-0 left-0 w-px h-4 bg-gradient-to-b from-transparent via-white to-transparent animate-shine"></div>
        </div>
      </motion.div>
      {/* Animation for Animated Line */}
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
