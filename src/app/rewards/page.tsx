import { ArrowRight, Coins, Gauge, TicketPercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MANAGE_ACCOUNT_URL } from "@/lib/utils";
import RewardsNautilusForm from "./nautilus-form";

export const metadata = {
  title: "Wash Rewards | Wash Wizard Car Wash",
  description:
    "Join Wash Rewards, earn 1 Wash Point per dollar on every retail wash package, and redeem points for rewards in your Wizard Dashboard.",
};

const rewards = [
  {
    icon: TicketPercent,
    tag: "Signup Reward",
    title: "Your Magical Welcome Gift",
    body: (
      <>
        Sign up for <strong>Wash Rewards</strong> right at the pay station or via
        our online Reward Enrollment Form and <em>POOF!</em> — a{" "}
        <strong>$10 OFF King Graphene Wash</strong> coupon appears like wizardry.
        Kick off your journey with shimmering shine, graphene protection, and a
        little spell of savings.
      </>
    ),
    accent: "#FFB800",
  },
  {
    icon: Coins,
    tag: "Reward Points",
    title: "Earn as You Shine",
    body: (
      <>
        Every retail wash package earns <strong>1 point per dollar</strong>.
        Stack ’em up and spend ’em in our <strong>Reward Shop</strong> for
        discounts, free washes, and enchanted car-care goodies. No membership
        required — just rinse, repeat, and let the magic multiply.
      </>
    ),
    accent: "#41a1d3",
  },
  {
    icon: Gauge,
    tag: "Tracking & Access",
    title: "Your Wizard Dashboard",
    body: (
      <>
        Log in through the <strong>Manage My Account</strong> portal anytime to
        check your points, browse rewards, and keep your Wash Wizard journey
        glowing.
      </>
    ),
    cta: "Manage My Account",
    href: MANAGE_ACCOUNT_URL,
    accent: "#7C3AED",
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
            Join free, earn <strong>1 Wash Point per dollar</strong> on every
            retail wash package, and turn your shine into discounts, free washes,
            and enchanted car-care goodies.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {rewards.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="relative flex flex-col rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-8 overflow-hidden"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: r.accent }}
                  />
                  <div
                    className="w-14 h-14 rounded-xl grid place-items-center mb-5 shadow-sm"
                    style={{ background: r.accent }}
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
                  {r.href && r.cta ? (
                    <div className="mt-auto pt-6">
                      <Button
                        asChild
                        variant="outlineDark"
                        className="h-auto min-h-11 w-full whitespace-normal px-3 py-2 text-center text-xs leading-tight tracking-normal"
                      >
                        <a href={r.href} target="_blank" rel="noopener noreferrer">
                          <span>{r.cta}</span>
                          <ArrowRight className="size-4 shrink-0" />
                        </a>
                      </Button>
                    </div>
                  ) : null}
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
              Complete the online Reward Enrollment Form below, or sign up at a
              Wash Wizard pay station, to begin your rewards journey.
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
