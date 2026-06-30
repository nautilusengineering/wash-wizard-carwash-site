import { Button } from "@/components/ui/button";
import { Wand, Clock, DollarSign, Users, Heart } from "lucide-react";

export const metadata = {
  title: "Employment | Wash Wizard Car Wash",
  description:
    "Join the Wash Wizard team. Flexible hours, competitive pay, and a fun, family-friendly tunnel-wash environment in Summerville and Ladson, SC.",
};

const perks = [
  { icon: DollarSign, title: "Competitive Pay", body: "Hourly base + tips + bonuses." },
  { icon: Clock, title: "Flexible Hours", body: "Mornings, evenings, weekends." },
  { icon: Users, title: "Great Team", body: "Family-owned. Friendly crews." },
  { icon: Heart, title: "Free Washes", body: "Yes, you can keep your car spotless too." },
];

const roles = [
  {
    title: "Lot Attendant",
    body: "Greeting customers, maintaining a clean work environment, ensuring customer satisfaction and performing opening and closing tasks.",
  },
  {
    title: "Manager",
    body: "The Manager is in constant contact with the staff and customers. They are responsible for ensuring the staff provide great customer service, ensuring facility uptime, ordering supplies, scheduling, and controlling labor costs.",
  },
  {
    title: "Assistant Manager",
    body: "Responsible for opening and closing the store, employee management, customer service, equipment knowledge, vehicle preparation, damage control, damage claim processing, and maintaining site cleanliness.",
  },
  {
    title: "Loader",
    body: "Greeting customers, evaluating and loading vehicles safely into the carwash tunnel, maintaining a clean work environment, ensuring customer satisfaction and performing opening and closing tasks.",
  },
  {
    title: "Sales Associate & Business Development Manager",
    body: "Manage our onsite membership sales program and associates, elevate customer experience, and expand our community presence.",
  },
  {
    title: "Customer Service Attendant (CSA)",
    body: "Greeting and assisting customers at the pay stations, helping with transactions, and promoting membership programs.",
  },
  {
    title: "Service Technician",
    body: "Performs preventive maintenance, troubleshooting, and repairs on all wash equipment to ensure safe, reliable, and efficient daily operations.",
  },
];

export default function EmploymentPage() {
  return (
    <>
      {/* Title */}
      <section className="bg-background pt-32 lg:pt-40 pb-10 lg:pb-14">
        <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <h1 className="font-heading font-bold uppercase text-4xl sm:text-5xl text-primary leading-[0.95] mb-4">
            We&apos;re hiring <span className="text-accent">wizards.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Friendly crews, flexible hours, and free washes. Come grow with us.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-background pb-14 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="relative">
            <div
              className="hidden sm:block absolute top-9 left-[12%] right-[12%] h-0 border-t-2 border-dotted border-accent/40"
              aria-hidden="true"
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
              {perks.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="relative flex flex-col items-center text-center">
                    <div
                      className="relative w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full bg-background border-2 border-dashed border-accent/50 grid place-items-center shadow-sm"
                      style={{ transform: i % 2 === 0 ? "rotate(-4deg)" : "rotate(4deg)" }}
                    >
                      <Icon className="w-7 h-7 text-magic" />
                    </div>
                    <h3 className="font-script text-magic text-sm sm:text-base mt-4">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-[9rem]">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
              Find your <span className="text-accent">spot.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {roles.map((r) => (
              <div
                key={r.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="font-heading font-bold uppercase text-xl sm:text-2xl text-primary flex items-center gap-2">
                    <Wand className="w-4 h-4 text-accent" />
                    {r.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  {r.body}
                </p>
                <a href="https://washwizardcarwash.com/employment" target="_blank" rel="noopener noreferrer">
                  <Button size="default">Apply Today &rarr;</Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
