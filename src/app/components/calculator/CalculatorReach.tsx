import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CalculatorReach({
  reach,
  setSection,
  setReach,
}: {
  reach: string | number;
  setSection: (section: string) => void;
  setReach: (reach: string | number) => void;
}) {
  function handleSubmit() {
    if (String(reach) !== "" && Number(reach) >= 0) {
      setSection("messages");
    } else {
      toast.error("Please enter a number into the field.");
    }
  }

  return (
    <div className="h-full max-h-[500px] h-full max-h-[500px] flex flex-col flex-grow justify-between py-8">
      <div className="flex flex-col gap-8">
        <h1 className="text-[64px] text-white font-semibold">
          How Many People See You Each Month?
        </h1>
        <p className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
          Give us your best guess. We’ll turn it into the number of leads and
          sales you could be getting.
        </p>
      </div>
      <motion.div
        className="flex flex-col gap-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
          delay: 0.4,
        }}
      >
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
            if (value === "" || Number(value) >= 0) {
              setReach(value);
            }
          }}
        />
      </motion.div>
      <motion.div
        className="flex justify-end"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
          delay: 0.6,
        }}
      >
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
      </motion.div>
    </div>
  );
}
