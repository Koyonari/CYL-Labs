"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
];

const orangeImages = [
  "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=600&fit=crop",
];

export default function ScrollCarousel() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const orangeTitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [overlayProgress, setOverlayProgress] = useState(0);
  
  const isInView = useInView(titleRef, { once: true, threshold: 0.5 });
  const isOrangeInView = useInView(orangeTitleRef, { once: true, threshold: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.5 });

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
        ease: [0.25, 0.25, 0, 1],
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
        delay: 0.2,
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

  const imageStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariant: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
        delay: 0.5,
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

  useEffect(() => {
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    const overlayElement = overlayRef.current;
    const scrollContainer = scrollElement?.parentElement;

    if (!container || !scrollElement || !overlayElement || !scrollContainer)
      return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const isInZone = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInZone) {
        const progress =
          Math.abs(rect.top) / (containerHeight - window.innerHeight);
        const clampedProgress = Math.max(0, Math.min(1, progress));

        const scrollWidth = scrollElement.scrollWidth;
        const scrollContainerWidth = scrollContainer.offsetWidth;
        const scrollDistance = scrollWidth - scrollContainerWidth;

        // Start overlay at 25% progress, complete at 100%
        const overlayStart = 0.25;
        const overlayEnd = 0.9;

        // Overlay calculation
        let rectProgress = 0;
        if (clampedProgress >= overlayStart) {
          rectProgress =
            (clampedProgress - overlayStart) / (overlayEnd - overlayStart);
        }

        const overlayProgressClamped = Math.max(0, rectProgress);
        setOverlayProgress(overlayProgressClamped);
        const translateX = -overlayProgressClamped * scrollDistance;
        scrollElement.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
        const orangeImagesContainer = overlayElement?.querySelector(
          ".flex.items-center"
        ) as HTMLElement;
        if (orangeImagesContainer) {
          orangeImagesContainer.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="scroll-carousel relative"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden px-4 sm:px-8 md:px-16">
        {/* content container */}
        <div className="flex flex-col justify-center h-full">
          {/* Title */}
          <motion.div 
            ref={titleRef}
            className="mb-14 text-left pl-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p 
              className="text-6xl helvetica-bold mb-8"
              variants={fadeInLeft}
            >
              What you expect
            </motion.p>
            <motion.p 
              className="text-2xl text-[#999999] helvetica-light tracking-tight"
              variants={fadeInUp}
            >
              Generic design, weak messaging,
              <br />
              and a site that quietly costs you sales.
            </motion.p>
          </motion.div>

          {/* Images container */}
          <motion.div
            ref={scrollRef}
            className="flex items-center transition-transform duration-300 ease-out"
            style={{ width: "max-content" }}
            variants={imageStagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-2 sm:mx-4 first:ml-4 last:mr-4 sm:first:ml-8 sm:last:mr-8"
                variants={imageVariant}
              >
                <div className="relative w-[75vw] sm:w-96 md:w-[28rem] h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={src}
                    alt={`Landscape ${index + 1}`}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      Image {index + 1}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90">
                      Beautiful landscape
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Orange overlay */}
        <div
          ref={overlayRef}
          className="absolute bg-[#FD5001]"
          style={{
            clipPath:
              overlayProgress >= 1
                ? "inset(0)"
                : `inset(0 0 0 ${Math.max(1, 100 - overlayProgress * 100)}%)`,
            backgroundImage: `
              radial-gradient(circle, white 2px, transparent 2px),
              radial-gradient(circle, white 2.5px, transparent 2.5px),
              radial-gradient(circle, white 3px, transparent 3px),
              radial-gradient(circle, white 3.5px, transparent 3.5px),
              radial-gradient(circle, white 4px, transparent 4px),
              radial-gradient(circle, white 4.5px, transparent 4.5px),
              radial-gradient(circle, white 5px, transparent 5px)
            `,
            backgroundPosition: `
              0px 0,
              155px 0,
              310px 0,
              465px 0,
              620px 0,
              775px 0,
              930px 0
            `,
            backgroundSize: `
              1085px 140px
            `,
            backgroundRepeat: "repeat-y",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        >
          {/* Orange content container */}
          <div className="flex flex-col justify-center h-full w-full px-4 sm:px-8 md:px-16">
            {/* Title */}
            <motion.div 
              ref={orangeTitleRef}
              className="mb-14 text-left pl-8"
              variants={containerVariants}
              initial="hidden"
              animate={isOrangeInView ? "visible" : "hidden"}
            >
              <motion.p 
                className="text-6xl helvetica-bold mb-8 text-white"
                variants={fadeInLeft}
              >
                What you get
              </motion.p>
              <motion.p 
                className="text-2xl helvetica-light tracking-tight text-white"
                variants={fadeInUp}
              >
                Your site won&apos;t just look good
                <br />— it&apos;ll finally work as hard as you do.
              </motion.p>
            </motion.div>

            {/* Orange Images */}
            <motion.div
              className="flex items-center transition-transform duration-300 ease-out overflow-visible"
              style={{
                width: "max-content",
                transform: "translate3d(0px, 0px, 0px)",
              }}
              variants={imageStagger}
              initial="hidden"
              animate={isOrangeInView ? "visible" : "hidden"}
            >
              {orangeImages.map((src, index) => (
                <motion.div
                  key={`orange-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-4 first:ml-4 last:mr-4 sm:first:ml-8 sm:last:mr-8"
                  variants={imageVariant}
                >
                  <div className="relative w-[75vw] sm:w-96 md:w-[28rem] h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={src}
                      alt={`Orange theme ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        Orange {index + 1}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90">
                        Vibrant scenes
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            ref={ctaRef}
            className="absolute bottom-16 flex flex-row helvetica-bold pl-24 text-white"
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <motion.p 
              className="text-5xl mb-4"
              variants={fadeInLeft}
            >
              Read more about{" "}
              <span className="relative inline-block">
                <span className="relative z-10">this</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full"
                  variants={underlineAnimation}
                />
              </span>
            </motion.p>
            <motion.div variants={arrowAnimation}>
              <ArrowUpRight size={48} strokeWidth={2.5} className="pt-1" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
