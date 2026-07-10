"use client";

import { useState } from "react";
import { Crown } from "lucide-react";
import IframeDrawer from "./IframeDrawer";
import LocationPickerModal from "./LocationPickerModal";
import { Button } from "@/components/ui/button";
import { getSalesItemId, type TierKey } from "@/lib/utils";

interface FamilyPricing {
  veh2: string;
  veh3: string;
  veh4: string;
  addOnPrice: string;
  addOnSavePct: string;
}

interface Tier {
  key: TierKey;
  name: string;
  tagline: string;
  icon: string;
  singlePrice: string;
  clubPrice: string;
  features: string[];
  isBest?: boolean;
  family: FamilyPricing;
}

const amenityPills = [
  "180-Foot Tunnel",
  "25 Shaded Vacuum Bays",
  "Microfiber Towels",
  "Air Tool",
  "Glass & Interior Spray",
  "Floor Mat Cleaners",
];

const tiers: Tier[] = [
  {
    key: "kings",
    name: "King Graphene",
    tagline: "The Wizard's Crown Jewel - Best Protection!",
    icon: "♛",
    singlePrice: "$30",
    clubPrice: "$49.99",
    features: [
      "Everything In The Shining Knight Wash Package +",
      "Graphene Protective Coating",
      "Buffing and Extra Drying",
      "Our Best Light Show!",
      "Light Hand Prep Process",
    ],
    isBest: true,
    family: {
      veh2: "$74.99",
      veh3: "$99.99",
      veh4: "$124.99",
      addOnPrice: "$25",
      addOnSavePct: "50%",
    },
  },
  {
    key: "shining",
    name: "Shining Knight",
    tagline: "Outstanding\nShine!",
    icon: "⚜",
    singlePrice: "$25",
    clubPrice: "$42.99",
    features: [
      "Everything in The Wicked Wheel Wash +",
      "Magic Potion Foam",
      "Ceramic Shine Coating",
      "Light Hand Prep Process",
    ],
    family: {
      veh2: "$67.99",
      veh3: "$92.99",
      veh4: "$117.99",
      addOnPrice: "$25",
      addOnSavePct: "42%",
    },
  },
  {
    key: "wicked",
    name: "Wicked Wheel",
    tagline: "Bug Removal, Specialized Wheel Cleaning & Tire Shine!",
    icon: "❋",
    singlePrice: "$20",
    clubPrice: "$33.99",
    features: [
      "Everything in The Magic Wash +",
      'Bug "Slayer" Process',
      "Rain Repellant",
      "Wheel Cleaner & Tire Shine",
      "Underbody Rinse",
    ],
    family: {
      veh2: "$58.99",
      veh3: "$83.99",
      veh4: "$108.99",
      addOnPrice: "$25",
      addOnSavePct: "26%",
    },
  },
  {
    key: "magic",
    name: "Magic Wash",
    tagline: "The Everyday Clean &\nDry Spell",
    icon: "◈",
    singlePrice: "$10",
    clubPrice: "$14.99",
    features: [
      "Exterior Wash & Dry",
      "Spot-Free Rinse",
      "Powerful Dryers",
      "Vacuums & Amenity Package",
    ],
    family: {
      veh2: "$27.99",
      veh3: "$40.99",
      veh4: "$53.99",
      addOnPrice: "$13",
      addOnSavePct: "13%",
    },
  },
];

