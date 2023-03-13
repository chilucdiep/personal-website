"use client";

import { DM_Sans, Poppins } from "@next/font/google";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./globals.scss";

const poppins = Poppins({ weight: ["300", "500", "600"], subsets: ["latin"] });

const dm = DM_Sans({
  variable: "--font-inter",
  // style: ["normal", "italic"],
  weight: "400",
  adjustFontFallback: false,
  fallback: ["DM_Sans_f83988"],
  // weight: ["400", "500", "700"],
});

console.log(dm.variable);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} ${dm.variable}`}>
      <head />
      <body>
        <Navbar />
        <div className="Container">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
