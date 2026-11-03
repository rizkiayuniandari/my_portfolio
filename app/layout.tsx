import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personal } from "@/app/data/portfolio";

const heading = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const accent = Playfair_Display({ subsets: ["latin"], style: ["italic"], weight: ["500"], variable: "--font-accent" });

export const metadata: Metadata = {
  title: `${personal.name} | Front-End Developer`,
  description: "Portfolio of Msy Rizkia Yuniandari, a front-end developer and UI/UX enthusiast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${accent.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <div className="wrap">
          <Navbar />
          {children}
          <Footer />
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}