"use client";
import Hero from "./components/herov2";
import ScrollCarousel from "./components/scrollcarousel";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Highlights from "./components/highlights";
import Evaluator from "./components/evaluator";

export default function Home() {
  const handleMessageSent = () => {};

  return (
    <main className="relative">
      {/* Inverted Cosine Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, 
            #000000 0%,
            #1a0500 15%,
            #330a01 25%,
            #4d0f02 32%,
            #661402 38%,
            #801903 42%,
            #991e04 46%,
            #b32304 50%,
            #cc2805 54%,
            #e62d06 58%,
            #fc350b 62%,
            #fc5a2f 68%,
            #fd7f53 74%,
            #fda477 80%,
            #fec99b 86%,
            #ffeebf 92%,
            #fff7e3 96%,
            #ffffff 100%
          )`,
          height: "140vh", // Extends beyond viewport to cover hero and some content after
        }}
      />

      {/* Content with relative positioning to appear above gradient */}
      <div className="relative z-10">
        {/* Video Hero Section
        <Hero />*/}
        {/* Alt Hero Section */}
        <Hero />
        <section>
          {/* Main content */}
          <div className="flex-1">
            <ScrollCarousel />
            <Evaluator />
            <Highlights />
            <Contact onMessageSent={handleMessageSent} />
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="relative z-30 secondary-bg">
        <Footer />
      </div>
    </main>
  );
}
