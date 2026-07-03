import Image from "next/image";
import { Wand, MapPin, Users, Wrench, Zap, Shield } from "lucide-react";

export const metadata = {
  title: "About | Wash Wizard Car Wash",
  description:
    "Greetings, fellow seekers of car-wash magic. The mission, values, and craft behind Charleston's friendliest tunnel wash.",
};

const values = [
  { name: "Speed", body: "Delivering the cleanest car in the shortest possible time." },
  { name: "Professionalism", body: "Providing customer-centric attention with polish and courteous service." },
  { name: "Responsiveness", body: "Listening to the needs and feedback of every Wizard customer." },
  { name: "Innovation", body: "Pairing new technologies with timeless processes that raise the bar." },
  { name: "Integrity", body: "Maintaining honesty and clarity through every stage of the operation." },
  { name: "Teamwork", body: "Each of us succeeds individually when we do it as a team without success." },
  { name: "Accountability", body: "Taking ownership of problems and accepting responsibility." },
  { name: "Respect", body: "Honoring diversity and valuing differences of opinion." },
  { name: "Attitude", body: "Showing leadership through positive approach to every task — a can-do spirit." },
];

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

export default function AboutPage() {
  return (
    <>
      {/* Hero pull-quote */}
      <section
        className="relative overflow-hidden text-white h-screen pt-20 lg:pt-24 pb-6 lg:pb-8 flex flex-col justify-center"
        style={{ background: PURPLE_DARK }}
      >
        <div className="hidden md:block absolute -bottom-6 right-6 lg:right-16 w-56 lg:w-72 opacity-30 pointer-events-none">
          <Image
            src="https://ucarecdn.com/43922423-7fb1-4544-a761-23782edcdae2/wizard-mascot.png"
            alt=""
            width={400}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-6">
            Our Mission — In One Sentence
          </p>
          <blockquote
            className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] italic mb-8 text-balance"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            &ldquo;Come, fellow car enthusiasts, and experience the magic — we
            promise to leave you truly enchanted.&rdquo;
          </blockquote>
          <div className="inline-flex items-center gap-3">
            <div className="w-10 h-px bg-accent/60" />
            <span className="font-heading uppercase tracking-widest text-sm text-accent">
              The Wash Wizard
            </span>
            <div className="w-10 h-px bg-accent/60" />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-background border-y border-border py-8 lg:py-10">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="grid grid-cols-3 gap-4 divide-x divide-border">
            {[
              { icon: MapPin, label: "Locations", value: "3" },
              { icon: Users, label: "Family Owned", value: "Since Day One" },
              { icon: Wrench, label: "Tunnel Length", value: "180 ft" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center px-4"
                >
                  <Icon className="w-5 h-5 text-accent mb-2" />
                  <div className="font-heading font-bold uppercase text-xl sm:text-2xl text-primary leading-tight">
                    {s.value}
                  </div>
                  <div className="font-heading uppercase tracking-widest text-[0.7rem] text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bento values */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-10 lg:mb-14 max-w-3xl">
            <p className="font-heading uppercase tracking-[0.22em] text-xs text-accent mb-3">
              What we live by
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl sm:text-5xl text-primary leading-[0.95]">
              Nine values, <span className="text-accent">one team.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 lg:gap-5 auto-rows-auto">
            {/* 01 · Speed — dark feature tile, tall + wide */}
            <div
              className="relative overflow-hidden rounded-2xl text-white p-8 lg:p-10 md:col-span-2 xl:col-span-3 xl:row-span-2 flex flex-col justify-between min-h-[280px]"
              style={{ background: PURPLE_DARK }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "#FFB800" }}
              />
              <span
                aria-hidden="true"
                className="absolute -right-6 -bottom-10 select-none pointer-events-none opacity-[0.09] text-white leading-none"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "22rem",
                }}
              >
                {ROMAN[0]}
              </span>
              <Wand className="absolute top-6 right-6 w-5 h-5 text-accent/60" />
              <Wand
                className="absolute top-16 right-14 w-3 h-3 text-white/40"
                style={{ transform: "rotate(20deg)" }}
              />
              <div className="relative">
                <p className="font-heading uppercase tracking-[0.22em] text-xs text-accent mb-3">
                  Value 01
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-accent grid place-items-center shadow-md">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-card font-bold uppercase text-3xl sm:text-4xl leading-tight">
                    {values[0].name}
                  </h3>
                </div>
                <p className="text-white/85 text-base leading-relaxed max-w-md">
                  {values[0].body}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-2 text-accent/70">
                <span className="h-px w-8 bg-accent/40" />
                <span
                  className="uppercase tracking-widest text-[0.65rem] font-semibold"
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
                >
                  Cleanest car, shortest time
                </span>
              </div>
            </div>

            {/* 05 · Integrity — gold wide tile */}
            <div
              className="relative overflow-hidden rounded-2xl p-7 lg:p-8 md:col-span-2 xl:col-span-3 flex flex-col justify-between min-h-[210px]"
              style={{ background: "#FFB800" }}
            >
              <span
                aria-hidden="true"
                className="absolute -right-4 -bottom-8 select-none pointer-events-none opacity-[0.14] leading-none"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "16rem",
                  color: "#1a1428",
                }}
              >
                {ROMAN[4]}
              </span>
              <Shield
                className="absolute top-6 right-6 w-5 h-5"
                style={{ color: "#1a1428", opacity: 0.35 }}
              />
              <div className="relative">
                <p
                  className="font-heading uppercase tracking-[0.22em] text-xs mb-2"
                  style={{ color: "#1a1428", opacity: 0.7 }}
                >
                  Value 05
                </p>
                <h3
                  className="font-card font-bold uppercase text-2xl sm:text-3xl leading-tight mb-3"
                  style={{ color: "#1a1428" }}
                >
                  {values[4].name}
                </h3>
                <p
                  className="text-base leading-relaxed max-w-md"
                  style={{ color: "#1a1428" }}
                >
                  {values[4].body}
                </p>
              </div>
            </div>

            {/* 04 · Innovation — accent-tinted wide tile */}
            <div
              className="relative overflow-hidden rounded-2xl p-7 lg:p-8 md:col-span-2 xl:col-span-3 min-h-[210px] flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(135deg, #F4EEFF 0%, #E9DFFF 100%)",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute -right-4 -bottom-8 select-none pointer-events-none opacity-20 leading-none"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "16rem",
                  color: "#7A5CFF",
                }}
              >
                {ROMAN[3]}
              </span>
              <Wand
                className="absolute top-6 right-6 w-5 h-5"
                style={{ color: "#7A5CFF", opacity: 0.5 }}
              />
              <div className="relative">
                <p
                  className="font-heading uppercase tracking-[0.22em] text-xs mb-2"
                  style={{ color: "#7A5CFF" }}
                >
                  Value 04
                </p>
                <h3 className="font-card font-bold uppercase text-2xl sm:text-3xl leading-tight mb-3 text-primary">
                  {values[3].name}
                </h3>
                <p className="text-base leading-relaxed max-w-md text-primary/85">
                  {values[3].body}
                </p>
              </div>
            </div>

            {/* Compact chips — remaining 6 values */}
            {[
              { idx: 1, accent: "#00AEEF", tone: "light" },
              { idx: 2, accent: "#22C55E", tone: "light" },
              { idx: 5, accent: "#EC4899", tone: "dark" },
              { idx: 6, accent: "#F97316", tone: "light" },
              { idx: 7, accent: "#41a1d3", tone: "dark" },
              { idx: 8, accent: "#9f15b9", tone: "light" },
            ].map(({ idx, accent, tone }) => {
              const dark = tone === "dark";
              return (
                <div
                  key={values[idx].name}
                  className="relative overflow-hidden rounded-2xl p-6 xl:col-span-2 min-h-[170px] flex flex-col gap-2"
                  style={{
                    background: dark ? PURPLE_DARK : "#fff",
                    color: dark ? "#fff" : undefined,
                    boxShadow: dark
                      ? "0 8px 24px rgba(0,0,0,0.15)"
                      : "0 2px 8px rgba(30,24,50,0.05)",
                    border: dark ? "none" : "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: accent }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 -bottom-6 select-none pointer-events-none opacity-[0.12] leading-none"
                    style={{
                      fontFamily: "var(--font-cinzel), serif",
                      fontSize: "9rem",
                      color: dark ? "#fff" : accent,
                    }}
                  >
                    {ROMAN[idx]}
                  </span>
                  <p
                    className="font-heading uppercase tracking-[0.22em] text-[0.65rem]"
                    style={{
                      color: dark ? "rgba(255,255,255,0.6)" : "#71717a",
                    }}
                  >
                    Value 0{idx + 1}
                  </p>
                  <h3
                    className={`font-card font-bold uppercase text-lg leading-tight flex items-center gap-2 ${
                      dark ? "" : "text-primary"
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: accent }}
                    />
                    {values[idx].name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed relative"
                    style={{
                      color: dark ? "rgba(255,255,255,0.8)" : "#3f3f46",
                    }}
                  >
                    {values[idx].body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
