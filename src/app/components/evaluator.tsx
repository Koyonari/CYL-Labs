import {ArrowUpLeft} from "lucide-react";
export default function Evaluator() {
  return (
    <section className="evaluator flex flex-row px-20 h-screen gap-20 justify-center items-center">
      <div className="evaluator-content flex flex-row gap-24 items-start">
        <div className="evaluator-left text-6xl w-3xl helvetica-bold tracking-tight">How much money is your website not making you?<span className="text-[#999999]"><br/>Find out in under a minute — for <span className="text-[#FC350B]">Singaporean</span> businesses that rely on trust.</span></div>
        <div className="evaluator-right w-3/10 flex flex-col gap-14 pt-4">
          <p className="text-2xl/6 text-[#999999] text-right helvetica-light">Most websites look fine but lose trust and sales. This quick ROI check shows what you're missing — and how to fix it.</p>
          <div className="text-[#FC350B] text-5xl top-0 flex flex-row items-center helvetica-bold tracking-tight justify-end">
            <ArrowUpLeft size={48} strokeWidth={3} className="pt-1"/>
            <div>Take the{" "} 
            <span className="underline decoration-3 decoration-[#FD5001]">
              quiz
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
