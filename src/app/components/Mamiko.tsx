import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Wrapper from "./Wrapper";

export default function Mamiko() {
  const [containerStart, setContainerStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (containerRef.current) {
      setContainerStart(containerRef.current.getBoundingClientRect().top);
    }
  }, [containerRef.current]);

  const scale = useSpring(
    useTransform(
      scrollY,
      [containerStart - window.innerHeight, containerStart],
      [1, 0]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const opacity = useSpring(
    useTransform(
      scrollY,
      [containerStart - window.innerHeight, containerStart],
      [1, 0]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <div className="w-full bg-[#020202] sticky top-0" ref={containerRef}>
      <Wrapper className="w-full h-screen !py-16">
        <motion.div
          className="w-full h-full flex justify-between gap-10 max-[1200px]:flex-col max-[1200px]:justify-normal"
          style={{ scale, opacity }}
        >
          <div className="w-3/4 h-full relative max-[1200px]:w-full max-[1200px]:h-1/2">
            <Image className="object-cover" src="/mamiko.png" alt="" fill />
          </div>
          <div className="w-1/4 flex flex-col justify-center gap-5 text-white text-right max-[1200px]:w-full max-[1200px]:text-left">
            <h1 className="text-[64px] font-semibold max-sm:text-[40px]">
              Mamiko
            </h1>
            <p className="text-[20px] leading-[1.2] tracking-normal opacity-70 max-sm:text-[20px]">
              Naming, strategy, and identity for a boutique architecture firm
              emphasizing simplicity, landscape, and form.
            </p>
          </div>
        </motion.div>
      </Wrapper>
    </div>
  );
}
