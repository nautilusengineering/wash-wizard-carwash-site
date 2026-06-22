import Image from "next/image";
import { Wand } from "lucide-react";

interface Step {
  num: string;
  title: string;
  body: string;
  icon: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Pull Up & Pay",
    body:
      "Three paystation lanes mean almost no wait. License plate recognition checks you in automatically if you're an Unlimited Club member — no app, no scan, no friction.",
    icon: "M5 13l4 4L19 7",
  },
  {
    num: "02",
    title: "Roll Into the Tunnel",
    body:
      "180 feet of wash wizardry. Dedicated bug-removal lane, 26-foot-wide bay, and an LED light show that turns the wash into an event your kids will beg for.",
    icon: "M3 12h18M12 3v18",
  },
  {
    num: "03",
    title: "Soft-Touch Sorcery",
    body:
      "Triple-foam soft polish, ceramic graphene seal, and rain repellent. Our chemistry is gentle on paint and ruthless on grime — a glossy shine that lasts for weeks.",
    icon: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z",
  },
  {
    num: "04",
    title: "Dry & Detail Yourself",
    body:
      "25 wide, shaded vacuum bays. Microfiber towels, mat cleaners, glass cleaner, and air guns are all on the house. Finish your detail in the cool, no rush.",
    icon: "M4 4h16v16H4z M9 9l6 6 M15 9l-6 6",
  },
];

export default function Amenities() {
  return (
    <section className="relative bg-wizard-cream py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left rail: heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
              The Wash Wizard Tunnel
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95] mb-5">
              How the
              <br />
              <span className="text-accent">magic</span> happens.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Every Wash Wizard location is engineered for clean cars, fast.
              From the first pay-station lane to the last microfiber towel —
              here&apos;s how the spell is cast.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-primary font-heading font-bold uppercase tracking-widest text-xs">
              <Wand className="w-3.5 h-3.5 text-accent" /> Free vacuums always included
            </div>
          </div>

          {/* Right rail: numbered steps */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="group relative flex gap-5 sm:gap-7 p-5 sm:p-7 rounded-2xl bg-white/85 backdrop-blur-sm border border-border hover:border-accent/40 hover:shadow-xl transition-all"
                style={{ marginLeft: i * 14, animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary text-white grid place-items-center font-heading text-2xl sm:text-3xl font-bold shadow-lg group-hover:rotate-3 transition-transform">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase text-primary mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </div>
                <Wand className="hidden sm:block absolute top-3 right-3 w-5 h-5 text-accent/40 group-hover:text-accent group-hover:rotate-12 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Feature pill row */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {[
            "180-Foot Tunnel",
            "26' Wide Bay",
            "3 Paystation Lanes",
            "25 Vacuum Bays",
            "License Plate Recognition",
          ].map((f) => (
            <div
              key={f}
              className="px-4 py-3 rounded-xl bg-primary text-white text-center text-xs sm:text-sm font-heading font-bold uppercase tracking-wider shadow-md"
            >
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
