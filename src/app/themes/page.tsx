import type { CSSProperties } from "react";
import { Wand, Crown, Check, Zap, Award } from "lucide-react";

export const metadata = {
  title: "Color Themes | Wash Wizard",
  description:
    "Side-by-side comparison of accent and secondary palette options for the Wash Wizard brand.",
};

/* ────────────────────────────────────────────────────────────────────────
 * Accent (yellow / green) candidates — pairs against navy + magic + (TBD secondary)
 * ──────────────────────────────────────────────────────────────────────── */

interface AccentPalette {
  key: string;
  name: string;
  tagline: string;
  notes: string;
  accent: string;
  accentForeground: string;
  swatchHex: string;
  family: "yellow" | "green";
  current?: boolean;
}

const accentPalettes: AccentPalette[] = [
  {
    key: "sun-gold",
    name: "Sun Gold",
    tagline: "Current — bright midday gold",
    notes:
      "Punchy and arcade-bright. Reads playful but can feel a little neon next to the navy.",
    accent: "45 100% 50%",
    accentForeground: "225 100% 16%",
    swatchHex: "#FFB800",
    family: "yellow",
    current: true,
  },
  {
    key: "honey-amber",
    name: "Honey Amber",
    tagline: "Warmer, richer, more sophisticated",
    notes:
      "Closer to honey than highlighter. Pairs softer with the navy + purple — feels premium, less retail.",
    accent: "32 92% 52%",
    accentForeground: "25 80% 12%",
    swatchHex: "#F4961F",
    family: "yellow",
  },
  {
    key: "citron-spark",
    name: "Citron Spark",
    tagline: "Yellow-green pivot — fresh and modern",
    notes:
      "Sits between yellow and green. Energetic, slightly electric — feels like a magical potion.",
    accent: "62 80% 55%",
    accentForeground: "70 60% 12%",
    swatchHex: "#D6E03B",
    family: "yellow",
  },
  {
    key: "emerald-magic",
    name: "Emerald Magic",
    tagline: "Deep evergreen — premium and wizardly",
    notes:
      "High-contrast and regal next to the navy. Trades the playful gold for old-world apothecary green.",
    accent: "155 60% 38%",
    accentForeground: "0 0% 100%",
    swatchHex: "#27A06E",
    family: "green",
  },
  {
    key: "mint-mist",
    name: "Mint Mist",
    tagline: "Soft mint — friendly and bright",
    notes:
      "Light and airy. Reads modern and approachable — closer to a wellness/skincare feel than royal wizard.",
    accent: "162 50% 56%",
    accentForeground: "165 60% 12%",
    swatchHex: "#5DCEA1",
    family: "green",
  },
];

/* ────────────────────────────────────────────────────────────────────────
 * Secondary (blue / teal / purple-blue) candidates — replaces the cyan sky blue
 * ──────────────────────────────────────────────────────────────────────── */

interface SecondaryPalette {
  key: string;
  name: string;
  tagline: string;
  notes: string;
  secondary: string;
  secondaryForeground: string;
  swatchHex: string;
  family: "blue" | "teal" | "purple-blue" | "neutral";
  current?: boolean;
}

const secondaryPalettes: SecondaryPalette[] = [
  {
    key: "royal-sapphire",
    name: "Royal Sapphire",
    tagline: "Current — saturated royal blue",
    notes:
      "Tonal pair with the deep navy. Reads dignified and less neon — proper royal blue.",
    secondary: "215 75% 52%",
    secondaryForeground: "0 0% 100%",
    swatchHex: "#2A74DD",
    family: "blue",
    current: true,
  },
  {
    key: "sky",
    name: "Sky Blue",
    tagline: "Previous — vibrant cyan-blue",
    notes:
      "Bright and electric. Pops loud against the navy but trends arcade — leans more cyan than royal.",
    secondary: "196 100% 47%",
    secondaryForeground: "0 0% 100%",
    swatchHex: "#00AEEF",
    family: "blue",
  },
  {
    key: "aqua-mist",
    name: "Aqua Mist",
    tagline: "Soft turquoise — fresh and watery",
    notes:
      "Eases the cyan into something closer to seawater. Friendlier, more spa, still in the water family.",
    secondary: "185 60% 56%",
    secondaryForeground: "190 80% 12%",
    swatchHex: "#55C2CC",
    family: "teal",
  },
  {
    key: "lavender-sky",
    name: "Lavender Sky",
    tagline: "Purply-blue — bridges to the magic",
    notes:
      "Sits between navy and magic. Cohesive and harmonized — the whole palette feels like a single dusk-sky gradient.",
    secondary: "245 55% 68%",
    secondaryForeground: "0 0% 100%",
    swatchHex: "#7C89D6",
    family: "purple-blue",
  },
  {
    key: "storm-slate",
    name: "Storm Slate",
    tagline: "Muted blue-gray — editorial and recessed",
    notes:
      "Drops the saturation. Lets the accent and navy do the shouting — feels grown-up and editorial.",
    secondary: "212 25% 48%",
    secondaryForeground: "0 0% 100%",
    swatchHex: "#5C7A99",
    family: "neutral",
  },
];

