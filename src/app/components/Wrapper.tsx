export default function Wrapper({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className={`max-w-[1600px] px-16 py-24 max-md:px-6 max-sm:py-16 max-sm:gap-10 ${className}`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
}
