"use client";
import React, { useRef, useEffect, useState } from "react";

interface Section {
  id: number;
  title: string;
  description: string;
  image: string;
}

const sections: Section[] = [
  {
    id: 1,
    title: "Design Systems",
    description:
      "Building scalable design systems that ensure consistency across all touchpoints while maintaining flexibility for innovation.",
    image: "/laptop/laptop1.svg",
  },
  {
    id: 2,
    title: "User Experience",
    description:
      "Crafting intuitive interfaces that prioritize user needs through research, testing, and iterative design processes.",
    image: "/laptop/laptop2.svg",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Implementing cutting-edge solutions with clean code, optimal performance, and seamless user interactions.",
    image: "/laptop/laptop3.svg",
  },
];

export default function StickyScroll() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !contentRef.current) return;

      // Get the first and last section positions
      const firstSection = sectionRefs.current[0];
      const lastSection = sectionRefs.current[sections.length - 1];

      if (!firstSection || !lastSection) return;

      const firstSectionRect = firstSection.getBoundingClientRect();
      const lastSectionRect = lastSection.getBoundingClientRect();

      // Calculate when sticky should be active
      const viewportCenter = window.innerHeight / 2;
      const firstSectionCenter =
        firstSectionRect.top + firstSectionRect.height / 2;
      const lastSectionCenter =
        lastSectionRect.top + lastSectionRect.height / 2;

      // Sticky should be active when first section center has passed viewport center
      // and last section center hasn't passed viewport center yet
      const shouldBeSticky =
        firstSectionCenter <= viewportCenter &&
        lastSectionCenter >= viewportCenter;

      // Handle transition state
      if (isSticky !== shouldBeSticky) {
        setIsTransitioning(true);

        // Add a small delay to create smooth transition effect
        setTimeout(() => {
          setIsSticky(shouldBeSticky);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300); // Match transition duration
        }, 50);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0;
        let maxIndex = 0;

        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxIndex = index;
          }
        });

        // Only update if we have a significant intersection
        if (maxRatio > 0.3) {
          setActiveIndex(maxIndex);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current[index] = el;
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row w-full overflow-x-clip"
      ref={containerRef}
    >
      {/* Left Image Section */}
      <div
        className={`w-full md:w-1/2 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 ${
          isSticky ? "md:h-screen md:sticky md:top-0" : "md:h-auto"
        }`}
        ref={imageContainerRef}
      >
        {/* Container for image - larger on bigger screens */}
        <div
          className={`w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl flex items-center justify-center transition-all duration-300 ease-in-out ${
            isSticky || isTransitioning
              ? "h-full relative"
              : "flex-col space-y-8 sm:space-y-12 md:space-y-16"
          }`}
        >
          {isSticky || isTransitioning
            ? // Sticky mode
              sections.map((section, index) => (
                <img
                  key={section.id}
                  src={section.image}
                  alt={section.title}
                  className={`absolute object-contain w-full h-auto max-h-[50vh] sm:max-h-[55vh] md:max-h-[65vh] lg:max-h-[75vh] xl:max-h-[80vh] 2xl:max-h-[85vh] transition-all duration-700 ease-in-out ${
                    activeIndex === index
                      ? `opacity-100 scale-100 ${
                          isTransitioning && !isSticky
                            ? "translate-y-8"
                            : "translate-y-0"
                        }`
                      : "opacity-0 scale-95 translate-y-4"
                  }`}
                />
              ))
            : // Non-sticky mode
              sections.map((section) => (
                <div
                  key={section.id}
                  className="min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center"
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="object-contain w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[75vh] 2xl:max-h-[80vh] transition-all duration-300 ease-in-out"
                  />
                </div>
              ))}
        </div>
      </div>

      {/* Right Scrollable Section */}
      <div
        className="w-full md:w-1/2 space-y-8 sm:space-y-12 md:space-y-16 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:pr-12"
        ref={contentRef}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={setRef(index)}
            data-index={index}
            className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center"
          >
            <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900 leading-tight">
                {section.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
