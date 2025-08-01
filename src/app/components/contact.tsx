"use client";
import { useState, useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";

interface ContactProps {
  onMessageSent: () => void;
}

export default function Contact({ onMessageSent }: ContactProps) {
  const [singaporeTime, setSingaporeTime] = useState<string>("");

  useEffect(() => {
    const fetchSingaporeTime = async () => {
      try {
        const response = await fetch(
          "https://timeapi.io/api/time/current/zone?timeZone=Singapore"
        );
        const data = await response.json();
        const formattedTime = `${String(data.date)} ${String(
          data.hour
        ).padStart(2, "0")}:${String(data.minute).padStart(2, "0")}:${String(
          data.seconds
        ).padStart(2, "0")}`;
        setSingaporeTime(formattedTime);
      } catch (error) {
        console.error("Error fetching Singapore time:", error);
        setSingaporeTime("");
      }
    };

    fetchSingaporeTime();
    const interval = setInterval(fetchSingaporeTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const form = useRef<HTMLFormElement | null>(null);
  const contactSection = useRef<HTMLDivElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY as string,
        }
      )
      .then(() => {
        console.log("SUCCESS!");
        form.current?.reset();
        onMessageSent();
      });
  };

  useEffect(() => {
    const contactElement = contactSection.current;

    const animateDescription = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            ".contact-heading",
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            }
          );
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animateDescription, {
      threshold: 0.3,
    });

    if (contactElement) {
      observer.observe(contactElement);
    }

    return () => {
      if (contactElement) {
        observer.unobserve(contactElement);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={contactSection}
      className="contact-section pb-12 px-28 primary-text flex min-h-screen items-center"
    >
      <div className="flex flex-col md:flex-row w-full gap-48 items-center">
        <div className="info-left min-w-[700px] items-center">
          <div className="contact-form-container">
            <h1 className="contact-heading text-[40px]/11 helvetica-bold mb-12">
              Want to stand out?
              <br />
              Let&apos;s make your dream a reality.
            </h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-control mb-4">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  className="input-field w-full py-2 border-b-2 border-opacity-50 outline-none"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email/Number"
                  className="input-field w-full py-2 border-b-2 border-opacity-50 outline-none"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <textarea
                  id="message"
                  cols={30}
                  rows={5}
                  placeholder="Your Message"
                  name="message"
                  className="input-field w-full py-2 border-b-2 border-opacity-50 outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                name="submit"
                value="Send"
                className="submit-btn group flex items-center justify-center px-4 py-2 bg-white text-black border-[#E8492A] border-2 font-semibold rounded-lg cursor-pointer hover:bg-[#E8492A] hover:text-white transition-all duration-300 mx-auto sm:mx-0"
              >
                <div className="relative w-5 h-5 mr-2">
                  <img
                    src="/icons/submit.svg"
                    alt="submit"
                    className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="/icons/submit-white.svg"
                    alt="submit"
                    className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <span className="px-1 helvetica-medium">Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="info-right leading-8 flex flex-col md:block px-8 md:px-0">
          <div className="contact-info">
            <h3 className="text-2xl md:text-3xl helvetica-bold mb-3 mt-12">
              Contact Details
            </h3>
            <p className="text-sm md:text-lg helvetica-light tracking-wide">
              cyllabsdigital@gmail.com
            </p>
            <p className="text-sm md:text-lg helvetica-light">+65 9711 2702</p>
          </div>
          <div className="digital-space mt-4 md:mt-12">
            <h3 className="text-2xl md:text-3xl helvetica-bold mb-3">
              Online Socials
            </h3>

            <div className="space flex flex-row items-center text-center gap-1">
              <Instagram size={26} strokeWidth={2}/>
              <a
                href="https://github.com/Koyonari"
                className="text-sm md:text-lg helvetica-light link-hover text-center py-0.5 px-1"
              >
                cyl.labs
              </a>
            </div>
          </div>
          <div className="location mt-4 md:mt-12">
            <h3 className="text-2xl md:text-3xl helvetica-bold mb-3">
              Location
            </h3>
            <p className="text-sm md:text-lg helvetica-light">Singapore</p>
            {singaporeTime && (
              <p className="text-sm md:text-lg helvetica-light">
                Local time:
                <span className="ml-2 font-mono">{singaporeTime}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Pricing btn 
      <button className="absolute bottom-24 hover:bg-[#E8492A] right-24 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)] text-sm border hover:cursor-pointer border-[#E8492A]">
        Check out our pricing -&gt;
      </button>
      */}
    </section>
  );
}
