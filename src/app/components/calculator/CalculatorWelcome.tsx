import { Button } from "@/components/ui/button";

export default function CalculatorWelcome({
  setSection,
}: {
  setSection: (section: string) => void;
}) {
  return (
    <div className="h-full max-h-[500px] flex flex-col flex-grow justify-between py-8 overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="text-[64px] text-white font-semibold">
          <h1>You&apos;re leaving money on the table.</h1>
          <h1 className="text-[#999999]">
            Every click that bounces is lost revenue.
          </h1>
        </div>
        <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
          See how many leads and sales you&apos;re missing — and what it&apos;s
          costing you.
        </p>
      </div>
      <div className="flex justify-end">
        <Button
          className="w-fit h-fit bg-white rounded-full !px-8 !py-4 text-[20px] font-semibold"
          onClick={() => setSection("reach")}
        >
          Read it for yourself
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
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
