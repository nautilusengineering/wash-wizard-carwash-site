import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Disclaimer | Wash Wizard Car Wash",
  description: "Wash Wizard Car Wash terms, disclaimers, and conditions of entry.",
};

interface Section {
  title: string;
  items: string[];
}

const responsibilities: Section = {
  title: "Customer Responsibilities Before Entering the Wash",
  items: [
    "Empty Truck Beds: All truck beds must be completely empty and free of debris. Loose objects can fly out and cause damage to vehicles or equipment.",
    "Remove Screw-In Antennas: Customers should remove screw-in antennas by hand or with a wrench to prevent tangling in brushes.",
    "Remove Trailer Hitches: For best results, remove all trailer hitches. Commercial hitches will cause rear wrap-around brushes to retract to avoid tangling.",
    "Excessive Mud: Vehicles with heavy mud buildup will be removed from the wash, as mud can cause paint damage during cleaning.",
  ],
};

const notCovered: Section = {
  title: "Items Not Covered by Wash Wizard",
  items: [
    "Antennas: Antenna mounts and adhesives deteriorate over time due to exposure. These are considered wear-and-tear items and may break during the wash.",
    "Side Mirrors: Mirror mounts weaken over time. Customers should fold mirrors inward before entering.",
    "Wipers: All wipers, front, rear, and automatic must be turned off. Exposed rear wipers should be taped down to prevent contact with overhead brushes.",
    "Roof Racks: All aftermarket roof racks must be removed. Crossbars can become entangled in overhead brushes.",
    "Collisions on Property: Wash Wizard is not responsible for errant driving or errant braking by other customers in the tunnel or on the property. These incidents are handled through standard insurance claims.",
    "Running Boards: We are not responsible for running boards. Automatic running boards should never be deployed during the wash.",
    "Plastic Visors & Bug Shields: These components become brittle over time, and their adhesives weaken with exposure.",
    "Non-Factory Parts: Aftermarket additions or uniquely shaped components are not covered due to the risk of entanglement with brushes.",
    "Parts Blown Off During Drying: Forced-air drying may dislodge parts with weakened adhesives or aged plastic. This is typically due to pre-existing wear, not the wash process.",
    "Windshield Cracks: Windshield cracks that show up after a wash almost always trace back to tiny pre-existing chips or hairline fractures. High-pressure water can reveal these weakened spots, but it cannot break a structurally sound windshield. Independent testing consistently shows that professional car wash equipment doesn't produce enough force to crack automotive glass.",
  ],
};

function SectionBlock({ section }: { section: Section }) {
  return (
    <div>
      <h2 className="font-heading font-bold uppercase text-2xl sm:text-3xl text-primary mb-4">
        {section.title}
      </h2>
      <ul className="space-y-3 list-disc pl-5 marker:text-accent">
        {section.items.map((item) => {
          const [label, ...rest] = item.split(": ");
          return (
            <li key={label} className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              <span className="font-semibold text-primary">{label}:</span>{" "}
              {rest.join(": ")}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Wash Wizard Car Wash Disclaimer{" "}
            <span className="text-accent">
              & Customer Responsibility Policy
            </span>
          </>
        }
        subtitle="At Wash Wizard, we want every customer to enjoy a safe, consistent, and high-quality wash experience. To ensure this, we provide clear guidelines and expectations for vehicle condition, customer responsibilities, and items not covered by our wash process. Please review the information below before entering the wash."
        showMascot={false}
        centered
      />
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="space-y-10 lg:space-y-12">
            <div>
              <h2 className="font-heading font-bold uppercase text-2xl sm:text-3xl text-primary mb-4">
                General Policy Overview
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  We maintain our equipment to safely accommodate a wide
                  variety of vehicles. Our wash process includes light
                  contact from spinning neoprene brushes and high-velocity
                  forced-air drying. Over time, vehicle materials, plastics,
                  and adhesives naturally weaken due to age and environmental
                  exposure. Older or compromised components may detach when
                  touched or exposed to strong airflow.
                </p>
                <p>
                  Each customer is responsible for maintaining their vehicle
                  in good working order and understanding its condition prior
                  to entering the wash. Wash Wizard is solely responsible for
                  equipment malfunctions. All other forms of damage fall
                  under the vehicle owner&apos;s responsibility and are
                  accepted upon entry. If you are unsure whether your vehicle
                  can safely undergo the wash process, we recommend not using
                  the facility.
                </p>
              </div>
            </div>

            <SectionBlock section={responsibilities} />
            <SectionBlock section={notCovered} />

            <div className="text-center pt-4 border-t border-border">
              <h2 className="font-heading font-bold uppercase text-xl text-primary mb-2">
                Thank You
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                We appreciate you taking the time to review our disclaimer
                and customer responsibility policy. These guidelines help
                ensure a safe and efficient wash experience for all visitors.
              </p>
            </div>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed text-center">
              For the full SMS and privacy policy, please refer to our{" "}
              <a
                href="/documents/wash-wizard-privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold underline hover:text-primary"
              >
                Privacy Policy PDF
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