/* ────────────────────────────────────────────────────────────────────────
 * Cards
 * ──────────────────────────────────────────────────────────────────────── */

function accentVars(p: AccentPalette): CSSProperties {
  return {
    "--accent": p.accent,
    "--accent-foreground": p.accentForeground,
  } as CSSProperties;
}

function secondaryVars(p: SecondaryPalette): CSSProperties {
  return {
    "--secondary": p.secondary,
    "--secondary-foreground": p.secondaryForeground,
  } as CSSProperties;
}

function FamilyChip({ label }: { label: string }) {
  return (
    <p className="font-script text-magic text-[11px] uppercase tracking-[0.3em] mb-2">
      {label}
    </p>
  );
}

function CurrentBadge() {
  return (
    <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-heading font-bold uppercase tracking-widest">
      <Wand className="w-3 h-3" /> In use today
    </span>
  );
}

function AccentCard({ p }: { p: AccentPalette }) {
  return (
    <div
      style={accentVars(p)}
      className="relative flex flex-col rounded-3xl bg-white border border-border shadow-xl shadow-primary/5 overflow-hidden"
    >
      {p.current && <CurrentBadge />}

      <div className="px-7 pt-7 pb-5">
        <FamilyChip
          label={p.family === "yellow" ? "Yellow family" : "Green family"}
        />
        <h3 className="font-heading font-bold uppercase text-3xl text-primary leading-[0.95]">
          {p.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{p.tagline}</p>
      </div>

      <div className="px-7 mb-6">
        <div className="flex rounded-2xl overflow-hidden h-16 ring-1 ring-black/5">
          <div
            className="flex-1 grid place-items-end p-2 text-[9px] font-heading font-bold uppercase tracking-widest text-white/90"
            style={{ background: "hsl(218 100% 25%)" }}
          >
            Navy
          </div>
          <div
            className="flex-1 grid place-items-end p-2 text-[9px] font-heading font-bold uppercase tracking-widest text-white/90"
            style={{ background: "hsl(263 50% 32%)" }}
          >
            Magic
          </div>
          <div
            className="flex-1 grid place-items-end p-2 text-[9px] font-heading font-bold uppercase tracking-widest"
            style={{
              background: `hsl(${p.accent})`,
              color: `hsl(${p.accentForeground})`,
            }}
          >
            Accent
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>Accent HSL · {p.accent}</span>
          <span>{p.swatchHex}</span>
        </div>
      </div>

      <div className="mx-7 mb-7 rounded-2xl bg-cream border border-border overflow-hidden">
        <div className="bg-primary px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Wand className="w-4 h-4 text-accent" />
            <span className="font-heading font-bold uppercase tracking-widest text-sm">
              Wash Wizard
            </span>
          </div>
          <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-accent">
            Member Login
          </span>
        </div>

        <div className="px-5 pt-5 pb-4">
          <p className="font-script text-magic text-[10px] uppercase tracking-[0.3em] mb-1.5">
            Unlimited Wash Club
          </p>
          <h4 className="font-heading font-bold uppercase text-[1.6rem] leading-[0.95] text-primary">
            Make your ride
            <br />
            <span style={{ color: `hsl(${p.accent})` }}>shine.</span>
          </h4>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-heading font-bold uppercase tracking-wider text-xs shadow-md cursor-default"
            >
              Get Your Plan
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-primary text-primary font-heading font-bold uppercase tracking-wider text-xs cursor-default"
            >
              See Packages
            </button>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="relative rounded-xl bg-primary text-white p-4 overflow-hidden">
            <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[9px] font-heading font-bold uppercase tracking-widest">
              <Crown className="w-2.5 h-2.5" /> Best
            </span>
            <p
              className="font-script text-[10px] uppercase tracking-[0.3em] mb-1"
              style={{ color: `hsl(${p.accent})` }}
            >
              Tier 4
            </p>
            <p className="font-heading font-bold uppercase text-base leading-none">
              King&apos;s Graphene
            </p>
            <div className="mt-2 flex items-baseline gap-1">
              <span
                className="font-heading font-bold text-3xl"
                style={{ color: `hsl(${p.accent})` }}
              >
                $50
              </span>
              <span className="text-[10px] text-white/70 uppercase tracking-widest">
                /month
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {["Graphene seal", "Rain repellent", "Free vacuums"].map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-[11px]">
                  <Check
                    className="w-3 h-3 flex-shrink-0"
                    style={{ color: `hsl(${p.accent})` }}
                  />
                  <span className="text-white/85">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-7 mb-7 px-4 py-3 rounded-xl bg-muted text-xs text-muted-foreground leading-relaxed">
        {p.notes}
      </div>
    </div>
  );
}

function familyLabel(f: SecondaryPalette["family"]): string {
  switch (f) {
    case "blue":
      return "Blue family";
    case "teal":
      return "Teal family";
    case "purple-blue":
      return "Purple-blue family";
    case "neutral":
      return "Neutral family";
  }
}

function SecondaryCard({ p }: { p: SecondaryPalette }) {
  return (
    <div
      style={secondaryVars(p)}
      className="relative flex flex-col rounded-3xl bg-white border border-border shadow-xl shadow-primary/5 overflow-hidden"
    >
      {p.current && <CurrentBadge />}

      <div className="px-7 pt-7 pb-5">
        <FamilyChip label={familyLabel(p.family)} />
        <h3 className="font-heading font-bold uppercase text-3xl text-primary leading-[0.95]">
          {p.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{p.tagline}</p>
      </div>

      <div className="px-7 mb-6">
        <div className="flex rounded-2xl overflow-hidden h-16 ring-1 ring-black/5">
          <div
            className="flex-1 grid place-items-end p-2 text-[9px] font-heading font-bold uppercase tracking-widest text-white/90"
            style={{ background: "hsl(218 100% 25%)" }}
          >
            Navy
          </div>
          <div
            className="flex-1 grid place-items-end p-2 text-[9px] font-heading font-bold uppercase tracking-widest"
            style={{
              background: `hsl(${p.secondary})`,
              color: `hsl(${p.secondaryForeground})`,
            }}
          >
            Secondary
          </div>
          <div
            className="flex-1 grid place-items-end p-2 text-[9px] font-heading font-bold uppercase tracking-widest text-white/90"
            style={{ background: "hsl(263 50% 32%)" }}
          >
            Magic
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>Secondary HSL · {p.secondary}</span>
          <span>{p.swatchHex}</span>
        </div>
      </div>

      <div className="mx-7 mb-7 rounded-2xl bg-cream border border-border overflow-hidden">
        <div className="bg-primary px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Wand className="w-4 h-4 text-secondary" />
            <span className="font-heading font-bold uppercase tracking-widest text-sm">
              Wash Wizard
            </span>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[9px] font-heading font-bold uppercase tracking-widest">
            <Zap className="w-2.5 h-2.5" /> New
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4">
          <div className="relative rounded-xl bg-secondary text-secondary-foreground p-3 overflow-hidden">
            <p className="font-script text-[9px] uppercase tracking-[0.3em] opacity-80">
              Tier 1
            </p>
            <p className="font-heading font-bold uppercase text-sm leading-tight mt-0.5">
              Magic Wash
            </p>
            <div className="mt-1 flex items-baseline gap-0.5">
              <span className="font-heading font-bold text-2xl leading-none">
                $20
              </span>
              <span className="text-[9px] opacity-80 uppercase tracking-widest">
                /mo
              </span>
            </div>
            <ul className="mt-2 space-y-1">
              {["Hot wax", "Tire shine"].map((f) => (
                <li key={f} className="flex items-center gap-1 text-[10px]">
                  <Check className="w-2.5 h-2.5 flex-shrink-0 opacity-90" />
                  <span className="opacity-90">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-xl bg-magic text-white p-3 overflow-hidden">
            <p className="font-script text-[9px] uppercase tracking-[0.3em] opacity-80">
              Tier 2
            </p>
            <p className="font-heading font-bold uppercase text-sm leading-tight mt-0.5">
              Wicked Wheel
            </p>
            <div className="mt-1 flex items-baseline gap-0.5">
              <span className="font-heading font-bold text-2xl leading-none">
                $30
              </span>
              <span className="text-[9px] opacity-80 uppercase tracking-widest">
                /mo
              </span>
            </div>
            <ul className="mt-2 space-y-1">
              {["Wheel polish", "Bug remover"].map((f) => (
                <li key={f} className="flex items-center gap-1 text-[10px]">
                  <Check className="w-2.5 h-2.5 flex-shrink-0 opacity-90" />
                  <span className="opacity-90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 rounded-xl bg-secondary/15 border border-secondary/30 px-3 py-2.5">
            <Award className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
            <p className="text-[11px] text-primary leading-snug">
              <span className="font-heading font-bold uppercase tracking-wider text-secondary">
                Member perk:
              </span>{" "}
              Free vacuums every visit, no matter the tier.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-7 mb-7 px-4 py-3 rounded-xl bg-muted text-xs text-muted-foreground leading-relaxed">
        {p.notes}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * Page
 * ──────────────────────────────────────────────────────────────────────── */

export default function ThemesPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative bg-wizard-night text-white py-20 lg:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <p className="font-script text-accent text-sm uppercase tracking-[0.3em] mb-3">
            Brand Palette Lab
          </p>
          <h1 className="font-heading font-bold uppercase text-5xl lg:text-7xl leading-[0.9]">
            The wizard&apos;s
            <br />
            <span className="text-accent">palette lab.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-white/80 leading-relaxed">
            The deep navy and the magic purple are locked. The secondary and
            accent can keep shifting. Currently rocking{" "}
            <span className="text-secondary font-bold">Royal Sapphire</span> +{" "}
            <span className="text-accent font-bold">Sun Gold</span> — call out a
            different combo any time and we&apos;ll repaint.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-heading font-bold uppercase tracking-widest">
              <span
                className="w-3 h-3 rounded-full ring-2 ring-white/40"
                style={{ background: "hsl(218 100% 25%)" }}
              />
              Navy · locked
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-heading font-bold uppercase tracking-widest">
              <span
                className="w-3 h-3 rounded-full ring-2 ring-white/40"
                style={{ background: "hsl(263 50% 32%)" }}
              />
              Magic · locked
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary text-xs font-heading font-bold uppercase tracking-widest">
              <span
                className="w-3 h-3 rounded-full ring-2 ring-white/40"
                style={{ background: "hsl(215 75% 52%)" }}
              />
              Sapphire · live
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-accent text-xs font-heading font-bold uppercase tracking-widest">
              <span
                className="w-3 h-3 rounded-full ring-2 ring-white/40"
                style={{ background: "hsl(45 100% 50%)" }}
              />
              Gold · live
            </span>
          </div>
        </div>
      </section>

      {/* Lift over dark */}
      <section className="relative z-10 -mt-12 lg:-mt-14 rounded-t-[2.5rem] bg-background shadow-[0_-20px_40px_-20px_rgba(0,15,40,0.18)] pt-16 lg:pt-20 pb-12 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
            <div>
              <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
                Round 1 · Replace the sky blue
              </p>
              <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
                Pick a new
                <br />
                <span className="text-accent">secondary.</span>
              </h2>
            </div>
            <p className="lg:max-w-sm text-sm text-muted-foreground leading-relaxed">
              The secondary color fills the cheapest pricing tier card, member
              perk chips, and supporting badges. Each mock here uses the same
              navy + magic anchors with a different candidate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {secondaryPalettes.map((p) => (
              <SecondaryCard key={p.key} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Accent section */}
      <section className="bg-background pt-8 lg:pt-12 pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
            <div>
              <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
                Round 2 · Replace the gold
              </p>
              <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
                Pick a new
                <br />
                <span className="text-accent">accent.</span>
              </h2>
            </div>
            <p className="lg:max-w-sm text-sm text-muted-foreground leading-relaxed">
              The accent drives CTAs, the &quot;Best Value&quot; badge, and the
              price text on the top tier. Two yellows, two greens, plus the
              current gold for reference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {accentPalettes.map((p) => (
              <AccentCard key={p.key} p={p} />
            ))}
          </div>

          {/* Selection prompt */}
          <div className="mt-16 lg:mt-20 rounded-3xl bg-primary text-white p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25 bg-wizard-night" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <p className="font-script text-accent text-sm uppercase tracking-[0.3em] mb-3">
                Ready to pick?
              </p>
              <h3 className="font-heading font-bold uppercase text-3xl lg:text-4xl leading-[0.95]">
                Call out one from each row
                <br />
                <span className="text-accent">and I&apos;ll apply them.</span>
              </h3>
              <p className="mt-4 text-white/80 text-sm lg:text-base">
                Something like &quot;Royal Sapphire + Honey Amber&quot; or
                &quot;Storm Slate + Emerald Magic&quot; — I&apos;ll update{" "}
                <code className="px-1.5 py-0.5 rounded bg-white/10 text-accent text-xs">
                  globals.css
                </code>{" "}
                so the change cascades across the whole site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
