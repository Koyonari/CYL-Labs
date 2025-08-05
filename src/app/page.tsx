"use client";
import Hero from "./components/herov2";
import Laptop from "./components/laptop";
import ScrollCarousel from "./components/scrollcarousel";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Highlights from "./components/highlights";
import Evaluator from "./components/evaluator";

export default function Home() {
  const handleMessageSent = () => {};
  
  return (
    <main className="relative bg-white">
      {/* Radial Gradient Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black" style={{ height: "225vh" }}>
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

      {/* Content with relative positioning to appear above gradient */}
      <div className="relative z-30">
        {/* Video Hero Section
        <Hero />*/}
        {/* Alt Hero Section */}
        <Hero />
        <section>
          {/* Main content */}
          <div className="flex-1">
            <Laptop />
            <ScrollCarousel />
            <Evaluator />
            <Highlights />
            <Contact onMessageSent={handleMessageSent} />
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <div className="relative z-30 secondary-bg overflow-x-hidden">
        <Footer />
      </div>
    </main>
  );
}
