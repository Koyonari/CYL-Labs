"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const sections = [
  {
    id: 1,
    title: "Design Systems",
    description: "Building scalable design systems that ensure consistency across all touchpoints while maintaining flexibility for innovation.",
    image: "/laptop/laptop1.svg"
  },
  {
    id: 2,
    title: "User Experience",
    description: "Crafting intuitive interfaces that prioritize user needs through research, testing, and iterative design processes.",
    image: "/laptop/laptop1.svg"
  },
  {
    id: 3,
    title: "Development",
    description: "Implementing cutting-edge solutions with clean code, optimal performance, and seamless user interactions.",
    image: "/laptop/laptop1.svg"
  }
];

export default function Laptop() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen relative py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 lg:items-start items-center min-h-screen">
          
          {/* Laptop Image */}
          <div className="order-2 lg:order-1 z-10 lg:sticky lg:top-1/2 lg:-translate-y-1/2">
            <div className="relative max-w-lg mx-auto">
              <Image
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-96 order-1 lg:order-2">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => sectionRefs.current[index] = el}
                className="relative"
              >
                {/* Large Section Number */}
                <div 
                  className="text-8xl sm:text-9xl font-black absolute -top-8 -left-4 opacity-5 pointer-events-none text-black"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {String(section.id).padStart(2, '0')}
                </div>

                {/* Text Content */}
                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <h3 
                      className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none text-black"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {section.title}
                    </h3>
                  </div>


                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
