"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Wand } from "lucide-react";
import { Button } from "@/components/ui/button";
import IframeDrawer from "./IframeDrawer";

interface Tier {
  name: string;
  tagline: string;
  image: string;
  singlePrice: string;
  clubPrice: string;
  features: string[];
  cardClass: string;
  ctaClass: string;
  textClass: string;
  isBest?: boolean;
  badge?: string;
  productId?: string;
  singleProductId?: string;
  lgMarginTop: number;
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
    cardClass: "bg-secondary",
    ctaClass: "bg-deep hover:bg-deep/90 text-white",
    textClass: "text-white",
    productId: "TODO-MAGIC-CLUB-PRODUCT-ID",
    singleProductId: "TODO-MAGIC-SINGLE-PRODUCT-ID",
    lgMarginTop: 96,
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
    cardClass: "bg-magic",
    ctaClass: "bg-accent hover:bg-accent/90 text-accent-foreground",
    textClass: "text-white",
    productId: "TODO-WICKED-CLUB-PRODUCT-ID",
    singleProductId: "TODO-WICKED-SINGLE-PRODUCT-ID",
    lgMarginTop: 48,
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
    cardClass: "bg-deep",
    ctaClass: "bg-accent hover:bg-accent/90 text-accent-foreground",
    textClass: "text-white",
    productId: "TODO-KNIGHT-CLUB-PRODUCT-ID",
    singleProductId: "TODO-KNIGHT-SINGLE-PRODUCT-ID",
    lgMarginTop: 24,
  },
  {
    name: "King's Graphene",
    tagline: "The wizard's crown jewel",
    image: "/images/pkg-kings-graphene.png",
    singlePrice: "$25",
    clubPrice: "$50",
    features: [
      "Everything in Shining Knight",
      "Graphene ceramic coating",
      "Triple-layer paint protection",
      "Hydrophobic mirror shine",
      "Tunnel light show",
    ],
    cardClass: "bg-accent",
    ctaClass: "bg-primary hover:bg-primary/90 text-white",
    textClass: "text-accent-foreground",
    isBest: true,
    badge: "Best Value",
    productId: "TODO-KINGS-CLUB-PRODUCT-ID",
    singleProductId: "TODO-KINGS-SINGLE-PRODUCT-ID",
    lgMarginTop: 0,
  },
];

function PricingCard({
  tier,
  onSubscribe,
  isMonthly,
}: {
  tier: Tier;
  onSubscribe: (productId?: string) => void;
  isMonthly: boolean;
}) {
  return (
    <div
      className={`relative rounded-[1.5rem] p-6 lg:p-7 ${tier.cardClass} ${tier.textClass} flex flex-col shadow-xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1`}
    >
      {tier.isBest && (
        <>
          <div className="absolute -inset-1 rounded-[1.6rem] bg-gradient-to-br from-accent via-secondary to-magic opacity-60 blur-md -z-10 animate-pulse" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-deep text-accent text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1.5">
            <Wand className="w-3.5 h-3.5" />
            {tier.badge}
          </div>
        </>
      )}

      <div className="aspect-[5/3] relative -mx-2 -mt-2 mb-4 rounded-2xl overflow-hidden bg-black/10">
        <Image
          src={tier.image}
          alt={tier.name}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-contain p-2"
        />
      </div>

      <p className="text-xs uppercase tracking-widest opacity-80 mb-1">
        {tier.tagline}
      </p>
      <h3 className="text-2xl lg:text-3xl font-heading font-bold uppercase leading-none mb-4">
        {tier.name}
      </h3>

      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-5xl font-heading font-bold leading-none">
          {isMonthly ? tier.clubPrice : tier.singlePrice}
        </span>
        <span className="text-xs uppercase tracking-wider opacity-80">
          {isMonthly ? "/month" : "single wash"}
        </span>
      </div>

      <ul className="space-y-2 flex-1 mb-6">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          onSubscribe(isMonthly ? tier.productId : tier.singleProductId)
        }
        className={`mt-auto block w-full text-center py-3 rounded-lg font-heading font-bold uppercase tracking-wider text-sm transition-all hover:brightness-110 shadow-md cursor-pointer ${tier.ctaClass}`}
      >
        {isMonthly ? "Join the Club" : "Buy Now"}
      </button>
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
        className="relative bg-background py-16 lg:py-24 overflow-hidden"
      >
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
                    isMonthly
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Unlimited Club
                </button>
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-widest transition-all ${
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-start">
            {tiers.map((tier) => (
              <div key={tier.name}>
                <div
                  className="hidden lg:block"
                  style={{ height: tier.lgMarginTop }}
                  aria-hidden="true"
                />
                <PricingCard
                  tier={tier}
                  onSubscribe={openPurchaseDrawer}
                  isMonthly={isMonthly}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
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
