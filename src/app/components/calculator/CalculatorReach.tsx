import { Button } from "@/components/ui/button";

export default function CalculatorReach({
  reach,
  setSection,
  setReach,
}: {
  reach: string | number;
  setSection: (section: string) => void;
  setReach: (reach: string | number) => void;
}) {
  return (
    <div className="h-full max-h-[500px] h-full max-h-[500px] flex flex-col flex-grow justify-between py-8 overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="text-[64px] text-white font-semibold">
          <h1>Let's see what you're working with.</h1>
          <h1 className="text-[#999999]">
            Tell us how many people you're reaching.
          </h1>
        </div>
        <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
          Just an estimate is fine — we’ll calculate what that could mean in
          real leads.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-[32px] text-[#FEF1E1] font-semibold">
          Monthly reach or profile views
        </h2>
        <input
          className="text-[64px] text-[#FEF1E1] font-semibold placeholder-[#999999] focus:outline-none"
          type="number"
          value={reach}
          placeholder="Enter your reach e.g. 8,000"
          onChange={(e) => {
            const value = e.target.value;
            setReach(value === "" ? "" : Number(value));
          }}
        />
      </div>
      <div className="flex justify-end">
        <Button
          className="w-fit h-fit bg-white rounded-full !px-8 !py-4 text-[20px] font-semibold"
          onClick={() => setSection("messages")}
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
