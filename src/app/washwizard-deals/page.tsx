import PageHero from "@/components/PageHero";
import Promos from "@/components/Promos";
import GiftCards from "@/components/GiftCards";

export const metadata = {
  title: "Deals & Specials | Wash Wizard Car Wash",
  description:
    "Wash Wizard's current six specials — Chivalrous Unlimited, twice-a-month club, Magic à la carte unlimited, family add-ons, annual plans, and buy-five-get-one bundles.",
};

export default function DealsPage() {
  return (
    <>
      <PageHero
        title="Wash Wizard Deals."
        subtitle="The wizard's current six specials — pick a plan, lock in your savings."
        showMascot={false}
      />
      <Promos />
      <GiftCards />
    </>
  );
}
