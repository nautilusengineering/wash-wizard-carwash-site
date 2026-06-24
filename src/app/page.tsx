import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Amenities from "@/components/Amenities";
import Promos from "@/components/Promos";
import Locations from "@/components/Locations";
import HomeFAQ from "@/components/HomeFAQ";
import SubscribeBanner from "@/components/SubscribeBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Amenities />
      <Promos />
      <Locations />
      <HomeFAQ />
      <SubscribeBanner />
    </>
  );
}
