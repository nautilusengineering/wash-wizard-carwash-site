"use client";

import { useState } from "react";
import { ChevronDown, Wand } from "lucide-react";
import SubscribeBanner from "@/components/SubscribeBanner";

interface FAQ {
  q: string;
  a: string | React.ReactNode;
}

const groups: { title: string; items: FAQ[] }[] = [
  {
    title: "Membership",
    items: [
      {
        q: "How do I cancel my Unlimited Wash Club membership?",
        a: "You may cancel any time from our online Manage Account portal. No calls, no hold music. Memberships stay active through the end of the billing cycle.",
      },
      {
        q: "How do I make changes to my Unlimited Wash Club membership account?",
        a: "You have several options: (1) Use our online Manage Account portal with the phone number or email address associated with your account. (2) Utilize our Unlimited Wash Club Membership Assistance Form and we can look up your account and make changes on your behalf. (3) Call us at 843-900-3234 to leave a voice message — please include your contact details and license plate number. (4) Come into our office on site with your license plate number.",
      },
      {
        q: "How can I change the license plate on my Unlimited Wash Club account?",
        a: "You can change your license plate number via our online Manage Account portal once per year at no cost. Additional changes are $10 each. You may also use our Unlimited Wash Club Membership Assistance Form, call us at 843-900-3234, or come into our office on site with your license plate number.",
      },
      {
        q: "Can my whole family use my membership?",
        a: <span>Each Unlimited Wash Club membership covers one vehicle. We do offer family clubs for additional vehicles at a heavily discounted rate — see the Family Club section on our <a href="/packages" className="text-secondary underline hover:text-primary transition-colors">Packages page</a>.</span>,
      },
      {
        q: "Do Unlimited Wash Club memberships work at all locations?",
        a: "Yes — Unlimited Wash Club Memberships may be utilized at any Wash Wizard location.",
      },
      {
        q: "Do you offer a multicar discount on Unlimited Wash Club accounts for families?",
        a: "Got more than one car in the family? Discover how our Monthly Family Wash Club Membership makes it easier and more affordable to keep them all sparkling. Visit our website to explore multicar family discounts.",
      },
      {
        q: "Can I pause my membership?",
        a: "Yes — log in to your account online via our Manage Account portal and select Pause. We won't charge you while paused and you can resume any time.",
      },
    ],
  },
  {
    title: "At the Wash",
    items: [
      {
        q: "How long does a single wash take?",
        a: "The tunnel itself takes about 4 minutes. From pulling up to rolling out clean is usually under 10 minutes.",
      },
      {
        q: "What if I'm not happy with my wash?",
        a: "If you are not satisfied, please see a manager before you leave and we will address your concerns immediately, including rewashing the vehicle if needed.",
      },
      {
        q: "Do you wash trucks, SUVs, and oversized vehicles?",
        a: "Our wash can safely accommodate 2.5-ton trucks and oversized SUVs, with a maximum height clearance of 7'2\". Squatted vehicles are not permitted. Because of width limitations in our conveyor system, Ford Raptors and dual-rear-wheel trucks cannot be washed, as their wheel width does not fit within the track. Factory trucks with positive offsets between +10 mm and +44 mm fit properly, while aggressive negative offsets—such as –44 mm—push wheels outward and increase the risk of contact with wash equipment. Standard single-rear-wheel trucks must also remain under a maximum tire width of 12.5\". If you are unsure whether your vehicle meets these requirements, please stop by the wash and we can measure it using a marked fixture to confirm feasibility.",
      },
      {
        q: "Can soft and hard top convertibles go through the wash?",
        a: "Yes they can! Hard and soft top vehicles are able to go through our wash. If you have any questions about your particular convertible please contact us.",
      },
      {
        q: "Is your glass cleaner safe for tinted windows?",
        a: "We use a non-ammonia glass cleaner formula for streak free auto glass. It is safe for tinted windows.",
      },
      {
        q: "Is the wash safe to use with a truck bed cover?",
        a: <span>Many customers with truck bed covers use our wash. It is, however, the customer&apos;s responsibility to know the condition of the cover and if it is properly installed. If it is not in good condition or properly installed, it may blow in from the force of the blowers. We recommend reviewing our <a href="/disclaimer" className="text-secondary underline hover:text-primary transition-colors">Disclaimer Policy</a> before visiting the car wash.</span>,
      },
      {
        q: "Is the car wash safe for plastic wind screens and visors?",
        a: <span>Many customers with plastic visors and windscreens use our wash. It is the customer&apos;s responsibility to know the condition of these accessories and if they are properly installed. These materials and adhesives weaken and become brittle over time. If not in good condition or properly installed, they may blow off or crack from the force of the blowers. Wash Wizard recommends reviewing our <a href="/disclaimer" className="text-secondary underline hover:text-primary transition-colors">Disclaimer Policy</a> before visiting.</span>,
      },
      {
        q: "What type of wash process do you use?",
        a: "Our car wash process includes light touch from spinning neoprene brushes, and we utilize high power blowers to dry the vehicle that produce wind speeds approaching 90 MPH.",
      },
      {
        q: "What is your muddy vehicle policy?",
        a: "Wash Wizard is not equipped to handle mud-covered vehicles. Our tunnel is designed for high-volume express washing and for removing normal road dirt — not heavy mud from off-road use. Please rinse off heavy buildup at home or at a self-serve wash before visiting us. If a vehicle arrives too muddy for our equipment to safely process, we reserve the right to remove it from the wash and refund your purchase.",
      },
      {
        q: "What is your disclaimer & damage policy?",
        a: <span>Our process includes light touch from spinning neoprene brushes and high-power blowers producing wind speeds approaching 90 MPH. If you are uncertain about your vehicle&apos;s ability to handle our wash, do not enter. Vehicle materials and adhesives weaken over time. We only take responsibility for equipment malfunctions. We are NOT responsible for: wipers, antennas, side mirrors, roof racks, bug shields, sun visors, rain deflectors, loose chrome/moldings, running boards, any accessories or aftermarket parts, vehicles over 5 years old, or loose parts blown off by blowers. DO NOT USE our wash if your vehicle has body damage, peeling paint, loose chrome, or non-factory accessories. See our full <a href="/disclaimer" className="text-secondary underline hover:text-primary transition-colors">Disclaimer & Customer Responsibility Policy</a> for details.</span>,
      },
    ],
  },
  {
    title: "Wash Technology",
    items: [
      {
        q: "What are the benefits of ceramic & graphene coatings?",
        a: "Bonding at a molecular level, our Graphene and Ceramic applications form a durable shield that is resistant to dirt, bird droppings, contaminants, and water. The coatings provide superior hydrophobic repellency and an outstanding shine.",
      },
      {
        q: "What is the best way to remove pollen?",
        a: "Pollen is something you want to remove as often as possible. Even though each grain is tiny, it can lodge itself into the pores of your vehicle's paint. When pollen gets wet, its acidity activates and can lead to staining and premature oxidation. Soap encapsulates the pollen and breaks its grip on the paint, leaving a glossy, scratch-free finish.",
      },
      {
        q: "Can bug residue damage my paint?",
        a: "Yes — bugs' bodily fluids are acidic and can eat into paint if left too long. A squashed lovebug starts near neutral at 6.5 PH and drops to about 4.25 within 24 hours — acidic enough to etch clearcoat. Remove bugs as soon as possible. A good coat of wax creates a protective barrier. Avoid scrubbing dried residue with a towel as friction can cause more damage than the bug itself.",
      },
      {
        q: "Why are your microfiber drying cloths damp?",
        a: "A slightly damp microfiber towel pulls water off the vehicle better than a completely dry one — water clings to other water molecules, creating capillary action that wicks moisture more efficiently. A damp towel also glides with less friction, making drying safer for your paint and glass.",
      },
    ],
  },
  {
    title: "Hours & Locations",
    items: [
      {
        q: "Are you open on holidays?",
        a: "We're open 7 days a week (Summer · 8 AM – 8 PM, Winter · 8 AM – 7 PM). Closed Thanksgiving & Christmas. Closing early at 6 PM on 4th of July, Christmas Eve, and New Year's Eve.",
      },
      {
        q: "What are your summer and winter operating hours?",
        a: "Summer (March–September): 8 AM – 8 PM. Winter (October–February): 8 AM – 7 PM.",
      },
      {
        q: "Where are your locations?",
        a: "North Main in Summerville, Ladson Road in Ladson, and Bacons Bridge in Summerville. See the Locations page for addresses and directions.",
      },
    ],
  },
  {
    title: "Gift Cards & Fundraising",
    items: [
      {
        q: "Where can I get gift cards?",
        a: "Gift cards are available at any pay station, via our online store, and in our lobby. Available denominations: Buy $100 Get $120, Buy $75 Get $90, Buy $50 Get $60, Buy $30 Get $35, plus $25, $20, $15, $10, and custom amounts (lobby only). Plastic gift cards are issued from the lobby; printable barcodes are issued for online purchases or at any pay station.",
      },
      {
        q: "Do you offer fundraising opportunities?",
        a: "Yes! Please visit our Fundraising page for more information.",
      },
    ],
  },
  {
    title: "Sustainability",
    items: [
      {
        q: "How do you approach water conservation?",
        a: "When you wash with Wash Wizard, you're helping conserve water. We use biodegradable chemicals and recycle 88% of our water through a Water Reclamation System. The average at-home car wash uses up to 140 gallons of water — and driveway runoff goes untreated into storm drains. Washing with us is the greener choice.",
      },
      {
        q: "How do you approach energy conservation?",
        a: "Wash Wizard has invested in Variable Frequency Drive (VFD) technology across vacuums, blowers, and high-pressure pumps to minimize electricity use. Our vacuum system uses suction transducer sensors to deliver exactly the power needed. Blowers use air gates to reduce power between vehicles. All lighting is high-efficiency LED.",
      },
    ],
  },
  {
    title: "Employment",
    items: [
      {
        q: "Can I come work for Wash Wizard?",
        a: <span>We are always accepting applications. Please fill out our <a href="/employment" className="text-secondary underline hover:text-primary transition-colors">Employment Application Form</a>.</span>,
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>("Membership-0");
  return (
    <>
      <div className="pt-24 lg:pt-28" />
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="mb-12">
            <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-primary leading-[0.95]">
              You ask, the wizard{" "}
              <span className="text-accent">shall answer</span>
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
                        <span className="font-card font-bold uppercase text-base text-primary tracking-wide group-hover:text-secondary transition-colors">
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
