"use client";

import { Poppins } from "@next/font/google";
import { Suspense } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./globals.scss";
import Loading from "./loading";

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
        <Suspense fallback={<Loading />}>
          <Navbar />
          <div className="Container">
            {children}
            <Footer />
          </div>
        </Suspense>
      </body>
    </html>
  );
}
