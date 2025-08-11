import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CalculatorWelcome({
  setSection,
}: {
  setSection: (section: string) => void;
}) {
  return (
    <div className="h-full max-h-[500px] flex flex-col flex-grow justify-between py-8">
      <div className="flex flex-col gap-8">
        <motion.h1
          className="text-[64px] text-white font-semibold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
        >
          No Website? Customers Are Choosing Someone Else
        </motion.h1>
        <motion.p
          className="text-[20px] text-[#999999] leading-[1.2] tracking-normal"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
            delay: 0.2,
          }}
        >
          See how many leads and sales you&apos;re missing — and what it&apos;s
          costing you.
        </motion.p>
      </div>
      <motion.div
        className="flex justify-end"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
          delay: 0.4,
        }}
      >
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
      </motion.div>
    </div>
  );
}
