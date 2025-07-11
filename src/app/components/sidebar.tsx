"use client";
import { useState } from "react";

export default function Sidebar() {
  const [currentSection, setCurrentSection] = useState("Services");

  const menuItems = [
    "Services",
    "Why Us?",
    "Exposure",
    "Highlights",
    "Contact Us",
  ];

  return (
    <section className="primary-text inter-semibold">
      <div className="flex flex-col gap-8 relative">
        {/* Indicator */}
        <div
          className="absolute left-1 w-1.5 h-1.5 rounded-full bg-current accent-text transition-all duration-300"
          style={{
            top: `calc(${menuItems.indexOf(
              currentSection
            )} * (1.5rem + 2rem) + 0.7rem)`,
          }}
        />

        {/* Menu items */}
        {menuItems.map((item) => (
          <div
            key={item}
            className="flex items-center cursor-pointer transition-all duration-300 hover:translate-x-2 pl-8"
            onClick={() => setCurrentSection(item)}
          >
            <p
              className={`transition-all duration-300 ${
                currentSection === item
                  ? "accent-text text-lg"
                  : "text-base hover:text-gray-300"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
