import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, MessageSquareText, Car } from "lucide-react";
import FreeWashNautilusForm from "./nautilus-form";

// Campaign landing page for paid social / QR placements. Intentionally not in
// the header, footer, or sitemap, and kept out of search results.
export const metadata: Metadata = {
  title: "Free King Graphene Wash for New Customers",
  description:
    "New to Wash Wizard? If your license plate has never been recorded at a Wash Wizard facility, claim a FREE King Graphene single use wash, a $30 value.",
  alternates: { canonical: "/free-wash" },
  robots: { index: false, follow: false },
};

const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

const steps = [
  {
    icon: ClipboardList,
    title: "Sign up with your plate",
    body: "Tell us who you are and enter your license plate number.",
  },
  {
    icon: MessageSquareText,
    title: "We check and text you",
    body: "Once we check your license plate in our system, we\u2019ll text your confirmation.",
  },
  {
    icon: Car,
    title: "Just roll up",
    body: "Your King Graphene wash is linked to your plate. Our license plate cameras recognize your vehicle at the payment kiosk.",
  },
];

export default function FreeWashPage() {
  return (
    <>
      {/* Dark hero + form */}
      <section
        className="relative overflow-hidden text-white pt-24 lg:pt-28 pb-14 lg:pb-20"
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
            Exclusive offer for new customers
          </p>
          <h1 className="font-heading font-bold uppercase text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
            Your first King Graphene <span className="text-accent">is free</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/85 max-w-2xl mx-auto text-pretty">
            If the vehicle&rsquo;s license plate has never been recorded via our
            License Plate Recognition cameras at a Wash Wizard facility,
            you&rsquo;re eligible for a FREE King Graphene single use wash. A
            $30 value, for free.
          </p>
        </div>

        {/* Form card */}
        <div className="relative mx-auto max-w-3xl px-4 lg:px-6 mt-10 lg:mt-12">
          <div className="bg-white rounded-2xl p-3 sm:p-5 shadow-xl overflow-hidden text-foreground">
            <FreeWashNautilusForm />
          </div>
        </div>
      </section>

      {/* Instant Magic, Automatically Applied */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="text-center mb-10 lg:mb-14">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              No codes, no hassle
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95] mb-5">
              Instant magic, <span className="text-accent">automatically applied</span>
            </h2>
            <p className="text-base lg:text-lg text-foreground/80 max-w-2xl mx-auto text-pretty">
              Once we check your license plate in our system, we&rsquo;ll text
              your confirmation and conjure up your King Graphene wash and link
              it directly to your vehicle license plate number. No codes, no
              hassle, just pure magic and graphene shine.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-3 list-none m-0 p-0">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6 lg:p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary text-white font-heading font-bold">
                    {i + 1}
                  </span>
                  <step.icon className="size-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-card font-bold uppercase text-primary leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fine print */}
      <section className="bg-background pb-14 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Limit: One offer per license plate number. Offer not valid with any
            other coupons or discounts. Offer expires 30 days from issue. See
            our{" "}
            <a
              href="/documents/wash-wizard-privacy-policy.pdf"
              className="underline underline-offset-2 hover:text-primary"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <Link
              href="/disclaimer"
              className="underline underline-offset-2 hover:text-primary"
            >
              Disclaimer Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
