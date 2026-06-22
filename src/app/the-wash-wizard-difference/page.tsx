import PageHero from "@/components/PageHero";
import SubscribeBanner from "@/components/SubscribeBanner";
import Image from "next/image";
import { Wand } from "lucide-react";

export const metadata = {
  title: "The Wash Wizard Difference | Fast, Flexible, Flawlessly Clean",
  description:
    "Why a Wash Wizard wash is different — fast tunnel, gentle chemistry, premium upgrades, and a clean ride every time.",
};

const advantages = [
  {
    title: "Wheels & Tires",
    body: "Dedicated wheel-cleaner pass and tire-shine treatment. Black, glossy, and tough on brake dust — the only spell that makes wheels look brand new.",
  },
  {
    title: "Wash Quality",
    body: "Soft-touch foam, triple-foam polish, and pH-balanced detergents engineered for the Lowcountry's pollen, salt, and bug season. Gentle on paint, ruthless on grime.",
  },
  {
    title: "Always Clean, Dry & Shiny",
    body: "High-velocity tunnel blowers leave your car nearly bone-dry before you reach the exit. Pair that with our free DIY microfiber towels and you roll out spotless every time.",
  },
];

export default function DifferencePage() {
  return (
    <>
      <PageHero
        eyebrow="The Wash Wizard Difference"
        title="Fast. Flexible. Flawlessly clean."
        subtitle="Why a Wash Wizard wash beats every other tunnel in the Lowcountry."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
              The Wash Wizard Advantage
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
              Fast, Flexible, <span className="text-accent">Flawless.</span>
            </h2>
          </div>

          <div className="space-y-10 lg:space-y-16">
            {advantages.map((a, i) => (
              <div
                key={a.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:col-span-6 lg:[direction:ltr]">
                  <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-wizard-night relative">
                    <Image
                      src="/images/navy-bubble-bg.jpg"
                      alt=""
                      fill
                      className="object-cover opacity-50 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-magic/30 to-deep/90" />
                    <Image
                      src={
                        i === 0
                          ? "/images/pkg-wicked-wheel.png"
                          : i === 1
                          ? "/images/pkg-shining-knight.png"
                          : "/images/pkg-kings-graphene.png"
                      }
                      alt=""
                      fill
                      className="object-contain p-12 z-10 drop-shadow-2xl"
                    />
                    <Wand className="absolute top-8 left-8 w-6 h-6 text-accent animate-sparkle z-20" />
                  </div>
                </div>
                <div className="lg:col-span-6 lg:[direction:ltr]">
                  <p className="font-script text-magic text-xs uppercase tracking-[0.3em] mb-3">
                    Advantage 0{i + 1}
                  </p>
                  <h3 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95] mb-4">
                    {a.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {a.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
