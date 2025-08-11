export default function BadImpressions({
  currentRevenue,
  possibleRevenue,
}: {
  currentRevenue: number;
  possibleRevenue: number;
}) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between gap-8 max-[1200px]:flex-col">
        <h2 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
          Not enough people are seeing you.
          <span className="text-[#999999]">
            You need a platform to increase your
            <span className="text-[#FD5001]">digital presence</span>.
          </span>
        </h2>
        <p className="w-1/5 text-[20px] text-[#999999] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full">
          Most websites look fine but lose trust and sales. This quick ROI check
          shows what you're missing — and how to fix it.
        </p>
      </div>
      <p className="w-1/2 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        With an average conversion rate of 3%.
      </p>
      <div className="w-1/2 flex flex-col gap-8 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        <p>
          Current revenue: ${Number(currentRevenue.toFixed(0)).toLocaleString()}
        </p>
        <p className="text-[#FD5001]">
          Possible revenue: $
          {Number(possibleRevenue.toFixed(0)).toLocaleString()}
        </p>
      </div>
      <p className="w-1/2 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        That's{" "}
        <span className="text-[#FD5001]">
          $
          {Number(
            (possibleRevenue - currentRevenue).toFixed(0)
          ).toLocaleString()}
        </span>{" "}
        dollars left on the table every month.
      </p>
    </div>
  );
}
