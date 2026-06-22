import Image from "next/image";
import { Wand } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  showMascot?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  showMascot = true,
}: PageHeroProps) {
  return (
    <section className="relative pt-24 lg:pt-28 pb-10 lg:pb-14 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="relative rounded-[2rem] overflow-hidden bg-wizard-night text-white shadow-xl ring-1 ring-white/10">
          <Image
            src="/images/navy-bubble-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-45 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-magic/30 to-deep/85" />

          {showMascot && (
            <div className="absolute -bottom-4 right-4 sm:right-10 w-32 sm:w-40 lg:w-56 z-10 pointer-events-none animate-float-slow">
              <Image
                src="/images/wizard-mascot.png"
                alt=""
                width={300}
                height={460}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          )}

          <div className="absolute top-8 left-12 text-accent/60 animate-sparkle">
            <Wand className="w-6 h-6" />
          </div>
          <div className="absolute top-20 right-1/3 text-white/30 animate-sparkle" style={{ animationDelay: "0.6s" }}>
            <Wand className="w-4 h-4" />
          </div>

          <div className="relative z-20 px-6 sm:px-10 lg:px-14 py-14 lg:py-20 min-h-[280px] flex flex-col justify-end">
            {eyebrow && (
              <p className="font-script text-accent text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 animate-fade-up">
                {eyebrow}
              </p>
            )}
            <h1 className="font-heading font-bold uppercase leading-[0.95] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-3xl animate-fade-up-delay-1">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl animate-fade-up-delay-2">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
