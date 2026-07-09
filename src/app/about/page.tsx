import Image from "next/image";
import { MapPin, Users, Wrench } from "lucide-react";

export const metadata = {
  title: "About | Wash Wizard Car Wash",
  description:
    "Greetings, fellow seekers of car-wash magic. The mission, values, and craft behind Summerville's friendliest tunnel wash.",
};

const values = [
  { name: "Speed", body: "Delivering the cleanest car in the shortest possible time" },
  { name: "Professionalism", body: "Providing our customers with polite & courteous service" },
  { name: "Responsiveness", body: "Listening to the needs and feedback of our customers" },
  { name: "Innovation", body: "Incorporating new technologies and processes that add value to our services" },
  { name: "Integrity", body: "Maintaining the highest level of integrity and honesty throughout all aspects of our business" },
  { name: "Teamwork", body: "Each of us succeeds individually when we as a team achieve success" },
  { name: "Accountability", body: "Taking ownership of problems and accepting personal responsibility" },
  { name: "Respect", body: "Respecting diversity and valuing difference of opinion" },
  {
    name: "Attitude",
    body: "Demonstrating individual leadership through a positive approach to every task, a “can-do” spirit, and a restless determination to continually improve",
  },
];

const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

export default function AboutPage() {
  return (
    <>
      {/* Hero pull-quote */}
      <section
        className="relative overflow-hidden text-white h-screen lg:h-auto lg:min-h-[70vh] pt-24 lg:pt-28 pb-6 lg:pb-8 flex flex-col justify-center"
        style={{ background: PURPLE_DARK }}
      >
        <div className="hidden md:block absolute -bottom-6 right-6 lg:right-16 w-56 lg:w-72 opacity-30 pointer-events-none">
          <Image
            src="https://ucarecdn.com/43922423-7fb1-4544-a761-23782edcdae2/wizard-mascot.png"
            alt=""
            width={400}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-6">
            Our Mission — In One Sentence
          </p>
          <blockquote
            className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] italic mb-8 text-balance"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            &ldquo;Come, fellow car enthusiasts, and experience the magic — we
            promise to leave you truly enchanted.&rdquo;
          </blockquote>
          <div className="inline-flex items-center gap-3">
            <div className="w-10 h-px bg-accent/60" />
            <span className="font-heading uppercase tracking-widest text-sm text-accent">
              The Wash Wizard
            </span>
            <div className="w-10 h-px bg-accent/60" />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-background border-y border-border py-8 lg:py-10">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="grid grid-cols-3 gap-4 divide-x divide-border">
            {[
              { icon: MapPin, label: "Locations", value: "3" },
              { icon: Users, label: "Family Owned", value: "Since Day One" },
              { icon: Wrench, label: "Tunnel Length", value: "180 ft" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center px-4"
                >
                  <Icon className="w-5 h-5 text-accent mb-2" />
                  <div className="font-heading font-bold uppercase text-xl sm:text-2xl text-primary leading-tight">
                    {s.value}
                  </div>
                  <div className="font-heading uppercase tracking-widest text-[0.7rem] text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company values */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mx-auto mb-10 lg:mb-14 max-w-3xl text-center">
            <p className="font-heading uppercase tracking-[0.22em] text-xs text-accent mb-3">
              What we live by
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl sm:text-5xl text-primary leading-[0.95]">
              Wash Wizard <span className="text-accent">company values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/45 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary" />
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-accent shadow-md transition-colors group-hover:bg-accent group-hover:text-primary">
                      <span className="font-heading font-bold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-card font-bold uppercase text-xl leading-tight text-primary mb-2">
                      {value.name}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-foreground/75">
                      {value.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