function SpellCard({
  tier,
  isMonthly,
  onSubscribe,
  showFamily,
  flipDelay,
}: {
  tier: Tier;
  isMonthly: boolean;
  onSubscribe: (tier: Tier) => void;
  showFamily: boolean;
  flipDelay: number;
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

  const cardBg = borderColor;
  const textColor = "#fff";
  const priceColor = "#fff";
  const bulletColor = "#FFB800";
  const dividerColor = "rgba(255,255,255,0.2)";

  const cardFaceStyle: React.CSSProperties = {
    borderRadius: 16,
    background: cardBg,
    border: `2px solid ${borderColor}`,
    boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <div
      className="relative h-full"
      style={{ perspective: 1800 }}
    >
      <div
        className="grid w-full h-full transition-transform duration-[900ms]"
        style={{
          gridTemplateAreas: '"stack"',
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          transitionTimingFunction: "cubic-bezier(0.45, 0.05, 0.15, 1)",
          transitionDelay: `${flipDelay}ms`,
          transform: showFamily ? "rotateY(-180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT FACE — regular package card ── */}
        <div
          className="flex flex-col group"
          style={{ ...cardFaceStyle, padding: "36px 28px 28px", gridArea: "stack" }}
        >
          <div
            className="absolute top-0 left-0 right-0 flex flex-col items-center justify-start pt-8 px-3"
            style={{ height: 160, background: borderColor, borderRadius: "14px 14px 0 0" }}
          >
            {tier.isBest && !showFamily && (
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
              className="text-center font-card font-bold uppercase mt-2"
              style={{ fontSize: 22, letterSpacing: "0.05em", color: "#fff" }}
            >
              {tier.name}
            </h3>
            <p
              className="text-center text-sm mt-1"
              style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic", whiteSpace: "pre-line" }}
            >
              {tier.tagline}
            </p>
          </div>

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
                  className={`flex items-center gap-2.5 leading-snug ${isInheritLine ? "font-sans uppercase tracking-wide text-sm font-bold" : "text-base sm:text-[15px]"}`}
                  style={{ color: textColor }}
                >
                  <span
                    className="text-xs sm:text-[11px]"
                    style={{ color: bulletColor, flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    •
                  </span>
                  {f}
                </li>
              );
            })}
          </ul>

          <Button
            size="lg"
            onClick={() => onSubscribe(tier)}
            className="w-full text-sm font-heading font-bold uppercase tracking-widest"
            style={{ background: "#FFB800", borderColor: "#FFB800", color: "#1a1428" }}
          >
            {isMonthly ? "Join the Club" : "Buy Now"}
          </Button>
        </div>

        {/* ── BACK FACE — family club savings ── */}
        <div
          className="relative flex flex-col"
          style={{
            ...cardFaceStyle,
            padding: "28px 24px",
            gridArea: "stack",
            transform: "rotateY(180deg)",
          }}
        >
          {tier.isBest && showFamily && (
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-widest"
              style={{ background: "#FFB800", color: "#1a1428" }}
            >
              + Best Value
            </div>
          )}
          <div className="text-center mb-1 flex flex-col items-center justify-start" style={{ minHeight: 150 }}>
            <div style={{ fontSize: 28, lineHeight: 1, color: "#fff", opacity: 0.9 }} aria-hidden="true">
              {tier.icon}
            </div>
            <h3
              className="font-card font-bold uppercase mt-2"
              style={{ fontSize: 20, letterSpacing: "0.05em", color: "#fff" }}
            >
              {tier.name}
            </h3>
            <p
              className="text-sm mt-1"
              style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic", whiteSpace: "pre-line" }}
            >
              {tier.tagline}
            </p>
          </div>

          <p
            className="text-center text-xs uppercase tracking-widest mt-4 mb-2"
            style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}
          >
            1 Vehicle Club Price:
          </p>
          <div className="text-center mb-4">
            <span
              className="font-heading font-bold tabular-nums"
              style={{ fontSize: 40, lineHeight: 1, color: priceColor }}
            >
              {tier.clubPrice}
            </span>
            <span
              className="text-sm ml-1"
              style={{ color: textColor, textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              / mo
            </span>
          </div>

          <table className="w-full text-sm mb-3" style={{ color: textColor }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${dividerColor}` }}>
                <th className="text-left font-semibold py-1.5">Vehicles</th>
                <th className="text-right font-semibold py-1.5">Monthly Total</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${dividerColor}` }}>
                <td className="py-1.5">2 Vehicles</td>
                <td className="text-right py-1.5 font-semibold">{tier.family.veh2}</td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${dividerColor}` }}>
                <td className="py-1.5">3 Vehicles</td>
                <td className="text-right py-1.5 font-semibold">{tier.family.veh3}</td>
              </tr>
              <tr>
                <td className="py-1.5">4 Vehicles</td>
                <td className="text-right py-1.5 font-semibold">{tier.family.veh4}</td>
              </tr>
            </tbody>
          </table>

          <p
            className="text-center text-xs mb-4"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Add a family member for {tier.family.addOnPrice}/mo — save{" "}
            {tier.family.addOnSavePct}
          </p>

          <Button
            size="lg"
            onClick={() => onSubscribe(tier)}
            className="w-full mt-auto text-sm font-heading font-bold uppercase tracking-widest"
            style={{ background: "#FFB800", borderColor: "#FFB800", color: "#1a1428" }}
          >
            Add Family Member
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [showFamily, setShowFamily] = useState(false);
  const [pendingTier, setPendingTier] = useState<Tier | null>(null);
  const [drawerProductId, setDrawerProductId] = useState<string | undefined>();
  const [drawerLocationId, setDrawerLocationId] = useState<string | undefined>();
  const [showDrawer, setShowDrawer] = useState(false);

  const openPurchaseDrawer = (tier: Tier) => setPendingTier(tier);

  const handleLocationSelected = (locationId: string) => {
    if (!pendingTier) return;
    const variant = isMonthly ? "club" : "single";
    const productId = getSalesItemId(locationId, pendingTier.key, variant);
    setDrawerLocationId(locationId);
    setDrawerProductId(productId);
    setPendingTier(null);
    setShowDrawer(true);
  };

  const handleDrawerClose = () => {
    setShowDrawer(false);
    setDrawerProductId(undefined);
    setDrawerLocationId(undefined);
  };

  return (
    <>
      <section
        id="pricing"
        className="relative bg-white py-16 lg:py-24 overflow-x-clip"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl text-primary text-balance">
              Various <span className="text-accent">elixirs</span>
              <br className="hidden sm:block" /> for all budgets
            </h2>
            <p
              className="mt-4 text-lg lg:text-xl text-foreground max-w-[58ch] mx-auto text-pretty"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
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
                  className={`whitespace-nowrap px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wide sm:tracking-widest transition-all ${
                    isMonthly
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Unlimited Club
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMonthly(false);
                    setShowFamily(false);
                  }}
                  className={`whitespace-nowrap px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wide sm:tracking-widest transition-all ${
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch pt-6 overflow-x-clip">
            {tiers.map((tier, i) => (
              <SpellCard
                key={tier.name}
                tier={tier}
                isMonthly={isMonthly}
                onSubscribe={openPurchaseDrawer}
                showFamily={showFamily}
                flipDelay={i * 120}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            {isMonthly && (
              <div className="relative inline-block">
                <Crown
                  className="absolute -top-3 -left-3 size-6 rotate-[-20deg] text-accent"
                  fill="currentColor"
                  aria-hidden="true"
                />
                <Button
                  size="lg"
                  variant="outlineDark"
                  onClick={() => setShowFamily((v) => !v)}
                  className="text-sm font-heading font-bold uppercase tracking-widest"
                >
                  {showFamily ? "Back to Single Vehicle Plans" : "See Family Plans"}
                </Button>
              </div>
            )}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {amenityPills.map((f) => (
              <div
                key={f}
                className="px-4 py-3 rounded-xl text-white text-center text-sm font-card font-medium tracking-normal shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #2A2050 0%, #1E1832 100%)",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {pendingTier && (
        <LocationPickerModal
          onClose={() => setPendingTier(null)}
          onSelect={handleLocationSelected}
          title={`${pendingTier.name} — pick a location`}
          subtitle="Choose which Wash Wizard should open your wash."
        />
      )}

      {showDrawer && (
        <IframeDrawer
          onClose={handleDrawerClose}
          productId={drawerProductId}
          locationId={drawerLocationId}
          title="Get Your Wash Wizard Membership"
        />
      )}
    </>
  );
}
