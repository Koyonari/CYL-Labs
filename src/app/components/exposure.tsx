import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export default function Why() {
  return (
    <section className="py-12 primary-text flex">
      {/* Left */}
      <div className="flex-shrink-0 w-32 flex flex-col pt-4">
          <ArrowUp size={81}/>
      </div>
      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-16 flex-shrink-0 flex flex-col gap-6">
          <h2 className="text-7xl md:text-8xl inter-semibold">Exposure</h2>
          <h4 className = "text-3xl inter-regular">Ranked higher.</h4>
        </div>
        {/* Google Search */}
        <div className="flex-1 flex -mr-14 overflow-visible shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)]">
          <Image 
            src="/exposure.jpg" 
            alt="Google search results showing website ranking" 
            width={2667}
            height={0}
            className="h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
