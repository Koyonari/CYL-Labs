"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Highlights() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pausedProgressRef = useRef<number>(0); // Store progress when paused

  const SLIDE_DURATION = 5000; // 5 seconds per slide
  const PROGRESS_UPDATE_INTERVAL = 50; // Update progress every 50ms

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
    // Clear existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    setProgress(startProgress);

    // Calculate remaining time based on current progress
    const remainingTime =
      SLIDE_DURATION - (startProgress / 100) * SLIDE_DURATION;

    // Progress update interval
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress =
          prev + (PROGRESS_UPDATE_INTERVAL / SLIDE_DURATION) * 100;
        if (newProgress >= 100) {
          return 100;
        }
        pausedProgressRef.current = newProgress; // Update paused progress reference
        return newProgress;
      });
    }, PROGRESS_UPDATE_INTERVAL);

    // Slide change timeout (not interval) for the remaining time
    intervalRef.current = setTimeout(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % carouselItems.length;
        return nextSlide;
      });
      setProgress(0);
      pausedProgressRef.current = 0;

      // Start regular interval for subsequent slides
      startRegularInterval();
    }, remainingTime);
  };

  const startRegularInterval = () => {
    // Clear any existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    // Progress update interval
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress =
          prev + (PROGRESS_UPDATE_INTERVAL / SLIDE_DURATION) * 100;
        if (newProgress >= 100) {
          pausedProgressRef.current = 0;
          return 0; // Reset for next slide
        }
        pausedProgressRef.current = newProgress;
        return newProgress;
      });
    }, PROGRESS_UPDATE_INTERVAL);

    // Regular slide change interval
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
    // Store current progress when pausing
    pausedProgressRef.current = progress;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      // Pausing - store current progress
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

  // Handle slide changes (reset progress when slide changes)
  useEffect(() => {
    if (isPlaying) {
      startAutoPlay(0);
    } else {
      pausedProgressRef.current = 0;
      setProgress(0);
    }
  }, [currentSlide]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAutoPlay();
    };
  }, []);

  return (
    <section className="pr-0 py-12 primary-text h-screen flex">
      {/* Left */}
      <div className="flex-shrink-0 w-32 flex flex-col pt-1">
        <p>1-5</p>
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-16 flex-shrink-0">
          <h2 className="text-6xl inter-bold">Highlights</h2>
        </div>

        {/* Carousel Container */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Carousel */}
          <div className="relative mb-6">
            <div className="max-w-[1000px] w-full overflow-hidden rounded-lg h-[550px]">
              <div
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{
                  transform: `translateX(-${currentSlide * (1000 + 25)}px)`,
                  gap: "25px",
                }}
              >
                {carouselItems.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 rounded-lg overflow-hidden"
                    style={{ width: "1000px", height: "550px" }}
                  >
                    <Image
                      src={imageUrl}
                      alt="Google search results showing website ranking"
                      width={2667}
                      height={1500}
                      className="h-auto object-contain rounded-lg shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls Container */}
          <div className="flex justify-center items-center space-x-6">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="flex items-center justify-center w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                // Pause icon
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="6" y="4" width="4" height="16" fill="black" />
                  <rect x="14" y="4" width="4" height="16" fill="black" />
                </svg>
              ) : (
                // Play icon
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="5,3 19,12 5,21" fill="black" />
                </svg>
              )}
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-3 py-4 px-5 rounded-full bg-gray-300">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-300 overflow-hidden ${
                    currentSlide === index
                      ? "w-10 h-2.5 bg-white rounded-full"
                      : "w-2.5 h-2.5 bg-white rounded-full hover:bg-gray-400 hover:cursor-pointer"
                  }`}
                >
                  {/* Progress fill for active slide */}
                  {currentSlide === index && (
                    <div
                      className={`absolute top-0 left-0 h-full bg-[#E8492A] rounded-full ${
                        isPlaying
                          ? "transition-all duration-75 ease-linear"
                          : ""
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
