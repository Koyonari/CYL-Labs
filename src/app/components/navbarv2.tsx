import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <section className="px-[62px] py-6 items-center flex flex-row justify-between secondary-text">
      <div className="nav-left inter-bold text-[44px]">
        cyllabs<span className="accent-text">.</span>
      </div>
      <div className="nav-right text-lg items-center flex flex-row gap-[54px] helvetica-bold">
        <div>Home</div>
        <div>Pricing</div>
        <div>About</div>
      </div>
      <div className="text-xl helvetica-bold px-5 py-2 flex flex-row gap-1 items-center">
        Contact us
        <ArrowRight size={24} strokeWidth={2.5} />
      </div>
    </section>
  );
}
