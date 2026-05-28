"use client";

import { Poppins } from "@next/font/google";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AldoraToast } from "../components/AldoraToast/AldoraToast";
import "./globals.scss";

const poppins = Poppins({ weight: ["300", "500", "600"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        <div className="Banner">
          You&apos;re viewing my 2022 portfolio &mdash; for my current work,{" "}
          <a href="https://www.byaldora.com" target="_blank" rel="noopener noreferrer">
            visit byaldora.com
          </a>.
        </div>
        <Navbar />
        <div className="Container">
          {children}
          <Footer />
        </div>
        <AldoraToast />
      </body>
    </html>
  );
}
