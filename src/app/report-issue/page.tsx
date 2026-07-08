import {
  Phone,
  AlertTriangle,
  Camera,
  Clock,
  MapPin,
  PenLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF, CONTACT_FORM_URL } from "@/lib/utils";

export const metadata = {
  title: "Report an Issue",
  description:
    "Report an issue with your Wash Wizard visit. We're always striving to improve — your feedback helps us earn your business again and again.",
  alternates: { canonical: "/report-issue" },
};

const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

const steps = [
  {
    icon: Clock,
    title: "When it happened",
    body: "Note the date and approximate time — closer to the minute helps us pull the right camera footage.",
  },
  {
    icon: MapPin,
    title: "Which location",
    body: "North Main, Ladson Road, or Bacons Bridge. If you don't remember, describe the closest cross street.",
  },
  {
    icon: AlertTriangle,
    title: "What went wrong",
    body: "Equipment involved (tunnel, vacuum, vending) and a short description of the issue.",
  },
  {
    icon: Camera,
    title: "Photos, if any",
    body: "A picture that may help us investigate and respond faster.",
  },
];

export default function ReportIssuePage() {
  return (
    <>
      {/* Dark hero */}
      <section
        className="h-screen lg:h-auto lg:min-h-[70vh] pt-20 lg:pt-24 pb-6 lg:pb-8 overflow-hidden text-white relative flex flex-col justify-center"
        style={{ background: PURPLE_DARK }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 10%, rgba(255,184,0,0.18), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 lg:px-6 text-center">
          <p className="font-heading uppercase tracking-[0.32em] text-xs text-accent mb-5">
            Your feedback matters
          </p>
          <h1 className="font-heading font-bold uppercase text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
            Something off? <span className="text-accent">Let us know</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/85 max-w-2xl mx-auto text-pretty">
            We&apos;re always striving to improve the services we offer and
            earn your business again and again. Please help us by sharing what
            happened.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href={CONTACT_FORM_URL}>
                <PenLine className="size-4" />
                Contact Us Form
              </a>
            </Button>
            <Button asChild size="lg">
              <a href={PHONE_HREF}>
                <Phone className="size-4" />
                Callback Requests
                <span className="opacity-80">{PHONE}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What to include */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              What to include
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95]">
              A few <span className="text-accent">quick details</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isDark = i % 2 === 0;
              return (
                <div
                  key={s.title}
                  className={`rounded-2xl p-6 lg:p-7 min-h-[200px] flex flex-col justify-between ${
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
                      {s.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-white/75" : "text-muted-foreground"
                      }`}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="bg-primary/5 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <AlertTriangle className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95] mb-3">
            Urgent? <span className="text-accent">Complete Contact Us Form Now!</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-6">
            All contact us form submissions forward immediately to the
            manager. If you&apos;re still on-site or your vehicle needs
            attention right now, please see the manager before you leave.
          </p>
          <Button asChild size="lg">
            <a href={CONTACT_FORM_URL}>
              <PenLine className="size-4" />
              Contact Us Form
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
