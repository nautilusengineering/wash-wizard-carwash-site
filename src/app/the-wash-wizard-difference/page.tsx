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
      <section className="bg-background pt-32 lg:pt-40 pb-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
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
                  <div className="aspect-[4/3] relative flex items-center justify-center">
                    <div
                      className="relative w-full h-full"
                      style={{ transform: i % 2 === 0 ? "rotate(-6deg)" : "rotate(6deg)" }}
                    >
                      <Image
                        src={
                          i === 0
                            ? "https://ucarecdn.com/c104882e-1001-4cc0-8d87-87dda0432c7e/pkg-wicked-wheel.png"
                            : i === 1
                            ? "https://ucarecdn.com/9b021d97-a8ee-401f-91ba-70828d82eea4/pkg-shining-knight.png"
                            : "https://ucarecdn.com/382e1d8a-b45b-4c44-8aee-916c28cc464a/pkg-kings-graphene.png"
                        }
                        alt=""
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    <Wand
                      className="absolute top-4 right-4 w-6 h-6 text-accent animate-sparkle"
                      style={{ transform: i % 2 === 0 ? "rotate(-6deg)" : "rotate(6deg)" }}
                    />
                  </div>
                </div>
                <div className="lg:col-span-6 lg:[direction:ltr]">
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