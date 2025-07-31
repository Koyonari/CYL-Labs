"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Highlights() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pausedProgressRef = useRef<number>(0);

  const SLIDE_DURATION = 5000;
  const PROGRESS_UPDATE_INTERVAL = 50;

  const carouselItems = [
    "/exposure.jpg",
    "/exposure.jpg",
    "/exposure.jpg",
    "/exposure.jpg",
    "/exposure.jpg",
  ];

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

  return (
    <section className="pt-12 pl-24 primary-text min-h-screen">
      <div className="flex flex-col max-w-7xl">
        {/* Title */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl inter-bold">Highlights</h2>
        </div>

        {/* Carousel Container */}
        <div className="flex flex-col overflow-hidden justify-center items-center">
          {/* Carousel */}
          <div className="relative mb-6 w-full">
            <div className="w-full max-w-[1000px] mx-auto overflow-hidden rounded-lg">
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
                        className="w-full h-full object-cover rounded-lg shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controls Container */}
          <div className="flex justify-center items-center space-x-4 md:space-x-6">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-[18px] md:h-[18px]"
                >
                  <rect x="6" y="4" width="4" height="16" fill="black" />
                  <rect x="14" y="4" width="4" height="16" fill="black" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-[18px] md:h-[18px]"
                >
                  <polygon points="5,3 19,12 5,21" fill="black" />
                </svg>
              )}
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2 md:gap-3 py-3 md:py-4 px-4 md:px-5 rounded-full bg-gray-300">
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
                      width: isActive ? "32px" : "8px",
                      height: "8px",
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

                    {/* Progress fill - only for active slide */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 bg-red-500 rounded-full"
                        style={{
                          height: "8px",
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
        </div>
      </div>
    </section>
  );
}
