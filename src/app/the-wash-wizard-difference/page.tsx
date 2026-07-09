import SubscribeBanner from "@/components/SubscribeBanner";
import { CrystalBall } from "@/components/CrystalBall";

export const metadata = {
  title: "The Wash Wizard Difference | Fast, Flexible, Flawlessly Clean",
  description:
    "Why a Wash Wizard wash is different — fast tunnel, gentle chemistry, premium upgrades, and a clean ride every time.",
};

const advantages = [
  { icon: "Zap",           color: "#151b41", title: "High Throughput",           body: "Fast, efficient traffic flow with consistent quality." },
  { icon: "ArrowLeftRight", color: "#0b9069", title: "Extra-Wide Vacuum Spaces",  body: "14' extra covered vacuum spaces for comfort and efficiency." },
  { icon: "Bug",           color: "#9f15b9", title: "Automatic Bug Removal",     body: "Dedicated equipment and specialized chemistry." },
  { icon: "ScanLine",      color: "#41a1d3", title: "Smart Memberships",         body: "License Plate Recognition with full online management." },
  { icon: "WizardHat",     color: "#151b41", title: "Themed Experience",         body: "A fun, immersive, colorful wash experience for all ages." },
  { icon: "Lightbulb",     color: "#0b9069", title: "Light Show Tunnel",         body: "Colorful LED lighting mega themed drive-through arches." },
  { icon: "CircleOff",     color: "#9f15b9", title: "Wheels & Tires",            body: "Specialized brushes, chemistry, and high-pressure cleaning with optional Tire Shine." },
  { icon: "Droplets",      color: "#41a1d3", title: "Premium Water Quality",     body: "Softened, filtered, and spot-free." },
  { icon: "Wind",          color: "#151b41", title: "Clean, Dry & Shiny Finish", body: "Spot-free rinse, specialty drying agent, powerful blowers, and an optional buff-and-dry." },
];

export default function DifferencePage() {
  return (
    <>
      <section
        className="pt-24 lg:pt-28 pb-20 lg:pb-28"
        style={{ background: "linear-gradient(160deg, #0d1124 0%, #1a1040 60%, #0a0d1e 100%)" }}
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-14 lg:mb-20">
            <h1 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-white leading-[0.95]">
              The Wash Wizard{" "}
              <span style={{ color: "#FFB800" }}>Difference</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              Every detail designed for a better wash experience.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-16">
            {advantages.map((a) => (
              <div key={a.title} className="flex flex-col items-center text-center group">
                <div className="transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                  <CrystalBall color={a.color} icon={a.icon} />
                </div>
                <h3 className="font-card font-bold uppercase text-base sm:text-lg text-white leading-tight mt-3 mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed max-w-[180px]">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-background py-10 lg:py-14" />
      <SubscribeBanner />
    </>
  );
}
