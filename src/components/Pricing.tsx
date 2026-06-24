"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import IframeDrawer from "./IframeDrawer";

interface Tier {
  name: string;
  tagline: string;
  tier: string;
  icon: string;
  singlePrice: string;
  clubPrice: string;
  features: string[];
  isBest?: boolean;
  productId?: string;
  singleProductId?: string;
}

const tiers: Tier[] = [
  {
    name: "Magic Wash",
    tagline: "The everyday spell",
    tier: "Tier I",
    icon: "✦",
    singlePrice: "$10",
    clubPrice: "$20",
    features: [
      "Exterior wash & rinse",
      "Spot-free water rinse",
      "Powerful blowers",
      "Free DIY vacuums",
    ],
    productId: "TODO-MAGIC-CLUB-PRODUCT-ID",
    singleProductId: "TODO-MAGIC-SINGLE-PRODUCT-ID",
  },
  {
    name: "Wicked Wheel",
    tagline: "Wheels & rims polished",
    tier: "Tier II",
    icon: "❋",
    singlePrice: "$14",
    clubPrice: "$30",
    features: [
      "Everything in Magic Wash",
      "Triple-foam soft polish",
      "Wheel & rim cleaner",
      "Tire shine + brightener",
    ],
    productId: "TODO-WICKED-CLUB-PRODUCT-ID",
    singleProductId: "TODO-WICKED-SINGLE-PRODUCT-ID",
  },
  {
    name: "Shining Knight",
    tagline: "Long-lasting protection",
    tier: "Tier III",
    icon: "⚜",
    singlePrice: "$18",
    clubPrice: "$40",
    features: [
      "Everything in Wicked Wheel",
      "Hot wax + sealant armor",
      "Rain repellent windshield",
      "Underbody rust inhibitor",
    ],
    productId: "TODO-KNIGHT-CLUB-PRODUCT-ID",
    singleProductId: "TODO-KNIGHT-SINGLE-PRODUCT-ID",
  },
  {
    name: "King's Graphene",
    tagline: "The wizard's crown jewel",
    tier: "Tier IV",
    icon: "♛",
    singlePrice: "$25",
    clubPrice: "$50",
    features: [
      "Everything in Shining Knight",
      "Graphene ceramic coating",
      "Triple-layer paint protection",
      "Hydrophobic mirror shine",
      "Tunnel light show",
    ],
    isBest: true,
    productId: "TODO-KINGS-CLUB-PRODUCT-ID",
    singleProductId: "TODO-KINGS-SINGLE-PRODUCT-ID",
  },
];

/* ─── Corner flourish ─────────────────────────────────────── */
function CornerFlourish() {
  const paths = (
    <g stroke="#a07010" strokeWidth="1.2" fill="none" opacity={0.6}>
      <path d="M4,22 L4,4 L22,4" />
      <path d="M4,4 Q9,9 14,4" />
      <path d="M4,4 Q9,9 4,14" />
      <circle cx="4" cy="4" r="2.2" fill="#a07010" opacity={0.5} />
      <path d="M11,4 Q13,6.5 15,4" strokeWidth="0.7" />
      <path d="M4,11 Q6.5,13 4,15" strokeWidth="0.7" />
    </g>
  );

  const svgStyle = (pos: React.CSSProperties): React.CSSProperties => ({
    position: "absolute",
    width: 36,
    height: 36,
    pointerEvents: "none",
    zIndex: 1,
    ...pos,
  });

  return (
    <>
      <svg style={svgStyle({ top: 6, left: 6 })} viewBox="0 0 36 36" aria-hidden="true">{paths}</svg>
      <svg style={svgStyle({ top: 6, right: 6 })} viewBox="0 0 36 36" aria-hidden="true"><g transform="scale(-1,1) translate(-36,0)">{paths}</g></svg>
      <svg style={svgStyle({ bottom: 6, left: 6 })} viewBox="0 0 36 36" aria-hidden="true"><g transform="scale(1,-1) translate(0,-36)">{paths}</g></svg>
      <svg style={svgStyle({ bottom: 6, right: 6 })} viewBox="0 0 36 36" aria-hidden="true"><g transform="scale(-1,-1) translate(-36,-36)">{paths}</g></svg>
    </>
  );
}

