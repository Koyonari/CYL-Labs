export default function Wrapper({
  className,
  children,
}: {
  className?: string;
  children?: any;
}) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className={`max-w-[1600px] px-20 xl:px-32 py-24 max-md:px-6 max-sm:py-16 max-sm:gap-10 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
