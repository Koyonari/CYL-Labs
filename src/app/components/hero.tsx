import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

export default function Hero() {
  return (
    <div
      className="h-screen flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/abstract-desk.png')" }}
    >
      <Wrapper className="w-screen h-full flex flex-col justify-between relative !px-0 !pt-0 z-10">
        <Navbar />
        <div className="flex flex-col items-end text-white gap-4">
          <div className="flex items-end gap-8">
            <h1 className="text-[256px] font-semibold max-sm:text-[80px]">
              cyllabs
            </h1>
            <div className="w-8 h-8 bg-[#FD5001] rounded-full mb-10"></div>
          </div>
          <p className="text-[28px] opacity-70">cut your losses.</p>
        </div>
      </Wrapper>
    </div>
  );
}
