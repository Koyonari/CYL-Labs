"use client";
import Hero from "./components/hero";
import ScrollCarousel from "./components/scrollcarousel";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Highlights from "./components/highlights";
import Evaluator from "./components/evaluator";

export default function Home() {
  const handleMessageSent = () => {};
  return (
    <main>
      {/* Hero Section */}
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

      {/* Footer */}
      <div className="relative z-30 secondary-bg">
        <Footer />
      </div>
    </main>
  );
}
