"use client";

import { useState } from "react";
import IframeDrawer from "./IframeDrawer";
import { Button } from "@/components/ui/button";
import { type TierKey } from "@/lib/utils";

interface Tier {
  key: TierKey;
  name: string;
  tagline: string;
  icon: string;
  singlePrice: string;
  clubPrice: string;
  features: string[];
  isBest?: boolean;
}

const tiers: Tier[] = [
  {
    key: "magic",
    name: "Magic Wash",
    tagline: "The Everyday Clean & Dry Spell",
    icon: "✦",
    singlePrice: "$10",
    clubPrice: "$14.99",
    features: [
      "Exterior Wash & Dry",
      "Spot-Free Rinse",
      "Powerful Dryers",
      "Vacuums & Amenity Package",
    ],
  },
  {
    key: "wicked",
    name: "Wicked Wheel",
    tagline: "Bug Removal, Specialized Wheel Cleaning & Tire Shine!",
    icon: "❋",
    singlePrice: "$20",
    clubPrice: "$33.99",
    features: [
      "Everything in The Magic Wash plus:",
      'Bug "Slayer" Process',
      "Rain Repellant",
      "Wheel Cleaner & Tire Shine",
      "Underbody Rinse",
    ],
  },
  {
    key: "shining",
    name: "Shining Knight",
    tagline: "Outstanding Shine!",
    icon: "⚜",
    singlePrice: "$25",
    clubPrice: "$42.99",
    features: [
      "Everything in The Wicked Wheel Wash plus:",
      "Magic Potion Foam",
      "Ceramic Shine Coating",
      "Light Hand Prep Process",
    ],
  },
  {
    key: "kings",
    name: "King Graphene",
    tagline: "The Wizard's Crown Jewel - Best Protection!",
    icon: "♛",
    singlePrice: "$30",
    clubPrice: "$49.99",
    features: [
      "Everything In The Shining Knight Wash Package plus:",
      "Graphene Protective Coating",
      "Buffing and Extra Drying",
      "Our Best Light Show!",
      "Light Hand Prep Process",
    ],
    isBest: true,
  },
];

