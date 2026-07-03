import Pricing from "@/components/Pricing";
import SubscribeBanner from "@/components/SubscribeBanner";
import { Check } from "lucide-react";

export const metadata = {
  title: "Wash Packages | Wash Wizard Car Wash",
  description:
    "Compare every Wash Wizard package — The Magic Wash, The Wicked Wheel Wash, The Shining Knight Wash, and The King Graphene Wash. Monthly clubs start at $14.99/month.",
};

const allIncluded = [
  "Vacuums",
  "Towels",
  "Air tool",
  "Glass & interior cleaner",
  "Specialized floor mat cleaning equipment",
  "180-foot tunnel",
];

export default function PackagesPage() {
  return (
    <>
      <div className="pt-20 lg:pt-24" />
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
                No matter which package you pick, every wash includes the Wash
                Wizard Amenities Package: vacuums, towels, air tool, glass &
                interior cleaner, specialized floor mat cleaning equipment, and
                the same legendary 180-foot tunnel experience.
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