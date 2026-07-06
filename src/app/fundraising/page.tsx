import {
  Church,
  School,
  HeartHandshake,
  Ticket,
  Tickets,
  Megaphone,
  TrendingUp,
  Wand,
  Volleyball,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FundraisingNautilusForm from "./nautilus-form";

export const metadata = {
  title: "Fundraising",
  description:
    "Partner with Wash Wizard for a hassle-free fundraiser. Pick up free wash cards, sell at face value, and keep 100% of the profits.",
  alternates: { canonical: "/fundraising" },
};


const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

const audiences = [
  { Icon: Church, label: "Churches" },
  { Icon: Volleyball, label: "Sports Teams" },
  { Icon: School, label: "Schools" },
  { Icon: HeartHandshake, label: "Non-Profits" },
];

const steps = [
  {
    step: "01",
    Icon: Ticket,
    title: "Claim Your Free Cards",
    body: "Stop by our lobby and pick up 5 FREE $30 wash cards to jumpstart your goals.",
  },
  {
    step: "02",
    Icon: Tickets,
    title: "Stock Up For Less",
    body: "Buy up to 95 additional cards for just $10 each!",
  },
  {
    step: "03",
    Icon: Megaphone,
    title: "Sell or Raffle",
    body: "Sell them at their $30 face value or pick your own discounted price.",
  },
  {
    step: "04",
    Icon: TrendingUp,
    title: "Keep 100% of the Profits!",
    body: "Whatever you make, you keep. No hidden fees or splits.",
  },
];

function WashCardMockup({ tilt = -6 }: { tilt?: number }) {
  return (
    <div
      className="relative w-full max-w-xs mx-auto aspect-[8/5] rounded-2xl overflow-hidden shadow-2xl text-white p-6 flex flex-col justify-between"
      style={{
        transform: `rotate(${tilt}deg)`,
        background: PURPLE_DARK,
        boxShadow:
          "0 30px 60px -20px rgba(30,24,50,0.55), 0 0 0 1px rgba(255,184,0,0.25)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,184,0,0.15), transparent 60%)",
        }}
      />
      <div className="relative flex items-start justify-between">
        <div className="font-heading uppercase tracking-widest text-[0.6rem] text-accent">
          Wash Wizard · Fundraiser Card
        </div>
        <Wand className="w-4 h-4 text-accent" />
      </div>
      <div className="relative">
        <div className="font-heading uppercase text-xs text-accent/70 tracking-widest mb-1">
          Value
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-heading font-bold text-5xl text-accent leading-none">
            $30
          </span>
          <span className="font-heading uppercase text-xs tracking-widest text-white/70">
            King Graphene
          </span>
        </div>
      </div>
      <div className="relative flex items-center justify-between text-[0.6rem] font-heading uppercase tracking-widest text-white/60">
        <span>No expiration</span>
        <span>washwizardcarwash.com</span>
      </div>
    </div>
  );
}

export default function FundraisingPage() {
  return (
    <>
      {/* Hero — split with wash card mockup */}
      <section className="bg-background h-screen lg:h-auto lg:min-h-[70vh] pt-20 lg:pt-24 pb-6 lg:pb-8 overflow-hidden flex flex-col justify-center">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-primary leading-[0.95] mb-6">
                Sell $30 wash cards.{" "}
                <span className="text-accent">Keep every dollar.</span>
              </h1>
              <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8 max-w-xl">
                Physical wash cards your supporters will actually use.
                Five free to start, no upfront cost, 100% profit.
              </p>
              <a href="#apply">
                <Button size="lg">
                  Start Your Fundraiser
                  <ArrowRight className="size-4" />
                </Button>
              </a>

              <div className="flex flex-wrap gap-2 mt-8">
                {audiences.map((a) => (
                  <span
                    key={a.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/[0.05] border border-primary/10 text-xs font-heading font-bold uppercase tracking-widest text-primary"
                  >
                    <a.Icon className="w-3 h-3 text-accent" />
                    {a.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10">
                <div className="w-full h-full bg-accent/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 translate-x-6 translate-y-6 opacity-40">
                  <WashCardMockup tilt={-14} />
                </div>
                <div className="absolute inset-0 translate-x-3 translate-y-3 opacity-70">
                  <WashCardMockup tilt={-10} />
                </div>
                <WashCardMockup tilt={-4} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket-strip how-it-works */}
      <section className="bg-primary/5 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              How it works
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary">
              Tear here to raise{" "}
              <span className="text-accent">real money.</span>
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex">
                <div className="relative flex-1 bg-white p-6 pt-8 border-2 border-dashed border-primary/15 rounded-2xl">
                  <div
                    className="absolute -top-4 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-heading uppercase tracking-widest shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #FFB800, #e6a600)",
                      color: "#1a0e00",
                    }}
                  >
                    <Ticket className="w-3 h-3" /> Step {s.step}
                  </div>
                  <s.Icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-card font-bold uppercase text-lg text-primary mb-2 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center px-1 text-primary/30">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form — embedded, no redirect */}
      <section id="apply" className="bg-primary/5 py-16 lg:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-10">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              Ready to start?
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95]">
              Fundraiser <span className="text-accent">request form.</span>
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto">
              Fill this out and a Wash Wizard team member will follow up to
              customize your package.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm overflow-hidden">
            <FundraisingNautilusForm />
          </div>
        </div>
      </section>
    </>
  );
}
