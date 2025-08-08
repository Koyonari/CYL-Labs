"use client";
import { useEffect, useRef } from "react";
import Hero from "./components/herov2";
import Laptop from "./components/laptop";
import ScrollCarousel from "./components/scrollcarousel";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Highlights from "./components/highlights";
import Evaluator from "./components/evaluator";

export default function Home() {
  const handleMessageSent = () => {};
  const mainContentRef = useRef<HTMLDivElement>(null);
  const footerRevealRef = useRef<HTMLDivElement>(null);

  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contactRef.current || !footerRevealRef.current || !footerRef.current)
        return;

      const contact = contactRef.current;
      const footer = footerRef.current;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Distance from top of document
      const contactTop = contact.offsetTop;
      const contactHeight = contact.offsetHeight;

      // The scroll position where we start revealing the footer
      const footerStartReveal = contactTop + contactHeight - windowHeight;

      // We'll give it a reveal distance of 1 screen height
      const revealDistance = windowHeight;

      if (scrollY < footerStartReveal) {
        // Before reveal starts - show only bottom quarter of footer
        footer.style.transform = `translateY(${windowHeight * 0.25}px)`;
        // Footer is not interactive
        footer.style.pointerEvents = "none";
      } else if (
        scrollY >= footerStartReveal &&
        scrollY <= footerStartReveal + revealDistance
      ) {
        // Progress from bottom 1/4 visible -> fully visible
        const revealProgress = (scrollY - footerStartReveal) / revealDistance;
        const footerTranslateY = windowHeight * 0.25 * (1 - revealProgress);
        footer.style.transform = `translateY(${footerTranslateY}px)`;

        // Enable footer interaction
        if (revealProgress > 0.3) {
          footer.style.pointerEvents = "auto";
        } else {
          footer.style.pointerEvents = "none";
        }
      } else {
        // Fully revealed
        footer.style.transform = `translateY(0px)`;
        footer.style.pointerEvents = "auto";
      }
    };

    // Initial call
    handleScroll();

    // Add listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="relative secondary-bg">
      {/* Footer */}
      <div
        ref={footerRef}
        className="fixed inset-0 z-10 secondary-bg overflow-x-hidden will-change-transform h-screen"
        style={{ pointerEvents: "none" }}
      >
        <Footer />
      </div>

      {/* Main Content */}
      <div ref={mainContentRef} className="relative z-30 bg-white">
        {/* Radial Gradient Glow Background */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black"
          style={{ height: "225vh" }}
        >
          {/* Orange Gradient Glow */}
          <div
            className="absolute bottom-[-20vh] right-[-40vw] w-[200vw] h-[160vh] md:bottom-[-100px] md:right-[-180px] md:w-[1700px] md:h-[1500px] 2xl:w-[3360px] rounded-full blur-[100px] md:blur-[120px] z-0"
            style={{
              background: `radial-gradient(circle,
                #ff3c00 90%,
                #fc5a2f 40%,
                #fd7f53 65%,
                #fff7e3 95%,
                #ffffff 100%)`,
            }}
          />
          {/* White solid fade gradient */}
          <div
            className="absolute bottom-0 right-[-100vw] w-[300vw] h-[60vh] md:right-[-400px] md:w-[2340px] md:h-[800px] 2xl:w-[3360px] rounded-full z-10 pointer-events-none"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 15%,
                rgba(255, 255, 255, 0.5) 35%,
                rgba(255, 255, 255, 0.85) 65%,
                rgba(255, 255, 255, 1) 100%
              )`,
            }}
          />
          {/* White radial glow fading upward */}
          <div
            className="absolute bottom-[-100vh] right-[-100vw] w-[300vw] h-[200vh] md:bottom-[-1000px] md:right-[-560px] md:w-[2340px] md:h-[2080px] 2xl:w-[3360px] rounded-full z-20 pointer-events-none"
            style={{
              background: `radial-gradient(
                ellipse at bottom,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 1) 35%,
                rgba(255, 255, 255, 0.7) 55%,
                rgba(255, 255, 255, 0.3) 75%,
                rgba(255, 255, 255, 0) 100%
              )`,
              filter: "blur(160px)",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-30">
          <Hero />
          <section>
            <div className="flex-1">
              <Laptop />
              <ScrollCarousel />
              <Evaluator />
              <div className="bg-black">
                <Highlights />
              </div>
              <div ref={contactRef} className="will-change-transform">
                <Contact onMessageSent={handleMessageSent} />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Reveal Scroll Space */}
      <div
        ref={footerRevealRef}
        className="relative z-20 h-screen"
        style={{ pointerEvents: "none" }}
      />
      {/* Note to self: fucking pointer events was the solution the whole time */}
    </main>
  );
}
