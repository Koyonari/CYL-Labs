"use client";

import { useState } from "react";
import Gradient from "../components/Gradient";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import CalculatorWelcome from "../components/calculator/CalculatorWelcome";
import CalculatorReach from "../components/calculator/CalculatorReach";
import CalculatorMessages from "../components/calculator/CalculatorMessages";
import CalculatorIndustry from "../components/calculator/CalculatorIndustry";
import CalculatorPrice from "../components/calculator/CalculatorPrice";

export default function Page() {
  const [section, setSection] = useState("welcome");
  const [reach, setReach] = useState("");
  const [messages, setMessages] = useState("");
  const [industry, setIndustry] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Gradient />
      <Wrapper className="w-full h-screen flex flex-col relative !py-0">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          {section === "welcome" && (
            <CalculatorWelcome setSection={setSection} />
          )}
          {section === "reach" && (
            <CalculatorReach
              reach={reach}
              setSection={setSection}
              setReach={(value) => setReach(String(value))}
            />
          )}
          {section === "messages" && (
            <CalculatorMessages
              reach={reach}
              messages={messages}
              setSection={setSection}
              setMessages={(value) => setMessages(String(value))}
            />
          )}
          {section === "industry" && (
            <CalculatorIndustry
              industry={industry}
              setSection={setSection}
              setIndustry={setIndustry}
            />
          )}
          {section === "price" && (
            <CalculatorPrice
              reach={reach}
              messages={messages}
              price={price}
              setPrice={(value: string | number) => setPrice(String(value))}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
}
