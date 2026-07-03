import { BookOpen, MapPin } from "lucide-react";
import Image from "next/image";
import SubscribeBanner from "@/components/SubscribeBanner";

export const metadata = {
  title: "Tale of the Wash Wizard | Wash Wizard Car Wash",
  description:
    "The Tale of the Wash Wizard — a FREE children's book. Grab a copy for your family at any of our locations!",
};

export default function TalePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background h-screen pt-20 lg:pt-24 pb-6 lg:pb-8 flex flex-col justify-center overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
                A Magical Story for Little Ones
              </p>
              <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl text-primary leading-[0.95] mb-6">
                The Tale of the{" "}
                <span className="text-accent">Wash Wizard</span>
              </h1>
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <p className="text-sm font-heading font-bold uppercase tracking-widest text-accent">
                  FREE Book — Grab A Copy At Any Location
                </p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                <p className="text-base text-foreground/75 leading-relaxed">
                  We printed a children&apos;s picture book starring the Wash
                  Wizard himself. Bring the kids in on your next visit — copies
                  are stocked in our vending area, free for families to take
                  home.
                </p>
              </div>
              <p className="mt-4 text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground pl-8">
                Suitable for children 2–8 years of age
              </p>
            </div>

            {/* Books photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/book-spread.jpg"
                alt="Copies of The Tale of the Wash Wizard children's book"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
