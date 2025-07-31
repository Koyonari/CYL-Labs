import { useEffect, useRef, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop'
];

const orangeImages = [
  'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=600&fit=crop'
];

export default function ScrollCarousel() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [overlayProgress, setOverlayProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    const overlayElement = overlayRef.current;
    const scrollContainer = scrollElement?.parentElement;

    if (!container || !scrollElement || !overlayElement || !scrollContainer) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const isInZone = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInZone) {
        const progress = Math.abs(rect.top) / (containerHeight - window.innerHeight);
        const clampedProgress = Math.max(0, Math.min(1, progress));

        const scrollWidth = scrollElement.scrollWidth;
        const scrollContainerWidth = scrollContainer.offsetWidth;
        const scrollDistance = scrollWidth - scrollContainerWidth;

        const translateX = -scrollDistance * clampedProgress;

        scrollElement.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
        overlayElement.style.transform = `translate3d(${translateX}px, 0px, 0px)`;

        const overlayStart = 0.25;
        const rectProgress = clampedProgress >= overlayStart
          ? (clampedProgress - overlayStart) / (1 - overlayStart)
          : 0;

        setOverlayProgress(Math.min(1, rectProgress));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="scroll-carousel relative"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden px-4 sm:px-8 md:px-16 lg:px-28">
        <div
          ref={scrollRef}
          className="flex items-center h-full transition-transform duration-300 ease-out"
          style={{ width: 'max-content' }}
        >
          <div className = "absolute top-40 left-5 inter-bold text-[40px]">What you expect</div>
       
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-2 sm:mx-4 first:ml-4 last:mr-4 sm:first:ml-8 sm:last:mr-8"
            >
              <div className="relative w-[75vw] sm:w-96 md:w-[28rem] h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={src}
                  alt={`Landscape ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold">Image {index + 1}</h3>
                  <p className="text-xs sm:text-sm opacity-90">Beautiful landscape</p>
                </div>
              </div>
            </div>
          ))}

          {/* Final Card */}
          <div className="flex-shrink-0 mx-2 sm:mx-4 first:ml-4 last:mr-4 sm:first:ml-8 sm:last:mr-8">
            <div className="flex items-center justify-center w-[75vw] sm:w-96 md:w-[28rem] h-48 sm:h-64 md:h-72 rounded-lg bg-black text-white text-center shadow-xl">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold mb-1">You've reached the end!</h2>
                <p className="text-xs sm:text-sm opacity-80">Thanks for scrolling ✨</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orange overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex items-center h-full bg-orange-500"
          style={{
            width: 'max-content',
            transform: 'translate3d(0px, 0px, 0px)',
            clipPath: `inset(0 0 0 ${100 - (overlayProgress * 100)}%)`
          }}
        >
        <div className = "absolute top-40 right-10 inter-bold text-[40px] secondary-text">What you get</div>
       

          {orangeImages.map((src, index) => (
            <div
              key={`orange-${index}`}
              className="flex-shrink-0 mx-2 sm:mx-4 first:ml-4 last:mr-4 sm:first:ml-8 sm:last:mr-8"
            >
              <div className="relative w-[75vw] sm:w-96 md:w-[28rem] h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={src}
                  alt={`Orange theme ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold">Orange {index + 1}</h3>
                  <p className="text-xs sm:text-sm opacity-90">Vibrant scenes</p>
                </div>
              </div>
            </div>
          ))}

          {/* Final orange card */}
          <div className="flex-shrink-0 mx-2 sm:mx-4 first:ml-4 last:mr-4 sm:first:ml-8 sm:last:mr-8">
            <div className="flex w-[75vw] sm:w-96 md:w-[28rem] h-48 sm:h-64 md:h-72 rounded-lg text-white items-center">
              <div>
                <p className = "pl-8"><span className = "inter-bold text-[52px]">Interested?</span><br/>Check what you can get for <span className = "underline text-3xl inter-semibold italic cursor-pointer">free</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
