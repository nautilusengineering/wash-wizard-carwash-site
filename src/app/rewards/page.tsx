import { Droplets, Gift, Cake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RewardsNautilusForm from "./nautilus-form";

export const metadata = {
  title: "Wash Rewards | Wash Wizard Car Wash",
  description:
    "Wash Rewards — earn free washes, a free birthday wash, and free air fresheners just for keeping your ride clean. Free to join for any Wash Wizard customer.",
};

const rewards = [
  {
    icon: Droplets,
    tag: "Reward 1",
    title: "Every 5th Wash Is Free",
    body: "Wash with us five times and your sixth wash is on the house — no membership required. Reset the counter and start earning again.",
    accent: "#41a1d3",
    comingSoon: false,
  },
  {
    icon: Gift,
    tag: "Reward 2",
    title: "$100 Spent = Free Air Freshener",
    body: "Every $100 you spend at Wash Wizard earns you a complimentary premium air freshener, hand-picked from our vending selection.",
    accent: "#FFB800",
    comingSoon: true,
  },
  {
    icon: Cake,
    tag: "Reward 3",
    title: "Free Wash On Your Birthday",
    body: "It's your day — let us handle the car. Every enrolled member gets a free wash during their birthday month, on us.",
    accent: "#EC4899",
    comingSoon: true,
  },
];

export default function RewardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary h-screen lg:h-auto lg:min-h-[70vh] pt-24 lg:pt-28 pb-6 lg:pb-8 overflow-hidden flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4 lg:px-6 text-center">
          <p className="font-heading uppercase tracking-[0.28em] text-sm text-accent mb-4">
            Wash Rewards
          </p>
          <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-5">
            Get rewarded for{" "}
            <span className="text-accent">every wash</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/85 max-w-2xl mx-auto text-pretty">
            Not ready for a monthly Unlimited plan? No problem. Wash Rewards is
            our free loyalty program for retail washers — earn free washes, a
            free birthday wash, and free air fresheners just for stopping in.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="#enroll">
                Enroll Free
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Reward tiers */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rewards.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="relative flex flex-col rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-8 overflow-hidden"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: r.accent, opacity: r.comingSoon ? 0.5 : 1 }}
                  />
                  {r.comingSoon && (
                    <span className="absolute top-4 right-4 z-10 rounded-full bg-primary px-3 py-1 text-[10px] font-heading font-bold uppercase tracking-widest text-white shadow-sm">
                      Coming Soon
                    </span>
                  )}
                  <div
                    className="w-14 h-14 rounded-xl grid place-items-center mb-5 shadow-sm"
                    style={{ background: r.accent, opacity: r.comingSoon ? 0.55 : 1 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-heading uppercase tracking-[0.22em] text-xs text-muted-foreground mb-2">
                    {r.tag}
                  </p>
                  <h2 className="font-heading font-bold uppercase text-2xl sm:text-3xl text-primary leading-tight mb-3">
                    {r.title}
                  </h2>
                  <p className="text-base text-foreground leading-relaxed">
                    {r.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrollment */}
      <section id="enroll" className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-white leading-[0.95] mb-3">
              Enroll for <span className="text-accent">free</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/85 max-w-xl mx-auto">
              One-time signup. We&apos;ll link your rewards to your phone number
              so every wash and every dollar counts automatically.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm overflow-hidden">
            <RewardsNautilusForm />
          </div>
        </div>
      </section>
    </>
  );
}
