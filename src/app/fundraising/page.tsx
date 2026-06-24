import SubscribeBanner from "@/components/SubscribeBanner";
import { Button } from "@/components/ui/button";
import { Wand } from "lucide-react";
import { PHONE_HREF } from "@/lib/utils";

export const metadata = {
  title: "Fundraising | Wash Wizard Car Wash",
  description:
    "Raise money for your school, team, or non-profit with Wash Wizard. Discounted books of wash codes — your group keeps the profit.",
};

const tiers = [
  {
    name: "Bronze Wand",
    quantity: "50 Magic Wash codes",
    raise: "$500",
    body: "Perfect for small teams, classrooms, and church groups.",
  },
  {
    name: "Silver Wand",
    quantity: "100 Magic Wash codes",
    raise: "$1,200",
    body: "Ideal for sports teams and full school grades.",
    popular: true,
  },
  {
    name: "Gold Wand",
    quantity: "250 Magic Wash codes",
    raise: "$3,500",
    body: "For big drives — bands, booster clubs, and full schools.",
  },
];

export default function FundraisingPage() {
  return (
    <>
      <section className="bg-background pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
              Pick a <span className="text-accent">wand</span> to fundraise.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl p-7 border ${
                  t.popular
                    ? "bg-accent text-accent-foreground border-accent shadow-2xl scale-[1.02]"
                    : "bg-white text-primary border-border shadow-md"
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-deep text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Wand className="w-3 h-3" /> Most Picked
                  </div>
                )}
                <h3 className="font-heading font-bold uppercase text-2xl mb-1">
                  {t.name}
                </h3>
                <p className="text-sm opacity-80 mb-5">{t.quantity}</p>
                <p className="font-heading font-bold text-4xl mb-1">{t.raise}</p>
                <p className="text-xs uppercase tracking-widest opacity-80 mb-5">
                  raised potential
                </p>
                <p className="text-sm leading-relaxed opacity-90">{t.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-7 sm:p-9 rounded-2xl bg-primary text-white text-center shadow-xl">
            <h3 className="font-heading font-bold uppercase text-2xl sm:text-3xl mb-4">
              Call the wizard.
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Every fundraiser is custom — call us and we&apos;ll tailor the
              package to your group&apos;s goals.
            </p>
            <a href={PHONE_HREF}>
              <Button size="lg">Call to Get Started</Button>
            </a>
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}