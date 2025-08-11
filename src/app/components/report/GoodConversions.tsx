export default function GoodConversions({
  possibleRevenue,
}: {
  possibleRevenue: number;
}) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between gap-8 max-[1200px]:flex-col">
        <h2 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
          You&apos;re doing good.{" "}
          <span className="text-[#999999]">
            But you could do <span className="text-[#FD5001]">better</span>.
          </span>
        </h2>
        <p className="w-1/5 text-[20px] text-[#999999] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full">
          Most websites look fine but lose trust and sales. This quick ROI check
          shows what you&apos;re missing — and how to fix it.
        </p>
      </div>
      <p className="w-1/2 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        Having a website could get you an extra conversion rate of 3%.
      </p>
      <p className="w-1/2 text-[48px] text-[#FD5001] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        Possible extra revenue: $
        {Number(possibleRevenue.toFixed(0)).toLocaleString()}
      </p>
      <p className="w-1/2 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        That&apos;s{" "}
        <span className="text-[#FD5001]">
          ${Number(possibleRevenue.toFixed(0)).toLocaleString()}
        </span>{" "}
        dollars left on the table every month.
      </p>
    </div>
  );
}
