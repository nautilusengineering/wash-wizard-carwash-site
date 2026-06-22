"use client";

import Image from "next/image";
import Link from "next/link";
import { Wand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUY_ONLINE_URL } from "@/lib/utils";

interface Deal {
  badge: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  bgClass: string;
  textClass: string;
  badgeClass: string;
  accent?: boolean;
}

const deals: Deal[] = [
  {
    badge: "Unlimited Wash Club",
    title: "Chivalry — Cheapest Way to Wash",
    body:
      "Lock in unlimited Magic Washes for just $20/mo. Cancel anytime. The fastest path from dirty ride to sparkling clean.",
    cta: "Get Your Plan",
    href: "/packages",
    bgClass: "bg-primary",
    textClass: "text-white",
    badgeClass: "bg-accent text-accent-foreground",
  },
  {
    badge: "Best Value",
    title: "The King's Wash — $30 / Month",
    body:
      "Unlimited graphene shine, sealant armor, and rain repellent. The wizard's choice when only legendary clean will do.",
    cta: "Claim the Crown",
    href: "/packages",
    bgClass: "bg-accent",
    textClass: "text-accent-foreground",
    badgeClass: "bg-deep text-accent",
    accent: true,
  },
  {
    badge: "Annual Plan",
    title: "Get Two Months Free",
    body:
      "Pay annually and unlock 2 months of unlimited washes — completely free. The savviest spell in the spellbook.",
    cta: "Save With Annual",
    href: "/packages",
    bgClass: "bg-magic",
    textClass: "text-white",
    badgeClass: "bg-white text-magic",
  },
  {
    badge: "First Wash Free",
    title: "New Members Wash on Us",
    body:
      "Sign up for any Unlimited Club tier and your first wash is on the wizard. No prorations, no fine print.",
    cta: "Start Today",
    href: BUY_ONLINE_URL,
    bgClass: "bg-secondary",
    textClass: "text-white",
    badgeClass: "bg-deep text-secondary",
  },
];

export default function Promos() {
  return (
    <section className="relative bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div>
            <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
              Wash Wizard Specials
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
              Make your ride
              <br />
              <span className="text-accent">shine for less.</span>
            </h2>
          </div>
          <Link href="/washwizard-deals">
            <Button variant="outlineDark" size="lg">
              See All Deals &rarr;
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {deals.map((deal, i) => (
            <div
              key={deal.title}
              className={`relative rounded-[1.5rem] ${deal.bgClass} ${deal.textClass} p-7 sm:p-9 flex flex-col overflow-hidden shadow-xl ring-1 ring-black/5 ${
                i === 0 ? "md:row-span-2 md:min-h-[460px]" : "min-h-[260px]"
              }`}
            >
              <Wand
                className={`absolute top-5 right-5 w-6 h-6 ${
                  deal.accent ? "text-deep/40" : "text-white/30"
                }`}
              />

              <span
                className={`inline-flex items-center w-fit gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest mb-4 ${deal.badgeClass}`}
              >
                <Wand className="w-3 h-3" /> {deal.badge}
              </span>

              <h3
                className={`font-heading font-bold uppercase leading-[0.95] ${
                  i === 0
                    ? "text-4xl sm:text-5xl lg:text-6xl"
                    : "text-2xl sm:text-3xl"
                } mb-3`}
              >
                {deal.title}
              </h3>
              <p
                className={`text-sm sm:text-base mb-6 max-w-xl ${
                  deal.accent ? "text-accent-foreground/85" : "text-white/85"
                }`}
              >
                {deal.body}
              </p>

              <div className="mt-auto">
                <Link
                  href={deal.href}
                  target={deal.href.startsWith("http") ? "_blank" : undefined}
                  rel={deal.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Button
                    variant={deal.accent ? "primary" : "default"}
                    size="default"
                  >
                    {deal.cta}
                  </Button>
                </Link>
              </div>

              {i === 0 && (
                <div className="absolute -bottom-12 -right-8 w-56 h-56 opacity-25 pointer-events-none">
                  <Image
                    src="/images/knight.png"
                    alt=""
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
