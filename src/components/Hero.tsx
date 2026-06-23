import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wand, MapPin, Crown, ArrowRight } from "lucide-react";

const driveAllAddr = encodeURIComponent("Wash Wizard Car Wash, Summerville, SC");
const EYEBROW_TEXT =
  "Which of the Philosopher's Stone tasks would you most like to face?";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white min-h-[680px] lg:min-h-[82vh] pt-20 lg:pt-24 pb-12">
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[40%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, hsla(45 100% 65% / 0.35) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -right-32 w-[40rem] h-[30rem] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsla(263 70% 60% / 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start min-h-[58vh]">
        <div
          className="lg:col-span-7 lg:order-1 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <div
            className="relative max-w-xl mx-auto lg:mx-0 rounded-[2.25rem] p-8 lg:p-10 xl:p-12 bg-white shadow-[0_30px_80px_-25px_rgba(31,38,76,0.25)]"
            style={{
              border: "3px solid transparent",
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(135deg, hsl(48 100% 70%), hsl(45 100% 55%), hsl(38 80% 45%))",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -top-4 left-1/2 -translate-x-1/2 size-9 rounded-full grid place-items-center ring-4 ring-white shadow-md"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, hsl(48 100% 75%) 0%, hsl(45 100% 55%) 60%, hsl(38 85% 30%) 100%)",
              }}
            >
              <Crown className="w-4 h-4 text-accent-foreground" />
            </div>
            <div
              aria-hidden="true"
              className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-accent/55 rounded-tl-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-accent/55 rounded-tr-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-accent/55 rounded-bl-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-accent/55 rounded-br-2xl"
            />

            <p className="font-serif font-bold text-magic text-base sm:text-lg leading-snug mb-5 text-balance">
              {EYEBROW_TEXT}
            </p>
            <h1 className="font-heading uppercase tracking-tight leading-[0.95] text-5xl lg:text-6xl xl:text-7xl text-primary text-balance">
              We love <span className="text-accent">clean cars.</span>
            </h1>

            <div className="my-5 flex items-center gap-3 max-w-xs">
              <div className="flex-1 h-px bg-accent/55" />
              <Wand className="w-4 h-4 text-accent" />
              <div className="flex-1 h-px bg-accent/55" />
            </div>

            <p className="text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed text-pretty">
              Sparkling clean, lightning fast, and a little bit magical. Three
              Lowcountry locations.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${driveAllAddr}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  <MapPin className="w-4 h-4" /> Get Directions
                </Button>
              </a>
              <Link href="/packages">
                <Button variant="outlineDark" size="lg" className="w-full sm:w-auto">
                  See Packages <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="lg:col-span-5 lg:order-2 relative flex justify-center animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center pointer-events-none"
          >
            <div
              className="w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, hsla(45 100% 60% / 0.45) 0%, transparent 70%)",
              }}
            />
          </div>
          <div className="relative w-[16rem] sm:w-[20rem] md:w-[24rem]">
            <Image
              src="/images/wizard-mascot.png"
              alt="Wash Wizard mascot"
              width={900}
              height={1350}
              priority
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