/* ─── Divider ─────────────────────────────────────────────── */
function SpellDivider() {
  return (
    <div className="flex items-center gap-1.5 my-2.5">
      <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(176,128,32,0.4), transparent)" }} />
      <span className="text-[11px] leading-none" style={{ color: "rgba(176,128,32,0.55)" }} aria-hidden="true">❧</span>
      <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(176,128,32,0.4), transparent)" }} />
    </div>
  );
}

/* ─── Best Value ribbon ──────────────────────────────────── */
function BestRibbon() {
  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
      <svg viewBox="0 0 152 36" width="152" height="36" aria-hidden="true">
        <defs>
          <linearGradient id="ribGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A2D6B" />
            <stop offset="52%" stopColor="#2E1A4A" />
            <stop offset="100%" stopColor="#1A0D2E" />
          </linearGradient>
        </defs>
        <polygon points="0,4 21,4 21,32 0,36" fill="#12091E" />
        <polygon points="131,4 152,4 152,36 131,32" fill="#12091E" />
        <rect x="10" y="0" width="132" height="32" rx="3" fill="url(#ribGrad)" />
        <rect x="14" y="3" width="124" height="7" rx="2" fill="rgba(255,255,255,0.12)" />
        <text x="76" y="21" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold" fontSize="10" fill="#E8D5FF" letterSpacing="2">✦ BEST VALUE ✦</text>
      </svg>
    </div>
  );
}

