export default function BadConversions({
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
          What if we introduced a website?{" "}
          <span className="text-[#999999]">
            Another platform to{" "}
            <span className="text-[#FD5001]">increase conversions.</span>
          </span>
        </h2>
        <p className="w-1/5 text-[20px] text-[#999999] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full">
          Most websites look fine but lose trust and sales. This quick ROI check
          shows what you&apos;re missing — and how to fix it.
        </p>
      </div>
      <p className="text-[48px] font-semibold max-sm:text-[40px]">
        With an average conversion rate of 3%.
      </p>
      <div className="flex flex-col gap-8 text-[48px] font-semibold max-sm:text-[40px]">
        <p>
          Current revenue: ${Number(currentRevenue.toFixed(0)).toLocaleString()}
        </p>
        <p className="text-[#FD5001]">
          Possible revenue: $
          {Number(possibleRevenue.toFixed(0)).toLocaleString()}
        </p>
      </div>
      <p className="text-[48px] font-semibold max-sm:text-[40px]">
        That&apos;s{" "}
        <span className="text-[#FD5001]">
          $
          {Number(
            (possibleRevenue - currentRevenue).toFixed(0)
          ).toLocaleString()}
        </span>{" "}
        dollars left on the table.
      </p>
    </div>
  );
}
