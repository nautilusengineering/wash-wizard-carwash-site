"use client";

import { useEffect, useRef } from "react";
import { Wand } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Pull Up & Pay",
    body: "Three lanes, no wait. License plate recognition checks in Unlimited Club members automatically.",
  },
  {
    num: "02",
    title: "180 Feet of Wizardry",
    body: "An extra long wash tunnel and amazing LED light show your kids will beg to repeat.",
  },
  {
    num: "03",
    title: "Shine & Protect",
    body: "An extensive wash process plus available ceramic & graphene coatings, and buffing — gentle on paint, ruthless on grime.",
  },
  {
    num: "04",
    title: "Dry & Detail",
    body: "25 shaded vacuum bays, microfiber towels, air tool, glass & interior spray, floor mat cleaners — all included with your wash!",
  },
];

function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Bubble = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      opacity: number;
      phase: number;
      speed: number;
    };

    const bubbles: Bubble[] = [];

    const spawnBubble = (): Bubble => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      r: 8 + Math.random() * 28,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(0.4 + Math.random() * 0.7),
      opacity: 0,
      phase: Math.random() * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.012,
    });

    for (let i = 0; i < 22; i++) {
      const b = spawnBubble();
      b.y = Math.random() * canvas.height;
      b.opacity = Math.random() * 0.5;
      bubbles.push(b);
    }

    let spawnTimer = 0;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawnTimer++;
      if (spawnTimer > 35) {
        bubbles.push(spawnBubble());
        spawnTimer = 0;
      }

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.phase += b.speed;
        b.x += b.vx + Math.sin(b.phase) * 0.5;
        b.y += b.vy;
        b.opacity += b.opacity < 0.55 ? 0.008 : -0.002;

        if (b.y < -b.r * 2 || b.opacity < 0) {
          bubbles.splice(i, 1);
          continue;
        }

        const grad = ctx.createRadialGradient(
          b.x - b.r * 0.3,
          b.y - b.r * 0.35,
          b.r * 0.05,
          b.x,
          b.y,
          b.r,
        );
        grad.addColorStop(0, `rgba(180,160,255,${b.opacity * 0.7})`);
        grad.addColorStop(0.3, `rgba(120,100,220,${b.opacity * 0.4})`);
        grad.addColorStop(0.7, `rgba(80,60,180,${b.opacity * 0.2})`);
        grad.addColorStop(1, `rgba(42,32,80,${b.opacity * 0.08})`);

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(160,140,255,${b.opacity * 0.45})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(
          b.x - b.r * 0.28,
          b.y - b.r * 0.3,
          b.r * 0.2,
          b.r * 0.11,
          -Math.PI / 5,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = `rgba(255,255,255,${b.opacity * 0.75})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Amenities() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <BubbleCanvas />

      <div
        className="relative mx-auto max-w-7xl px-4 lg:px-6"
        style={{ zIndex: 1 }}
      >
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="font-heading font-bold uppercase text-4xl lg:text-5xl xl:text-6xl text-primary leading-[0.95] mb-5">
            How the <span className="text-accent">magic</span> happens
          </h2>
          <p className="text-lg lg:text-xl text-foreground leading-relaxed max-w-[48ch]">
            Every location engineered for a fast, flawless clean — from the
            first pay lane to the last vacuum bay.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group relative flex flex-col p-6 lg:p-7 rounded-2xl border-2 border-border bg-white/80 backdrop-blur-sm hover:border-[#2A2050]/20 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-xl grid place-items-center font-heading text-2xl font-bold text-white shadow-md group-hover:scale-105 transition-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, #2A2050 0%, #1E1832 100%)",
                  }}
                >
                  {step.num}
                </div>
                <Wand className="w-5 h-5 text-accent/30 group-hover:text-accent group-hover:rotate-12 transition-all duration-200" />
              </div>

              <h3 className="font-card font-bold uppercase text-xl sm:text-lg text-primary mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-base sm:text-sm text-foreground leading-relaxed">
                {step.body}
              </p>

              {i < steps.length - 1 && (
                <div
                  className="hidden xl:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-px"
                  style={{ background: "rgba(42,32,80,0.15)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Free vacuums callout */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-accent/20 bg-white/70 backdrop-blur-sm text-primary font-heading font-extrabold uppercase tracking-widest text-base sm:text-lg">
            <Wand className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            Vacuums Included With The Wash Package
          </div>
        </div>

      </div>
    </section>
  );
}
