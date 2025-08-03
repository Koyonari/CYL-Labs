"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Info } from "lucide-react";
import Navbar from "../components/navbarv2";
import Report from "./report";

const OFFER_OPTIONS = [
  {
    label: "Fitness Coaching",
    value: "fitness",
    price: 250,
    description:
      "Personalized fitness plans and one-on-one coaching to help you reach your health goals.",
  },
  {
    label: "Pet Grooming",
    value: "grooming",
    price: 60,
    description:
      "Professional grooming services for your furry friends, including baths, haircuts, and nail trims.",
  },
  {
    label: "Home Bakery",
    value: "bakery",
    price: 35,
    description:
      "Delicious, home-baked goods made with love and the finest ingredients. Custom orders available.",
  },
  {
    label: "Photography",
    value: "photography",
    price: 500,
    description:
      "Capture your special moments with our professional photography services for events, portraits, and more.",
  },
  {
    label: "Tuition Centre",
    value: "tuition",
    price: 300,
    description:
      "Expert tutoring services to help students excel in their studies and build a strong academic foundation.",
  },
  {
    label: "Interior Design",
    value: "interior",
    price: 1500,
    description:
      "Transform your space with our creative interior design solutions for homes and offices.",
  },
  {
    label: "Other",
    value: "other",
    price: 100,
    description:
      "Have a different service in mind? Let us know and we'll see how we can help you.",
  },
];

