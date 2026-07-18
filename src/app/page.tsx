import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Amenities from "@/components/Amenities";
import Promos from "@/components/Promos";
import GiftCards from "@/components/GiftCards";
import Locations from "@/components/Locations";
import HomeFAQ from "@/components/HomeFAQ";
import SubscribeBanner from "@/components/SubscribeBanner";

export const metadata: Metadata = {
  title: "Wash Wizard Car Wash | Summerville & Ladson, SC",
  description:
    "Wash Wizard — Summerville's magical car wash. Unlimited Wash Club memberships, a 180-foot tunnel, free vacuums, and three locations across Summerville & Ladson, SC.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Amenities />
      <Promos />
      <GiftCards />
      <Locations />
      <HomeFAQ />
      <SubscribeBanner />
    </>
  );
}
