import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section className="secondary-text h-screen flex flex-col justify-between py-[100px] px-[80px] pb-[60px]">
        {/* Footer section */}
        <div className="pb-0 flex flex-row justify-between">
          <div className="footer-left flex flex-col">
            <h4 className="inter-bold text-[36px] pb-3">Stay in the Loop</h4>
            <div className="text-[13px] inter-semibold flex flex-row items-center gap-[40px]">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-[#474747] placeholder-gray-400 px-6 py-4 rounded-lg text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#E8492A] min-w-sm"
              />
              <button className="min-w-[160px] font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)] text-sm border hover:cursor-pointer border-[#E8492A]">
                SUBSCRIBE
              </button>
            </div>
            <div className="flex flex-row gap-2 pt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="email-agreement"
                  className="appearance-none w-4 h-4 bg-transparent border-2 border-[#E8492A] rounded-sm hover:cursor-pointer checked:border-[#E8492A] checked:bg-[#E8492A] relative checked:after:content-['✓'] checked:after:absolute checked:after:top-[-2px] checked:after:left-[1px] checked:after:text-white checked:after:text-xs checked:after:font-bold"
                />
              </div>
              <label
                htmlFor="email-agreement"
                className="text-sm cursor-pointer"
              >
                I agree to receive emails from CYL Labs.
              </label>
            </div>
          </div>
          <div className="footer-right flex flex-row gap-26">
            <div className="footer-pages flex flex-row gap-16">
              <div className="footer-page flex flex-col gap-4">
                <h4 className="inter-semibold text-lg">Home</h4>
                <div className="footer-items inter-semibold text-xs flex flex-col gap-4">
                  <p>Services</p>
                  <p>Why Us?</p>
                  <p>Exposure</p>
                  <p>Contact Us</p>
                  <p>Highlights</p>
                </div>
              </div>
              <div className="footer-page flex flex-col gap-4">
                <h4 className="inter-semibold text-lg">Pricing</h4>
                <div className="footer-items inter-semibold text-xs flex flex-col gap-4">
                  <p>Plans</p>
                  <p>Add-ons</p>
                  <p>Breakdown</p>
                </div>
              </div>
              <div className="footer-page flex flex-col gap-4">
                <h4 className="inter-semibold text-lg">Contact</h4>
                <div className="footer-items inter-semibold text-xs flex flex-col gap-4">
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
            <div className="footer-socials flex flex-col gap-4">
              <h4 className="inter-semibold text-lg">Socials</h4>
              <div className="social inter-semibold text-xs flex flex-row gap-2 items-center">
                <Instagram size={16} />
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>

        {/* Big animated name */}
        <div className="relative overflow-hidden py-54 text-[320px] text-center inter-semibold flex justify-center">
          <h1 className="text-white top-[50%] absolute transform  translate-y-[-55%]">
            cyllabs.
          </h1>
          <h1 className="accent-text animate-[animate_7s_ease-in-out_infinite] absolute transform translate-y-[-55%]">
            cyllabs.
          </h1>
        </div>
      </section>

      {/* Animation style */}
      <style>{`
        @keyframes animate {
        0%, 100% {
          clip-path: polygon(
            0% 60%, 10% 55%, 20% 58%, 30% 62%, 40% 60%,
            50% 58%, 60% 55%, 70% 57%, 80% 60%, 90% 62%, 100% 60%,
            100% 100%, 0% 100%
          );
        }

        25% {
          clip-path: polygon(
            0% 58%, 10% 60%, 20% 62%, 30% 60%, 40% 57%,
            50% 55%, 60% 58%, 70% 62%, 80% 60%, 90% 57%, 100% 55%,
            100% 100%, 0% 100%
          );
        }

        50% {
          clip-path: polygon(
            0% 55%, 10% 57%, 20% 60%, 30% 62%, 40% 60%,
            50% 58%, 60% 55%, 70% 52%, 80% 55%, 90% 58%, 100% 60%,
            100% 100%, 0% 100%
          );
        }

        75% {
          clip-path: polygon(
            0% 57%, 10% 60%, 20% 62%, 30% 60%, 40% 58%,
            50% 55%, 60% 57%, 70% 60%, 80% 62%, 90% 60%, 100% 58%,
            100% 100%, 0% 100%
          );
        }
      }

      `}</style>
    </>
  );
}
