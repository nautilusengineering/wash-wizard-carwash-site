"use client";

import { useState } from "react";
import Link from "next/link";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import IframeDrawer from "./IframeDrawer";
import WizardHat from "./WizardHat";

interface Tier {
  name: string;
  tagline: string;
  image: string;
  singlePrice: string;
  clubPrice: string;
  features: string[];
  isBest?: boolean;
  badge?: string;
  productId?: string;
  singleProductId?: string;
}

const tiers: Tier[] = [
  {
    name: "Magic Wash",
    tagline: "The everyday spell",
    image: "/images/pkg-magic-wash.png",
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
    image: "/images/pkg-wicked-wheel.png",
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
    name: "King's Graphene",
    tagline: "The wizard's crown jewel",
    image: "/images/pkg-kings-graphene.png",
    singlePrice: "$25",
    clubPrice: "$50",
    features: [
      "Graphene ceramic coating",
      "Triple-layer paint protection",
      "Hot wax + sealant armor",
      "Rain repellent windshield",
      "Tunnel light show",
    ],
    isBest: true,
    badge: "Most Popular",
    productId: "TODO-KINGS-CLUB-PRODUCT-ID",
    singleProductId: "TODO-KINGS-SINGLE-PRODUCT-ID",
  },
  {
    name: "Shining Knight",
    tagline: "Long-lasting protection",
    image: "/images/pkg-shining-knight.png",
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
];

type CardProps = {
  tier: Tier;
  isMonthly: boolean;
  onSubscribe: (productId?: string) => void;
};

function CardCoin({ tier, isMonthly, onSubscribe }: CardProps) {
  const isBest = !!tier.isBest;
  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl p-6 lg:p-8 bg-white text-foreground transition-all duration-300 ${
        isBest
          ? "shadow-2xl ring-2 ring-accent"
          : "shadow-md hover:shadow-xl border border-border"
      }`}
    >
      {isBest && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-[10px] font-heading uppercase tracking-[0.22em] shadow-lg">
            <Crown className="w-3.5 h-3.5" />
            {tier.badge}
          </div>
        </div>
      )}

      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.22em] mb-1.5 text-muted-foreground">
          {tier.tagline}
        </p>
        <h3 className="text-xl lg:text-2xl font-heading uppercase leading-tight mb-6">
          {tier.name}
        </h3>

        <div className="flex justify-center mb-6">
          <div
            className={`relative size-44 lg:size-48 rounded-full grid place-items-center font-heading text-accent-foreground select-none ${
              isBest ? "shadow-[0_0_50px_-5px_hsla(45_100%_55%_/_0.6)]" : ""
            }`}
            style={{
              background:
                "radial-gradient(circle at 35% 30%, hsl(48 100% 75%) 0%, hsl(45 100% 55%) 35%, hsl(40 95% 42%) 75%, hsl(38 85% 30%) 100%)",
              boxShadow:
                "inset 0 0 0 2px hsla(45 100% 92% / 0.55), inset 0 0 0 8px hsla(35 70% 25% / 0.35), inset 0 0 0 10px hsla(45 100% 92% / 0.3), 0 18px 30px -16px hsla(225 100% 16% / 0.5)",
            }}
          >
            <div className="text-center leading-none">
              <span className="block text-5xl lg:text-6xl">
                {isMonthly ? tier.clubPrice : tier.singlePrice}
              </span>
              <span className="block mt-1.5 text-[10px] uppercase tracking-[0.22em] text-accent-foreground/75">
                {isMonthly ? "per month" : "per wash"}
              </span>
            </div>
          </div>
        </div>

        <ul className="space-y-2 text-left">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm leading-snug"
            >
              <WizardHat className="size-4 h-lh flex-shrink-0 text-magic" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7">
        <Button
          onClick={() =>
            onSubscribe(isMonthly ? tier.productId : tier.singleProductId)
          }
          size="lg"
          variant={isBest ? "default" : "outlineDark"}
          className="w-full"
        >
          {isMonthly ? "Join the Club" : "Buy Single Wash"}
        </Button>
      </div>
    </div>
  );
}

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
      <section
        id="pricing"
        className="relative py-20 lg:py-28 bg-parchment"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-script uppercase tracking-[0.32em] text-sm mb-4 inline-flex items-center gap-2 text-magic">
                <Crown className="w-4 h-4 text-accent" />
                Wash Wizard Packages
              </p>
              <h2 className="font-heading uppercase text-5xl lg:text-6xl xl:text-7xl leading-[0.9] text-primary">
                Pick your <span className="text-accent">spell.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
              <p className="text-base lg:text-right max-w-md text-muted-foreground">
                Pay per wash or unlock unlimited washes with the club. Every
                package includes free DIY vacuums and the legendary 180-foot
                tunnel.
              </p>
              <div className="inline-flex items-center border rounded-full p-1 shadow-sm shrink-0 bg-white border-border">
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`px-5 py-2 rounded-full text-xs font-heading uppercase tracking-[0.18em] transition-all ${
                    isMonthly
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Unlimited Club
                </button>
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`px-5 py-2 rounded-full text-xs font-heading uppercase tracking-[0.18em] transition-all ${
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[--spacing(6)_1fr_--spacing(6)] gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={tier.isBest ? "lg:row-span-full" : "lg:row-start-2"}
              >
                <CardCoin
                  tier={tier}
                  isMonthly={isMonthly}
                  onSubscribe={openPurchaseDrawer}
                />
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
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
