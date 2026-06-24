"use client";

import Link from "next/link";
import { Wand, Crown, Gift, Sparkles, FlaskConical, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUY_ONLINE_URL } from "@/lib/utils";

function MagicDivider() {
  return (
    <div className="flex items-center gap-3 my-8 lg:my-10">
      <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, hsl(var(--accent) / 0.4), transparent)" }} />
      <span className="text-accent text-xs animate-twinkle">✦</span>
      <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, hsl(var(--accent) / 0.4), transparent)" }} />
    </div>
  );
}

function CornerFlourish({ color = "rgba(255,255,255,0.08)" }: { color?: string }) {
  return (
    <>
      <svg className="absolute top-2 left-2 w-6 h-6 pointer-events-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3,16 L3,3 L16,3" stroke={color} strokeWidth="1" />
        <path d="M3,3 Q7,7 11,3" stroke={color} strokeWidth="0.7" fill="none" />
        <circle cx="3" cy="3" r="1.5" fill={color} opacity="0.6" />
      </svg>
      <svg className="absolute top-2 right-2 w-6 h-6 pointer-events-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21,16 L21,3 L8,3" stroke={color} strokeWidth="1" />
        <path d="M21,3 Q17,7 13,3" stroke={color} strokeWidth="0.7" fill="none" />
        <circle cx="21" cy="3" r="1.5" fill={color} opacity="0.6" />
      </svg>
    </>
  );
}

