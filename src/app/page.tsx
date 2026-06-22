import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Pricing from "@/components/Pricing";
import Amenities from "@/components/Amenities";
import Promos from "@/components/Promos";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import HomeFAQ from "@/components/HomeFAQ";
import SubscribeBanner from "@/components/SubscribeBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <Pricing />
      <Amenities />
      <Promos />
      <Locations />
      <Testimonials />
      <HomeFAQ />
      <SubscribeBanner />
    </>
  );
}
