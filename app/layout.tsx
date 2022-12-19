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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="Container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
