import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Exposure() {
  return (
    <section className="py-12 primary-text flex min-h-screen">
      {/* Left */}
      <div className="flex-shrink-0 w-32 flex flex-col pt-1">
        <ArrowUp size={60} />
      </div>
      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-16 flex-shrink-0 flex flex-col gap-6">
          <h2 className="text-6xl inter-bold">Exposure</h2>
          <h4 className="text-3xl inter-regular">Ranked higher.</h4>
        </div>
        {/* Google Search */}
        <div className="flex-1 flex -mr-14 overflow-visible">
          <Image
            src="/exposure.jpg"
            alt="Google search results showing website ranking"
            width={2667}
            height={0}
            className="h-auto object-contain rounded-2xl shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
