"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: "How do I cancel my Unlimited Wash Club membership?",
    a: "You can cancel any time from your account dashboard at washwizard.mywashaccount.com/login — no calls, no hold music. Memberships stay active through the end of the billing cycle.",
  },
  {
    q: "Can my whole family use my membership?",
    a: "Each Unlimited Wash Club membership covers one vehicle. We do offer family plans for additional vehicles at a heavily discounted rate — see the Family Plan section on our Packages page.",
  },
  {
    q: "How long does a single wash take?",
    a: "The tunnel itself takes about three minutes — from pulling up to the pay station to rolling out clean is usually under seven. Free vacuums are yours for as long as you like.",
  },
  {
    q: "Do you wash trucks, SUVs, and oversized vehicles?",
    a: "Yes — our 26-foot-wide tunnel comfortably handles full-size trucks, SUVs, and most lifted vehicles. Dual-rear-wheel trucks may incur a small upcharge.",
  },
  {
    q: "What if I'm not happy with my wash?",
    a: "Pull around and we'll re-wash your vehicle, no questions asked. The wizard's word is gold.",
  },
  {
    q: "Are you open on holidays?",
    a: "We're open 7 days a week. Closed Thanksgiving & Christmas. Closing early at 6 PM on 4th of July, Christmas Eve, and New Year's Eve.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="mb-10 lg:mb-12">
          <p className="font-script text-magic text-sm tracking-wide mb-3">
            Wizardly Wisdom
          </p>
          <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl text-primary text-balance">
            Frequently asked <span className="text-accent">questions</span>
          </h2>
        </div>

        <div className="divide-y divide-primary/10 border-y border-primary/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-heading font-semibold uppercase text-base sm:text-lg text-primary tracking-wide group-hover:text-secondary">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-accent transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100 pb-5"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base sm:text-sm text-muted-foreground leading-relaxed pr-8 text-pretty">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/faq">
            <Button variant="outlineDark" size="lg">
              View all FAQs &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
