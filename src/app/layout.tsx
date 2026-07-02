import type { Metadata, Viewport } from "next";
import { Luckiest_Guy, Nunito, Cinzel, IM_Fell_English, Fredoka } from "next/font/google";
import { Agentation } from "agentation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const luckiestGuy = Luckiest_Guy({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const imFell = IM_Fell_English({
  variable: "--font-im-fell",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wash Wizard Car Wash | Summerville & Ladson, SC",
    template: "%s | Wash Wizard Car Wash",
  },
  description:
    "Wash Wizard — Charleston's magical car wash. Three locations across Summerville & Ladson, SC. Unlimited Wash Club, fast tunnel, free vacuums, and a sparkling clean ride every time.",
  metadataBase: new URL("https://washwizardcarwash.com"),
  applicationName: "Wash Wizard Car Wash",
  keywords: [
    "car wash",
    "Summerville car wash",
    "Ladson car wash",
    "Charleston car wash",
    "unlimited car wash club",
    "tunnel car wash",
    "free vacuums",
    "Wash Wizard",
  ],
  authors: [{ name: "Wash Wizard Car Wash" }],
  creator: "Wash Wizard Car Wash",
  publisher: "Wash Wizard Car Wash",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://washwizardcarwash.com",
    siteName: "Wash Wizard Car Wash",
    title: "Wash Wizard Car Wash | Summerville & Ladson, SC",
    description:
      "Charleston's magical car wash. Unlimited Wash Club, fast tunnel, free vacuums, and a sparkling clean ride every time.",
    images: [
      {
        url: "https://ucarecdn.com/5cadb1ef-9189-413a-9de0-234cab570451/logo.png",
        width: 1200,
        height: 630,
        alt: "Wash Wizard Car Wash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wash Wizard Car Wash | Summerville & Ladson, SC",
    description:
      "Charleston's magical car wash. Unlimited Wash Club, free vacuums, sparkling clean ride every time.",
    images: [
      "https://ucarecdn.com/5cadb1ef-9189-413a-9de0-234cab570451/logo.png",
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  category: "car wash",
};

export const viewport: Viewport = {
  themeColor: "#002F82",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${luckiestGuy.variable} ${nunito.variable} ${cinzel.variable} ${imFell.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <StructuredData />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
