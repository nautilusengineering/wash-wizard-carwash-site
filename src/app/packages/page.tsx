import Pricing from "@/components/Pricing";
import SubscribeBanner from "@/components/SubscribeBanner";
import { Check } from "lucide-react";

export const metadata = {
  title: "Wash Packages | Wash Wizard Car Wash",
  description:
    "Compare every Wash Wizard package — Magic Wash, Wicked Wheel, Shining Knight, and the King's Graphene. Single washes or unlimited monthly clubs.",
};

const allIncluded = [
  "Triple-foam soft polish",
  "Spot-free water rinse",
  "High-power blowers",
  "Free DIY vacuums",
  "Air & towels included",
  "License plate recognition",
];

export default function PackagesPage() {
  return (
    <>
      <div className="pt-32 lg:pt-36" />
      <Pricing />
      <section className="relative bg-background py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95] mb-5">
                The basics
                <br />
                done <span className="text-accent">brilliantly.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                No matter which package you pick, you get the same fast tunnel
                experience, the same gentle chemistry, and the same free
                vacuum bays. The upgrades are extra magic on top.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allIncluded.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white border border-border shadow-sm"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-heading font-bold uppercase text-sm tracking-wider text-primary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SubscribeBanner />
    </>
  );
}