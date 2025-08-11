"use client";
import { DM_Sans } from "next/font/google";
// import Preloader from "./components/preloader";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Keep track of prev sess
// let hasShownPreloader = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [isLoading, setIsLoading] = useState(true);
  // const [showPreloader, setShowPreloader] = useState(true);

  // useEffect(() => {
  //   // Check if we've already shown the preloader in this session
  //   if (hasShownPreloader) {
  //     // Skip preloader for subsequent page navigations
  //     setIsLoading(false);
  //     setShowPreloader(false);
  //   } else {
  //     // Show preloader for the first load (page reload or fresh visit)
  //     setIsLoading(true);
  //     setShowPreloader(true);
  //     hasShownPreloader = true;
  //   }
  // }, []);

  // const handlePreloaderComplete = () => {
  //   setIsLoading(false);
  //   setShowPreloader(false);
  // };

  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased leading-none tracking-[-0.08em]`}
      >
        {/* Page content - always rendered */}
        <div className="relative z-10">{children}</div>
        <Toaster />
        {/* Preloader overlay - slides up when complete
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />} */}
      </body>
    </html>
  );
}