export default function FunnelSimulatorStep() {
  const [step, setStep] = useState(0);
  const [reach, setReach] = useState("");
  const [messages, setMessages] = useState("");
  const [offer, setOffer] = useState("");
  const [ticket, setTicket] = useState(0);
  const [customOffer, setCustomOffer] = useState("");
  const [hoveredOffer, setHoveredOffer] = useState<string | null>(null);
  const [showIndustrySelector, setShowIndustrySelector] = useState(false);

  const estimatedReach = parseInt(reach.replace(/[^0-9]/g, "")) || 0;
  const weeklyMessages = parseInt(messages) || 0;
  const monthlyMessages = weeklyMessages * 4;
  const actualConvRate =
    estimatedReach > 0 ? monthlyMessages / estimatedReach : 0;

  const siteConvRate = 0.03;
  const leadsNow = monthlyMessages;
  const leadsWithSite = Math.round(estimatedReach * siteConvRate);
  const revenueNow = leadsNow * ticket;
  const revenueWithSite = leadsWithSite * ticket;
  const moneyLeft =
    revenueWithSite > revenueNow ? revenueWithSite - revenueNow : 0;

  if (step === 5) {
    return (
      <Report
        estimatedReach={estimatedReach}
        weeklyMessages={weeklyMessages}
        ticket={ticket}
        actualConvRate={actualConvRate}
        revenueNow={revenueNow}
        revenueWithSite={revenueWithSite}
        moneyLeft={moneyLeft}
        setStep={setStep}
      />
    );
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden relative text-white p-0 bg-black">
      <Navbar theme="dark" />
      {/* Gradient Semicircle Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -bottom-[130vh] -right-[20vw] w-[180vw] h-[150vh] md:-bottom-[1300px] md:-right-[180px] md:w-[1700px] md:h-[1500px] 2xl:h-[1900px] 2xl:w-[2700px] rounded-full opacity-100 blur-[120px]"
          style={{
            background: `radial-gradient(circle,
              #ff3c00 90%,
              #fc5a2f 40%,
              #fd7f53 65%,
              #fff7e3 95%,
              #ffffff 80%)`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
        {step === 0 && (
          <div className="w-full max-w-4xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              The money you’re leaving on the table.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-400 mt-2">
              Every click that bounces is lost revenue.
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto md:mx-0">
              See how many leads and sales you're missing — and what it's
              costing you.
            </p>
            <div className="mt-12">
              <Button
                onClick={() => setStep(1)}
                className="text-2xl sm:text-3xl px-8 py-5 text-white font-bold bg-transparent border-none shadow-none hover:bg-transparent"
              >
                Discover the truth ↗
              </Button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Let’s see what you’re working with.
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mt-2">
              Tell us how many people you're reaching
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mt-6 max-w-xl">
              Just an estimate is fine — we'll calculate what that could mean
              in real leads.
            </p>
            <Label className="text-xl sm:text-2xl text-gray-300 mt-12 block">
              Monthly reach / profile views
            </Label>
            <input
              type="text"
              placeholder="Your monthly reach"
              value={reach}
              onChange={(e) => setReach(e.target.value)}
              className="h-20 w-full text-3xl sm:text-4xl leading-tight font-semibold text-gray-300 placeholder:text-gray-500 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-orange-500 mt-2 px-0 py-4"
            />
            <div className="mt-12 text-right">
              <Button
                onClick={() => setStep(2)}
                className="text-2xl sm:text-3xl px-8 py-5 text-white font-bold bg-transparent border-none shadow-none hover:bg-transparent"
              >
                Next ↗
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              How interested is your audience?
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mt-2">
              How many people reach out to you?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mt-6 max-w-xl">
              We'll use this to estimate how well your current reach is
              converting
            </p>
            <Label className="text-xl sm:text-2xl text-gray-300 mt-12 block">
              Average no. of messages per week
            </Label>
            <input
              type="text"
              placeholder="Enter your no. of weekly messages"
              value={messages}
              onChange={(e) => setMessages(e.target.value)}
              className="h-20 w-full text-xl sm:text-4xl leading-tight font-semibold text-gray-300 placeholder:text-gray-500 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-orange-500 mt-2 px-0 py-4"
            />
            <div className="mt-12 text-right">
              <Button
                onClick={() => setStep(3)}
                className="text-2xl sm:text-3xl px-8 py-5 text-white font-bold bg-transparent border-none shadow-none hover:bg-transparent"
              >
                Next ↗
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="w-full max-w-4xl text-left">
            {!showIndustrySelector && !offer && (
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  What industry are you in?
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mt-2">
                  We'll tailor the results to your field.
                </h2>
                <p className="text-base sm:text-lg text-gray-300 mt-6 max-w-xl">
                  Pick the industry that best fits your business. Don't worry
                  if it's not 100% accurate.
                </p>
                <h2 className="text-xl sm:text-2xl font-bold leading-tight text-gray-300 mt-12">
                  Your industry
                </h2>
                <Button
                  onClick={() => setShowIndustrySelector(true)}
                  className="text-3xl sm:text-4xl mt-2 py-4 text-gray-500 font-bold bg-transparent border-none shadow-none hover:bg-transparent hover:scale-105 transition px-0"
                >
                  Select your industry ↘
                </Button>
              </div>
            )}

            {showIndustrySelector && (
              <div className="flex flex-col md:flex-row gap-8 animate-fade-in w-full">
                {/* Left Column: Industry List */}
                <div className="w-full md:w-2/5">
                  <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                    Choose your industry
                  </h1>
                  <ul
                    className="mt-6 space-y-2"
                    onMouseLeave={() => setHoveredOffer(null)}
                  >
                    {OFFER_OPTIONS.map((opt) => (
                      <li
                        key={opt.value}
                        onMouseEnter={() => setHoveredOffer(opt.value)}
                        onClick={() => {
                          setOffer(opt.value);
                          setTicket(opt.price);
                        }}
                        className={`cursor-pointer transition-all duration-200 py-1 ${
                          offer === opt.value || hoveredOffer === opt.value
                            ? "text-xl sm:text-2xl font-bold text-white"
                            : "text-lg sm:text-xl text-gray-400 hover:text-white"
                        }`}
                      >
                        {opt.label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Description + Other input + Confirm */}
                <div className="w-full md:w-3/5 md:pt-12 md:pl-4">
                  {offer === "other" ? (
                    <input
                      type="text"
                      placeholder="e.g. Dental clinic"
                      value={customOffer}
                      onChange={(e) => setCustomOffer(e.target.value)}
                      className="w-full text-2xl sm:text-3xl leading-tight font-semibold text-gray-300 placeholder:text-gray-500 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-orange-500 px-0 py-4"
                      autoFocus
                    />
                  ) : (
                    <p className="text-base sm:text-lg text-gray-300 transition-opacity duration-300 min-h-[6rem]">
                      {OFFER_OPTIONS.find(
                        (o) => o.value === offer || o.value === hoveredOffer
                      )?.description ||
                        "Hover over an industry to learn more."}
                    </p>
                  )}

                  <Button
                    onClick={() => setShowIndustrySelector(false)}
                    className="mt-8 text-2xl sm:text-3xl px-8 py-5 font-bold text-white rounded-xl hover:opacity-90 transition"
                    disabled={
                      !offer || (offer === "other" && !customOffer.trim())
                    }
                  >
                    Confirm ↗
                  </Button>
                </div>
              </div>
            )}

            {!showIndustrySelector && offer && (
              <div className="w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Confirm your industry
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-400 mt-4">
                  {offer === "other"
                    ? customOffer || "Other"
                    : OFFER_OPTIONS.find((o) => o.value === offer)?.label}
                </h2>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setShowIndustrySelector(true)}
                    className="text-2xl sm:text-3xl px-6 py-4 font-bold bg-transparent text-white rounded-xl hover:opacity-90 transition"
                  >
                    Change ↩
                  </Button>
                  <Button
                    onClick={() => setStep(4)}
                    className="text-2xl sm:text-3xl px-6 py-4 font-bold bg-transparent text-white rounded-xl hover:opacity-90 transition"
                  >
                    Next ↗
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              How much do you charge per sale?
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mt-2">
              What is each customer worth?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mt-6 max-w-xl">
              We'll use this to estimate how much potential revenue your leads
              could bring in
            </p>

            <Label className="block mt-10 mb-4 text-xl sm:text-2xl text-gray-300">
              Average Sale Value
            </Label>

            <input
              type="number"
              value={ticket}
              onChange={(e) => setTicket(parseInt(e.target.value) || 0)}
              className="w-full text-3xl sm:text-4xl font-semibold text-gray-300 bg-transparent border-b-2 border-gray-600 placeholder:text-gray-500 mb-2 focus:outline-none focus:border-orange-500"
              placeholder="Enter amount e.g. 250"
              min={10}
              max={3000}
              step={10}
            />

            <p className="text-gray-400 text-sm sm:text-base italic mb-4">
              ...or drag the slider to your price range ↓
            </p>

            <Slider
              value={[ticket]}
              onValueChange={(val) => setTicket(val[0])}
              min={10}
              max={3000}
              step={10}
              className="mt-4 w-full h-2 relative rounded-full bg-gray-600"
            />
            <div className="mt-12 text-right">
              <Button
                onClick={() => setStep(5)}
                className="text-2xl sm:text-3xl px-8 py-5 text-white font-bold bg-transparent border-none shadow-none hover:bg-transparent"
              >
                See My Results ↗
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
