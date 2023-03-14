"use client";

import { Poppins } from "@next/font/google";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
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
        <Navbar />
        <div className="Container">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
