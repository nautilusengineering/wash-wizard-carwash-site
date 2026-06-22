import { Wand } from "lucide-react";

const items = [
  "Unlimited Wash Club",
  "180-Foot Wizard Tunnel",
  "Free DIY Vacuums",
  "Ceramic Graphene Protection",
  "Three Lowcountry Locations",
  "License Plate Recognition",
  "Open 7 Days a Week",
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-accent text-accent-foreground overflow-hidden border-y-4 border-deep">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 font-heading font-bold uppercase tracking-widest text-sm sm:text-base"
          >
            {item}
            <Wand className="w-4 h-4 text-deep" />
          </span>
        ))}
      </div>
    </div>
  );
}
