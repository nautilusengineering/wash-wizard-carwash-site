import {
  Clock,
  DollarSign,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EmploymentNautilusForm from "./nautilus-form";

export const metadata = {
  title: "Employment",
  description:
    "Join the Wash Wizard team. Flexible hours, competitive pay, and a fun, family-friendly tunnel-wash environment in Summerville and Ladson, SC.",
  alternates: { canonical: "/employment" },
};

const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

const perks = [
  { icon: DollarSign, title: "Competitive Pay", body: "Hourly base + tips + bonuses." },
  { icon: Clock, title: "Flexible Hours", body: "Mornings, evenings, weekends." },
  { icon: Users, title: "Great Team", body: "Family-owned. Friendly crews." },
  { icon: Heart, title: "Free Washes", body: "Yes, you can keep your car spotless too." },
];

export default function EmploymentPage() {
  return (
    <>
      {/* Dark editorial hero with employee testimonial */}
      <section
        className="h-screen lg:h-auto lg:min-h-[70vh] pt-20 lg:pt-24 pb-6 lg:pb-8 overflow-hidden text-white relative flex flex-col justify-center"
        style={{ background: PURPLE_DARK }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle at 80% 10%, rgba(255,184,0,0.18), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 lg:px-6 text-center">
          <p className="font-heading uppercase tracking-[0.32em] text-xs text-accent mb-5">
            Now Hiring · Summerville &amp; Ladson
          </p>
          <h1 className="font-heading font-bold uppercase text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-8">
            We&apos;re hiring <span className="text-accent">wizards.</span>
          </h1>
          <blockquote
            className="mt-6 text-xl sm:text-2xl text-white/85 max-w-2xl mx-auto italic leading-relaxed"
            style={{ fontFamily: "var(--font-script), serif" }}
          >
            &ldquo;Best job I&apos;ve had. Family vibe, real hours, and I go
            home with a clean car every day.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-heading uppercase tracking-widest text-accent">
            — Jamie, Loader · Summerville
          </p>
          <div className="mt-10">
            <a href="#apply">
              <Button size="lg">
                Apply Now
                <ArrowRight className="size-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Bento perks — alternating dark/light */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              Why join the crew
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95]">
              Perks with <span className="text-accent">real weight.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p, i) => {
              const Icon = p.icon;
              const isDark = i % 2 === 0;
              return (
                <div
                  key={p.title}
                  className={`rounded-2xl p-6 lg:p-7 min-h-[180px] flex flex-col justify-between ${
                    isDark
                      ? "text-white"
                      : "bg-primary/5 text-primary border border-accent/20"
                  }`}
                  style={isDark ? { background: PURPLE_DARK } : undefined}
                >
                  <Icon
                    className={`w-8 h-8 mb-4 ${
                      isDark ? "text-accent" : "text-magic"
                    }`}
                  />
                  <div>
                    <h3
                      className={`font-card font-bold uppercase text-lg mb-1 leading-tight ${
                        isDark ? "text-white" : "text-primary"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-white/75" : "text-muted-foreground"
                      }`}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application form — embedded Nautilus form, full height */}
      <section
        id="apply"
        className="bg-primary/5 py-16 lg:py-24 scroll-mt-24"
      >
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-10">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              Apply today
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95] mb-3">
              Send us your <span className="text-accent">details.</span>
            </h2>
            <p className="text-lg lg:text-xl text-foreground/80 max-w-xl mx-auto">
              Pick the location closest to you, tell us the hours you prefer,
              and upload your resume. A store manager will follow up directly.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm overflow-hidden">
            <EmploymentNautilusForm />
          </div>
        </div>
      </section>
    </>
  );
}
