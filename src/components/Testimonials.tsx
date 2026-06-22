import { Wand } from "lucide-react";

interface Review {
  text: string;
  name: string;
  location: string;
}

const reviews: Review[] = [
  {
    text:
      "Best car wash in the Lowcountry. The Unlimited Club pays for itself in two washes. My truck has never looked better.",
    name: "Hannah B.",
    location: "Summerville, SC",
  },
  {
    text:
      "The tunnel is a vibe — my kids ask to come every weekend. Quick in and out, and the vacuums actually have suction!",
    name: "Marcus T.",
    location: "Ladson, SC",
  },
  {
    text:
      "Graphene plan is worth every penny. Water beads off for weeks. Friendly staff and pristine facilities every visit.",
    name: "Erica L.",
    location: "Goose Creek, SC",
  },
  {
    text:
      "Plate recognition is awesome — drive up and you&apos;re through. The bug remover is a lifesaver in summer.",
    name: "Derek W.",
    location: "Mount Pleasant, SC",
  },
  {
    text:
      "Switched from a competitor and never looked back. Cleaner cars, better wax, way more vacuum bays.",
    name: "Carla R.",
    location: "Summerville, SC",
  },
  {
    text:
      "Twelve washes in and the King&apos;s plan still amazes me. The wizard knows what he&apos;s doing.",
    name: "Joey M.",
    location: "North Charleston, SC",
  },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] mr-5">
      <div className="bg-white rounded-2xl border border-border p-6 shadow-md h-full flex flex-col">
        <div className="flex items-center gap-1 text-accent mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Wand key={i} className="w-4 h-4" />
          ))}
        </div>
        <p className="text-sm sm:text-base text-foreground/85 leading-relaxed mb-5 flex-1">
          &ldquo;{r.text}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary text-white grid place-items-center font-heading font-bold">
            {r.name.slice(0, 1)}
          </div>
          <div>
            <p className="font-heading font-bold uppercase text-sm text-primary">
              {r.name}
            </p>
            <p className="text-xs text-muted-foreground">{r.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...reviews, ...reviews];
  return (
    <section className="relative bg-muted py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 mb-10">
        <div className="text-center">
          <p className="font-script text-magic text-sm uppercase tracking-[0.3em] mb-3">
            What the Lowcountry Says
          </p>
          <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl text-primary leading-[0.95]">
            Smiles all <span className="text-accent">around.</span>
          </h2>
        </div>
      </div>
      <div className="relative">
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
