import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center p-8 text-[16px] text-white font-semibold">
      <div className="flex items-end gap-1">
        <h1 className="text-[32px] font-semibold">cyllabs</h1>
        <div className="w-2 h-2 bg-[#FD5001] rounded-full mb-1"></div>
      </div>
      <div className="flex gap-16 max-sm:hidden">
        <Link href="/">Home</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">About</Link>
      </div>
      <div>
        <p>Contact Us</p>
      </div>
    </div>
  );
}
