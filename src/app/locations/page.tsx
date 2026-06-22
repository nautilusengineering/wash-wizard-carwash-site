import PageHero from "@/components/PageHero";
import Locations from "@/components/Locations";
import SubscribeBanner from "@/components/SubscribeBanner";
import { Wand } from "lucide-react";

export const metadata = {
  title: "Locations | Wash Wizard Car Wash",
  description:
    "Three Wash Wizard Car Wash locations across Summerville and Ladson, SC. Open 7 days a week with the 180-foot tunnel, free vacuums, and license plate recognition.",
};

const features = [
  "180-foot-long tunnel — faster throughput, no wait time",
  "26-foot-wide tunnel — less claustrophobic, easier to navigate",
  "Dedicated automated bug-removal lane",
  "25 vacuum spaces — plenty of room to detail",
  "14-foot extra-wide vacuum spaces",
  "Shaded vacuum canopies for cool, comfortable detailing",
  "3 paystation lanes — more throughput, less waiting",
  "Customer license plate recognition for the Unlimited Club",
  "Accessible front and rear entrances and exits",
  "Advanced LED light show — the kids will love it",
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Three Lowcountry Locations"
        title="Wash Wizard locations"
        subtitle="Summerville, Ladson, and Bacons Bridge — all open 7 days a week."
      />

      <Locations />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center mb-10 lg:mb-12">
            <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
              Built For Speed & Shine
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
              Wash Wizard <span className="text-accent">features</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 p-5 rounded-2xl bg-wizard-cream border border-border"
              >
                <Wand className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                  {f}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
