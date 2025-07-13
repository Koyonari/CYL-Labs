export default function Highlights() {
  return (
    <section className="pr-20 py-12 primary-text h-screen flex">
      {/* Left */}
      <div className="flex-shrink-0 w-32 flex flex-col pt-1">
        <p>1-5</p>
      </div>
      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-16 flex-shrink-0">
          <h2 className="text-6xl inter-bold">Highlights</h2>
        </div>
      </div>
    </section>
  );
}
