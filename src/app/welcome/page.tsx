import SubscribeBanner from "@/components/SubscribeBanner";
import { Button } from "@/components/ui/button";
import { Wand, MapPin, CreditCard, Repeat } from "lucide-react";
import Link from "next/link";
import { BUY_ONLINE_URL, MANAGE_ACCOUNT_URL } from "@/lib/utils";

export const metadata = {
  title: "Member Welcome | Wash Wizard Car Wash",
  description:
    "Welcome new Unlimited Wash Club members! Learn how to use your plan, manage your account, and add vehicles.",
};

const steps = [
  {
    icon: MapPin,
    title: "Pull Into the Plate Lane",
    body:
      "Drive straight into the dedicated Unlimited Club lane. Our license plate recognition checks you in automatically — no scan, no app, no friction.",
  },
  {
    icon: Wand,
    title: "Enjoy the Tunnel",
    body:
      "Sit back. The LED light show and soft-touch foam do their thing. Pull up and finish your detail at any of our free DIY vacuum bays.",
  },
  {
    icon: CreditCard,
    title: "Manage Your Plan Anywhere",
    body:
      "Log in any time at washwizard.mywashaccount.com — update payment, change tier, add a vehicle, or pause. Self-service is built in.",
  },
  {
    icon: Repeat,
    title: "Come Back as Often as You Like",
    body:
      "Unlimited means unlimited. Wash daily if you want — that's the point. Members typically wash 3–5x per month.",
  },
];

export default function WelcomePage() {
  return (
    <>
      <section className="bg-background pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="text-center mb-10 lg:mb-14">
            <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
              Wash Wizard Welcome
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
              Welcome to <span className="text-accent">the club.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              You&apos;re now part of the Lowcountry&apos;s most magical
              car-wash family. Here&apos;s how to make the most of your
              membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="relative p-6 sm:p-7 rounded-2xl bg-background border border-border hover:border-accent/40 hover:shadow-lg transition-all"
                >
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent text-accent-foreground grid place-items-center font-heading font-bold shadow-lg">
                    0{i + 1}
                  </div>
                  <Icon className="w-9 h-9 text-magic mb-4" />
                  <h3 className="font-heading font-bold uppercase text-xl text-primary mb-2 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={MANAGE_ACCOUNT_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="default">
                Manage My Membership
              </Button>
            </a>
            <a href={BUY_ONLINE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outlineDark">
                Buy Online
              </Button>
            </a>
            <Link href="/faq">
              <Button size="lg" variant="ghost">
                Membership FAQ &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}