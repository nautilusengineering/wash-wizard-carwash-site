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
        title="Wash Wizard Deals."
        subtitle="The wizard's current specials — pick a plan, lock in your savings."
        showMascot={false}
      />
      <Promos />
      <SubscribeBanner />
    </>
  );
}
