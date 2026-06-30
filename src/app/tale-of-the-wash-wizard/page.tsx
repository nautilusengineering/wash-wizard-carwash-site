import { BookOpen, MapPin } from "lucide-react";
import Image from "next/image";
import SubscribeBanner from "@/components/SubscribeBanner";

export const metadata = {
  title: "Tale of the Wash Wizard | Wash Wizard Car Wash",
  description:
    "The Tale of the Wash Wizard — a FREE children's book available in our vending area. Join the Wash Wizard on a magical adventure!",
};

export default function TalePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-32 lg:pt-40 pb-16 lg:pb-20">
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
                  FREE Book — Available In Our Vending Area
                </p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                <p className="text-base text-foreground/75 leading-relaxed">
                  Join the Wash Wizard on a magical adventure where he makes new friends, battles silly slime monsters, helps a grumpy witch turn good, and discovers the sparkly secret that leads to the world's very first enchanted car wash!
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
                alt="Copies of The Tale of the Wash Wizard"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-white text-center mb-10">
            A Glimpse of the <span className="text-accent">Wizard's Tale</span>
          </h2>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: "56.25%" }}>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/wizard-book-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <div className="bg-background py-10 lg:py-14" />
      <SubscribeBanner />
    </>
  );
}
