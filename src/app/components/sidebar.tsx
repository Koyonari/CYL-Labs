"use client";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [currentSection, setCurrentSection] = useState("Services");

  const menuItems = [
    { name: "Services", id: "services" },
    { name: "Why Us?", id: "why-us" },
    { name: "Exposure", id: "exposure" },
    { name: "Highlights", id: "highlights" },
    { name: "Contact Us", id: "contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems
        .map((item) => ({
          ...item,
          element: document.getElementById(item.id),
        }))
        .filter((item) => item.element);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setCurrentSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="primary-text inter-semibold">
      <div className="flex flex-col gap-8 relative">
        {/* Indicator */}
        <div
          className="absolute left-1 w-1.5 h-1.5 rounded-full bg-current accent-text transition-all duration-300"
          style={{
            top: `calc(${menuItems.findIndex(
              (item) => item.name === currentSection
            )} * (1.5rem + 2rem) + 0.7rem)`,
          }}
        />

        {/* Menu items */}
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center cursor-pointer transition-all duration-300 hover:translate-x-2 pl-8"
            onClick={() => scrollToSection(item.id)}
          >
            <p
              className={`transition-all duration-300 ${
                currentSection === item.name
                  ? "accent-text text-lg"
                  : "text-base hover:text-gray-300"
              }`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
