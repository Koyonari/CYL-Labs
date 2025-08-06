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

  const isInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isOrangeInView = useInView(orangeTitleRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

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
        delay: 0.2,
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
      y: 20,
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

  useEffect(() => {
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    const overlayElement = overlayRef.current;
    const scrollContainer = scrollElement?.parentElement;

    if (!container || !scrollElement || !overlayElement || !scrollContainer)
      return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          const containerHeight = container.offsetHeight;
          const windowHeight = window.innerHeight;

          // start when container is 50% visible
          const isInZone =
            rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;

          if (isInZone) {
            // Simple linear progress from when container starts entering viewport
            let progress = 0;
            if (rect.top <= 0) {
              // Container top is above viewport - normal case
              progress = Math.abs(rect.top) / (containerHeight - windowHeight);
            } else {
              // Container is entering from bottom - should be 0
              progress = 0;
            }

            // Clamp between 0 and 1
            progress = Math.max(0, Math.min(1, progress));

            const scrollWidth = scrollElement.scrollWidth;
            const scrollContainerWidth = scrollContainer.offsetWidth;
            const scrollDistance = scrollWidth - scrollContainerWidth;

            // Start overlay much earlier and make it slower
            const overlayStart = 0.1;
            const overlayEnd = 0.95;

            // Overlay calculation
            let overlayProgress = 0;
            if (progress >= overlayStart) {
              overlayProgress =
                (progress - overlayStart) / (overlayEnd - overlayStart);
            }

            const overlayProgressClamped = Math.max(
              0,
              Math.min(1, overlayProgress)
            );
            setOverlayProgress(overlayProgressClamped);

            // Make the translation much slower by using square root
            const easedProgress = Math.sqrt(overlayProgressClamped);
            const translateX = -easedProgress * scrollDistance;

            // Apply transforms
            scrollElement.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
            scrollElement.style.willChange = "transform";

            const orangeImagesContainer = overlayElement?.querySelector(
              ".flex.items-center"
            ) as HTMLElement;
            if (orangeImagesContainer) {
              orangeImagesContainer.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
              orangeImagesContainer.style.willChange = "transform";
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Add multiple event listeners for better mobile support
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Force initial calculation
    handleScroll();
    // And again after a brief delay for mobile
    setTimeout(handleScroll, 50);
    setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="scroll-carousel relative touch-auto"
      style={{
        height: "400vh",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24"
        style={{
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
        }}
      >
        {/* content container */}
        <div className="flex flex-col justify-center h-full">
          {/* Title */}
          <motion.div
            ref={titleRef}
            className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 text-left pl-1 xs:pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl helvetica-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10"
              variants={fadeInLeft}
            >
              What you expect
            </motion.p>
            <motion.p
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#999999] helvetica-light tracking-tight leading-relaxed"
              variants={fadeInUp}
            >
              Generic design, weak messaging,
              <br className="hidden xs:block" />
              <span className="xs:hidden"> </span>
              and a site that quietly costs you sales.
            </motion.p>
          </motion.div>

          {/* Images container */}
          <motion.div
            ref={scrollRef}
            className="flex items-center transition-transform duration-300 ease-out will-change-transform"
            style={{
              width: "max-content",
              WebkitTransform: "translateZ(0)",
              transform: "translateZ(0)",
            }}
            variants={imageStagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-1 sm:mx-2 md:mx-4 first:ml-2 last:mr-2 sm:first:ml-4 sm:last:mr-4 md:first:ml-8 md:last:mr-8"
                variants={imageVariant}
              >
                <div className="relative w-[70vw] sm:w-[60vw] md:w-80 lg:w-96 xl:w-[28rem] h-32 sm:h-40 md:h-48 lg:h-64 xl:h-72 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={src}
                    alt={`Landscape ${index + 1}`}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-1.5 xs:bottom-2 sm:bottom-3 md:bottom-4 left-1.5 xs:left-2 sm:left-3 md:left-4 text-white">
                    <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                      Image {index + 1}
                    </h3>
                    <p className="text-[10px] xs:text-xs sm:text-sm md:text-base opacity-90">
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
          className="absolute bg-[#FD5001] overflow-hidden"
          style={{
            // CHROME FIX: Use mask instead of clip-path
            WebkitMask:
              overlayProgress >= 1
                ? "none"
                : `linear-gradient(90deg, transparent ${Math.max(
                    0,
                    100 - overlayProgress * 100
                  )}%, black ${Math.max(0, 100 - overlayProgress * 100)}%)`,
            mask:
              overlayProgress >= 1
                ? "none"
                : `linear-gradient(90deg, transparent ${Math.max(
                    0,
                    100 - overlayProgress * 100
                  )}%, black ${Math.max(0, 100 - overlayProgress * 100)}%)`,
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
          <div className="flex flex-col justify-center h-full w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
            {/* Title */}
            <motion.div
              ref={orangeTitleRef}
              className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 text-left pl-1 xs:pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8"
              variants={containerVariants}
              initial="hidden"
              animate={isOrangeInView ? "visible" : "hidden"}
            >
              <motion.p
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl helvetica-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 text-white"
                variants={fadeInLeft}
              >
                What you get
              </motion.p>
              <motion.p
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl helvetica-light tracking-tight text-white leading-relaxed"
                variants={fadeInUp}
              >
                Your site won&apos;t just look good
                <br className="hidden xs:block" />
                <span className="xs:hidden"> </span>— it&apos;ll finally work as
                hard as you do.
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
                  className="flex-shrink-0 mx-1 sm:mx-2 md:mx-4 first:ml-2 last:mr-2 sm:first:ml-4 sm:last:mr-4 md:first:ml-8 md:last:mr-8"
                  variants={imageVariant}
                >
                  <div className="relative w-[70vw] sm:w-[60vw] md:w-80 lg:w-96 xl:w-[28rem] h-32 sm:h-40 md:h-48 lg:h-64 xl:h-72 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={src}
                      alt={`Orange theme ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
                    <div className="absolute bottom-1.5 xs:bottom-2 sm:bottom-3 md:bottom-4 left-1.5 xs:left-2 sm:left-3 md:left-4 text-white">
                      <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                        Orange {index + 1}
                      </h3>
                      <p className="text-[10px] xs:text-xs sm:text-sm md:text-base opacity-90">
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
            className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 flex flex-row helvetica-bold pl-3 xs:pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16 2xl:pl-20 3xl:pl-24 text-white"
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mt-1 xs:mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8"
              variants={fadeInLeft}
            >
              Read more about{" "}
              <span className="relative inline-block">
                <span className="relative z-10">this</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 xs:h-0.5 sm:h-1 bg-white rounded-full"
                  variants={underlineAnimation}
                />
              </span>
            </motion.p>
            <motion.div variants={arrowAnimation}>
              <ArrowUpRight
                size={20}
                strokeWidth={2.5}
                className="pt-0.5 xs:pt-1 sm:pt-1 md:pt-1 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16 mt-1 xs:mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
