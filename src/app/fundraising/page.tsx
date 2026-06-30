import SubscribeBanner from "@/components/SubscribeBanner";
import { Church, School, HeartHandshake, Ticket, Tickets, Megaphone, TrendingUp, Car, Sparkles } from "lucide-react";
import { Volleyball } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Fundraising | Wash Wizard Car Wash",
  description:
    "Partner with Wash Wizard for a hassle-free fundraiser. Pick up free wash cards, sell at face value, and keep 100% of the profits.",
};

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

export default function FundraisingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-6 text-center">
          <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
            Hassle-Free Fundraising!
          </p>
          <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-primary leading-[0.95] mb-6">
            Partner with us for a fundraiser your{" "}
            <span className="text-accent">supporters will actually enjoy.</span>
          </h1>

          {/* Audience icons */}
          <div className="flex justify-center gap-8 sm:gap-12 mt-10">
            {audiences.map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-primary/5 border border-primary/10 grid place-items-center">
                  <a.Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary text-center mb-12">
            How It Works in <span className="text-accent">4 Simple Steps</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative bg-white rounded-2xl border border-border p-7 text-center shadow-sm hover:shadow-lg transition-all"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white grid place-items-center font-heading font-bold text-sm shadow-md">
                  {s.step}
                </div>
                <div className="mb-4 mt-2 flex justify-center">
                  <s.Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold uppercase text-lg text-primary mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-white mb-10">
            Show Me <span className="text-accent">The Profit</span>
          </h2>
          <div className="bg-white/10 rounded-2xl border border-white/20 p-8 sm:p-10 text-white space-y-5">
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <span className="font-heading font-bold uppercase tracking-wide text-white/80">Sell 100 Cards @ $30</span>
              <span className="font-heading font-bold text-2xl text-accent">$3,000</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <span className="font-heading font-bold uppercase tracking-wide text-white/80">Your Cost (5 Free + 95 @ $10)</span>
              <span className="font-heading font-bold text-2xl text-white">$950</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="font-heading font-bold uppercase tracking-wide text-xl text-accent">YOUR PROFIT</span>
              <span className="font-heading font-bold text-4xl text-accent">$2,050!</span>
            </div>
          </div>
        </div>
      </section>

      {/* What supporters get */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary mb-6">
            What Your <span className="text-accent">Supporters Get</span>
          </h2>
          <div className="bg-cream rounded-2xl border border-border p-8 sm:p-10">
            <div className="relative flex justify-center mb-4">
              <Car className="w-12 h-12 text-primary" />
              <Sparkles className="absolute -top-3 right-0 w-5 h-5 text-accent animate-twinkle" />
            </div>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              A top-of-the-line <strong>$30 King Graphene Car Wash</strong> featuring premium{" "}
              <strong>Graphene Coating Paint Protection</strong> — the best wash we offer.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 lg:px-6 text-center">
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary mb-3">
            Ready to start your <span className="text-accent">fundraiser?</span>
          </h2>
          <p className="text-base text-muted-foreground mb-10">
            Complete our quick application form online to customize your package!
          </p>
          <a
            href="https://www.nautilus-app.com/c/form/d8bfa9a9-b675-4dab-b135-5cc91058b51b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">Fundraiser Request Form →</Button>
          </a>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
