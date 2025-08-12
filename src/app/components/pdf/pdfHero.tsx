import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PdfHero() {
  return (
    <section className="h-screen w-screen !py-0 flex px-8 items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <div className="left-texts flex flex-col lg:justify-center min-h-screen z-10 relative lg:-mt-26 lg:left-64 2xl:-mt-36 2xl:left-54">
        <p className="leading-tight text-7xl lg:text-[180px] 2xl:text-[220px] anton uppercase accent-text">
          20,000
        </p>
        <p className="text-4xl lg:text-[76px] 2xl:text-[96px] text-black anton uppercase">impressions</p>
        <p className="text-4xl lg:text-[40px] 2xl:text-[54px] text-black anton uppercase py-6">
          in one month
        </p>
        <p className="text-2xl 2xl:text-3xl text-black uppercase font-semibold tracking-normal">
          Singaporean websites <span className="italic accent-text">fail</span>,<br /> beat the
          market
        </p>
        <Button
          className="w-fit h-fit accent-bg mt-8 text-white rounded-full !px-8 !py-4 text-[20px] font-semibold cursor-pointer"
        >
          Get it now 
          <svg
            className="min-w-6 min-h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 7H17M17 7V17M17 7L7 17"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
      <div className="right-image flex justify-center items-center lg:-mr-0 lg:-mb-58 lg:-mt-0 2xl:-mr-40 2xl:-mb-36 -mt-110 2xl:-mt-0">
        <Image
          src="/pdfHero.svg"
          alt="PDF Hero"
          width={400}
          height={400}
          priority
          className="md:w-[800px] 2xl:w-[1440px] lg:w-[960px] max-w-none"
        />
      </div>
    </section>
  );
}
