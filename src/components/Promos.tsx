import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JOIN_URL } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const GOLD = "#FFB800";
const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

interface Deal {
  name: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  href: string;
  accent: string;
}

const deals: Deal[] = [
  {
    name: "The King's Wash",
    price: "$30",
    cadence: "/ month",
    description:
      "Unlimited graphene shine, sealant armor, and rain repellent. The wizard's choice when only legendary clean will do.",
    cta: "Claim the Crown",
    href: "/packages",
    accent: GOLD,
  },
  {
    name: "Annual Plan",
    price: "2 Months",
    cadence: "free",
    description:
      "Pay annually and unlock two full months of unlimited washes — completely free. The savviest spell in the spellbook.",
    cta: "Save with Annual",
    href: "/packages",
    accent: "#7A5CFF",
  },
  {
    name: "First Wash Free",
    price: "$0",
    cadence: "new members",
    description:
      "Sign up for any Unlimited Club tier and your first wash is on the wizard. No prorations, no fine print.",
    cta: "Start Today",
    href: JOIN_URL,
    accent: "#00AEEF",
  },
];

export default function Promos() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 lg:mb-14 max-w-3xl">
          <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl text-primary text-balance">
            Make your ride{" "}
            <span className="text-accent">shine for less.</span>
          </h2>
          <p className="mt-4 text-lg text-foreground max-w-[52ch] text-pretty">
            Three current deals on the Unlimited Wash Club. Cancel anytime, no
            fine print.
          </p>
        </div>

        {/* Hero deal */}
        <div
          className="relative rounded-2xl text-white overflow-hidden mb-6 lg:mb-8 shadow-xl"
          style={{ background: PURPLE_DARK }}
        >
          <div
            className="absolute inset-x-0 top-0 h-1"
            style={{ background: GOLD }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-8 sm:p-10 lg:p-14">
            <div className="lg:col-span-7">
              <h3 className="font-heading font-bold uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] mb-4">
                The Cheapest Way to Wash
              </h3>
              <p className="text-lg text-white/85 max-w-xl text-pretty mb-2">
                Lock in unlimited Magic Washes for{" "}
                <span className="text-accent font-bold">$20/month</span>. Cancel
                anytime. The fastest path from dirty ride to sparkling clean.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
              <div className="flex items-baseline gap-2">
                <span
                  className="font-heading font-bold tabular-nums text-6xl sm:text-7xl"
                  style={{ color: GOLD }}
                >
                  $20
                </span>
                <span className="font-heading uppercase tracking-widest text-sm text-white/70">
                  / month
                </span>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/packages">
                  Get the Club
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Sub-deals grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((d) => (
            <article
              key={d.name}
              className="relative flex flex-col rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: d.accent }}
              />
              <div className="p-7 sm:p-8 flex flex-col flex-1">
                <h3 className="font-heading font-bold uppercase text-2xl text-primary leading-tight mb-2">
                  {d.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-heading font-bold text-4xl text-foreground tabular-nums">
                    {d.price}
                  </span>
                  <span className="font-heading uppercase tracking-widest text-sm text-foreground/70">
                    {d.cadence}
                  </span>
                </div>
                <p className="text-base lg:text-[15px] text-foreground leading-relaxed mb-7 text-pretty flex-1">
                  {d.description}
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href={d.href}>
                    {d.cta}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
