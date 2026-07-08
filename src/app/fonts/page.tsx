export const metadata = {
  title: "Fonts | Wash Wizard Car Wash",
  description: "Internal font reference — every typeface wired into the site.",
  robots: { index: false, follow: false },
};

type Sample = {
  name: string;
  cssVar: string;
  googleName: string;
  weights: string;
  role: string;
  fontStack: string;
  headingStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  showItalic?: boolean;
};

const samples: Sample[] = [
  {
    name: "Luckiest Guy",
    cssVar: "--font-heading",
    googleName: "Luckiest_Guy",
    weights: "400 (only)",
    role: "All h1–h6 headings site-wide. Bold cartoon feel — the We ♥ clean cars voice.",
    fontStack: "var(--font-heading), 'Luckiest Guy', cursive",
  },
  {
    name: "Nunito",
    cssVar: "--font-sans",
    googleName: "Nunito",
    weights: "400, 500, 600, 700",
    role: "Default body copy — paragraphs, buttons, UI labels. Rounded, warm sans-serif.",
    fontStack: "var(--font-sans), system-ui, sans-serif",
  },
  {
    name: "Cinzel",
    cssVar: "--font-cinzel",
    googleName: "Cinzel",
    weights: "400, 500, 600, 700",
    role: "Roman-inscription serif. Used for chapter labels, Roman numerals, and small-caps accents.",
    fontStack: "var(--font-cinzel), serif",
  },
  {
    name: "IM Fell English",
    cssVar: "--font-im-fell",
    googleName: "IM_Fell_English",
    weights: "400 · roman + italic",
    role: "Old-book serif with italic. Storybook body copy and chapter titles.",
    fontStack: "var(--font-im-fell), serif",
    showItalic: true,
  },
];

const PANGRAM = "The quick brown wizard jinxed my very foxy cab.";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789 · & ! ? , . — ✦";

export default function FontsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-background pt-32 lg:pt-40 pb-8 lg:pb-12">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-3">
            Internal reference
          </p>
          <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl text-primary leading-[0.95] mb-4">
            Wash Wizard <span className="text-accent">type system</span>
          </h1>
          <p className="text-base text-foreground/75 max-w-2xl">
            The four Google fonts wired into <code className="font-mono text-sm text-primary bg-primary/[0.05] px-1.5 py-0.5 rounded">app/layout.tsx</code>.
            Pull them into any component with the CSS variable listed on each card.
          </p>
        </div>
      </section>

      {/* Font cards */}
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-6 space-y-8">
          {samples.map((s) => (
            <article
              key={s.name}
              className="rounded-2xl bg-white border border-border shadow-sm overflow-hidden"
            >
              {/* Card header */}
              <div className="px-6 sm:px-8 py-5 border-b border-border flex flex-wrap items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <h2
                    className="text-3xl sm:text-4xl text-primary leading-none"
                    style={{ fontFamily: s.fontStack }}
                  >
                    {s.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2">{s.role}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-xs">
                  <code className="font-mono text-primary bg-primary/[0.05] px-2 py-1 rounded">
                    font-family: {s.cssVar}
                  </code>
                  <span className="text-muted-foreground uppercase tracking-widest text-[0.65rem]">
                    next/font/google · {s.googleName} · {s.weights}
                  </span>
                </div>
              </div>

              {/* Big sample */}
              <div className="px-6 sm:px-8 py-8">
                <p
                  className="text-primary leading-[1.05] text-balance"
                  style={{
                    fontFamily: s.fontStack,
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    ...s.headingStyle,
                  }}
                >
                  {PANGRAM}
                </p>
              </div>

              {/* Size ramp */}
              <div className="px-6 sm:px-8 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="uppercase tracking-widest text-[0.65rem] text-muted-foreground mb-2">
                      Uppercase
                    </p>
                    <p
                      className="text-primary text-lg leading-snug break-all"
                      style={{ fontFamily: s.fontStack, ...s.bodyStyle }}
                    >
                      {UPPER}
                    </p>
                  </div>
                  <div>
                    <p className="uppercase tracking-widest text-[0.65rem] text-muted-foreground mb-2">
                      Lowercase
                    </p>
                    <p
                      className="text-primary text-lg leading-snug break-all"
                      style={{ fontFamily: s.fontStack, ...s.bodyStyle }}
                    >
                      {LOWER}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="uppercase tracking-widest text-[0.65rem] text-muted-foreground mb-2">
                      Numerals &amp; punctuation
                    </p>
                    <p
                      className="text-primary text-lg leading-snug"
                      style={{ fontFamily: s.fontStack, ...s.bodyStyle }}
                    >
                      {DIGITS}
                    </p>
                  </div>
                  {s.showItalic && (
                    <div className="sm:col-span-2">
                      <p className="uppercase tracking-widest text-[0.65rem] text-muted-foreground mb-2">
                        Italic
                      </p>
                      <p
                        className="text-primary text-2xl leading-snug italic"
                        style={{ fontFamily: s.fontStack }}
                      >
                        {PANGRAM}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Weight ramp — only meaningful when the font has multiple weights */}
              {s.weights.includes(",") && (
                <div className="px-6 sm:px-8 pb-8">
                  <p className="uppercase tracking-widest text-[0.65rem] text-muted-foreground mb-3">
                    Weights
                  </p>
                  <div className="space-y-2">
                    {s.weights
                      .split(/[,·]/)
                      .map((w) => w.trim())
                      .filter((w) => /^\d+$/.test(w))
                      .map((w) => (
                        <p
                          key={w}
                          className="text-primary text-xl leading-snug flex items-baseline gap-4"
                          style={{ fontFamily: s.fontStack, fontWeight: Number(w) }}
                        >
                          <span className="uppercase tracking-widest text-[0.65rem] text-muted-foreground w-10">
                            {w}
                          </span>
                          <span>The magic of car-wash typography.</span>
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
