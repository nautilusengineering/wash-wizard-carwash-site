import Locations from "@/components/Locations";
import SubscribeBanner from "@/components/SubscribeBanner";

export const metadata = {
  title: "Locations",
  description:
    "Three Wash Wizard Car Wash locations across Summerville and Ladson, SC. Open 7 days a week with the 180-foot tunnel, free vacuums, and license plate recognition.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <div className="pt-20 lg:pt-24" />
      <Locations />
      <SubscribeBanner />
    </>
  );
}
