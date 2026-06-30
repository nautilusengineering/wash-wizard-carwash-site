import SubscribeBanner from "@/components/SubscribeBanner";
import { Button } from "@/components/ui/button";
import { Wand, MapPin, CreditCard, Repeat, HelpCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { MANAGE_ACCOUNT_URL } from "@/lib/utils";

export const metadata = {
  title: "Member Welcome | Wash Wizard Car Wash",
  description:
    "Welcome new Unlimited Wash Club members! Learn how to use your plan, manage your account, and add vehicles.",
};

const steps = [
  {
    icon: MapPin,
    title: "Pull Into The Member Only Lane",
    body: "Drive straight into the dedicated Unlimited Club lane. Our license plate recognition checks you in automatically — no scan, no app, no friction. Member Lane is full? Use any lane if you prefer.",
  },
  {
    icon: Wand,
    title: "Enjoy The Included Amenities",
    body: "Sit back. Enjoy the LED light show and let the soft-touch foam do its thing. Finish your detail and interior at any of our DIY vacuum spaces. Vacuums, Towels, Air Tool, Glass & Interior Cleaner, & Specialized Floor Mat Cleaning Equipment.",
  },
  {
    icon: CreditCard,
    title: "Manage Your Plan Anywhere",
    body: "Log in any time from your Wash Wizard customer portal to update payment methods, change tiers, add a vehicle at a discount, update your plate (1X per year) or pause. Self-service is built in.",
  },
  {
    icon: HelpCircle,
    title: "Review Our Frequently Asked Questions",
    body: "Check out our FAQ page to learn more about washing at our facility.",
    link: { href: "/faq", label: "Visit FAQ →" },
  },
  {
    icon: ShieldCheck,
    title: "Check Out Your Responsibilities",
    body: "Visit our Disclaimer Policy page to learn more about your responsibilities when visiting the facility and our commitments to you.",
    link: { href: "/disclaimer", label: "View Disclaimer →" },
  },
  {
    icon: Repeat,
    title: "Come Back as Often as You Like",
    body: "Unlimited means unlimited. Wash daily if you want at any location — that's the point. Members typically wash 3–5x per month. If you're ever unhappy with your wash, let a manager know before leaving and we'll make it right!",
  },
];

export default function WelcomePage() {
  return (
    <>
      <section className="bg-background pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="text-center mb-10 lg:mb-14">
            <h1 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
              Welcome To <span className="text-accent">The Club.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              You&apos;re now part of the Lowcountry&apos;s most magical car-wash family. Here&apos;s how to make the most of your membership.
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
                  {s.link && (
                    <Link
                      href={s.link.href}
                      className="inline-block mt-3 text-sm font-heading font-bold uppercase tracking-wide text-secondary hover:text-primary transition-colors"
                    >
                      {s.link.label}
                    </Link>
                  )}
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
            <Button asChild size="lg" variant="ghost">
              <Link href="/faq">Membership FAQ &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
