import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOLD = "#FFB800";
const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

interface Deal {
  name: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  href: string;
  accent: string;
}

const heroDeal: Deal = {
  name: "The Chivalrous Unlimited Wash Club",
  price: "3 Months",
  cadence: "for one wash / mo",
  description:
    "Enlist online today and claim three months of unlimited washes for the cost of just one wash per month. Endless sparkle, legendary savings. Valid for new online sign-ups only; auto-renews at regular price in month 4.",
  cta: "Get Your Deal Now",
  href: "/packages",
  accent: GOLD,
};

const deals: Deal[] = [
  {
    name: "The King's Twice A Month Wash Club",
    price: "$30",
    cadence: "/ month",
    description:
      "Don't need full unlimited? Join the royal ranks and wash twice a month for only $30/month. Not unlimited — just smart.",
    cta: "Get Your Deal Now",
    href: "/packages",
    accent: "#7A5CFF",
  },
  {
    name: "The New Magic Wash À La Carte Unlimited",
    price: "$14.99",
    cadence: "/ month",
    description:
      "Enjoy unlimited Magic Washes at a super low price, with the freedom to add optional services whenever you need them.",
    cta: "Get Your Deal Now",
    href: "/packages",
    accent: "#00AEEF",
  },
  {
    name: "Monthly Unlimited Added Family Members",
    price: "$25",
    cadence: "/ month",
    description:
      "Add family members to your Monthly Unlimited plan for just $25/month. Magic Wash Monthly Unlimited family pricing is just $13/month per added member.",
    cta: "Get Your Deal Now",
    href: "/packages",
    accent: "#22C55E",
  },
  {
    name: "The Wizard's Annual Unlimited Wash Spell",
    price: "$135",
    cadence: "/ year",
    description:
      "Our lowest unlimited pricing ever. Abracadabra — it’s just like getting three months free, with annual plans starting at $135/year.",
    cta: "Get Your Deal Now",
    href: "/packages",
    accent: "#F97316",
  },
  {
    name: "Buy 5 Washes, Get 1 Free",
    price: "$50",
    cadence: "starting at",
    description:
      "Get rewarded for staying clean. Buy five washes and your sixth wash is on us, with bundles starting at just $50.",
    cta: "Get Your Deal Now",
    href: "/packages",
    accent: "#EC4899",
  },
];

export default function Promos() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 lg:mb-14 max-w-3xl">
          <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl text-primary text-balance">
            Make your ride <span className="text-accent">shine for less.</span>
          </h2>
          <p className="mt-4 text-lg text-foreground max-w-[58ch] text-pretty">
            Welcome to the enchanted realm of savings. These six Wash Wizard
            deals won’t last forever — grab your wand and make the magic happen
            today.
          </p>
        </div>

        {/* Hero deal */}
        <div
          className="relative rounded-2xl text-white overflow-hidden mb-6 lg:mb-8 shadow-xl"
          style={{ background: PURPLE_DARK }}
        >
          <div
            className="absolute inset-x-0 top-0 h-1"
            style={{ background: heroDeal.accent }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-8 sm:p-10 lg:p-14">
            <div className="lg:col-span-7">
              <p className="font-heading uppercase tracking-[0.22em] text-sm text-accent mb-3">
                Deal 1
              </p>
              <h3 className="font-heading font-bold uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] mb-4">
                {heroDeal.name}
              </h3>
              <p className="text-lg text-white/85 max-w-2xl text-pretty mb-2">
                {heroDeal.description}
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
              <div className="flex flex-col items-start lg:items-end">
                <span
                  className="font-heading font-bold tabular-nums text-5xl sm:text-6xl"
                  style={{ color: GOLD }}
                >
                  {heroDeal.price}
                </span>
                <span className="font-heading uppercase tracking-widest text-sm text-white/70">
                  {heroDeal.cadence}
                </span>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href={heroDeal.href}>
                  {heroDeal.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Sub-deals grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {deals.map((d, index) => (
            <article
              key={d.name}
              className="relative flex flex-col rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: d.accent }}
              />
              <div className="p-7 sm:p-8 flex flex-col flex-1">
                <p className="font-heading uppercase tracking-[0.18em] text-xs text-muted-foreground mb-3">
                  Deal {index + 2}
                </p>
                <h3 className="font-heading font-bold uppercase text-2xl text-primary leading-tight mb-2">
                  {d.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-heading font-bold text-4xl text-foreground tabular-nums">
                    {d.price}
                  </span>
                  <span className="font-heading uppercase tracking-widest text-sm text-foreground/70">
                    {d.cadence}
                  </span>
                </div>
                <p className="text-base lg:text-[15px] text-foreground leading-relaxed mb-7 text-pretty flex-1">
                  {d.description}
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href={d.href}>
                    {d.cta}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
