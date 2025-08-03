import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const textColorClass = theme === "light" ? "text-black" : "text-white";
  const hoverColorClass =
    theme === "light" ? "hover:text-gray-700" : "hover:text-[#E8492A]";

  return (
    <section
      className={`px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-4 md:py-6 items-center flex flex-row justify-between relative ${textColorClass}`}
    >
      {/* Logo */}
      <div className="nav-left inter-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        cyllabs<span className="accent-text">.</span>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-right hidden lg:flex text-base md:text-lg xl:text-xl items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 helvetica-bold">
        <div
          className={`cursor-pointer ${hoverColorClass} transition-colors duration-200`}
        >
          Home
        </div>
        <div
          className={`cursor-pointer ${hoverColorClass} transition-colors duration-200`}
        >
          Pricing
        </div>
        <div
          className={`cursor-pointer ${hoverColorClass} transition-colors duration-200`}
        >
          About
        </div>
      </div>

      {/* Desktop Contact Button */}
      <div
        className={`hidden lg:flex text-base md:text-lg xl:text-xl helvetica-bold px-4 md:px-5 py-2 gap-1 items-center cursor-pointer ${hoverColorClass} transition-colors duration-200 group`}
      >
        Contact us
        <ArrowRight 
          size={20} 
          strokeWidth={2.5} 
          className="md:w-6 md:h-6 xl:w-7 xl:h-7 transition-transform duration-200 group-hover:translate-x-1" 
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg ${
          theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800"
        } transition-colors duration-200`}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={24} strokeWidth={2} />
        ) : (
          <Menu size={24} strokeWidth={2} />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={toggleMenu}
          />
          
          {/* Menu Content */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] ${
              theme === "light" ? "bg-white" : "bg-black"
            } ${textColorClass} shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div
                className={`flex items-center justify-between p-6 border-b ${
                  theme === "light" ? "border-gray-200" : "border-gray-800"
                }`}
              >
                <div className="inter-bold text-2xl">
                  cyllabs<span className="accent-text">.</span>
                </div>
                <button
                  onClick={toggleMenu}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                    theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800"
                  } transition-colors duration-200`}
                  aria-label="Close menu"
                >
                  <X size={24} strokeWidth={2} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col py-8 px-6 space-y-6">
                <div
                  className={`text-xl helvetica-bold cursor-pointer ${hoverColorClass} transition-colors duration-200 py-2`}
                >
                  Home
                </div>
                <div
                  className={`text-xl helvetica-bold cursor-pointer ${hoverColorClass} transition-colors duration-200 py-2`}
                >
                  Pricing
                </div>
                <div
                  className={`text-xl helvetica-bold cursor-pointer ${hoverColorClass} transition-colors duration-200 py-2`}
                >
                  About
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-auto p-6">
                <div
                  className={`w-full text-xl helvetica-bold px-6 py-4 flex flex-row gap-2 items-center justify-center cursor-pointer ${hoverColorClass} transition-colors duration-200 group border ${
                    theme === "light" ? "border-gray-200" : "border-gray-800"
                  } rounded-lg hover:border-[#E8492A]`}
                >
                  Contact us
                  <ArrowRight 
                    size={24} 
                    strokeWidth={2.5} 
                    className="transition-transform duration-200 group-hover:translate-x-1" 
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
