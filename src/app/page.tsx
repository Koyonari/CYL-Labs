import Hero from "./components/hero";
import Services from "./components/services";
import Sidebar from "./components/sidebar";
import Why from "./components/why";

export default function Home() {
  return (
    <section className="primary-bg">
      <Hero />
      <section className="relative z-20 flex min-h-screen">
        {/* Sidebar */}
        <div className="w-[15%] secondary-bg flex-shrink-0">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <Sidebar />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <section className="secondary-bg flex flex-col gap-8 py-8">
            <Services />
            <Why />
          </section>
        </div>
      </section>
    </section>
  );
}
