import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow="Join Our Team"
        title="We're hiring wizards."
        subtitle="Friendly crews, flexible hours, and free washes. Come grow with us."
      />

      {/* Perks */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-5 rounded-2xl bg-wizard-cream border border-border text-center"
                >
                  <Icon className="w-7 h-7 text-magic mx-auto mb-3" />
                  <h3 className="font-heading font-bold uppercase text-sm sm:text-base text-primary mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
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
