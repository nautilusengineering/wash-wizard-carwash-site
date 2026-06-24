import SubscribeBanner from "@/components/SubscribeBanner";
import { Wand, Star } from "lucide-react";

export const metadata = {
  title: "Our History | Wash Wizard Car Wash",
  description:
    "From a single bay in 1995 to three tunnels across the Lowcountry — the timeline of Wash Wizard Car Wash.",
};

const milestones = [
  {
    year: "1995",
    spell: "The First Incantation",
    title: "The Wizard Arrives",
    body: "Wash Wizard opens its very first bay in Summerville with a single goal: cleaner cars, faster, friendlier.",
  },
  {
    year: "2005",
    spell: "A Greater Enchantment",
    title: "Tunnel Wizardry",
    body: "We retire the old single-bay wash and build our first dedicated tunnel — 100 feet of soft-touch sorcery.",
  },
  {
    year: "2015",
    spell: "The Spell Spreads",
    title: "Lowcountry Expansion",
    body: "Wash Wizard Ladson Road opens its doors. The wizard's reach now spans two counties.",
  },
  {
    year: "2020",
    spell: "A Binding Spell",
    title: "Unlimited Era",
    body: "The Unlimited Wash Club launches with license plate recognition — no app, no scan, no friction.",
  },
  {
    year: "2023",
    spell: "The Crown Jewel",
    title: "Graphene Crown",
    body: "The King's Graphene package debuts — a true graphene ceramic coating, applied automatically inside the tunnel.",
  },
  {
    year: "Today",
    spell: "The Legend Continues",
    title: "Three Tunnels, One Club",
    body: "Three locations, one unlimited club, infinite shine. The magic keeps growing.",
  },
];

export default function OurHistoryPage() {
  return (
    <>
      <section className="bg-background pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">

          {/* Page header */}
          <div className="text-center mb-14 lg:mb-20">
            <p className="font-script text-magic text-sm uppercase tracking-[0.35em] mb-3">
              Thirty Years of Magic
            </p>
            <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-primary leading-[0.95]">
              The wizard&apos;s <span className="text-accent">chronicle</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-foreground/65 max-w-md mx-auto leading-relaxed">
              Every great wizard has a story. Ours starts with a muddy car and a dream.
            </p>
          </div>

          {/* Chronicle entries */}
          <div className="flex flex-col gap-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative">
                {/* Connector line between cards */}
                {i < milestones.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full h-6 w-px bg-magic/25 z-10" />
                )}

                <div className="relative rounded-[1.25rem]bg-white border-[4px] border-double border-magic/30 shadow-lg px-7 sm:px-12 py-8">
                  {/* Corner wands */}
                  <Wand className="absolute top-4 left-4 w-3.5 h-3.5 text-accent/40 rotate-[-20deg]" />
                  <Wand className="absolute top-4 right-4 w-3.5 h-3.5 text-accent/40 rotate-[20deg] scale-x-[-1]" />

                  <div className="text-center">
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-5 py-1.5 font-heading font-bold uppercase text-sm tracking-widest mb-3 shadow">
                      <Star className="w-3 h-3 fill-current" />
                      {m.year}
                    </div>

                    {/* Spell label */}
                    <p className="font-script text-magic text-xs sm:text-sm uppercase tracking-[0.3em] mb-2">
                      {m.spell}
                    </p>

                    {/* Title */}
                    <h2 className="font-heading font-bold uppercase text-2xl sm:text-3xl text-primary leading-[0.95] mb-4">
                      {m.title}
                    </h2>

                    {/* Body */}
                    <p className="text-base text-foreground/70 leading-relaxed max-w-lg mx-auto">
                      {m.body}
                    </p>
                  </div>
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