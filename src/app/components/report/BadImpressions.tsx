export default function BadImpressions({
  reach,
  messages,
  price,
  currentRevenue,
  possibleRevenue,
}: {
  reach: number;
  messages: number;
  price: number;
  currentRevenue: number;
  possibleRevenue: number;
}) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between gap-8 max-[1200px]:flex-col">
        <h2 className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
          We can show your business to 5x more people.
        </h2>
        <p className="w-1/5 text-[20px] text-[#999999] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:text-left max-md:w-full">
          Right now, most people don’t know you exist. That means fewer clicks,
          calls, and sales.
        </p>
      </div>
      <p className="w-1/2 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        Even if only 3% buy.
      </p>
      <p className="w-1/2 text-[48px] text-[#FD5001] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        That’s a{" "}
        {Number(
          (((reach * 5 * 0.03 * price) / (messages * price)) * 100).toFixed(0)
        ).toLocaleString()}
        % jump in revenue.
      </p>
    </div>
  );
}
