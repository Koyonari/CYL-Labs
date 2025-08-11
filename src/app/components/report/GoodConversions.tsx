export default function GoodConversions({
  possibleRevenue,
}: {
  possibleRevenue: number;
}) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between gap-8 max-[1200px]:flex-col">
        <h2 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
          You&apos;re doing well.{" "}
          <span className="text-[#999999]">
            Let's make it <span className="text-[#FD5001]">bigger</span>.
          </span>
        </h2>
        <p className="w-1/5 text-[20px] text-[#999999] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full">
        What works now can work even harder with one more way to convert.
        </p>
      </div>
      <p className="w-1/2 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
      Adding a website could add 3% more sales.
      </p>
      <p className="w-1/2 text-[48px] text-[#FD5001] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        That&apos;s an extra: $
        {Number(possibleRevenue.toFixed(0)).toLocaleString()} a month.
      </p>
      <p className="w-1/2 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        That&apos;s{" "}
        <span className="text-[#FD5001]">
          ${Number(possibleRevenue.toFixed(0)).toLocaleString()}
        </span>
        {" "} you're not collecting yet
      </p>
    </div>
  );
}
