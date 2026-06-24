import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wand } from "lucide-react";
import { BUY_ONLINE_URL } from "@/lib/utils";

export default function SubscribeBanner() {
  return (
    <section className="relative bg-background pt-0 pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div
          className="relative rounded-[2rem] overflow-hidden text-white shadow-2xl"
          style={{
            background:
              "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)",
          }}
        >
          {/* Subtle star field */}
          <Wand className="absolute top-6 left-8 w-6 h-6 text-white/10" />
          <Wand
            className="absolute bottom-10 left-1/2 w-4 h-4 text-accent/20"
            style={{ animationDelay: "0.6s" }}
          />
          <Wand
            className="absolute top-10 right-1/3 w-5 h-5 text-white/10"
            style={{ animationDelay: "1.2s" }}
          />

          {/* Wizard mascot — right side */}
          <div className="absolute -bottom-2 right-4 lg:right-16 w-48 sm:w-64 lg:w-80 pointer-events-none opacity-90">
            <Image
              src="/images/wizard-mascot.png"
              alt=""
              width={400}
              height={600}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Soft glow behind wizard */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-12 lg:py-16 max-w-xl">
            <p className="font-script text-accent text-xs sm:text-sm tracking-wide mb-3">
              Ride into Sparkle City
            </p>
            <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl mb-5 text-balance">
              Grab your wand.
              <br />
              <span className="text-accent">Make the magic</span> happen.
            </h2>
            <p className="text-base sm:text-lg mb-7 text-white/75 max-w-md text-pretty">
              Join the Unlimited Wash Club today. Cancel anytime. First wash is
              on the wizard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/packages">
                <Button size="lg">See Wash Packages</Button>
              </Link>
              <a
                href={BUY_ONLINE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Buy Online
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
