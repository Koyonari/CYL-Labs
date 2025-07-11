export default function Navbar() {
  return (
    <section className = "z-10 px-[66px] py-6 items-center flex flex-row justify-between">
      <div className = "nav-left inter-bold text-[48px]">cyllabs<span className = "accent-text">.</span></div>
      <div className = "nav-right text-[26px] items-center flex flex-row gap-[65px] inter-semibold">
        <div>Home</div>
        <div>Pricing</div>
        <div>Contact</div>
      </div>
    </section>
  )
}
