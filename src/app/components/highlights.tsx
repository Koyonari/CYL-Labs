'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  layout: 'image-left' | 'image-right';
}

const cardData: CardData[] = [
  {
    id: 1,
    title: 'Mamiko',
    subtitle: '2025',
    description: 'Exploring the intersection of contemporary fashion and digital artistry through bold compositions and striking visual narratives that challenge conventional boundaries.',
    image: 'https://framerusercontent.com/images/JiH7Nt3sT9vn16JnEmju4dPL4s.jpg',
    imageAlt: 'Mamiko',
    layout: 'image-left'
  },
  {
    id: 2,
    title: 'Family Mookata',
    subtitle: '2025',
    description: 'Embracing the power of negative space and geometric precision to create experiences that speak through simplicity and intentional restraint.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop&crop=center',
    imageAlt: 'Family Mookata',
    layout: 'image-right'
  }
];

export default function Highlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.set(card, {
          zIndex: cardData.length - index
        });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * (cardData.length - 1)}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const cardProgress = progress * (cardData.length - 1);

          const currentIndex = Math.floor(cardProgress);
          const transitionProgress = cardProgress - currentIndex;

          cardsRef.current.forEach((card, index) => {
            if (!card) return;
            const zIndex = index + 1;

            let y = window.innerHeight;
            let scale = 1;
            let opacity = 0;

            if (index < currentIndex) {
              // Past cards
              y = 0;
              scale = 0.9;
              opacity = 0;
            } else if (index === currentIndex) {
              // Current card
              y = 0;
              if (index === cardData.length - 1) {
                // Last card
                scale = 1;
                opacity = 1;
              } else {
                // Not last card
                scale = 1 - transitionProgress * 0.4;
                opacity = 1 - transitionProgress * 0.6;
              }
            } else if (index === currentIndex + 1) {
              // Next card
              y = (1 - transitionProgress) * window.innerHeight;
              scale = 1;
              opacity = 1; 
            } else {
              // Future cards
              y = window.innerHeight;
              scale = 1;
              opacity = 0;
            }

            gsap.set(card, {
              y,
              scale,
              opacity,
              zIndex
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="highlights bg-black h-screen relative overflow-hidden"
    >
      {cardData.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => addCardRef(el, index)}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black mx-auto"
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block rounded-none shadow-2xl overflow-hidden h-[70vh] max-h-[600px] w-full max-w-7xl">
            <div className={`flex h-full ${
              card.layout === 'image-right' ? 'flex-row-reverse pr-12' : 'pl-12 flex-row'
            }`}>
              {/* Image Section - 3/5 width on desktop */}
              <div className="w-3/5 relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Text Section - 2/5 width on desktop */}
              <div className={`w-2/5 p-12 lg:p-16 flex flex-col justify-center bg-black ${
                card.layout === 'image-right' ? 'items-start' : 'items-end text-right'
              }`}>
                <div className={`space-y-6 max-w-md ${
                  card.layout === 'image-right' ? '' : 'text-right'
                }`}>
                  {/* Subtitle */}
                  <div className="relative">
                    <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-200 block mb-2">
                      {card.subtitle}
                    </span>
                    <div className={`w-12 h-px bg-white ${
                      card.layout === 'image-right' ? '' : 'ml-auto'
                    }`}></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-light text-white leading-tight tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-300 leading-relaxed font-light tracking-wide">
                    {card.description}
                  </p>

                  {/* CTA */}
                  <div className="pt-4">
                    <button className={`group inline-flex items-center gap-3 text-md font-medium tracking-wide text-white hover:text-gray-300 transition-colors duration-300 ${
                      card.layout === 'image-right' ? '' : 'flex-row-reverse'
                    }`}>
                      <span className = "cursor-pointer">Explore Site</span>
                      <div className={`w-6 h-px bg-white group-hover:w-8 transition-all duration-300 ${
                        card.layout === 'image-right' ? '' : 'order-first'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden w-full h-full px-10 py-12 flex flex-col max-w-md mx-auto">
            {/* Square Image */}
            <div className="w-full aspect-square relative overflow-hidden rounded-lg mb-6 flex-shrink-0">
              <img
                src={card.image}
                alt={card.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 flex-grow flex flex-col justify-center">
              {/* Subtitle */}
              <div className="relative">
                <span className="text-md lg:text-xs font-medium tracking-[0.2em] uppercase text-gray-200 block mb-2">
                  {card.subtitle}
                </span>
                <div className="w-12 h-px bg-white"></div>
              </div>

              {/* Title */}
              <h3 className="text-3xl lg:text-2xl font-light text-white leading-tight tracking-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-md lg:text-sm text-gray-300 leading-relaxed font-light tracking-wide">
                {card.description}
              </p>

              {/* CTA */}
              <div className="pt-4">
                <button className="group inline-flex items-center gap-3 text-md lg:text-sm font-medium tracking-wide text-white hover:text-gray-300 transition-colors duration-300">
                  <span className = "cursor-pointer">Explore Site</span>
                  <div className="w-6 h-px bg-white group-hover:w-8 transition-all duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
