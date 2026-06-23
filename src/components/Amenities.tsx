import Image from "next/image";
import { Flame, Wand, Crown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Step {
  num: string;
  chapter: string;
  title: string;
  body: string;
}

const steps: Step[] = [
  {
    num: "01",
    chapter: "Chapter I",
    title: "Pull Up & Pay",
    body:
      "Three paystation lanes mean almost no wait. License plate recognition checks Unlimited Club members in automatically — no app, no scan, no friction.",
  },
  {
    num: "02",
    chapter: "Chapter II",
    title: "Roll Into the Tunnel",
    body:
      "180 feet of wash wizardry. Dedicated bug-removal lane, 26-foot-wide bay, and an LED light show that turns the wash into an event.",
  },
  {
    num: "03",
    chapter: "Chapter III",
    title: "Soft-Touch Sorcery",
    body:
      "Triple-foam soft polish, ceramic graphene seal, and rain repellent. Gentle on paint, ruthless on grime — a glossy shine that lasts for weeks.",
  },
  {
    num: "04",
    chapter: "Chapter IV",
    title: "Dry & Detail Yourself",
    body:
      "25 wide, shaded vacuum bays. Microfiber towels, mat cleaners, glass cleaner, and air guns are all on the house. Finish in the cool, no rush.",
  },
];

const stats = [
  { label: "Foot Tunnel", value: "180" },
  { label: "Wide Bay", value: "26'" },
  { label: "Paystation Lanes", value: "3" },
  { label: "Vacuum Bays", value: "25" },
];

export default function Amenities() {
  return (
    <section className="relative bg-spellbook-night text-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative wizard plate, faint, top-right */}
      <div className="hidden lg:block absolute -top-20 -right-24 w-[28rem] opacity-[0.07] pointer-events-none rotate-12">
        <Image
          src="/images/wizard-plate.png"
          alt=""
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        {/* Heading row — left-aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <p className="font-script text-accent uppercase tracking-[0.32em] text-sm mb-4 inline-flex items-center gap-2">
              <Crown className="w-4 h-4" />
              The Wash Wizard Tunnel
            </p>
            <h2 className="font-heading uppercase text-5xl lg:text-6xl xl:text-7xl leading-[0.9]">
              How the
              <br />
              <span className="text-accent">magic</span> happens.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-6">
            <p className="text-base lg:text-lg text-white/80 leading-relaxed">
              From the first pay-station lane to the last microfiber towel —
              here&apos;s how the spell is cast.
            </p>
            <Link
              href="/the-wash-wizard-difference"
              className="mt-5 inline-flex items-center gap-2 text-accent font-heading uppercase tracking-widest text-sm hover:text-white transition-colors"
            >
              The Wash Wizard Difference <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Steps — 2x2 grid, each step has gigantic numeral background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-sm p-7 lg:p-10 transition-colors"
            >
              {/* Ghosted numeral watermark */}
              <span
                aria-hidden="true"
                className="absolute -top-6 right-6 lg:-top-10 lg:right-8 text-[9rem] lg:text-[12rem] font-heading text-accent/10 leading-none select-none pointer-events-none group-hover:text-accent/15 transition-colors"
              >
                {step.num}
              </span>

              <p className="font-script text-accent uppercase tracking-[0.32em] text-xs mb-3 relative z-10">
                {step.chapter}
              </p>
              <h3 className="text-2xl lg:text-3xl font-heading uppercase leading-tight mb-4 relative z-10 max-w-[20ch]">
                {step.title}
              </h3>
              <p className="text-sm lg:text-base text-white/75 leading-relaxed relative z-10 max-w-md">
                {step.body}
              </p>

              {/* Top gold rule */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
              />
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-white/10 pt-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-5xl lg:text-6xl text-accent leading-none">
                {s.value}
              </p>
              <p className="mt-2 text-xs lg:text-sm uppercase tracking-[0.22em] text-white/65">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom perk pill */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent font-heading uppercase tracking-[0.22em] text-xs lg:text-sm">
            <Flame className="w-4 h-4" /> Free DIY vacuums always included
          </div>
          <div className="inline-flex items-center gap-2 text-white/70 font-heading uppercase tracking-[0.22em] text-xs lg:text-sm">
            <Wand className="w-4 h-4 text-accent" /> License plate recognition
          </div>
        </div>
      </div>
    </section>
  );
}
