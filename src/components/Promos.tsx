"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import IframeDrawer from "./IframeDrawer";

const GOLD = "#FFB800";
const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

const FAMILY_URL = "https://www.nautilus-app.com/c/washwizard/p/";

interface Deal {
  name: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  href?: string;
  accent: string;
}

const heroDeal: Deal = {
  name: "The Chivalrous Unlimited Wash Club",
  price: "3 Months",
  cadence: "for one wash / mo",
  description:
    "Enlist online today and claim three months of unlimited washes for the cost of just one wash per month. Endless sparkle, legendary savings. Valid for new online sign-ups only; auto-renews at regular price in month 4.",
  cta: "Get Your Deal Now",
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
    accent: "#7A5CFF",
  },
  {
    name: "The New Magic Wash À La Carte Unlimited",
    price: "$14.99",
    cadence: "/ month",
    description:
      "Enjoy unlimited Magic Washes at a super low price, with the freedom to add optional services whenever you need them.",
    cta: "Get Your Deal Now",
    accent: "#00AEEF",
  },
  {
    name: "Monthly Unlimited Added Family Members",
    price: "$25",
    cadence: "/ month",
    description:
      "Add family members to your Monthly Unlimited club for just $25/month. Magic Wash Monthly Unlimited family pricing is just $13/month per added member.",
    cta: "Manage Your Membership Now – Add Vehicles",
    href: FAMILY_URL,
    accent: "#22C55E",
  },
  {
    name: "The Wizard's Annual Unlimited Wash Spell",
    price: "$135",
    cadence: "/ year",
    description:
      "Our lowest unlimited pricing ever. Abracadabra — it’s just like getting three months free, with annual clubs starting at $135/year.",
    cta: "Get Your Deal Now",
    accent: "#F97316",
  },
  {
    name: "Buy 5 Washes, Get 1 Free",
    price: "$50+",
    cadence: "bundles from",
    description:
      "Get rewarded for staying clean. Buy five washes and your sixth wash is on us — Magic Wash bundles start at $50, all the way up to our top-tier King's Graphene pack.",
    cta: "Get Your Deal Now",
    accent: "#EC4899",
  },
];

function DealCTA({
  deal,
  onOpenDrawer,
  size = "default",
  className,
}: {
  deal: Deal;
  onOpenDrawer: () => void;
  size?: "default" | "lg";
  className?: string;
}) {
  if (deal.href) {
    return (
      <Button asChild size={size} className={cn("whitespace-normal", className)}>
        <Link href={deal.href} className="flex-wrap justify-center text-center">
          {deal.cta}
          <ArrowRight className="size-4 shrink-0" />
        </Link>
      </Button>
    );
  }

  return (
    <Button
      type="button"
      size={size}
      onClick={onOpenDrawer}
      className={cn("whitespace-normal flex-wrap text-center", className)}
    >
      {deal.cta}
      <ArrowRight className="size-4 shrink-0" />
    </Button>
  );
}

export default function Promos() {
  const [showDrawer, setShowDrawer] = useState(false);
  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  const wideDeals = deals.slice(0, 2);
  const compactDeals = deals.slice(2, 5);

  return (
    <>
      <section className="relative bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {/* Header */}
          <div className="mb-10 lg:mb-14 max-w-3xl">
            <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl text-primary text-balance">
              Make your ride <span className="text-accent">shine for less</span>
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-foreground max-w-[58ch] text-pretty">
              Welcome to the enchanted realm of savings. These Wash Wizard deals
              won&apos;t last forever — grab your wand and make the magic happen
              today.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 lg:gap-5 auto-rows-auto">
            {/* HERO tile — feature, tall + wide */}
            <div
              className="relative rounded-2xl text-white overflow-hidden shadow-xl md:col-span-2 xl:col-span-3 xl:row-span-2 flex flex-col min-h-[320px]"
              style={{ background: PURPLE_DARK }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: heroDeal.accent }}
              />
              <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
                <p className="font-heading uppercase tracking-[0.22em] text-xs text-accent mb-3">
                  Featured Deal
                </p>
                <h3 className="font-card font-bold uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] mb-4">
                  {heroDeal.name}
                </h3>
                <p className="text-base text-white/85 leading-relaxed mb-6 max-w-xl">
                  {heroDeal.description}
                </p>
                <div className="mt-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                  <div className="flex flex-col">
                    <span
                      className="font-heading font-bold tabular-nums text-3xl sm:text-4xl leading-none"
                      style={{ color: GOLD }}
                    >
                      {heroDeal.price}
                    </span>
                    <span className="font-heading uppercase tracking-widest text-sm text-white/70 mt-2">
                      {heroDeal.cadence}
                    </span>
                  </div>
                  <DealCTA
                    deal={heroDeal}
                    onOpenDrawer={openDrawer}
                    size="lg"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>

            {/* WIDE tiles — horizontal split, deals 0 & 1 */}
            {wideDeals.map((d, i) => (
              <article
                key={d.name}
                className="relative flex flex-col sm:flex-row rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden xl:col-span-3"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: d.accent }}
                />
                <div className="p-6 sm:p-7 flex flex-col flex-1 sm:pr-4">
                  <p className="font-heading uppercase tracking-[0.18em] text-xs text-muted-foreground mb-2">
                    Deal {i + 2}
                  </p>
                  <h3 className="font-card font-bold uppercase text-xl sm:text-2xl text-primary leading-tight mb-2">
                    {d.name}
                  </h3>
                  <p className="text-sm lg:text-[15px] text-foreground leading-relaxed text-pretty">
                    {d.description}
                  </p>
                </div>
                <div className="p-6 sm:p-7 sm:pl-4 sm:border-l sm:border-black/10 flex flex-col justify-between sm:min-w-[180px]">
                  <div className="flex flex-col mb-4 sm:mb-6">
                    <span className="font-heading font-bold tabular-nums text-3xl sm:text-4xl text-foreground leading-none">
                      {d.price}
                    </span>
                    <span className="font-heading uppercase tracking-widest text-xs text-foreground/70 mt-1.5">
                      {d.cadence}
                    </span>
                  </div>
                  <DealCTA deal={d} onOpenDrawer={openDrawer} className="w-full" />
                </div>
              </article>
            ))}

            {/* COMPACT tiles — square-ish, deals 2, 3, 4 */}
            {compactDeals.map((d, i) => (
              <article
                key={d.name}
                className="relative flex flex-col rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden xl:col-span-2"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: d.accent }}
                />
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="font-heading uppercase tracking-[0.18em] text-xs text-muted-foreground mb-2">
                    Deal {i + 4}
                  </p>
                  <h3 className="font-card font-bold uppercase text-xl text-primary leading-tight mb-3">
                    {d.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-heading font-bold tabular-nums text-3xl text-foreground">
                      {d.price}
                    </span>
                    <span className="font-heading uppercase tracking-widest text-xs text-foreground/70">
                      {d.cadence}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed mb-5 text-pretty flex-1">
                    {d.description}
                  </p>
                  <DealCTA deal={d} onOpenDrawer={openDrawer} className="w-full" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showDrawer && (
        <IframeDrawer
          onClose={closeDrawer}
          title="Get Your Wash Wizard Membership"
        />
      )}
    </>
  );
}
