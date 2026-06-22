import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wand, MapPin } from "lucide-react";

const driveAllAddr = encodeURIComponent("Wash Wizard Car Wash, Summerville, SC");

export default function Hero() {
  return (
    <section className="relative pt-20 lg:pt-24 pb-12 lg:pb-16 bg-background overflow-hidden">
      {/* Decorative stars in the soft cream margin */}
      <div className="hidden lg:block absolute top-32 left-10 text-accent/50">
        <Wand className="w-6 h-6" />
      </div>
      <div className="hidden lg:block absolute top-44 right-16 text-secondary/40 animate-twinkle" style={{ animationDelay: "0.8s" }}>
        <Wand className="w-8 h-8" />
      </div>
      <div className="hidden lg:block absolute bottom-20 left-32 text-magic/40 animate-twinkle" style={{ animationDelay: "1.6s" }}>
        <Wand className="w-5 h-5" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Inset wizard-night card */}
        <div className="relative rounded-[2rem] overflow-hidden bg-wizard-night text-white shadow-2xl ring-1 ring-white/10">
          {/* Magic background images */}
          <Image
            src="/images/navy-bubble-bg.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover opacity-50 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-magic/40 to-deep/90" />

          {/* Floating wizard mascot — right side, bleeds past edge */}
          <div className="absolute -bottom-4 right-2 sm:right-6 lg:right-10 w-44 sm:w-56 md:w-72 lg:w-[420px] z-10 pointer-events-none animate-float-slow">
            <Image
              src="/images/wizard-mascot.png"
              alt="Wash Wizard mascot"
              width={520}
              height={780}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Floating sparkles inside the card */}
          <div className="absolute top-10 left-12 text-accent/80 animate-sparkle">
            <Wand className="w-7 h-7" />
          </div>
          <div className="absolute top-24 right-1/3 text-white/60 animate-sparkle" style={{ animationDelay: "0.6s" }}>
            <Wand className="w-5 h-5" />
          </div>
          <div className="absolute bottom-32 left-1/3 text-secondary/70 animate-sparkle" style={{ animationDelay: "1.2s" }}>
            <Wand className="w-6 h-6" />
          </div>

          {/* Content — anchored bottom-left */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 min-h-[560px] lg:min-h-[640px]">
            <div className="lg:col-span-7 flex flex-col justify-end px-6 sm:px-10 lg:px-14 pt-16 pb-12 lg:pt-24 lg:pb-16">
              <p className="font-script text-accent text-sm sm:text-base uppercase tracking-[0.3em] mb-3 animate-fade-up">
                Charleston&apos;s Magical Car Wash
              </p>
              <h1 className="font-heading font-bold uppercase leading-[0.85] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-5 animate-fade-up-delay-1">
                We love
                <br />
                <span className="text-accent">clean cars.</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-xl mb-8 leading-relaxed animate-fade-up-delay-2">
                Sparkling clean, lightning fast, and a little bit magical. Pull
                through the 180-foot wizard tunnel at any of our three
                Lowcountry locations and roll out gleaming.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up-delay-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${driveAllAddr}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    <MapPin className="w-4 h-4" /> Get Directions
                  </Button>
                </a>
                <Link href="/packages" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    See Wash Packages
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-5" />
          </div>

          {/* Bottom ribbon — magical motto */}
          <div className="relative z-20 border-t border-white/10 bg-deep/40 backdrop-blur-sm">
            <div className="px-6 sm:px-10 lg:px-14 py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-heading uppercase tracking-widest">
              <span className="text-accent">★ Unlimited Wash Club from $20/mo</span>
              <span className="text-white/70 hidden sm:block">★ Free DIY Vacuums With Every Wash</span>
              <span className="text-white/70">★ Open 7 Days a Week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
