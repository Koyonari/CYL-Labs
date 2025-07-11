import Navbar from "./navbar";

export default function Hero() {
  return (
    <section className="relative h-screen primary-text">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="flex flex-col inter-bold text-left px-80">
          <div className="text-6xl md:text-7xl lg:text-8xl leading-tight">
            Design.
            <br />
            Develop.
            <br />
            Dominate.
          </div>
        </div>
      </div>

      {/* Scroll down CTA */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <div className="jetbrains-medium text-sm mb-2 animate-pulse">
          Scroll
        </div>
        {/* Animated line */}
        <div className="relative">
          <div className="w-px h-6 bg-gray-400"></div>
          <div className="absolute top-0 left-0 w-px h-4 bg-gradient-to-b from-transparent via-white to-transparent animate-shine"></div>
        </div>
      </div>

      {/* Animation for Animated Line */}
      <style>{`
        @keyframes shine {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
