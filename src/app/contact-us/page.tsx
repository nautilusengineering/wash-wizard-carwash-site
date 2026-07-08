import Link from "next/link";
import { Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@/lib/utils";
import ContactNautilusForm from "./nautilus-form";

export const metadata = {
  title: "Contact Us",
  description:
    "Have a question or need assistance? Call Wash Wizard at 1-843-900-3234 or visit one of our three Charleston-area locations.",
  alternates: { canonical: "/contact-us" },
};

const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

const locations = [
  {
    name: "North Main",
    address: "2146 N Main St.",
    city: "Summerville, SC 29486",
    mapQuery: "2146 N Main St, Summerville, SC 29486",
  },
  {
    name: "Ladson Road",
    address: "3910 Ladson Rd",
    city: "Ladson, SC 29456",
    mapQuery: "3910 Ladson Rd, Ladson, SC 29456",
  },
  {
    name: "Bacons Bridge",
    address: "999 Bacons Bridge Rd",
    city: "Summerville, SC 29485",
    mapQuery: "999 Bacons Bridge Rd, Summerville, SC 29485",
  },
];

export default function ContactUsPage() {
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
              "radial-gradient(circle at 80% 10%, rgba(255,184,0,0.18), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 lg:px-6 text-center">
          <p className="font-heading uppercase tracking-[0.32em] text-xs text-accent mb-5">
            We&apos;re here to help
          </p>
          <h1 className="font-heading font-bold uppercase text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
            Have a question? <span className="text-accent">Ask the wizard.</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/85 max-w-2xl mx-auto text-pretty">
            We&apos;re always striving to improve our service and earn your
            business again and again. Call us, send a message below, or drop by
            any of our three locations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href={PHONE_HREF}>
                <Phone className="size-4" />
                Call {PHONE}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact-form">
                Send a Message
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="bg-primary/5 py-16 lg:py-24 scroll-mt-24"
      >
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-10">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              Contact Us
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95] mb-3">
              Send the wizard <span className="text-accent">a message.</span>
            </h2>
            <p className="text-lg lg:text-xl text-foreground/80 max-w-xl mx-auto">
              Share your contact info, visit details, vehicle description, and
              any photos that help our team look into it.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm overflow-hidden">
            <ContactNautilusForm />
          </div>
        </div>
      </section>

      {/* Locations grid */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              Three Lowcountry locations
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95]">
              Come <span className="text-accent">say hi.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {locations.map((l) => (
              <div
                key={l.name}
                className="rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6 lg:p-7 flex flex-col"
              >
                <div className="flex items-center gap-2 text-accent mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="font-heading uppercase tracking-widest text-[0.7rem]">
                    Location
                  </span>
                </div>
                <h3 className="font-heading font-bold uppercase text-2xl text-primary leading-tight mb-2">
                  {l.name}
                </h3>
                <p className="text-base text-foreground leading-relaxed mb-5">
                  {l.address}
                  <br />
                  {l.city}
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    l.mapQuery,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button variant="outlineDark" size="default" className="w-full">
                    Get Directions
                    <ArrowRight className="size-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alt contact block */}
      <section className="bg-primary/5 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <MessageSquare className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95] mb-3">
            Need something <span className="text-accent">more specific?</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-6">
            For membership changes, cancellations, or account questions, visit
            our Manage My Membership portal — no calls, no hold music.
          </p>
          <Button asChild size="lg">
            <Link href="/faq">
              See the FAQ
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
