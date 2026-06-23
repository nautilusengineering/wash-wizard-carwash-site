import {
  Khand,
  Cinzel,
  Bowlby_One,
  Titan_One,
  Lilita_One,
  Black_Ops_One,
  Berkshire_Swash,
  Cinzel_Decorative,
  IM_Fell_English,
  MedievalSharp,
} from "next/font/google";
import { Wand, Crown } from "lucide-react";

export const metadata = {
  title: "Font Studio | Wash Wizard",
  description:
    "Heading + eyebrow font pairings for the Wash Wizard brand. Each candidate matched to the chunky, balloony logo lettering.",
};

/* ────────────────────────────────────────────────────────────────────────
 * Font loaders (scoped to this page only)
 * ──────────────────────────────────────────────────────────────────────── */

const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bowlbyOne = Bowlby_One({ subsets: ["latin"], weight: ["400"], display: "swap" });
const titanOne = Titan_One({ subsets: ["latin"], weight: ["400"], display: "swap" });
const lilitaOne = Lilita_One({ subsets: ["latin"], weight: ["400"], display: "swap" });
const blackOpsOne = Black_Ops_One({ subsets: ["latin"], weight: ["400"], display: "swap" });

const berkshireSwash = Berkshire_Swash({ subsets: ["latin"], weight: ["400"], display: "swap" });
const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const imFellEnglish = IM_Fell_English({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});
const medievalSharp = MedievalSharp({ subsets: ["latin"], weight: ["400"], display: "swap" });

/* ────────────────────────────────────────────────────────────────────────
 * Variant definitions
 * ──────────────────────────────────────────────────────────────────────── */

type EyebrowTreatment = "uppercase-tracked" | "mixed-italic" | "uppercase-loose";

interface FontVariant {
  key: string;
  number: string;
  headingFont: string;
  headingClass: string;
  eyebrowFont: string;
  eyebrowClass: string;
  eyebrowTreatment: EyebrowTreatment;
  headingNotes: string;
  eyebrowNotes: string;
  vibe: string;
  current?: boolean;
}

const variants: FontVariant[] = [
  {
    key: "titan-medieval",
    number: "01",
    headingFont: "Titan One",
    headingClass: titanOne.className,
    eyebrowFont: "MedievalSharp",
    eyebrowClass: medievalSharp.className,
    eyebrowTreatment: "uppercase-tracked",
    headingNotes:
      "Maximum chunky balloon. Rounded, blocky, cartoon-bold — the closest read on the actual Wash Wizard logo character.",
    eyebrowNotes:
      "Medieval gothic display. Broken-pen runic feel — the direct wizard reference.",
    vibe: "Chunky logo match + ancient gothic eyebrow. Fully committed to the wizard theme.",
    current: true,
  },
  {
    key: "bowlby-berkshire",
    number: "02",
    headingFont: "Bowlby One",
    headingClass: bowlbyOne.className,
    eyebrowFont: "Berkshire Swash",
    eyebrowClass: berkshireSwash.className,
    eyebrowTreatment: "mixed-italic",
    headingNotes:
      "Chunky, condensed, balloony — also a strong logo-match. Slightly tighter and more condensed than Titan.",
    eyebrowNotes:
      "Playful flowing italic display. Has personality without being formal — a friendly magical curl.",
    vibe: "Logo-match chunky + flowing magic script. The most playful pairing.",
  },
  {
    key: "titan-cinzel-deco",
    number: "03",
    headingFont: "Titan One",
    headingClass: titanOne.className,
    eyebrowFont: "Cinzel Decorative",
    eyebrowClass: cinzelDecorative.className,
    eyebrowTreatment: "uppercase-loose",
    headingNotes:
      "Same Titan One as the current pick — extremely round, balloony, blocky. Reads cartoon-bold, slightly bouncy.",
    eyebrowNotes:
      "Ornate sibling of Cinzel — curlicues and flourishes on top and bottom of letters. Reads regal and ceremonial.",
    vibe: "Same heading as current, more royal/ceremonial eyebrow instead of gothic.",
  },
  {
    key: "lilita-imfell",
    number: "04",
    headingFont: "Lilita One",
    headingClass: lilitaOne.className,
    eyebrowFont: "IM Fell English",
    eyebrowClass: imFellEnglish.className,
    eyebrowTreatment: "mixed-italic",
    headingNotes:
      "Rounded chunky display — softer corners than Bowlby/Titan, more approachable. Friendly without losing weight.",
    eyebrowNotes:
      "Vintage book serif — irregular printing-press feel. Reads like a hand-set wizard's spell tome.",
    vibe: "Friendly chunky + spellbook vintage serif. Story-book, fairy-tale, kid-friendly.",
  },
  {
    key: "blackops-medieval",
    number: "05",
    headingFont: "Black Ops One",
    headingClass: blackOpsOne.className,
    eyebrowFont: "MedievalSharp",
    eyebrowClass: medievalSharp.className,
    eyebrowTreatment: "uppercase-tracked",
    headingNotes:
      "Condensed military-stencil chunky — sharper edges than Bowlby/Titan/Lilita. More edgy, less balloony.",
    eyebrowNotes:
      "Medieval gothic display — broken-pen feel, direct wizard reference. Reads ancient, runic.",
    vibe: "Edgy stencil + ancient gothic. The most overtly wizard/D&D direction, slightly darker tone.",
  },
  {
    key: "khand-cinzel",
    number: "06",
    headingFont: "Khand",
    headingClass: khand.className,
    eyebrowFont: "Cinzel",
    eyebrowClass: cinzel.className,
    eyebrowTreatment: "uppercase-tracked",
    headingNotes:
      "Previously live — clean condensed sans. Modern, sharp, geometric. Furthest from the chunky balloon logo of the bunch.",
    eyebrowNotes:
      "Previously live — classical Roman serif. All caps with wide tracking. Elegant but not especially wizardly.",
    vibe: "Previous combo — modern condensed + classical Roman. Sportier, less themed.",
  },
];

