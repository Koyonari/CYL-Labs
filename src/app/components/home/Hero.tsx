"use client";

import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";

export default function Hero() {
  return (
    <div
      className="h-screen flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/abstract-desk.png')" }}
    >
      <Wrapper className="w-screen h-full flex flex-col justify-between relative !pt-0 z-10">
        <Navbar />
        <div className="flex flex-col items-end text-white gap-4">
          <motion.div
            className="flex items-end gap-8 max-[1200px]:gap-[22px] max-md:gap-4 max-sm:gap-[10px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
          >
            <h1 className="text-[256px] font-semibold max-[1200px]:text-[176px] max-md:text-[128px] max-sm:text-[80px]">
              cyllabs
            </h1>
            <div className="w-8 h-8 bg-[#FD5001] rounded-full mb-10 max-[1200px]:w-[22px] max-[1200px]:h-[22px] max-[1200px]:mb-6 max-md:w-4 max-md:h-4 max-md:mb-5 max-sm:w-[10px] max-sm:h-[10px] max-sm:mb-3"></div>
          </motion.div>
          <motion.p
            className="text-[28px] opacity-70"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
              delay: 0.2,
            }}
          >
            cut your losses.
          </motion.p>
        </div>
      </Wrapper>
    </div>
  );
}