/* ─── Spell card ──────────────────────────────────────────── */
function SpellCard({
  tier,
  isMonthly,
  onSubscribe,
}: {
  tier: Tier;
  isMonthly: boolean;
  onSubscribe: (id?: string) => void;
}) {
  const price = isMonthly ? tier.clubPrice : tier.singlePrice;
  const priceLabel = isMonthly ? "per month" : "single wash";

  return (
    <div
      className="relative flex flex-col h-full"
      style={{
        background: "linear-gradient(160deg, #fdf6e3 0%, #f7e9c4 40%, #f2dfa8 70%, #f7e9c4 100%)",
        borderRadius: 14,
        padding: "30px 22px 24px",
        boxShadow: tier.isBest
          ? "0 10px 40px rgba(60,20,90,0.2), 0 0 0 1.5px rgba(100,60,160,0.25)"
          : "0 8px 32px rgba(80,50,0,0.12), 0 0 0 1px rgba(160,110,20,0.1)",
      }}
    >
      {tier.isBest && <BestRibbon />}
      <CornerFlourish />

      {/* Inner border */}
      <div
        className="absolute pointer-events-none"
        style={{ inset: 9, borderRadius: 9, border: "1.5px solid rgba(160,110,20,0.22)" }}
        aria-hidden="true"
      />

      <div className="relative z-[2] flex flex-col flex-1">

        {/* Tier badge */}
        <div
          className="self-center mb-3"
          style={{
            fontFamily: "var(--font-cinzel, Georgia, serif)",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#7a5a10",
            border: "1px solid rgba(160,110,20,0.3)",
            borderRadius: 3,
            padding: "3px 12px",
            background: "rgba(255,240,180,0.35)",
          }}
        >
          {tier.tier}
        </div>

        {/* Icon circle */}
        <div className="flex justify-center mb-3">
          <div
            className="flex items-center justify-center"
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "1.5px solid rgba(160,110,20,0.25)",
              background: "rgba(160,110,20,0.06)",
              fontSize: 24,
              color: "#8a6010",
              fontFamily: "Georgia, serif",
            }}
          >
            {tier.icon}
          </div>
        </div>

        {/* Name */}
        <h3
          className="text-center mb-1"
          style={{
            fontFamily: "var(--font-cinzel, Georgia, serif)",
            fontWeight: 700,
            fontSize: 17,
            color: "#1a0e00",
            letterSpacing: "0.04em",
            lineHeight: 1.2,
          }}
        >
          {tier.name}
        </h3>

        {/* Tagline */}
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-im-fell, Georgia, serif)",
            fontStyle: "italic",
            fontSize: 12,
            color: "#7a5a10",
          }}
        >
          {tier.tagline}
        </p>

        <SpellDivider />

        {/* Price */}
        <div className="text-center mb-0.5">
          <span
            className="tabular-nums"
            style={{
              fontFamily: "var(--font-cinzel, Georgia, serif)",
              fontWeight: 700,
              fontSize: 42,
              color: "#5a3800",
              lineHeight: 1,
            }}
          >
            {price}
          </span>
          <span
            className="block mt-0.5"
            style={{
              fontFamily: "var(--font-im-fell, Georgia, serif)",
              fontStyle: "italic",
              fontSize: 12,
              color: "#7a5a10",
            }}
          >
            {priceLabel}
          </span>
        </div>

        <SpellDivider />

        {/* Features */}
        <ul className="flex-1 mb-5" role="list" style={{ padding: 0, margin: 0, listStyle: "none" }}>
          {tier.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 mb-1.5"
              style={{
                fontFamily: "var(--font-im-fell, Georgia, serif)",
                fontSize: 13,
                color: "#1a0e00",
                lineHeight: 1.4,
              }}
            >
              <span className="shrink-0 mt-1" style={{ color: "#a07010", fontSize: 7 }} aria-hidden="true">✦</span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          onClick={() => onSubscribe(isMonthly ? tier.productId : tier.singleProductId)}
          className="w-full cursor-pointer"
          style={{
            padding: "10px 0",
            fontFamily: "var(--font-cinzel, Georgia, serif)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            border: "none",
            borderRadius: 5,
            background: tier.isBest
              ? "linear-gradient(135deg, #2E1A4A 0%, #4A2D6B 50%, #2E1A4A 100%)"
              : "linear-gradient(135deg, #3d2206 0%, #5c3610 60%, #3d2206 100%)",
            color: tier.isBest ? "#E8D5FF" : "#f0d890",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,220,100,0.08)",
          }}
        >
          {isMonthly ? "Join the Club" : "Buy Now"}
        </button>
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────── */
export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();

  const openPurchaseDrawer = (productId?: string) => {
    setSelectedProductId(productId);
    setShowDrawer(true);
  };

  return (
    <>
      <section id="pricing" className="relative bg-wizard-cream py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">

          <div className="text-center mb-10 lg:mb-14">
            <p className="font-script text-magic text-sm tracking-wide mb-3 animate-fade-up">
              Wash Wizard Packages
            </p>
            <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl text-primary text-balance animate-fade-up-delay-1">
              Various <span className="text-accent">elixirs</span>
              <br className="hidden sm:block" /> for all budgets
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-[56ch] mx-auto text-pretty animate-fade-up-delay-2">
              Pay once or unlock unlimited washes with the club. Every package
              includes free DIY vacuums and the legendary 180-foot tunnel.
            </p>

            <div className="mt-7 flex justify-center animate-fade-up-delay-3">
              <div
                className="inline-flex items-center rounded-full p-1.5"
                style={{ background: "rgba(160,110,20,0.08)", border: "1px solid rgba(160,110,20,0.15)" }}
              >
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`px-5 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-widest ${
                    isMonthly ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Unlimited Club
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`px-5 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-widest ${
                    !isMonthly ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Single Wash
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-6">
            {tiers.map((tier) => (
              <SpellCard
                key={tier.name}
                tier={tier}
                isMonthly={isMonthly}
                onSubscribe={openPurchaseDrawer}
              />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/packages">
              <Button variant="outlineDark" size="lg">
                Compare every package &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {showDrawer && (
        <IframeDrawer
          onClose={() => setShowDrawer(false)}
          productId={selectedProductId}
          title="Get Your Wash Wizard Membership"
        />
      )}
    </>
  );
}
