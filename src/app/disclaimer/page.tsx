import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Disclaimer | Wash Wizard Car Wash",
  description: "Wash Wizard Car Wash terms, disclaimers, and conditions of entry.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        subtitle="Wash Wizard Car Wash terms and conditions of entry."
        showMascot={false}
      />
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 space-y-6 text-sm sm:text-base text-foreground/80 leading-relaxed">
          <p>
            By entering Wash Wizard Car Wash premises, you acknowledge and
            accept these terms. The customer assumes all risk of damage to
            antennas, mirrors, oversized hardware, after-market accessories,
            loose body parts, vehicles with pre-existing damage, and any item
            not factory-secured.
          </p>
          <p>
            Soft tops, convertible tops, exposed bed loads, and items not
            factory-secured to the vehicle should not be run through the wash.
            Please remove all such items prior to entering the tunnel.
          </p>
          <p>
            We reserve the right to refuse service. Re-wash is available
            on-site if you are not satisfied with the result. Refunds are
            issued at the manager&apos;s discretion.
          </p>
          <p>
            Membership terms: Unlimited Wash Club memberships are billed
            monthly. Cancel any time from your account dashboard. Memberships
            remain active through the end of the billing cycle in which they
            are canceled. We do not pro-rate canceled memberships.
          </p>
          <p>
            For the full SMS and privacy policy, please refer to our{" "}
            <a
              href="https://washwizardcarwash.com/wp-content/uploads/2026/03/Wash-Wizard-Car-Wash-Privacy-Policy-With-SMS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-semibold underline hover:text-primary"
            >
              Privacy Policy PDF
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
