"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

export default function Highlights() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showStickyControls, setShowStickyControls] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pausedProgressRef = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const SLIDE_DURATION = 5000;
  const PROGRESS_UPDATE_INTERVAL = 50;

  const carouselItems = [
    "/exposure.jpg",
    "/exposure.jpg",
    "/exposure.jpg",
    "/exposure.jpg",
    "/exposure.jpg",
  ];

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

  const scaleIn: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    pausedProgressRef.current = 0;
    if (isPlaying) {
      startAutoPlay(0);
    }
  };

  const startAutoPlay = (startProgress: number = pausedProgressRef.current) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    setProgress(startProgress);

    const remainingTime =
      SLIDE_DURATION - (startProgress / 100) * SLIDE_DURATION;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress =
          prev + (PROGRESS_UPDATE_INTERVAL / SLIDE_DURATION) * 100;
        if (newProgress >= 100) {
          return 100;
        }
        pausedProgressRef.current = newProgress;
        return newProgress;
      });
    }, PROGRESS_UPDATE_INTERVAL);

    intervalRef.current = setTimeout(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % carouselItems.length;
        return nextSlide;
      });
      setProgress(0);
      pausedProgressRef.current = 0;

      startRegularInterval();
    }, remainingTime);
  };

  const startRegularInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress =
          prev + (PROGRESS_UPDATE_INTERVAL / SLIDE_DURATION) * 100;
        if (newProgress >= 100) {
          pausedProgressRef.current = 0;
          return 0;
        }
        pausedProgressRef.current = newProgress;
        return newProgress;
      });
    }, PROGRESS_UPDATE_INTERVAL);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % carouselItems.length;
        return nextSlide;
      });
      setProgress(0);
      pausedProgressRef.current = 0;
    }, SLIDE_DURATION);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      clearTimeout(intervalRef.current);
    }
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    pausedProgressRef.current = progress;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pausedProgressRef.current = progress;
    }
    setIsPlaying(!isPlaying);
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const rect = carouselRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const carouselTop = rect.top;
      const carouselBottom = rect.bottom;
      const carouselHeight = rect.height;

      // Calculate how much of the carousel is visible
      const visibleTop = Math.max(0, carouselTop);
      const visibleBottom = Math.min(windowHeight, carouselBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibilityRatio = visibleHeight / carouselHeight;

      // Show controls
      const shouldShow = visibilityRatio >= 0.8;
      setShowStickyControls(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay(pausedProgressRef.current);
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay(0);
    } else {
      pausedProgressRef.current = 0;
      setProgress(0);
    }
  }, [currentSlide]);

  useEffect(() => {
    return () => {
      stopAutoPlay();
    };
  }, []);

  const ControlsContainer = ({ className = "" }) => (
    <div
      className={`flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-6 ${className}`}
    >
      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]"
          >
            <rect x="6" y="4" width="4" height="16" fill="black" />
            <rect x="14" y="4" width="4" height="16" fill="black" />
          </svg>
        ) : (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]"
          >
            <polygon points="5,3 19,12 5,21" fill="black" />
          </svg>
        )}
      </button>

      {/* Dots Indicator */}
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 rounded-full bg-gray-300">
        {carouselItems.map((_, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={index}
              className="relative flex items-center justify-center cursor-pointer"
              onClick={() => goToSlide(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToSlide(index);
                }
              }}
              style={{
                width: isActive ? "24px" : "6px",
                height: "6px",
                transition: "width 300ms ease",
              }}
            >
              {/* Background dot */}
              <div
                className="absolute inset-0 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />

              {/* Progress fill */}
              {isActive && (
                <div
                  className="absolute left-0 top-0 bg-red-500 rounded-full"
                  style={{
                    height: "6px",
                    width: `${Math.min(Math.max(progress, 0), 100)}%`,
                    transition: isPlaying ? "width 50ms linear" : "none",
                    zIndex: 1,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 secondary-text min-h-screen bg-[#FD5001]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col max-w-7xl mx-auto">
          {/* Title */}
          <motion.div className="mb-8 md:mb-12 lg:mb-16" variants={fadeInLeft}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl helvetica-bold mb-4 md:mb-6 tracking-tight"
              variants={fadeInUp}
            >
              Who we work with.
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl helvetica-light tracking-tight"
              variants={fadeInUp}
            >
              Here are just a few of the businesses
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              we&apos;re proud to work with.
            </motion.p>
          </motion.div>

          {/* Carousel Container */}
          <div className="flex flex-col overflow-hidden justify-center items-center">
            {/* Carousel */}
            <motion.div
              ref={carouselRef}
              className="relative mb-4 sm:mb-6 w-full"
              variants={scaleIn}
            >
              <div className="w-full mx-auto max-w-[280px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1100px] overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl">
                <div className="aspect-video w-full">
                  <div
                    className="flex transition-transform duration-300 ease-in-out h-full"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {carouselItems.map((imageUrl, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-full h-full rounded-lg overflow-hidden"
                      >
                        <Image
                          src={imageUrl}
                          alt="Google search results showing website ranking"
                          width={2667}
                          height={1500}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Controls Container */}
      <div
        className={`fixed bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          showStickyControls
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <ControlsContainer className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 md:p-4 shadow-lg border border-gray-200" />
      </div>
    </>
  );
}
