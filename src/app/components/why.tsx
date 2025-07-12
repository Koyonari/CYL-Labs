import { KeySquare } from 'lucide-react';

export default function Why() {
  return (
    <section className="pr-20 py-12 primary-text h-screen flex">
      {/* Left */}
      <div className="flex-shrink-0 w-32 flex flex-col pt-1">
          <KeySquare size={60}/>
      </div>
      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-16 flex-shrink-0">
          <h2 className="text-6xl inter-bold">Why Us?</h2>
        </div>
      </div>
    </section>
  );
}
