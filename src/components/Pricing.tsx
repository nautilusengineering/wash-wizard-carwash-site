"use client";

import { useState } from "react";
import IframeDrawer from "./IframeDrawer";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_LOCATION_ID,
  getSalesItemId,
  type TierKey,
} from "@/lib/utils";

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
    name: "The Magic Wash",
    tagline: "The everyday clean & dry spell",
    icon: "✦",
    singlePrice: "$10",
    clubPrice: "$14.99",
    features: [
      "Exterior wash & dry",
      "Spot-free rinse",
      "Powerful dryers",
      "Vacuums & amenity package",
    ],
  },
  {
    key: "wicked",
    name: "The Wicked Wheel Wash",
    tagline: "Bug removal, specialized wheel cleaning & tire shine!",
    icon: "❋",
    singlePrice: "$20",
    clubPrice: "$33.99",
    features: [
      "Everything in The Magic Wash",
      "Bug “Slayer” process",
      "Rain repellant",
      "Wheel cleaner & tire shine",
      "Underbody rinse",
    ],
  },
  {
    key: "shining",
    name: "The Shining Knight Wash",
    tagline: "Outstanding shine!",
    icon: "⚜",
    singlePrice: "$25",
    clubPrice: "$42.99",
    features: [
      "Everything in The Wicked Wheel Wash",
      "Ceramic shine coating",
      "Magic Potion foam",
      "Light hand prep process",
    ],
  },
  {
    key: "kings",
    name: "The King Graphene Wash",
    tagline: "The Wizard’s crown jewel — the best protection available!",
    icon: "♛",
    singlePrice: "$30",
    clubPrice: "$49.99",
    features: [
      "Everything in The Shining Knight Wash Package",
      "Graphene protective coating",
      "Light hand prep process",
      "Buffing and extra drying",
      "Our best light show!",
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
  onSubscribe: (id?: string) => void;
}) {
  const price = isMonthly ? tier.clubPrice : tier.singlePrice;
  const priceLabel = isMonthly ? "/ month" : "single wash";

  return (
    <div
      className="relative flex flex-col h-full group"
      style={{
        borderRadius: 16,
        padding: "36px 28px 28px",
        background: tier.isBest
          ? "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)"
          : "#fff",
        border: tier.isBest
          ? "1.5px solid rgba(255,184,0,0.3)"
          : "1.5px solid rgba(0,0,0,0.08)",
        boxShadow: tier.isBest
          ? "0 20px 60px rgba(30,10,60,0.25)"
          : "0 4px 24px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = tier.isBest
          ? "0 28px 70px rgba(30,10,60,0.35)"
          : "0 12px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = tier.isBest
          ? "0 20px 60px rgba(30,10,60,0.25)"
          : "0 4px 24px rgba(0,0,0,0.06)";
      }}
    >
      {tier.isBest && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-widest"
          style={{ background: "#FFB800", color: "#1a1428" }}
        >
          ✦ Best Value
        </div>
      )}

      <div
        className="text-center mb-4"
        style={{
          fontSize: 52,
          lineHeight: 1,
          color: tier.isBest ? "#FFB800" : "#2A2050",
          opacity: tier.isBest ? 1 : 0.85,
        }}
        aria-hidden="true"
      >
        {tier.icon}
      </div>

      <h3
        className="text-center font-heading font-bold uppercase mb-1"
        style={{
          fontSize: 20,
          letterSpacing: "0.05em",
          color: tier.isBest ? "#fff" : "hsl(218 100% 25%)",
        }}
      >
        {tier.name}
      </h3>

      <p
        className="text-center mb-6 text-base sm:text-[15px]"
        style={{
          color: tier.isBest ? "rgba(255,255,255,0.85)" : "hsl(225 100% 16%)",
          fontStyle: "italic",
        }}
      >
        {tier.tagline}
      </p>

      <div className="text-center mb-6">
        <span
          className="font-heading font-bold tabular-nums"
          style={{
            fontSize: 54,
            lineHeight: 1,
            color: tier.isBest ? "#FFB800" : "hsl(218 100% 25%)",
          }}
        >
          {price}
        </span>
        <span
          className="block mt-1 text-sm"
          style={{
            color: tier.isBest ? "rgba(255,255,255,0.85)" : "hsl(225 100% 16%)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 600,
          }}
        >
          {priceLabel}
        </span>
      </div>

      <div
        className="mb-5"
        style={{
          height: 1,
          background: tier.isBest ? "rgba(255,184,0,0.2)" : "rgba(0,0,0,0.07)",
        }}
      />

      <ul className="flex-1 mb-7 space-y-3 sm:space-y-2.5" role="list">
        {tier.features.map((f) => {
          const isInheritLine = f.startsWith("Everything in");
          return (
            <li
              key={f}
              className={`flex items-center gap-2.5 text-base sm:text-[15px] leading-snug ${
                isInheritLine ? "font-bold" : ""
              }`}
              style={{
                color: tier.isBest ? "#ffffff" : "hsl(225 100% 16%)",
              }}
            >
              <span
                className="text-xs sm:text-[11px]"
                style={{
                  color: tier.isBest ? "#FFB800" : "#2A2050",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                ✦
              </span>
              {f}
            </li>
          );
        })}
      </ul>

      <Button
        size="lg"
        onClick={() =>
          onSubscribe(
            getSalesItemId(
              DEFAULT_LOCATION_ID,
              tier.key,
              isMonthly ? "club" : "single",
            ),
          )
        }
        className="w-full text-sm"
      >
        {isMonthly ? "Join the Club" : "Buy Now"}
      </Button>
    </div>
  );
}

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<
    string | undefined
  >();

  const openPurchaseDrawer = (productId?: string) => {
    setSelectedProductId(productId);
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
          productId={selectedProductId}
          title="Get Your Wash Wizard Membership"
        />
      )}
    </>
  );
}
