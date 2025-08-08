"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import Preloader from "./components/preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Keep track of prev sess
let hasShownPreloader = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Check if we've already shown the preloader in this session
    if (hasShownPreloader) {
      // Skip preloader for subsequent page navigations
      setIsLoading(false);
      setShowPreloader(false);
    } else {
      // Show preloader for the first load (page reload or fresh visit)
      setIsLoading(true);
      setShowPreloader(true);
      hasShownPreloader = true;
    }
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setShowPreloader(false);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Page content - always rendered */}
        <div className="relative z-10">{children}</div>

        {/* Preloader overlay - slides up when complete */}
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      </body>
    </html>
  );
}
