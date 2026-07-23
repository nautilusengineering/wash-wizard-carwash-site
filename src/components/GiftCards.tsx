import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GIFTCARD_URL } from "@/lib/utils";

/* Bonus-value denominations — matches the Gift Cards FAQ. */
const denominations: { pay: string; get: string; best?: boolean }[] = [
  { pay: "$100", get: "$120", best: true },
  { pay: "$75", get: "$90" },
  { pay: "$50", get: "$60" },
  { pay: "$30", get: "$35" },
];

export default function GiftCards() {
  return (
    <section className="relative bg-deep py-16 lg:py-24 overflow-hidden">
      {/* Star-speckled night texture, same as the footer */}
      <div
        className="absolute inset-0 opacity-30 bg-wizard-night"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy + CTA */}
          <div>
            <p className="font-heading uppercase tracking-[0.28em] text-sm text-accent mb-4">
              Wash Wizard Gift Cards
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-5">
              Give the gift of <span className="text-accent">magic</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/85 max-w-xl text-pretty mb-4">
              The perfect gift for anyone who loves a gleaming, wizard-clean
              ride! Many of our cards come packed with bonus value—buy more, get
              more.
            </p>
            <p className="text-base text-white/65 max-w-xl mb-8">
              Grab one online in seconds and we&apos;ll send you a printable barcode
              or stop by any lobby to pick up a classic plastic card. Redeemable
              for washes (with all included amenities) at all three Wash Wizard
              locations. Smaller amounts available too.
            </p>
            <Button asChild size="lg">
              <a href={GIFTCARD_URL} target="_blank" rel="noopener noreferrer">
                Buy Gift Cards
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          {/* Bonus-value grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {denominations.map((d) => (
              <div
                key={d.pay}
                className="relative rounded-2xl bg-white/[0.06] p-6 sm:p-7 text-center overflow-hidden"
                style={{
                  boxShadow: d.best
                    ? "inset 0 0 0 2px #FFB800"
                    : "inset 0 0 0 1px rgba(255,255,255,0.12)",
                }}
              >
                {d.best && (
                  <div
                    className="absolute -top-0 right-0 rounded-bl-xl px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-widest"
                    style={{ background: "#FFB800", color: "#002F82" }}
                  >
                    Best Value
                  </div>
                )}
                <Gift className="size-6 text-accent mx-auto mb-3" aria-hidden="true" />
                <p className="font-heading text-white text-4xl sm:text-5xl leading-none tabular-nums">
                  {d.get}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  when you pay{" "}
                  <span className="text-white font-semibold">{d.pay}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
