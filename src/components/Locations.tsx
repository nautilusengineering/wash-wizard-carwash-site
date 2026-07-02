"use client";

import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@/lib/utils";
import { useEffect, useRef } from "react";

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
    image: "https://ucarecdn.com/924824ae-e14b-4454-b92d-1a90f0b42d7a/loc-north-main.webp",
    mapQuery: "2146 N Main St, Summerville, SC 29486",
  },
  {
    name: "Wash Wizard Ladson Road",
    shortName: "Ladson Road",
    address: "3910 Ladson Rd",
    city: "Ladson, SC 29456",
    image: "https://ucarecdn.com/79724f54-79b5-463e-bd9d-9356f047ee51/loc-ladson-road.webp",
    mapQuery: "3910 Ladson Rd, Ladson, SC 29456",
  },
  {
    name: "Wash Wizard Bacons Bridge",
    shortName: "Bacons Bridge",
    address: "999 Bacons Bridge Rd",
    city: "Summerville, SC 29485",
    image: "https://ucarecdn.com/900af020-1d9a-41fc-8af9-caa56d7556d6/loc-bacons-bridge.webp",
    mapQuery: "999 Bacons Bridge Rd, Summerville, SC 29485",
  },
];

/* ─── Floating sparkles (light-bg friendly) ────────────── */
function LocationSparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    type P = {
      x: number; y: number; size: number;
      life: number; maxLife: number;
      vy: number; vx: number;
      rotation: number; rotSpeed: number;
      color: string;
    };

    const COLORS = [
      "200,160,0",     // dark gold
      "100,60,180",    // purple
      "0,47,130",      // navy
      "0,174,239",     // sky blue
      "180,120,0",     // amber
      "120,80,200",    // violet
    ];

    const particles: P[] = [];

    const spawn = (): P => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 3 + Math.random() * 6,
      life: 0,
      maxLife: 100 + Math.random() * 140,
      vy: -(0.1 + Math.random() * 0.25),
      vx: (Math.random() - 0.5) * 0.15,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.025,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    for (let i = 0; i < 20; i++) {
      const p = spawn();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    let spawnT = 0;
    let raf: number;

    const drawStar = (cx: number, cy: number, r: number, rot: number, alpha: number, color: string) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const ox = Math.cos(angle) * r;
        const oy = Math.sin(angle) * r;
        const ix = Math.cos(angle + Math.PI / 4) * r * 0.2;
        const iy = Math.sin(angle + Math.PI / 4) * r * 0.2;
        if (i === 0) ctx.moveTo(ox, oy); else ctx.lineTo(ox, oy);
        ctx.lineTo(ix, iy);
      }
      ctx.closePath();
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
      g.addColorStop(0, `rgba(${color},0.9)`);
      g.addColorStop(0.5, `rgba(${color},0.5)`);
      g.addColorStop(1, `rgba(${color},0)`);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawnT++;
      if (spawnT > 18) { particles.push(spawn()); spawnT = 0; }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        const progress = p.life / p.maxLife;
        const alpha = progress < 0.2 ? progress / 0.2 : progress > 0.75 ? (1 - progress) / 0.25 : 1;
        drawStar(p.x, p.y, p.size, p.rotation, alpha * 0.45, p.color);
        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
}

export default function Locations() {
  return (
    <section
      id="locations"
      className="relative bg-background py-16 lg:py-24 overflow-hidden"
    >
      <LocationSparkles />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6" style={{ zIndex: 2 }}>
        <div className="mb-10 lg:mb-14">
          <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl text-balance text-primary">
            Find your <span className="text-accent">Wash Wizard.</span>
          </h2>

          <div className="mt-7 inline-flex flex-wrap items-center gap-x-6 gap-y-2 px-5 sm:px-6 py-4 rounded-2xl bg-white/85 ring-1 ring-black/5 text-base sm:text-sm w-full sm:w-auto">
            <span className="font-heading font-semibold uppercase tracking-widest text-primary flex items-center gap-2">
              <Clock className="size-5 sm:size-4 shrink-0 text-accent" /> Open 7 Days
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
              <Phone className="size-5 sm:size-4 shrink-0 text-accent" /> {PHONE}
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
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(170deg, #0a1a3a 0%, #0d1f45 40%, #0a1530 100%)",
                  boxShadow: "0 8px 30px rgba(10,20,50,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={loc.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(180deg, transparent 50%, rgba(10,20,50,0.7) 100%)",
                    }}
                  />
                  <div
                    className="absolute top-3 left-3 inline-flex items-center gap-1.5 py-1.5 pl-2 pr-3 rounded-full text-xs font-heading font-semibold uppercase tracking-widest shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #FFB800, #e6a600)",
                      color: "#1a0e00",
                      boxShadow: "0 2px 12px rgba(255,184,0,0.3)",
                    }}
                  >
                    <MapPin className="size-3 shrink-0" /> {loc.shortName}
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className="font-card font-semibold uppercase text-2xl sm:text-xl mb-1"
                    style={{ color: "#FFB800" }}
                  >
                    {loc.name}
                  </h3>
                  <p className="text-base sm:text-sm text-white/60 mb-1">{loc.address}</p>
                  <p className="text-base sm:text-sm text-white/60 mb-4">{loc.city}</p>

                  <div
                    className="rounded-xl overflow-hidden mb-4 aspect-[5/3]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
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
                    <Button size="default" className="w-full text-base sm:text-sm">
                      <MapPin className="size-5 sm:size-4 shrink-0" /> Get Directions
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
