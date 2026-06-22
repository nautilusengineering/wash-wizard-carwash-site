import PageHero from "@/components/PageHero";
import Promos from "@/components/Promos";
import SubscribeBanner from "@/components/SubscribeBanner";

export const metadata = {
  title: "Deals & Specials | Wash Wizard Car Wash",
  description:
    "Wash Wizard's current specials — Unlimited Club deals, annual plan savings, family plans, and the King's Graphene crown jewel.",
};

export default function DealsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wash Wizard Special Deals"
        title="Make your ride shine for less"
        subtitle="Limited-time spells and ongoing savings — picked fresh from the wizard's spellbook."
      />

      <Promos />

      <SubscribeBanner />
    </>
  );
}
