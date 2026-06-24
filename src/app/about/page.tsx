import SubscribeBanner from "@/components/SubscribeBanner";
import Image from "next/image";
import { Wand } from "lucide-react";

export const metadata = {
  title: "About | Wash Wizard Car Wash",
  description:
    "Greetings, fellow seekers of car-wash magic. The mission, values, and craft behind Charleston's friendliest tunnel wash.",
};

const values = [
  { name: "Speed", body: "Delivering the cleanest car in the shortest possible time." },
  { name: "Professionalism", body: "Providing customer-centric attention with polish and courteous service." },
  { name: "Responsiveness", body: "Listening to the needs and feedback of every Wizard customer." },
  { name: "Innovation", body: "Pairing new technologies with timeless processes that raise the bar." },
  { name: "Integrity", body: "Maintaining honesty and clarity through every stage of the operation." },
  { name: "Teamwork", body: "Each of us succeeds individually when we do it as a team without success." },
  { name: "Accountability", body: "Taking ownership of problems and accepting responsibility." },
  { name: "Respect", body: "Honoring diversity and valuing differences of opinion." },
  { name: "Attitude", body: "Showing leadership through positive approach to every task — a can-do spirit." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-background pt-32 lg:pt-40 pb-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95] mb-6">
                Wash Wizard — <span className="text-accent">our mission</span>
              </h2>
              <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
                <p>
                  Greetings, fellow seekers of car-wash magic. I am the Wash
                  Wizard and I am pleased to share with you our mission.
                </p>
                <p>
                  To fulfill the self-service car-wash needs of our customers
                  and exceed their expectations for service, quality, and value.
                  Our mission is not just to meet your needs but to surpass
                  them with the power of our magical service.
                </p>
                <p>
                  We aim to earn your loyalty by delivering more than promised,
                  by demonstrating honesty and fairness, and by listening to
                  your feedback. We know that your satisfaction is the key to
                  our success, and we strive to develop systems and incorporate
                  equipment that meets or exceeds the industry standard for
                  quality and performance.
                </p>
                <p>
                  Our ultimate goal is to be the best at satisfying our
                  customers and maintaining our employees. We believe that the
                  magic of our service comes from the passion and dedication of
                  our team — who work tirelessly to provide you with the best
                  car-wash experience possible.
                </p>
                <p>
                  So come, my fellow car enthusiasts, and experience the magic
                  of the Wash Wizard. We promise to exceed your expectations
                  and provide you with a car-wash experience that will leave
                  you truly enchanted.
                </p>
                <p className="font-heading uppercase text-primary text-lg tracking-wide">
                  — The Wash Wizard
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-wizard-night ring-1 ring-white/10 shadow-2xl">
                <Image
                  src="/images/navy-bubble-bg.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-60 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-deep/85" />
                <Image
                  src="/images/wizard-mascot.png"
                  alt="The Wash Wizard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-8 z-10 drop-shadow-2xl"
                />
                <Wand className="absolute top-8 right-8 w-7 h-7 text-accent animate-sparkle z-20" />
                <Wand className="absolute bottom-12 left-10 w-5 h-5 text-secondary animate-sparkle z-20" style={{ animationDelay: "0.6s" }}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company values */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center mb-10 lg:mb-14">
            <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
              Wash Wizard <span className="text-accent">company values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.name}
                className="p-6 rounded-2xl bg-white border border-border hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading font-bold uppercase text-lg text-primary tracking-widest mb-2 flex items-center gap-2">
                  <Wand className="w-4 h-4 text-accent" />
                  {v.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}