"use client";
import { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setProgress(0);
    setIsComplete(false);

    const startTimer = setTimeout(() => {
      const totalDuration = 1500;
      const interval = 10;
      const startTime = Date.now();

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const timeProgress = elapsed / totalDuration;

        let newProgress;
        if (timeProgress <= 0.3) {
          newProgress = (timeProgress / 0.3) * 50;
        } else {
          const slowPhaseProgress = (timeProgress - 0.3) / 0.7;
          const easedProgress = 1 - Math.pow(1 - slowPhaseProgress, 3);
          newProgress = 50 + easedProgress * 50;
        }

        if (elapsed >= totalDuration) {
          setProgress(100);
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 300);
        } else {
          setProgress(Math.min(newProgress, 100));
        }
      }, interval);

      return () => clearInterval(timer);
    }, 100);

    return () => clearTimeout(startTimer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-200 flex items-center justify-center transition-transform duration-700 ease-in-out ${
        isComplete ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Perfectly centered row */}
      <div className="flex items-center justify-center space-x-8 md:space-x-12">
        {/* Equal-width text containers */}
        <div className="w-20 text-center text-gray-700 inter-semibold text-3xl tracking-wider">
          cyl
        </div>

        {/* Loading bar container */}
        <div className="relative flex flex-col items-center">
          <div className="mb-4 jetbrains-medium text-sm text-gray-700 tabular-nums w-6 text-center">
            {Math.floor(progress).toString().padStart(2, "0")}
          </div>
          <div className="w-0.5 h-128 bg-gray-300 relative overflow-hidden">
            <div
              className="absolute bottom-0 w-full bg-gray-700 transition-all duration-75 ease-out"
              style={{ height: `${progress}%` }}
            />
          </div>
        </div>

        <div className="w-20 text-center text-gray-700 inter-semibold text-3xl tracking-wider">
          labs.
        </div>
      </div>
    </div>
  );
}
