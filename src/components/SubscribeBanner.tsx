import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wand, Crown } from "lucide-react";
import { BUY_ONLINE_URL } from "@/lib/utils";
import OrnamentalEyebrow from "./OrnamentalEyebrow";

export default function SubscribeBanner() {
  return (
    <section className="relative bg-parchment pt-0 pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-accent via-accent to-[hsl(40_100%_45%)] text-accent-foreground shadow-2xl gold-leaf-border">
          {/* Royal proclamation ornaments */}
          <Crown className="absolute top-6 left-8 w-7 h-7 text-deep/40 animate-sparkle" />
          <Wand
            className="absolute bottom-10 right-1/2 w-5 h-5 text-deep/40 animate-sparkle"
            style={{ animationDelay: "0.6s" }}
          />
          <Crown
            className="absolute top-12 right-1/3 w-4 h-4 text-deep/40 animate-sparkle"
            style={{ animationDelay: "1.2s" }}
          />

          {/* Gold-leaf corner ornaments */}
          <div
            aria-hidden="true"
            className="absolute top-3 left-3 w-10 h-10 border-l-2 border-t-2 border-deep/40 rounded-tl-xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute top-3 right-3 w-10 h-10 border-r-2 border-t-2 border-deep/40 rounded-tr-xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-3 w-10 h-10 border-l-2 border-b-2 border-deep/40 rounded-bl-xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-3 right-3 w-10 h-10 border-r-2 border-b-2 border-deep/40 rounded-br-xl pointer-events-none"
          />

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
            <div className="mb-4">
              <OrnamentalEyebrow align="left" tone="purple">
                Ride into Sparkle City
              </OrnamentalEyebrow>
            </div>
            <h2 className="font-heading uppercase leading-[0.9] text-4xl sm:text-5xl lg:text-6xl mb-5">
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
