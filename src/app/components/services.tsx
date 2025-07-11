export default function Services() {
  return (
    <section className="pr-20 py-12 primary-text h-screen flex">
      {/* Left */}
      <div className="flex-shrink-0 w-32 flex flex-col pt-6">
        <div className="text-6xl inter-light">✱</div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-16 flex-shrink-0">
          <h2 className="text-7xl md:text-8xl font-extrabold">Services</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-5 grid-rows-3 gap-4 flex-1">
          {/* Web Design - 3 cols and 2 rows */}
          <div
            className="rounded-2xl col-span-3 row-span-2 col-start-1 row-start-1 bg-cover bg-center relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 hover:opacity-30"></div>
            <div className="inter-semibold absolute bottom-6 left-6 text-5xl font-bold z-10 transition-transform duration-300 hover:translate-y-[-4px]">
              Web Design
              <br />
              <span className="text-3xl inter-light">
                Creating perfect digital experiences
              </span>
            </div>
          </div>

          {/* UI/UX - 2 cols and 3 rows */}
          <div
            className="rounded-2xl col-span-2 row-span-3 col-start-4 row-start-1 bg-cover bg-center relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=1200&fit=crop)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 hover:opacity-30"></div>
            <div className="inter-semibold absolute bottom-6 left-6 text-5xl font-bold z-10 transition-transform duration-300 hover:translate-y-[-4px]">
              UI/UX
              <br />
              <span className="text-3xl inter-light">User first design</span>
            </div>
          </div>

          {/* Digital Marketing - 3 cols and 1 row */}
          <div
            className="col-span-3 rounded-2xl row-span-1 col-start-1 row-start-3 bg-cover bg-center relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_40px_-12px_rgba(232,73,42,0.5)]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 hover:opacity-30"></div>
            <div className="inter-semibold absolute bottom-6 left-6 text-5xl font-bold z-10 transition-transform duration-300 hover:translate-y-[-4px]">
              Digital Marketing
              <br />
              <span className="text-3xl inter-light">
                Ensuring your business succeeds
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