function FloatingStar({ className, delay = "0s" }: { className: string; delay?: string }) {
  return (
    <span
      className={`absolute pointer-events-none select-none text-accent/20 animate-twinkle ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      ✦
    </span>
  );
}

export default function Promos() {
  return (
    <section className="relative bg-wizard-cream py-16 lg:py-24 overflow-hidden">
      {/* Floating ambient stars */}
      <FloatingStar className="top-12 left-[8%] text-lg" delay="0s" />
      <FloatingStar className="top-24 right-[12%] text-sm" delay="1.2s" />
      <FloatingStar className="bottom-20 left-[15%] text-base" delay="0.6s" />
      <FloatingStar className="bottom-32 right-[6%] text-xs" delay="1.8s" />
      <FloatingStar className="top-1/2 left-[4%] text-xs" delay="2.4s" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">

        {/* Heading */}
        <div className="mb-0">
          <p className="font-script text-magic text-sm tracking-wide mb-3">
            Wash Wizard Specials
          </p>
          <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl text-primary text-balance">
            Make your ride <span className="text-accent magic-underline">shine for less</span>
          </h2>
        </div>

        <MagicDivider />

        {/* Featured hero card — Unlimited Club */}
        <div className="relative rounded-2xl bg-wizard-night text-white p-8 sm:p-10 mb-6 shadow-lg ring-1 ring-white/10 overflow-hidden">
          {/* Gold shimmer top edge */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(200,175,80,0.5) 30%, rgba(210,185,80,0.7) 50%, rgba(200,175,80,0.5) 70%, transparent 100%)" }}
          />
          <CornerFlourish color="rgba(255,184,0,0.15)" />
          {/* Crown watermark */}
          <Crown className="absolute -bottom-4 -right-4 w-40 h-40 text-white/[0.04]" />
          {/* Subtle sparkle accents */}
          <Sparkles className="absolute top-6 right-8 size-4 text-accent/15 animate-twinkle" />
          <Sparkles className="absolute bottom-8 right-28 size-3 text-accent/10 animate-sparkle" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 py-1 pl-1.5 pr-2.5 rounded-full text-[0.625rem] font-heading font-semibold uppercase tracking-widest mb-4 bg-accent text-accent-foreground">
                <Crown className="size-3 shrink-0" /> Unlimited Wash Club
              </span>
              <h3 className="font-heading font-semibold uppercase text-3xl sm:text-4xl lg:text-5xl mb-3">
                Cheapest Way to Wash
              </h3>
              <p className="text-sm sm:text-base opacity-85 max-w-xl text-pretty">
                Lock in unlimited Magic Washes for just $20/mo. Cancel anytime. The fastest path from dirty ride to sparkling clean.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/packages">
                <Button size="lg">Get Your Plan</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Best Value */}
          <div className="relative rounded-2xl bg-accent text-accent-foreground p-7 flex flex-col shadow-lg ring-1 ring-black/5 min-h-[220px] overflow-hidden">
            <CornerFlourish color="rgba(0,0,0,0.1)" />
            {/* Top glow */}
            <div className="absolute top-0 inset-x-0 h-20 bg-linear-to-b from-white/15 to-transparent rounded-t-2xl pointer-events-none" />
            <Crown className="absolute -bottom-3 -right-3 w-28 h-28 opacity-[0.06]" />
            <Sparkles className="absolute top-5 right-5 size-5 opacity-15 animate-twinkle" style={{ animationDelay: "0.5s" }} />
            <div className="relative z-10 flex flex-col flex-1">
              <span className="inline-flex items-center w-fit gap-1.5 py-1 pl-1.5 pr-2.5 rounded-full text-[0.625rem] font-heading font-semibold uppercase tracking-widest mb-4 bg-deep text-accent">
                <Crown className="size-3 shrink-0" /> Best Value
              </span>
              <h3 className="font-heading font-semibold uppercase text-2xl mb-3">
                The King&apos;s Wash — $30/mo
              </h3>
              <p className="text-sm opacity-85 mb-6 flex-1 text-pretty">
                Unlimited graphene shine, sealant armor, and rain repellent. The wizard&apos;s choice when only legendary clean will do.
              </p>
              <Link href="/packages">
                <Button size="default">Claim the Crown</Button>
              </Link>
            </div>
          </div>

          {/* Annual Plan */}
          <div className="relative rounded-2xl bg-magic text-white p-7 flex flex-col shadow-lg ring-1 ring-black/5 min-h-[220px] overflow-hidden">
            <CornerFlourish color="rgba(255,255,255,0.1)" />
            {/* Top glow */}
            <div className="absolute top-0 inset-x-0 h-20 bg-linear-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none" />
            <FlaskConical className="absolute -bottom-3 -right-3 w-28 h-28 text-white/[0.05]" />
            <Sparkles className="absolute top-5 right-5 size-5 opacity-15 animate-twinkle" style={{ animationDelay: "1s" }} />
            <div className="relative z-10 flex flex-col flex-1">
              <span className="inline-flex items-center w-fit gap-1.5 py-1 pl-1.5 pr-2.5 rounded-full text-[0.625rem] font-heading font-semibold uppercase tracking-widest mb-4 bg-white text-magic">
                <FlaskConical className="size-3 shrink-0" /> Annual Plan
              </span>
              <h3 className="font-heading font-semibold uppercase text-2xl mb-3">
                Get Two Months Free
              </h3>
              <p className="text-sm opacity-85 mb-6 flex-1 text-pretty">
                Pay annually and unlock 2 months of unlimited washes — completely free. The savviest spell in the spellbook.
              </p>
              <Link href="/packages">
                <Button size="default">Save With Annual</Button>
              </Link>
            </div>
          </div>

          {/* New Member Perk */}
          <div className="relative rounded-2xl border border-accent/25 bg-cream text-primary p-7 flex flex-col min-h-[220px] overflow-hidden">
            <CornerFlourish color="rgba(200,160,0,0.15)" />
            {/* Subtle warm glow */}
            <div className="absolute top-0 inset-x-0 h-20 bg-linear-to-b from-accent/5 to-transparent rounded-t-2xl pointer-events-none" />
            <ScrollText className="absolute -bottom-3 -right-3 w-28 h-28 text-accent/[0.06]" />
            <Wand className="absolute top-5 right-5 size-5 text-accent/20 animate-twinkle" style={{ animationDelay: "1.5s" }} />
            <div className="relative z-10 flex flex-col flex-1">
              <span className="inline-flex items-center w-fit gap-1.5 py-1 pl-1.5 pr-2.5 rounded-full text-[0.625rem] font-heading font-semibold uppercase tracking-widest mb-4 bg-primary text-white">
                <Wand className="size-3 shrink-0" /> New Member Perk
              </span>
              <h3 className="font-heading font-semibold uppercase text-2xl mb-3">
                First Wash on Us
              </h3>
              <p className="text-sm opacity-70 mb-6 flex-1 text-pretty">
                Sign up for any Unlimited Club tier and your first wash is on the wizard. No prorations, no fine print.
              </p>
              <a href={BUY_ONLINE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outlineDark" size="default">Start Today</Button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
