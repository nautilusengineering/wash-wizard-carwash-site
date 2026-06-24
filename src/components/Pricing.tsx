"use client";

import { useState } from "react";
import IframeDrawer from "./IframeDrawer";

interface Tier {
  name: string;
  tagline: string;
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
          color: tier.isBest ? "#fff" : "#1a1428",
        }}
      >
        {tier.name}
      </h3>

      <p
        className="text-center mb-6"
        style={{
          fontSize: 13,
          color: tier.isBest ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.4)",
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
            color: tier.isBest ? "#FFB800" : "#1a1428",
          }}
        >
          {price}
        </span>
        <span
          className="block mt-1"
          style={{
            fontSize: 12,
            color: tier.isBest ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
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

      <ul className="flex-1 mb-7 space-y-2.5" role="list">
        {tier.features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2.5"
            style={{
              fontSize: 14,
              color: tier.isBest ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.65)",
            }}
          >
            <span
              style={{
                color: tier.isBest ? "#FFB800" : "#2A2050",
                fontSize: 10,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              ✦
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() =>
          onSubscribe(isMonthly ? tier.productId : tier.singleProductId)
        }
        className="w-full cursor-pointer font-heading font-bold uppercase tracking-widest transition-all"
        style={{
          padding: "13px 0",
          fontSize: 12,
          borderRadius: 8,
          border: "none",
          background: tier.isBest ? "#FFB800" : "#1a1428",
          color: tier.isBest ? "#1a1428" : "#fff",
          letterSpacing: "0.12em",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.88";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
        }}
      >
        {isMonthly ? "Join the Club" : "Buy Now"}
      </button>
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
            <p className="font-script text-magic text-sm tracking-wide mb-3">
              Wash Wizard Packages
            </p>
            <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl text-primary text-balance">
              Various <span className="text-accent">elixirs</span>
              <br className="hidden sm:block" /> for all budgets
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-[52ch] mx-auto text-pretty">
              Pay once or unlock unlimited washes with the club. Every package
              includes free DIY vacuums and the legendary 180-foot tunnel.
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
                  className={`px-5 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-widest transition-all ${
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
                  className={`px-5 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-widest transition-all ${
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
