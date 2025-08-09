import Image from "next/image";
import Wrapper from "./Wrapper";

export default function FamilyMookata() {
  return (
    <div className="w-full bg-[#020202] sticky top-0">
      <Wrapper className="w-full h-screen !py-16">
        <div className="w-full h-full flex justify-between gap-10 max-[1200px]:flex-col max-[1200px]:justify-normal">
          <div className="w-2/3 h-full relative max-[1200px]:w-full max-[1200px]:h-1/2">
            <Image className="object-cover" src="/abstract-desk.png" alt="" fill />
          </div>
          <div className="w-1/4 flex flex-col justify-center gap-5 text-white text-right max-[1200px]:w-full max-[1200px]:text-left">
            <h1 className="text-[64px] font-semibold max-sm:text-[40px]">
              Family Mookata
            </h1>
            <p className="text-[20px] leading-[1.2] tracking-normal opacity-70 max-sm:text-[20px]">
              Naming, strategy, and identity for a boutique architecture firm
              emphasizing simplicity, landscape, and form.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
