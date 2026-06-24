"use client";

import Link from "next/link";
import { Wand, Crown, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUY_ONLINE_URL } from "@/lib/utils";

export default function Promos() {
  return (
    <section className="relative bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-6 lg:mb-8">
          <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
            Wash Wizard Specials
          </p>
          <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
            Make your ride
            <br />
            <span className="text-accent">shine for less.</span>
          </h2>
        </div>

        {/* Featured hero card — Unlimited Club */}
        <div className="relative rounded-2xl bg-primary text-white p-8 sm:p-10 mb-5 shadow-lg ring-1 ring-black/5 overflow-hidden">
          {/* Crown watermark */}
          <Crown className="absolute -bottom-4 -right-4 w-40 h-40 text-white/5" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-widest mb-4 bg-accent text-accent-foreground">
                <Crown className="w-3 h-3" /> Unlimited Wash Club
              </span>
              <h3 className="font-heading font-bold uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3">
                Cheapest Way to Wash
              </h3>
              <p className="text-sm sm:text-base opacity-85 max-w-xl">
                Lock in unlimited Magic Washes for just $20/mo. Cancel anytime. The fastest path from dirty ride to sparkling clean.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/packages">
                <Button size="lg">Get Your Plan</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Best Value */}
          <div className="relative rounded-2xl bg-accent text-accent-foreground p-7 flex flex-col shadow-lg ring-1 ring-black/5 min-h-[220px]">
            <Wand className="absolute top-5 right-5 w-5 h-5 opacity-20" />
            <span className="inline-flex items-center w-fit gap-1.5 px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-widest mb-4 bg-deep text-accent">
              <Wand className="w-3 h-3" /> Best Value
            </span>
            <h3 className="font-heading font-bold uppercase text-2xl leading-tight mb-3">
              The King's Wash — $30/mo
            </h3>
            <p className="text-sm opacity-85 mb-6 flex-1">
              Unlimited graphene shine, sealant armor, and rain repellent. The wizard's choice when only legendary clean will do.
            </p>
            <Link href="/packages">
              <Button size="default">Claim the Crown</Button>
            </Link>
          </div>

          {/* Annual Plan */}
          <div className="relative rounded-2xl bg-magic text-white p-7 flex flex-col shadow-lg ring-1 ring-black/5 min-h-[220px]">
            <Wand className="absolute top-5 right-5 w-5 h-5 opacity-20" />
            <span className="inline-flex items-center w-fit gap-1.5 px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-widest mb-4 bg-white text-magic">
              <Wand className="w-3 h-3" /> Annual Plan
            </span>
            <h3 className="font-heading font-bold uppercase text-2xl leading-tight mb-3">
              Get Two Months Free
            </h3>
            <p className="text-sm opacity-85 mb-6 flex-1">
              Pay annually and unlock 2 months of unlimited washes — completely free. The savviest spell in the spellbook.
            </p>
            <Link href="/packages">
              <Button size="default">Save With Annual</Button>
            </Link>
          </div>

          {/* New Member Perk — visually distinct */}
          <div className="relative rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 text-primary p-7 flex flex-col min-h-[220px]">
            <Gift className="absolute top-5 right-5 w-5 h-5 text-primary/30" />
            <span className="inline-flex items-center w-fit gap-1.5 px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-widest mb-4 bg-primary text-white">
              <Gift className="w-3 h-3" /> New Member Perk
            </span>
            <h3 className="font-heading font-bold uppercase text-2xl leading-tight mb-3">
              First Wash on Us
            </h3>
            <p className="text-sm opacity-70 mb-6 flex-1">
              Sign up for any Unlimited Club tier and your first wash is on the wizard. No prorations, no fine print.
            </p>
            <a href={BUY_ONLINE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outlineDark" size="default">Start Today</Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}