"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Wand } from "lucide-react";
import SubscribeBanner from "@/components/SubscribeBanner";

const chapters = [
  {
    numeral: "I",
    title: "The Filthy Kingdom",
    body:
      "Long ago, the roads of the Lowcountry were ruled by pollen, salt mist, and pluff mud. Knights returned from quests with their carriages caked in dust. The king was distraught. The land needed a hero.",
  },
  {
    numeral: "II",
    title: "The Apprentice's Tunnel",
    body:
      "A young apprentice wizard, weary of scrubbing by hand, raised an enchanted tunnel from the earth. Soft-touch foam, triple-foam polish, and a rainbow of light spilled from its arches. Cars rolled in dirty and out gleaming.",
  },
  {
    numeral: "III",
    title: "The Unlimited Club",
    body:
      "Word spread across the kingdom. Knights demanded a way to return as often as they pleased. The wizard wove a binding spell sealed by license-plate recognition. The Unlimited Wash Club was born.",
  },
  {
    numeral: "IV",
    title: "The Graphene Crown",
    body:
      "To honor the bravest knights, the wizard forged a final spell — a graphene ceramic coating that turned water to glass and made paint shine for weeks. They called it the King's Graphene, crown jewel of the realm.",
  },
  {
    numeral: "V",
    title: "And the Tale Goes On",
    body:
      "To this day, the Wash Wizard guards three tunnels across the Lowcountry. The lights still play, the bug lane still hums, and every car that rolls in dirty rolls out a little more magical than before.",
  },
];

export default function TalePage() {
  const [index, setIndex] = useState(0);
  const chapter = chapters[index];
  const isFirst = index === 0;
  const isLast = index === chapters.length - 1;

  const go = (dir: number) => {
    setIndex((prev) => Math.min(Math.max(prev + dir, 0), chapters.length - 1));
  };

  return (
    <>
      <section className="bg-background pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-2xl px-4 lg:px-6 text-center mb-10 lg:mb-14">
          <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl text-primary leading-[0.95]">
            The tale of the <span className="text-accent">Wash Wizard</span>
          </h1>
        </div>

        {/* The storybook */}
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="relative">
            <div className="absolute inset-x-4 -bottom-3 h-6 bg-primary/15 blur-xl rounded-full" />

            <div className="relative rounded-[1.25rem]bg-white border-[6px] border-double border-magic/30 shadow-2xl px-6 sm:px-14 py-12 sm:py-16">
              <div className="hidden sm:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-px bg-magic/15" />

              <Wand className="absolute top-5 left-5 w-4 h-4 text-accent/50 rotate-[-20deg]" />
              <Wand className="absolute top-5 right-5 w-4 h-4 text-accent/50 rotate-[20deg] scale-x-[-1]" />

              <div
                key={chapter.numeral}
                className="relative text-center animate-in fade-in duration-500"
              >
                <span className="font-script text-magic text-sm uppercase tracking-[0.35em]">
                  Chapter {chapter.numeral}
                </span>
                <h2 className="font-heading font-bold uppercase text-2xl sm:text-4xl text-primary leading-[0.95] mt-3 mb-6">
                  {chapter.title}
                </h2>
                <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-xl mx-auto">
                  {chapter.body}
                </p>

                <p className="mt-8 text-xs sm:text-sm text-muted-foreground/70 font-script tracking-widest">
                  — {index + 1} of {chapters.length} —
                </p>
              </div>
            </div>
          </div>

          {/* Turn-page controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => go(-1)}
              disabled={isFirst}
              aria-label="Previous chapter"
              className="w-11 h-11 rounded-full border-2 border-accent/40 text-accent grid place-items-center hover:bg-accent hover:text-accent-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {chapters.map((c, i) => (
                <button
                  key={c.numeral}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to chapter ${c.numeral}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-2 bg-magic/25 hover:bg-magic/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              disabled={isLast}
              aria-label="Next chapter"
              className="w-11 h-11 rounded-full border-2 border-accent/40 text-accent grid place-items-center hover:bg-accent hover:text-accent-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 lg:py-20 text-center">
        <Image
          src="https://ucarecdn.com/90d2b46c-36b6-40b5-97cf-a064612cd9f9/knight.png"
          alt=""
          width={160}
          height={230}
          className="mx-auto"
        />
        <p className="mt-5 font-script text-magic text-base uppercase tracking-[0.3em]">
          Roll out cleaner. Roll out magical.
        </p>
      </section>

      <SubscribeBanner />
    </>
  );
}