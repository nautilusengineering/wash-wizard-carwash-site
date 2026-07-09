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
    a: "You can cancel any time from your Manage My Membership portal — no calls, no hold music. Memberships stay active through the end of the billing cycle.",
  },
  {
    q: "Can my whole family use my membership?",
    a: "Each Unlimited Wash Club membership covers one vehicle. We do offer family clubs for additional vehicles at a heavily discounted rate — see the Family Club section on our Packages page.",
  },
  {
    q: "How long does a single wash take?",
    a: "The tunnel itself takes about 4 minutes. From pulling up to rolling out clean is usually under 10 minutes.",
  },
  {
    q: "Do you wash trucks, SUVs, and oversized vehicles?",
    a: "Our wash can safely accommodate 2.5-ton trucks and oversized SUVs, with a maximum height clearance of 7'2\". Squatted vehicles are not permitted. Because of width limitations in our conveyor system, Ford Raptors and dual-rear-wheel trucks cannot be washed, as their wheel width does not fit within the track. Factory trucks with positive offsets between +10 mm and +44 mm fit properly, while aggressive negative offsets—such as –44 mm—push wheels outward and increase the risk of contact with wash equipment. Standard single-rear-wheel trucks must also remain under a maximum tire width of 12.5\". If you are unsure whether your vehicle meets these requirements, please stop by the wash and we can measure it using a marked fixture to confirm feasibility.",
  },
  {
    q: "What if I'm not happy with my wash?",
    a: "If you are not satisfied, please see a manager before you leave and we will address your concerns immediately, including rewashing the vehicle if needed.",
  },
  {
    q: "Are you open on holidays?",
    a: "We're open 7 days a week (Summer · 8 AM – 8 PM, Winter · 8 AM – 7 PM). Closed Thanksgiving & Christmas. Closing early at 6 PM on 4th of July, Christmas Eve, and New Year's Eve.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10 lg:mb-12">
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
                <span className="font-card font-bold uppercase text-base text-primary tracking-wide group-hover:text-secondary transition-colors">
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
                  <p className="text-base text-foreground leading-relaxed pr-8 text-pretty">
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
