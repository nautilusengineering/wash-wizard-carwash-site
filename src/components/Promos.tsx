"use client";

import Image from "next/image";
import Link from "next/link";
import { Wand, Crown, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUY_ONLINE_URL } from "@/lib/utils";

interface Deal {
  badge: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  icon: typeof Wand;
}

const featured: Deal = {
  badge: "Best Value",
  title: "The King's Wash",
  body:
    "Unlimited graphene shine, sealant armor, and rain repellent. The wizard's choice when only legendary clean will do. $50/mo, cancel anytime.",
  cta: "Claim the Crown",
  href: "/packages",
  icon: Crown,
};

const sideDeals: Deal[] = [
  {
    badge: "Unlimited Club",
    title: "Chivalry — $20/mo",
    body:
      "Lock in unlimited Magic Washes for less than two single washes. The cheapest path from dirty to sparkling.",
    cta: "Get Your Plan",
    href: "/packages",
    icon: Wand,
  },
  {
    badge: "Annual Plan",
    title: "Get Two Months Free",
    body:
      "Pay annually and unlock two months of unlimited washes — completely free. The savviest spell in the spellbook.",
    cta: "Save With Annual",
    href: "/packages",
    icon: Crown,
  },
  {
    badge: "First Wash Free",
    title: "New Members Wash on Us",
    body:
      "Join any Unlimited Club tier and your first wash is on the wizard. No prorations, no fine print.",
    cta: "Start Today",
    href: BUY_ONLINE_URL,
    icon: Flame,
  },
];

export default function Promos() {
  return (
    <section className="relative z-10 -mt-12 lg:-mt-16 rounded-t-[2.5rem] bg-parchment py-20 lg:py-28 shadow-[0_-20px_40px_-25px_rgba(0,0,0,0.45)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-script text-magic uppercase tracking-[0.32em] text-sm mb-4 inline-flex items-center gap-2">
              <Crown className="w-4 h-4 text-accent" />
              Wash Wizard Specials
            </p>
            <h2 className="font-heading uppercase text-5xl lg:text-6xl text-primary leading-[0.9]">
              Make your ride
              <br />
              <span className="text-accent">shine for less.</span>
            </h2>
          </div>
          <Link href="/washwizard-deals">
            <Button variant="outlineDark" size="lg">
              See All Deals <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured deal — large, dark, anchors the row */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-3xl bg-spellbook-night text-white p-8 sm:p-12 lg:p-14 min-h-[440px] flex flex-col justify-between shadow-2xl">
            {/* Decorative knight bleed */}
            <Image
              src="/images/knight.png"
              alt=""
              width={520}
              height={520}
              className="absolute -bottom-16 -right-8 w-72 lg:w-[26rem] opacity-30 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_85%_75%,hsla(263_60%_45%_/_0.5),transparent_70%)]"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-heading uppercase tracking-[0.22em] mb-5">
                <Crown className="w-3.5 h-3.5" /> {featured.badge}
              </span>
              <h3 className="font-heading uppercase leading-[0.9] text-5xl sm:text-6xl lg:text-7xl max-w-md mb-5">
                {featured.title}
              </h3>
              <p className="text-base lg:text-lg text-white/85 max-w-md leading-relaxed">
                {featured.body}
              </p>
            </div>

            <div className="relative mt-8">
              <Link href={featured.href}>
                <Button size="lg">
                  {featured.cta} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Three stacked side deals */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5">
            {sideDeals.map((deal) => {
              const Icon = deal.icon;
              const isExternal = deal.href.startsWith("http");
              return (
                <div
                  key={deal.title}
                  className="group relative rounded-2xl bg-white border border-border p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 size-12 rounded-xl bg-deep text-accent grid place-items-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
                        {deal.badge}
                      </p>
                      <h3 className="font-heading uppercase text-xl text-primary leading-tight mb-2">
                        {deal.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {deal.body}
                      </p>
                      <Link
                        href={deal.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-sm font-heading uppercase tracking-widest text-primary group-hover:text-accent transition-colors"
                      >
                        {deal.cta} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
