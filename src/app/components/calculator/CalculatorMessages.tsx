import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CalculatorMessages({
  reach,
  messages,
  setSection,
  setMessages,
}: {
  reach: string | number;
  messages: string | number;
  setSection: (section: string) => void;
  setMessages: (messages: string | number) => void;
}) {
  function handleSubmit() {
    if (messages === "") {
      toast.error("Please enter a number into the field.");
      return;
    }

    if (Number(messages) > Number(reach)) {
      toast.error("The number of people that message you cant be more than your views.");
      return;
    }

    if (Number(messages) < Number(reach)) {
      setSection("industry");
    }
  }

  return (
    <div className="h-full max-h-[500px] flex flex-col flex-grow justify-between py-8 overflow-hidden">
      <div className="flex flex-col gap-8">
        <h1 className="text-[64px] text-white font-semibold">
          How Many People Contact You Each Week?
        </h1>
        <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
          We’ll use this to see how well your audience turns into real leads.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-[32px] text-[#FEF1E1] font-semibold">
          Average no. of messages per week
        </h2>
        <input
          className="text-[64px] text-[#FEF1E1] font-semibold placeholder-[#999999] focus:outline-none"
          type="number"
          min="0"
          value={messages}
          placeholder="Enter your no. of weekly messages"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || Number(value) >= 0) {
              setMessages(value);
            }
          }}
        />
      </div>
      <div className="flex justify-end">
        <Button
          className="w-fit h-fit bg-white rounded-full !px-8 !py-4 text-[20px] font-semibold"
          onClick={handleSubmit}
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
