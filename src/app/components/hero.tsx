import Navbar from "./navbar";

export default function Hero() {
  return (
    <section className="h-screen primary-text">

      {/* Navbar */}
      <Navbar />

      {/* Video Background */}
      <div className="px-12">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl bg-gray-100"
        >
        </video>
      </div>


    </section>
  );
}
