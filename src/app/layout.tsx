import type { Metadata } from "next";
import { Open_Sans, Titan_One, MedievalSharp } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const titanOne = Titan_One({
  variable: "--font-titan",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const medievalSharp = MedievalSharp({
  variable: "--font-medieval",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wash Wizard Car Wash | Summerville & Ladson, SC",
  description:
    "Wash Wizard — Charleston's magical car wash. Three locations across Summerville & Ladson, SC. Unlimited Wash Club, fast tunnel, free vacuums, and a sparkling clean ride every time.",
  metadataBase: new URL("https://washwizardcarwash.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${titanOne.variable} ${medievalSharp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
