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
          People are visiting. They are not buying. A trust-first website{" "}
          <span className="text-[#FD5001]">gives them a clear next step.</span>
        </h2>
        <p className="w-1/5 opacity-70  text-[20px] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full">
          You have the audience. Now it&apos;s time to turn them into paying
          customers.
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
      <p className="text-[48px] font-semibold max-sm:text-[40px]">
        That&apos;s{" "}
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