/* ────────────────────────────────────────────────────────────────────────
 * Card
 * ──────────────────────────────────────────────────────────────────────── */

function eyebrowStyleClasses(t: EyebrowTreatment): string {
  switch (t) {
    case "uppercase-tracked":
      return "uppercase tracking-[0.3em] text-sm";
    case "uppercase-loose":
      return "uppercase tracking-[0.18em] text-base";
    case "mixed-italic":
      return "italic text-xl normal-case tracking-tight";
  }
}

function VariantCard({ v }: { v: FontVariant }) {
  const eyebrowText =
    v.eyebrowTreatment === "mixed-italic"
      ? "Unlimited Wash Club"
      : "Unlimited Wash Club";

  return (
    <div className="relative flex flex-col rounded-3xl bg-white border border-border shadow-xl shadow-primary/5 overflow-hidden">
      {/* Number + current badge */}
      <div className="flex items-center justify-between px-7 pt-7 pb-2">
        <span className="font-script text-magic text-[11px] uppercase tracking-[0.3em]">
          Pairing {v.number}
        </span>
        {v.current && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-heading font-bold uppercase tracking-widest">
            <Wand className="w-3 h-3" /> In use today
          </span>
        )}
      </div>

      {/* Type name row */}
      <div className="px-7 pb-5">
        <h3 className="font-heading font-bold uppercase text-2xl text-primary leading-tight">
          {v.headingFont}{" "}
          <span className="text-muted-foreground font-normal text-base normal-case tracking-normal">
            ×
          </span>{" "}
          <span className="text-magic">{v.eyebrowFont}</span>
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{v.vibe}</p>
      </div>

      {/* Hero mock */}
      <div className="mx-7 mb-7 rounded-2xl bg-cream border border-border overflow-hidden">
        <div className="px-7 py-9 lg:py-12 bg-gradient-to-br from-cream via-white to-cream">
          <p
            className={`${v.eyebrowClass} text-magic ${eyebrowStyleClasses(
              v.eyebrowTreatment
            )} mb-4`}
          >
            {eyebrowText}
          </p>
          <h2
            className={`${v.headingClass} text-primary uppercase leading-[0.85] text-5xl sm:text-6xl lg:text-7xl`}
          >
            Wash Wizard
          </h2>
          <p
            className={`${v.headingClass} text-accent uppercase leading-[0.9] text-2xl sm:text-3xl mt-2`}
          >
            Make your ride shine.
          </p>
          <p className="mt-5 text-sm text-foreground/75 leading-relaxed max-w-md">
            Charleston&apos;s magical car wash. Three Lowcountry locations, one
            unlimited club, infinite shine.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className={`${v.headingClass} inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground uppercase tracking-wider text-sm`}
            >
              <Crown className="w-3.5 h-3.5" /> Get Your Plan
            </span>
            <span
              className={`${v.headingClass} inline-flex items-center px-4 py-2 rounded-lg border border-primary text-primary uppercase tracking-wider text-sm`}
            >
              See Packages
            </span>
          </div>
        </div>

        {/* Bottom strip: dark wash with reversed type */}
        <div className="bg-primary px-7 py-5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p
              className={`${v.eyebrowClass} text-accent ${eyebrowStyleClasses(
                v.eyebrowTreatment
              )} mb-1`}
            >
              Tier 4
            </p>
            <p
              className={`${v.headingClass} text-white uppercase leading-none text-2xl sm:text-3xl`}
            >
              King&apos;s Graphene
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <span
              className={`${v.headingClass} text-accent text-3xl sm:text-4xl uppercase leading-none`}
            >
              $50
            </span>
            <span className="block text-[10px] text-white/70 uppercase tracking-widest mt-0.5">
              per month
            </span>
          </div>
        </div>
      </div>

      {/* Specimen row */}
      <div className="mx-7 mb-7 space-y-3">
        <div className="rounded-xl bg-muted px-4 py-3">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-heading font-bold mb-1.5">
            Heading specimen · {v.headingFont}
          </p>
          <p
            className={`${v.headingClass} text-primary text-2xl uppercase leading-none`}
          >
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {v.headingNotes}
          </p>
        </div>

        <div className="rounded-xl bg-muted px-4 py-3">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-heading font-bold mb-1.5">
            Eyebrow specimen · {v.eyebrowFont}
          </p>
          <p
            className={`${v.eyebrowClass} text-magic ${
              v.eyebrowTreatment === "mixed-italic"
                ? "italic text-2xl normal-case"
                : "uppercase tracking-[0.25em] text-lg"
            } leading-none`}
          >
            Abracadabra Sparkle Shine
          </p>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {v.eyebrowNotes}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * Page
 * ──────────────────────────────────────────────────────────────────────── */

export default function FontsPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative bg-wizard-night text-white py-20 lg:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <p className="font-script text-accent text-sm uppercase tracking-[0.3em] mb-3">
            Font Studio
          </p>
          <h1 className="font-heading font-bold uppercase text-5xl lg:text-7xl leading-[0.9]">
            Find your
            <br />
            <span className="text-accent">wizard&apos;s voice.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-white/80 leading-relaxed">
            Currently rocking{" "}
            <span className="font-bold text-accent">Titan One</span> +{" "}
            <span className="font-bold text-accent">MedievalSharp</span>.
            Each heading font below is matched to the chunky, balloony,
            condensed lettering of the actual logo, and each eyebrow brings
            its own character. Call out a different pairing any time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-accent text-xs font-heading font-bold uppercase tracking-widest">
              <Wand className="w-3.5 h-3.5 text-accent" /> Titan + Medieval · live
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-heading font-bold uppercase tracking-widest">
              Body font · Open Sans (unchanged)
            </span>
          </div>
        </div>
      </section>

      {/* Lift over dark */}
      <section className="relative z-10 -mt-12 lg:-mt-14 rounded-t-[2.5rem] bg-background shadow-[0_-20px_40px_-20px_rgba(0,15,40,0.18)] pt-16 lg:pt-20 pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
            <div>
              <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
                Side-by-side pairings
              </p>
              <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
                Each card shows the
                <br />
                <span className="text-accent">pair in real action.</span>
              </h2>
            </div>
            <p className="lg:max-w-sm text-sm text-muted-foreground leading-relaxed">
              Mock hero, mock pricing row, alphabet specimen. The eyebrow is
              styled the way it would actually appear on the site for each
              font&apos;s character.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {variants.map((v) => (
              <VariantCard key={v.key} v={v} />
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
                Call out a pairing
                <br />
                <span className="text-accent">and I&apos;ll apply it.</span>
              </h3>
              <p className="mt-4 text-white/80 text-sm lg:text-base">
                Something like &quot;Bowlby + Berkshire&quot; or &quot;Lilita
                + IM Fell English&quot; — I&apos;ll swap the global font
                loaders in{" "}
                <code className="px-1.5 py-0.5 rounded bg-white/10 text-accent text-xs">
                  layout.tsx
                </code>{" "}
                and update the{" "}
                <code className="px-1.5 py-0.5 rounded bg-white/10 text-accent text-xs">
                  --font-*
                </code>{" "}
                variables in{" "}
                <code className="px-1.5 py-0.5 rounded bg-white/10 text-accent text-xs">
                  globals.css
                </code>{" "}
                so the rest of the site picks it up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
