export default function Footer() {
  return (
    <section className="primary-text">
      {/* Footer section */}
      <div className="py-[60px] px-[70px]">
        <div className="footer-left flex flex-col">
          <h4 className="inter-semibold text-[36px] pb-3">Stay in the Loop</h4>
          <div className="text-[13px] inter-semibold flex flex-row items-center gap-[40px]">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-[#474747] placeholder-gray-400 px-6 py-4 rounded-lg text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#E8492A] max-w-sm"
            />
            <button className="max-w-[160px] font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)] text-sm border hover:cursor-pointer border-[#E8492A]">
              SUBSCRIBE
            </button>
          </div>

          <div className="flex flex-row gap-2 pt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-agreement"
                className="appearance-none w-4 h-4 bg-transparent border-2 border-[#E8492A] rounded-sm hover:cursor-pointer checked:border-[#E8492A] checked:bg-[#E8492A] relative checked:after:content-['✓'] checked:after:absolute checked:after:top-[-2px] checked:after:left-[1px] checked:after:text-white checked:after:text-xs checked:after:font-bold"
              />{" "}
            </div>
            <label htmlFor="email-agreement" className="text-sm cursor-pointer">
              I agree to receive emails from CYL Labs.
            </label>
          </div>
        </div>
      </div>

      {/* Big animated name */}
    </section>
  );
}
