"use client";
import Hero from "./components/hero";
import Services from "./components/services";
import Sidebar from "./components/sidebar";
import Why from "./components/why";
import Exposure from "./components/exposure";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Highlights from "./components/highlights";

export default function Home() {
  const handleMessageSent = () => {};
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative z-10">
        <Hero />
      </div>

      <section className="relative z-20">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-[15%] primary-bg flex-shrink-0">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <Sidebar />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 primary-bg">
            <div id="services" className="min-h-screen max-w-[1200px]">
              <Services />
            </div>
            <div id="why-us" className="min-h-screen">
              <Why />
            </div>
            <div id="exposure" className="min-h-screen max-w-screen">
              <Exposure />
            </div>
            <div id="highlights" className="min-h-screen">
              <Highlights />
            </div>
            <div id="contact-us" className="min-h-screen">
              <Contact onMessageSent={handleMessageSent} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-30 secondary-bg">
        <Footer />
      </div>
    </main>
  );
}