function SpellCard({
  tier,
  isMonthly,
  onSubscribe,
}: {
  tier: Tier;
  isMonthly: boolean;
  onSubscribe: () => void;
}) {
  const price = isMonthly ? tier.clubPrice : tier.singlePrice;
  const priceLabel = isMonthly ? "/ month" : "single wash";

  const borderColor =
    tier.key === "magic"
      ? "#151b41"
      : tier.key === "wicked"
      ? "#0b9069"
      : tier.key === "shining"
      ? "#9f15b9"
      : "#41a1d3";

  const isBlue = tier.key === "kings";
  const cardBg = isBlue ? "#41a1d3" : "#fff";
  const textColor = isBlue ? "#fff" : "#151b41";
  const priceColor = isBlue ? "#FFB800" : "#151b41";
  const bulletColor = isBlue ? "#FFB800" : "#151b41";
  const dividerColor = isBlue ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.07)";

  return (
    <div
      className="relative flex flex-col h-full group"
      style={{
        borderRadius: 16,
        padding: "36px 28px 28px",
        background: cardBg,
        border: `2px solid ${borderColor}`,
        boxShadow: isBlue
          ? "0 20px 60px rgba(65,161,211,0.25)"
          : "0 4px 24px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = isBlue
          ? "0 28px 70px rgba(65,161,211,0.35)"
          : "0 12px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = isBlue
          ? "0 20px 60px rgba(65,161,211,0.25)"
          : "0 4px 24px rgba(0,0,0,0.06)";
      }}
    >
      {/* Colored top band with icon/name/tagline pinned inside */}
      <div
        className="absolute top-0 left-0 right-0 flex flex-col items-center justify-start pt-8 px-3"
        style={{ height: 160, background: borderColor, borderRadius: "14px 14px 0 0" }}
      >
        {tier.isBest && (
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-widest"
            style={{ background: "#FFB800", color: "#1a1428" }}
          >
            + Best Value
          </div>
        )}
        <div style={{ fontSize: 44, lineHeight: 1, color: "#fff", opacity: 0.9 }} aria-hidden="true">
          {tier.icon}
        </div>
        <h3
          className="text-center font-heading font-bold uppercase mt-2"
          style={{ fontSize: 18, letterSpacing: "0.05em", color: "#fff" }}
        >
          {tier.name}
        </h3>
        <p
          className="text-center text-sm mt-1"
          style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}
        >
          {tier.tagline}
        </p>
      </div>

      {/* Spacer to push content below the band */}
      <div style={{ height: 160 }} />

      <div className="text-center mb-6">
        <span
          className="font-heading font-bold tabular-nums"
          style={{ fontSize: 54, lineHeight: 1, color: priceColor }}
        >
          {price}
        </span>
        <span
          className="block mt-1 text-sm"
          style={{ color: textColor, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}
        >
          {priceLabel}
        </span>
      </div>

      <div className="mb-5" style={{ height: 1, background: dividerColor }} />

      <ul className="flex-1 mb-7 space-y-3 sm:space-y-2.5" role="list">
        {tier.features.map((f) => {
          const isInheritLine = f.startsWith("Everything");
          return (
            <li
              key={f}
              className={`flex items-center gap-2.5 text-base sm:text-[15px] leading-snug ${isInheritLine ? "font-bold" : ""}`}
              style={{ color: textColor }}
            >
              <span className="text-xs sm:text-[11px]" style={{ color: bulletColor, flexShrink: 0 }} aria-hidden="true">
                ✦
              </span>
              {f}
            </li>
          );
        })}
      </ul>

      <Button
        size="lg"
        onClick={() => onSubscribe()}
        className="w-full text-sm font-heading font-bold uppercase tracking-widest"
        style={{ background: "#FFB800", borderColor: "#FFB800", color: "#1a1428" }}
      >
        {isMonthly ? "Join the Club" : "Buy Now"}
      </Button>
    </div>
  );
}

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  const openPurchaseDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <>
      <section
        id="pricing"
        className="relative bg-white py-16 lg:py-24 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl text-primary text-balance">
              Various <span className="text-accent">elixirs</span>
              <br className="hidden sm:block" /> for all budgets
            </h2>
            <p className="mt-4 text-lg sm:text-base text-foreground max-w-[58ch] mx-auto text-pretty">
              Pay as you go or unlock unlimited washes with our Unlimited Club
              Memberships. Every package includes extra-wide vacuum bays,
              interior cleaning amenities, and our legendary 180-foot tunnel!
            </p>

            <div className="mt-7 flex justify-center">
              <div
                className="inline-flex items-center rounded-full p-1.5"
                style={{
                  background: "rgba(42,32,80,0.06)",
                  border: "1px solid rgba(42,32,80,0.1)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`px-5 py-2.5 rounded-full text-sm sm:text-xs font-heading font-semibold uppercase tracking-widest transition-all ${
                    isMonthly
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Unlimited Club
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`px-5 py-2.5 rounded-full text-sm sm:text-xs font-heading font-semibold uppercase tracking-widest transition-all ${
                    !isMonthly
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Single Wash
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch pt-6">
            {tiers.map((tier) => (
              <SpellCard
                key={tier.name}
                tier={tier}
                isMonthly={isMonthly}
                onSubscribe={openPurchaseDrawer}
              />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-primary/10 bg-primary/[0.03] p-6 text-left">
              <h3 className="font-heading font-bold uppercase text-xl text-primary mb-3">
                All washes include the Wash Wizard Amenities Package
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Vacuums, towels, air tool, glass & interior cleaner, and
                specialized floor mat cleaning equipment.
              </p>
            </div>
            <div className="rounded-2xl border border-accent/25 bg-accent/[0.08] p-6 text-left">
              <h3 className="font-heading font-bold uppercase text-xl text-primary mb-3">
                Hand Prep Package
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Included with our top two washes: extra spray for wheel wells,
                insect & bird residue, running boards, plus light soapy brushing
                of truck/SUV rear windows and all license plate areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {showDrawer && (
        <IframeDrawer
          onClose={() => setShowDrawer(false)}
          title="Get Your Wash Wizard Membership"
        />
      )}
    </>
  );
}
