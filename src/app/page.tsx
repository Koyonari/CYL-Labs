"use client";
import Hero from "./components/hero";
import Services from "./components/services";
import Sidebar from "./components/sidebar";
import Why from "./components/why";
import Exposure from "./components/exposure";
import ScrollCarousel from "./components/scrollcarousel";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Highlights from "./components/highlights";

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
