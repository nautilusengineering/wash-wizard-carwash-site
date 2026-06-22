import PageHero from "@/components/PageHero";
import SubscribeBanner from "@/components/SubscribeBanner";
import { Wand } from "lucide-react";

export const metadata = {
  title: "Our History | Wash Wizard Car Wash",
  description:
    "From a single bay in 1995 to three tunnels across the Lowcountry — the timeline of Wash Wizard Car Wash.",
};

const milestones = [
  {
    year: "1995",
    title: "The Wizard Arrives",
    body: "Wash Wizard opens its very first bay in Summerville with a single goal: cleaner cars, faster, friendlier.",
  },
  {
    year: "2005",
    title: "Tunnel Wizardry",
    body: "We retire the old single-bay wash and build our first dedicated tunnel — 100 feet of soft-touch sorcery.",
  },
  {
    year: "2015",
    title: "Lowcountry Expansion",
    body: "Wash Wizard Ladson Road opens its doors. The wizard's reach now spans two counties.",
  },
  {
    year: "2020",
    title: "Unlimited Era",
    body: "The Unlimited Wash Club launches with license plate recognition — no app, no scan, no friction.",
  },
  {
    year: "2023",
    title: "Graphene Crown Jewel",
    body: "The King's Graphene package debuts — a true graphene ceramic coating, applied automatically inside the tunnel.",
  },
  {
    year: "Today",
    title: "Three Tunnels, One Club",
    body: "Three locations, one unlimited club, infinite shine. The magic keeps growing.",
  },
];

export default function OurHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Wash Wizard"
        title="Our history"
        subtitle="Thirty years of cleaner cars, one tunnel at a time."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <div className="relative pl-10 sm:pl-14 border-l-2 border-accent/40">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative pb-12 last:pb-0">
                <div className="absolute -left-[3rem] sm:-left-[4rem] top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent text-accent-foreground grid place-items-center font-heading font-bold uppercase text-xs sm:text-sm shadow-lg">
                  {m.year}
                </div>
                <div className="p-6 rounded-2xl bg-wizard-cream border border-border">
                  <h3 className="font-heading font-bold uppercase text-2xl text-primary mb-2 flex items-center gap-2">
                    <Wand className="w-4 h-4 text-accent" />
                    {m.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
