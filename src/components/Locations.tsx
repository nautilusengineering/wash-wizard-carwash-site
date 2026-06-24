import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@/lib/utils";

interface Location {
  name: string;
  shortName: string;
  address: string;
  city: string;
  image: string;
  mapQuery: string;
}

const locations: Location[] = [
  {
    name: "Wash Wizard North Main",
    shortName: "North Main",
    address: "2146 N Main St.",
    city: "Summerville, SC 29486",
    image: "/images/loc-north-main.webp",
    mapQuery: "2146 N Main St, Summerville, SC 29486",
  },
  {
    name: "Wash Wizard Ladson Road",
    shortName: "Ladson Road",
    address: "3910 Ladson Rd",
    city: "Ladson, SC 29456",
    image: "/images/loc-ladson-road.webp",
    mapQuery: "3910 Ladson Rd, Ladson, SC 29456",
  },
  {
    name: "Wash Wizard Bacons Bridge",
    shortName: "Bacons Bridge",
    address: "999 Bacons Bridge Rd",
    city: "Summerville, SC 29485",
    image: "/images/loc-bacons-bridge.webp",
    mapQuery: "999 Bacons Bridge Rd, Summerville, SC 29485",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="relative bg-background py-16 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 lg:mb-14">
          <p className="font-script text-magic text-sm tracking-wide mb-3">
            Three Lowcountry Locations
          </p>
          <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl text-primary text-balance">
            Find your <span className="text-accent">Wash Wizard.</span>
          </h2>

          <div className="mt-7 inline-flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 rounded-2xl bg-white/85 ring-1 ring-black/5 text-sm">
            <span className="font-heading font-semibold uppercase tracking-widest text-primary flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-accent" /> Open 7 Days
            </span>
            <span className="text-muted-foreground">
              Summer · 8 AM – 8 PM
            </span>
            <span className="text-muted-foreground">
              Winter · 8 AM – 7 PM
            </span>
            <a
              href={PHONE_HREF}
              className="font-heading font-semibold uppercase tracking-widest text-primary flex items-center gap-2 hover:text-secondary"
            >
              <Phone className="size-4 shrink-0 text-accent" /> {PHONE}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc) => {
            const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.mapQuery)}`;
            const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&z=14&output=embed`;
            return (
              <div
                key={loc.name}
                className="rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 shadow-md"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-primary/5">
                  <Image
                    src={loc.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 py-1 pl-1.5 pr-2.5 rounded-full bg-accent text-accent-foreground text-[0.625rem] font-heading font-semibold uppercase tracking-widest shadow-md">
                    <MapPin className="size-3 shrink-0" /> {loc.shortName}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold uppercase text-xl text-primary mb-1">
                    {loc.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{loc.address}</p>
                  <p className="text-sm text-muted-foreground mb-4">{loc.city}</p>

                  <div className="rounded-xl overflow-hidden ring-1 ring-black/5 mb-4 aspect-[5/3]">
                    <iframe
                      src={mapEmbed}
                      loading="lazy"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${loc.name}`}
                    />
                  </div>

                  <a
                    href={directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button size="default" className="w-full">
                      <MapPin className="size-4 shrink-0" /> Get Directions
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
