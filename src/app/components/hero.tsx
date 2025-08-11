import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

export default function Hero() {
  return (
    <div
      className="h-screen flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/abstract-desk.png')" }}
    >
      <Wrapper className="w-screen h-full flex flex-col justify-between relative !pt-0 z-10">
        <Navbar />
        <div className="flex flex-col items-end text-white gap-4">
          <div className="flex items-end gap-8 max-[1200px]:gap-[22px] max-md:gap-4 max-sm:gap-[10px]">
            <h1 className="text-[256px] font-semibold max-[1200px]:text-[176px] max-md:text-[128px] max-sm:text-[80px]">
              cyllabs
            </h1>
            <div className="w-8 h-8 bg-[#FD5001] rounded-full mb-10 max-[1200px]:w-[22px] max-[1200px]:h-[22px] max-[1200px]:mb-6 max-md:w-4 max-md:h-4 max-md:mb-5 max-sm:w-[10px] max-sm:h-[10px] max-sm:mb-3"></div>
          </div>
          <p className="text-[28px] opacity-70">cut your losses.</p>
        </div>
      </Wrapper>
    </div>
  );
}
