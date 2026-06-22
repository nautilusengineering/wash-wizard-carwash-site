import PageHero from "@/components/PageHero";
import SubscribeBanner from "@/components/SubscribeBanner";
import Image from "next/image";
import { Wand } from "lucide-react";

export const metadata = {
  title: "Tale of the Wash Wizard | A Legend Told",
  description:
    "Once upon a time in the Lowcountry, when cars were filthy and patience was thin... the tale of the Wash Wizard begins.",
};

const chapters = [
  {
    title: "Chapter I — The Filthy Kingdom",
    body:
      "Long ago, the roads of the Lowcountry were ruled by pollen, salt mist, and pluff mud. Knights returned from quests with their carriages caked in dust. The king was distraught. The land needed a hero.",
  },
  {
    title: "Chapter II — The Apprentice's Tunnel",
    body:
      "A young apprentice wizard, weary of scrubbing by hand, raised an enchanted tunnel from the earth. Soft-touch foam, triple-foam polish, and a rainbow of LED light spilled from its arches. Cars rolled in dirty and out gleaming.",
  },
  {
    title: "Chapter III — The Unlimited Club",
    body:
      "Word spread across the kingdom. Knights demanded an unlimited spell — a way to return as often as they pleased. The wizard wove a binding contract sealed by license-plate recognition. The Unlimited Wash Club was born.",
  },
  {
    title: "Chapter IV — The Graphene Crown",
    body:
      "To honor the bravest knights, the wizard forged a final spell — a graphene ceramic coating that turned water to glass and made paint shine for weeks. They called it the King's Graphene. The crown jewel of the kingdom.",
  },
  {
    title: "Chapter V — And the Tale Goes On",
    body:
      "To this day, the Wash Wizard guards three tunnels across the Lowcountry. The light show plays. The bug lane hums. And every car that rolls in dirty rolls out a little more magical than before.",
  },
];

export default function TalePage() {
  return (
    <>
      <PageHero
        eyebrow="A Legend Told"
        title="The tale of the Wash Wizard"
        subtitle="Once upon a time, in a kingdom of dusty rides and weary knights..."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 space-y-10">
          {chapters.map((c, i) => (
            <div
              key={c.title}
              className="relative p-6 sm:p-8 rounded-2xl bg-wizard-cream border border-border"
            >
              <Wand
                className="absolute top-4 right-4 w-5 h-5 text-accent animate-sparkle"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              <h2 className="font-script text-magic text-base sm:text-lg uppercase tracking-[0.3em] mb-2">
                {c.title.split(" — ")[0]}
              </h2>
              <h3 className="font-heading font-bold uppercase text-2xl sm:text-3xl text-primary leading-[0.95] mb-4">
                {c.title.split(" — ")[1]}
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}

          <div className="text-center pt-4">
            <Image
              src="/images/knight.png"
              alt=""
              width={180}
              height={260}
              className="mx-auto"
            />
            <p className="mt-4 font-script text-magic text-base uppercase tracking-[0.3em]">
              Roll out cleaner. Roll out magical.
            </p>
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
