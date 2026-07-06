"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCATION_IDS } from "@/lib/utils";

interface LocationOption {
  id: string;
  name: string;
  address: string;
  city: string;
  image: string;
}

const LOCATION_OPTIONS: LocationOption[] = [
  {
    id: LOCATION_IDS.northMain,
    name: "North Main",
    address: "2146 N Main St.",
    city: "Summerville, SC",
    image:
      "https://ucarecdn.com/924824ae-e14b-4454-b92d-1a90f0b42d7a/loc-north-main.webp",
  },
  {
    id: LOCATION_IDS.ladsonRoad,
    name: "Ladson Road",
    address: "3910 Ladson Rd",
    city: "Ladson, SC",
    image:
      "https://ucarecdn.com/79724f54-79b5-463e-bd9d-9356f047ee51/loc-ladson-road.webp",
  },
  {
    id: LOCATION_IDS.baconsBridge,
    name: "Bacons Bridge",
    address: "999 Bacons Bridge Rd",
    city: "Summerville, SC",
    image:
      "https://ucarecdn.com/900af020-1d9a-41fc-8af9-caa56d7556d6/loc-bacons-bridge.webp",
  },
];

interface LocationPickerModalProps {
  onSelect: (locationId: string) => void;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function LocationPickerModal({
  onSelect,
  onClose,
  title = "Choose your location",
  subtitle = "Which Wash Wizard should we open your wash at?",
}: LocationPickerModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      // Restore the scroll position instantly. The global `scroll-behavior:
      // smooth` would otherwise animate this jump, and the checkout drawer that
      // opens right after a location is picked would read a mid-animation scroll
      // position and lock the page at the top.
      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = prevScrollBehavior;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="relative bg-primary text-white px-5 sm:px-7 py-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="font-heading font-bold uppercase text-2xl sm:text-3xl leading-tight">
              {title}
            </h2>
            <p className="mt-1 text-sm text-white/80">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close"
            className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7 grid grid-cols-1 sm:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
          {LOCATION_OPTIONS.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => onSelect(loc.id)}
              className="group text-left rounded-xl bg-white ring-1 ring-black/10 hover:ring-accent hover:shadow-lg transition-all overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="relative aspect-[4/3] w-full bg-primary/5">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  sizes="(min-width: 640px) 300px, 90vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-1.5 text-accent">
                  <MapPin className="w-4 h-4" />
                  <span className="font-heading uppercase tracking-widest text-[0.7rem]">
                    Location
                  </span>
                </div>
                <h3 className="font-heading font-bold uppercase text-lg text-primary leading-tight">
                  {loc.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {loc.address}
                  <br />
                  {loc.city}
                </p>
                <Button
                  size="sm"
                  className="mt-3 w-full pointer-events-none"
                  tabIndex={-1}
                >
                  Select
                </Button>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
