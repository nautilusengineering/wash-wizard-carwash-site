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
function CornerFlourish({ isBest }: { isBest?: boolean }) {
  const stroke = "#a07010";
  const opacity = 0.65;
  const dotFill = "#a07010";

  const paths = (
    <g stroke={stroke} strokeWidth="1.2" fill="none" opacity={opacity}>
      <path d="M4,22 L4,4 L22,4" />
      <path d="M4,4 Q9,9 14,4" />
      <path d="M4,4 Q9,9 4,14" />
      <circle cx="4" cy="4" r="2.2" fill={dotFill} opacity={0.55} />
      <path d="M11,4 Q13,6.5 15,4" strokeWidth="0.7" />
      <path d="M4,11 Q6.5,13 4,15" strokeWidth="0.7" />
    </g>
  );

  return (
    <>
      <svg style={{ position: "absolute", top: 6, left: 6, width: 36, height: 36, pointerEvents: "none", zIndex: 1 }} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">{paths}</svg>
      <svg style={{ position: "absolute", top: 6, right: 6, width: 36, height: 36, pointerEvents: "none", zIndex: 1 }} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g transform="scale(-1,1) translate(-36,0)">{paths}</g></svg>
      <svg style={{ position: "absolute", bottom: 6, left: 6, width: 36, height: 36, pointerEvents: "none", zIndex: 1 }} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g transform="scale(1,-1) translate(0,-36)">{paths}</g></svg>
      <svg style={{ position: "absolute", bottom: 6, right: 6, width: 36, height: 36, pointerEvents: "none", zIndex: 1 }} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g transform="scale(-1,-1) translate(-36,-36)">{paths}</g></svg>
    </>
  );
}

/* ─── Divider ─────────────────────────────────────────────── */
function SpellDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, margin: "10px 0" }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #b08020, transparent)" }} />
      <span style={{ color: "#b08020", fontSize: 11, lineHeight: 1 }}>❧</span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #b08020, transparent)" }} />
    </div>
  );
}

/* ─── Best Value ribbon — dark purple ─────────────────────── */
function BestRibbon() {
  return (
    <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", zIndex: 10, whiteSpace: "nowrap" }}>
      <svg viewBox="0 0 152 36" width="152" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

  // FIX 1: identical background for all cards
  const cardBg = "linear-gradient(160deg, #fdf6e3 0%, #f7e9c4 40%, #f2dfa8 70%, #f7e9c4 100%)";
  const cardShadow = tier.isBest
    ? "0 8px 36px rgba(60,20,90,0.18), 0 0 0 1.5px rgba(100,60,160,0.25)"
    : "0 6px 28px rgba(80,50,0,0.16), 0 0 0 1px rgba(160,110,20,0.12)";
  const innerBorder = "1.5px solid rgba(160,110,20,0.28)";

  const inkDark = "#1a0e00";
  const inkMid = "#7a5a10";
  const inkGold = "#5a3800";

  return (
    // FIX 2: h-full so all cards stretch to same height in the grid
    <div
      style={{
        position: "relative",
        background: cardBg,
        borderRadius: 12,
        padding: "28px 20px 22px",
        display: "flex",
        flexDirection: "column",
        boxShadow: cardShadow,
        height: "100%",
      }}
    >
      {tier.isBest && <BestRibbon />}
      <CornerFlourish isBest={tier.isBest} />

      <div style={{ position: "absolute", inset: 8, borderRadius: 8, border: innerBorder, pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", flex: 1 }}>

        {/* tier badge */}
        <div style={{
          alignSelf: "center",
          fontFamily: "var(--font-cinzel), Georgia, serif",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "2.5px",
          textTransform: "uppercase" as const,
          color: "#7a5a10",
          border: "1px solid rgba(160,110,20,0.35)",
          borderRadius: 2,
          padding: "3px 10px",
          marginBottom: 12,
          background: "rgba(255,240,180,0.4)",
        }}>
          {tier.tier}
        </div>

        {/* icon circle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
          <div style={{
            width: 52, height: 52,
            borderRadius: "50%",
            border: "1.2px solid rgba(160,110,20,0.35)",
            background: "rgba(160,110,20,0.07)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
            color: "#8a6010",
            fontFamily: "Georgia, serif",
          }}>
            {tier.icon}
          </div>
        </div>

        {/* name */}
        <h3 style={{
          fontFamily: "var(--font-cinzel), Georgia, serif",
          fontWeight: 700,
          fontSize: 16,
          color: inkDark,
          textAlign: "center",
          letterSpacing: "0.05em",
          lineHeight: 1.2,
          marginBottom: 3,
        }}>
          {tier.name}
        </h3>

        {/* tagline */}
        <p style={{
          fontFamily: "var(--font-im-fell), Georgia, serif",
          fontStyle: "italic",
          fontSize: 11,
          color: inkMid,
          textAlign: "center",
          marginBottom: 0,
        }}>
          {tier.tagline}
        </p>

        <SpellDivider />

        {/* price */}
        <div style={{ textAlign: "center", marginBottom: 2 }}>
          <span style={{
            fontFamily: "var(--font-cinzel), Georgia, serif",
            fontWeight: 700,
            fontSize: 40,
            color: inkGold,
            lineHeight: 1,
          }}>
            {price}
          </span>
          <span style={{
            display: "block",
            fontFamily: "var(--font-im-fell), Georgia, serif",
            fontStyle: "italic",
            fontSize: 11,
            color: inkMid,
            marginTop: 1,
          }}>
            {priceLabel}
          </span>
        </div>

        <SpellDivider />

        {/* features */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", flex: 1 }}>
          {tier.features.map((f) => (
            <li key={f} style={{
              fontFamily: "var(--font-im-fell), Georgia, serif",
              fontSize: 12.5,
              color: inkDark,
              display: "flex",
              alignItems: "flex-start",
              gap: 7,
              marginBottom: 5,
              lineHeight: 1.35,
            }}>
              <span style={{ color: "#a07010", fontSize: 7, marginTop: 4, flexShrink: 0 }}>✦</span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => onSubscribe(isMonthly ? tier.productId : tier.singleProductId)}
          style={{
            display: "block",
            width: "100%",
            padding: "9px 0",
            fontFamily: "var(--font-cinzel), Georgia, serif",
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase" as const,
            textAlign: "center" as const,
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            background: "linear-gradient(135deg, #3d2206 0%, #5c3610 60%, #3d2206 100%)",
            color: "#f0d890",
            boxShadow: "0 2px 8px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,220,100,0.1)",
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
      <section id="pricing" className="relative bg-background py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">

          <div className="text-center mb-10 lg:mb-14">
            <p className="font-script text-magic text-sm sm:text-base uppercase tracking-[0.3em] mb-3 animate-fade-up">
              Wash Wizard Packages
            </p>
            <h2 className="font-heading font-bold uppercase leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-primary animate-fade-up-delay-1">
              Various <span className="text-accent">elixirs</span>
              <br className="hidden sm:block" /> for all budgets
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-2">
              Pay once or unlock unlimited washes with the club. Every package
              includes free DIY vacuums and the legendary 180-foot tunnel.
            </p>

            <div className="mt-7 flex justify-center animate-fade-up-delay-3">
              <div className="inline-flex items-center bg-muted rounded-full p-1.5">
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-widest transition-all ${
                    isMonthly ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Unlimited Club
                </button>
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-widest transition-all ${
                    !isMonthly ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Single Wash
                </button>
              </div>
            </div>
          </div>

          {/* FIX 3: items-stretch so all cards in the row grow to the same height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch pt-6">
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