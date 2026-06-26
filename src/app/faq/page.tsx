"use client";

import { useState } from "react";
import { ChevronDown, Wand } from "lucide-react";
import SubscribeBanner from "@/components/SubscribeBanner";

interface FAQ {
  q: string;
  a: string;
}

const groups: { title: string; items: FAQ[] }[] = [
  {
    title: "Membership",
    items: [
      {
        q: "How do I cancel my Unlimited Wash Club membership?",
        a: "Cancel any time from your account dashboard at washwizard.mywashaccount.com/login. Memberships stay active through the end of the billing cycle.",
      },
      {
        q: "Can I pause my membership?",
        a: "Yes — log in to your account and select Pause. We won't charge you while paused and you can resume any time.",
      },
      {
        q: "How do I add a vehicle to my Unlimited Wash Club account?",
        a: "Log in and choose Add Vehicle. Each additional vehicle is billed at the discounted family-plan rate.",
      },
      {
        q: "What's the cost of the Unlimited Wash Club?",
        a: "Plans start at $14.99/month for The Magic Wash and go up to $49.99/month for The King Graphene Wash. See the Packages page for the full breakdown.",
      },
      {
        q: "Are there annual / family / fundraiser plans?",
        a: "Yes — annual plans give you two months free, family plans cover additional vehicles at a discount, and fundraisers let your group earn alongside us.",
      },
    ],
  },
  {
    title: "At the Wash",
    items: [
      {
        q: "How long does a wash take?",
        a: "The tunnel itself takes about three minutes. From pulling up to rolling out clean is usually under seven.",
      },
      {
        q: "Can I run my hood out for the wash?",
        a: "Soft tops, convertible roofs, exposed bed loads, and anything not secured should not go through. When in doubt, ask the attendant.",
      },
      {
        q: "Is the wash safe for new paint or wraps?",
        a: "Yes — our soft-touch foam and ceramic chemistry is gentle. Wait 30 days after new paint or wrap to be safe.",
      },
      {
        q: "Do you wash trucks, SUVs, or oversized vehicles?",
        a: "Our 26-foot-wide tunnel handles full-size trucks, SUVs, and most lifted vehicles. Dual-rear-wheel trucks may incur a small upcharge.",
      },
      {
        q: "What if I'm not happy with my wash?",
        a: "Pull around and we'll re-wash your vehicle. No questions asked.",
      },
    ],
  },
  {
    title: "Hours & Locations",
    items: [
      {
        q: "Are you open on holidays?",
        a: "Open 7 days a week. Closed Thanksgiving and Christmas. Closing early at 6 PM on July 4th, Christmas Eve, and New Year's Eve.",
      },
      {
        q: "What are your summer and winter hours?",
        a: "Summer (March–September): 8 AM – 8 PM. Winter (October–February): 8 AM – 7 PM.",
      },
      {
        q: "Where are your locations?",
        a: "North Main in Summerville, Ladson Road in Ladson, and Bacons Bridge in Summerville. See the Locations page for addresses and directions.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>("Membership-0");
  return (
    <>
      <div className="pt-32 lg:pt-36" />
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="mb-12">
            <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-primary leading-[0.95]">
              You ask, the wizard{" "}
              <span className="text-accent">shall answer.</span>
            </h1>
          </div>
          {groups.map((group) => (
            <div key={group.title} className="mb-10 last:mb-0">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-accent">
                <Wand className="w-5 h-5 text-accent" />
                <h2 className="font-heading font-bold uppercase text-2xl tracking-widest text-accent">
                  {group.title}
                </h2>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {group.items.map((faq, i) => {
                  const key = `${group.title}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => setOpen(isOpen ? null : key)}
                        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span className="font-heading font-bold uppercase text-base text-primary tracking-wide group-hover:text-secondary transition-colors">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 text-accent transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 pb-5"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pr-8">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <SubscribeBanner />
    </>
  );
}