export default function Navbar() {
  return (
    <section className="px-[62px] py-6 items-center flex flex-row justify-between text-black">
      <div className="nav-left inter-bold text-[44px]">
        cyllabs<span className="accent-text">.</span>
      </div>
      <div className="nav-right text-lg items-center flex flex-row gap-[54px] inter-bold">
        <div>Home</div>
        <div>Pricing</div>
        <div>About</div>
      </div>
      <div className = "rounded-4xl text-xl border-black inter-bold border px-5 py-2">Contact Us</div>
    </section>
  );
}
