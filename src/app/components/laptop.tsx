"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

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
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full overflow-x-clip">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 flex items-center justify-center px-4 py-6 md:p-0">
        <Image
          key={sections[activeIndex].image}
          src={sections[activeIndex].image}
          alt={sections[activeIndex].title}
          width={400}
          height={400}
          className="object-contain max-h-[60vh] md:max-h-full transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Right Scrollable Section */}
      <div className="w-full md:w-1/2 space-y-32 py-16 px-6 md:px-10">
        {sections.map((section, index) => (
          <div
            key={section.id}
            data-index={index}
            className="min-h-[70vh] flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {section.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
