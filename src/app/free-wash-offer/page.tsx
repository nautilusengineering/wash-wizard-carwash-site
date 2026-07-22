import { BadgeCheck, CarFront, Clock3, Sparkles } from "lucide-react";

import PageHero from "@/components/PageHero";
import FreeWashOfferForm from "./nautilus-form";

export const metadata = {
  title: "Free Wash Offer | Wash Wizard Car Wash",
  description:
    "New to Wash Wizard? Submit your license plate to request a complimentary $30 King Graphene wash, subject to eligibility review.",
  alternates: { canonical: "/free-wash-offer" },
};

const steps = [
  {
    icon: CarFront,
    title: "Share your plate",
    body: "Complete the form with your contact information and vehicle license plate.",
  },
  {
    icon: BadgeCheck,
    title: "We check eligibility",
    body: "This offer is for new customers whose vehicle has not previously visited a Wash Wizard location.",
  },
  {
    icon: Sparkles,
    title: "Get your wash",
    body: "Once approved, Wash Wizard will confirm how to redeem your complimentary King Graphene wash.",
  },
];

export default function FreeWashOfferPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Your first wash is <span className="text-accent">on the wizard.</span>
          </>
        }
        subtitle="New customers can request a complimentary $30 King Graphene wash. Submit your plate below and we'll review it for eligibility."
        centered
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center mb-10 lg:mb-12">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              A little first-visit magic
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl lg:text-5xl text-primary leading-[0.95]">
              Three easy <span className="text-accent">steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl bg-primary/5 border border-primary/10 p-6 lg:p-8"
              >
                <div className="size-12 rounded-xl bg-primary text-accent grid place-items-center mb-5">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold uppercase text-xl text-primary mb-2">
                  {title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="claim-offer" className="bg-primary/5 py-16 lg:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="text-center mb-8">
            <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
              New customers only
            </p>
            <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95] mb-4">
              Request your <span className="text-accent">free wash</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Submit one request per license plate. Eligibility and redemption are confirmed after review; submitting the form does not guarantee the offer.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
            <FreeWashOfferForm />
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-foreground/80">
            <Clock3 className="size-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
            <p>
              Limit one offer per license plate. Offer is for new customers only and cannot be combined with other coupons or discounts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
