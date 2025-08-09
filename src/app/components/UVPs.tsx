import Image from "next/image";
import Wrapper from "./Wrapper";

export default function UVPs() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 max-sm:gap-5">
          <h1 className="w-1/2 text-[64px] text-[#020202] font-semibold max-[1200px]:w-4/5 max-sm:w-full max-sm:text-[40px]">
            Who we work with.{" "}
            <span className="text-[#999999]">
              Our clients share one thing:{" "}
              <span className="text-[#FD5001]">high standards</span>
            </span>
          </h1>
          <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal max-sm:text-[20px]">
            Here are just a few of the businesses we’re proud to work with.
          </p>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="h-full max-h-[1000px] grid grid-cols-3 grid-rows-2 gap-2 max-[1200px]:grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-4 max-md:max-h-fit">
            <div
              className="min-h-[340px] flex items-end row-span-2 bg-cover text-white max-[1200px]:row-span-1 relative"
              style={{ backgroundImage: "url('/sanity.png')" }}
            >
              <div className="w-full flex flex-col gap-4 p-10 max-[1200px]:p-8 max-md:p-6 relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                  }}
                ></div>
                <h2 className="text-[32px] font-bold relative z-10">
                  Customisable websites
                </h2>
                <p className="text-[20px] leading-[1.2] tracking-normal relative z-10">
                  Fully customisable, DIY content.
                </p>
              </div>
            </div>
            <div
              className="min-h-[340px] flex flex-col relative p-10 overflow-hidden max-[1200px]:p-8 max-md:p-6"
              style={{
                background:
                  "linear-gradient(180deg, rgb(255, 106, 0) 0%, rgb(255, 81, 0) 100%)",
              }}
            >
              <div className="h-full flex flex-col justify-between text-white leading-[1.1]">
                <h2 className="text-[32px] font-semibold z-10">
                  Quality over <br />
                  quantity, always
                </h2>
                <p className="text-[20px] text-right leading-[1.2] tracking-normal z-20">
                  We focus on fewer <br />
                  projects to deliver better <br />
                  outcomes.
                </p>
              </div>
              <div className="h-[150%] absolute bottom-[-280px] aspect-1/5 z-10 max-md:bottom-[-260px]">
                <Image src="/brush.png" alt="" fill />
              </div>
              <div className="w-3/5 bg-white absolute blur-3xl aspect-square left-[-5%] bottom-[-15vh] max-[1200px]:bottom-[-10vh] max-md:left-[-15%] max-md:bottom-[-20vh]"></div>
            </div>
            <div
              className="min-h-[340px] row-span-2 bg-cover bg-right bg-bottom relative p-10 max-[1200px]:row-span-1 max-[1200px]:p-8 max-md:p-6"
              style={{ backgroundImage: "url('/competitors.png')" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                }}
              ></div>
              <div className="flex flex-col gap-4 text-white relative z-10">
                <h2 className="text-[32px] font-bold">
                  One up your competitors
                </h2>
                <p className="text-[20px] leading-[1.2] tracking-normal">
                  Send us your competitors' sites, we'll make you one better
                  than theirs
                </p>
              </div>
            </div>
            <div
              className="min-h-[340px] flex flex-col items-center relative p-10 gap-4 max-[1200px]:p-8 max-md:p-6"
              style={{
                background: "linear-gradient(90deg, #000000, #6D6D6D)",
              }}
            >
              <div className="w-full flex flex-col gap-2 text-white">
                <h2 className="text-[64px] font-bold">24/7</h2>
                <p className="text-[20px] leading-[1.2] tracking-normal">
                  Priority support
                </p>
              </div>
              <div className="w-full h-full max-w-[300px] flex justify-center items-center relative">
                <div className="w-full flex items-center bg-white rounded-[12px] shadow-2xl p-4 gap-3 z-10">
                  <div className="w-10 h-10 bg-[#FD5001] rounded-full"></div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[20px] font-bold">cyllabs</p>
                    <p className="">Support Ticket</p>
                  </div>
                </div>
                <div className="w-[90%] flex items-center bg-white rounded-[12px] absolute p-4 mt-5 gap-4">
                  <div className="w-10 h-10 bg-[#FD5001] rounded-full"></div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[20px] font-bold">Avexa</p>
                    <p className="">S</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
