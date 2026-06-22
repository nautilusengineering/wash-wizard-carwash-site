import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wand } from "lucide-react";
import { BUY_ONLINE_URL } from "@/lib/utils";

export default function SubscribeBanner() {
  return (
    <section className="relative bg-background pt-0 pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-accent via-accent to-[hsl(40_100%_45%)] text-accent-foreground shadow-2xl">
          {/* Decorative sparkles */}
          <Wand className="absolute top-6 left-8 w-7 h-7 text-deep/30 animate-sparkle" />
          <Wand className="absolute bottom-10 right-1/2 w-5 h-5 text-deep/30 animate-sparkle" style={{ animationDelay: "0.6s" }}/>
          <Wand className="absolute top-12 right-1/3 w-4 h-4 text-deep/30 animate-sparkle" style={{ animationDelay: "1.2s" }}/>

          <div className="absolute -bottom-10 -right-6 w-72 lg:w-96 opacity-90 pointer-events-none">
            <Image
              src="/images/duesenberg.png"
              alt=""
              width={400}
              height={260}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-12 lg:py-16 max-w-2xl">
            <p className="font-script text-deep/80 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">
              Ride into Sparkle City
            </p>
            <h2 className="font-heading font-bold uppercase leading-[0.9] text-4xl sm:text-5xl lg:text-6xl mb-5">
              Grab your wand.
              <br />
              Make the magic happen.
            </h2>
            <p className="text-base sm:text-lg mb-7 text-accent-foreground/80 max-w-md">
              Join the Unlimited Wash Club today. Cancel anytime. First wash is on the wizard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/packages">
                <Button variant="primary" size="lg">
                  See Wash Packages
                </Button>
              </Link>
              <a href={BUY_ONLINE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="magic" size="lg">
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
