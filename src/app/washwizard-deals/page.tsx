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
      <div className="pt-32 lg:pt-36" />
      <Promos />
      <SubscribeBanner />
    </>
  );
}
