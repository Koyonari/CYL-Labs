import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center py-8 text-[16px] text-white font-semibold">
      <Link className="flex items-end gap-[5px]" href="/">
        <h1 className="text-[32px] font-semibold">cyllabs</h1>
        <div className="w-2 h-2 bg-[#FD5001] rounded-full mb-[5px]"></div>
      </Link>
      <div className="flex gap-16 max-sm:hidden">
        <Link href="/">Home</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">About</Link>
      </div>
      <div>
        <p className="cursor-pointer font-semibold">Contact Us</p>
      </div>
    </div>
  );
}
