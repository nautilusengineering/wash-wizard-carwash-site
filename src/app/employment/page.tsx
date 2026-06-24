import { Button } from "@/components/ui/button";
import { Wand, Clock, DollarSign, Users, Heart } from "lucide-react";
import { PHONE_HREF } from "@/lib/utils";

export const metadata = {
  title: "Employment | Wash Wizard Car Wash",
  description:
    "Join the Wash Wizard team. Flexible hours, competitive pay, and a fun, family-friendly tunnel-wash environment in Summerville and Ladson, SC.",
};

const perks = [
  { icon: DollarSign, title: "Competitive Pay", body: "Hourly base + tips + bonuses." },
  { icon: Clock, title: "Flexible Hours", body: "Mornings, evenings, weekends." },
  { icon: Users, title: "Great Team", body: "Family-owned. Friendly crews." },
  { icon: Heart, title: "Free Washes", body: "Yes, you can keep your car spotless too." },
];

const roles = [
  {
    title: "Lead Attendant",
    location: "All Locations",
    type: "Full-time / Part-time",
    body: "Greet customers, run the paystation lanes, and make sure every car rolls out happy.",
  },
  {
    title: "Tunnel Technician",
    location: "All Locations",
    type: "Full-time",
    body: "Keep the wizard's tunnel running. Daily checks on chemistry, blowers, and arches.",
  },
  {
    title: "Site Manager",
    location: "North Main / Ladson Road",
    type: "Full-time, Salaried",
    body: "Run a single location — staff, operations, customer experience. Experience required.",
  },
];

export default function EmploymentPage() {
  return (
    <>
      {/* Title */}
      <section className="bg-background pt-32 lg:pt-40 pb-10 lg:pb-14">
        <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
            Join Our Team
          </p>
          <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl text-primary leading-[0.95] mb-4">
            We&apos;re hiring <span className="text-accent">wizards.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Friendly crews, flexible hours, and free washes. Come grow with us.
          </p>
        </div>
      </section>

      {/* Perks — spell badges along a dotted path */}
      <section className="bg-background pb-14 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="relative">
            <div
              className="hidden sm:block absolute top-9 left-[12%] right-[12%] h-0 border-t-2 border-dotted border-accent/40"
              aria-hidden="true"
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
              {perks.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div
                      className="relative w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full bg-background border-2 border-dashed border-accent/50 grid place-items-center shadow-sm"
                      style={{ transform: i % 2 === 0 ? "rotate(-4deg)" : "rotate(4deg)" }}
                    >
                      <Icon className="w-7 h-7 text-magic" />
                    </div>
                    <h3 className="font-script text-magic text-sm sm:text-base mt-4">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-[9rem]">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <div className="text-center mb-10">
            <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
              Open Roles
            </p>
            <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
              Find your <span className="text-accent">spot.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {roles.map((r) => (
              <div
                key={r.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="font-heading font-bold uppercase text-xl sm:text-2xl text-primary flex items-center gap-2">
                    <Wand className="w-4 h-4 text-accent" />
                    {r.title}
                  </h3>
                  <div className="flex gap-2 text-xs font-heading font-bold uppercase tracking-widest">
                    <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary">
                      {r.location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-primary">
                      {r.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  {r.body}
                </p>
                <a href={PHONE_HREF}>
                  <Button size="default">Apply Today &rarr;</Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-16 lg:pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="rounded-[2rem] bg-magic text-white p-10 lg:p-16 text-center shadow-2xl">
            <p className="font-script text-accent text-sm uppercase tracking-[0.3em] mb-3">
              Don&apos;t See Your Role?
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl mb-4">
              Send us your resume anyway.
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              We&apos;re always interested in great people who want to be part
              of a fast-growing, family-owned car-wash brand.
            </p>
            <a href={PHONE_HREF}>
              <Button size="lg">Call to Apply</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}