import Link from "next/link";
import Wrapper from "./Wrapper";
import { Button } from "@/components/ui/button";

export default function Quiz() {
  return (
    <Wrapper className="flex justify-between gap-8 max-[1200px]:flex-col">
      <h1 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
        How much money is your website not making you?
        <span className="text-[#999999]">
          {" "}
          Find out in under a minute — for{" "}
          <span className="text-[#FD5001]">Singaporean</span> businesses that
          rely on trust.
        </span>
      </h1>
      <div className="w-1/5 flex flex-col items-end gap-8 text-right max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full">
        <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
          Most websites look fine but lose trust and sales. This quick ROI check
          shows what you're missing — and how to fix it.
        </p>
        <Button
          asChild
          className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold"
        >
          <Link href="/calculator">
            Discover the truth
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
          </Link>
        </Button>
      </div>
    </Wrapper>
  );
}
