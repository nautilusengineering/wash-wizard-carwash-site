"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const driveAllAddr = encodeURIComponent("Wash Wizard Car Wash, Summerville, SC");

/* ─── Bubble canvas ─────────────────────────────────────── */
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
      x: number; y: number; r: number;
      vx: number; vy: number;
      opacity: number; phase: number; speed: number;
    };

    const bubbles: Bubble[] = [];

    const spawnBubble = (): Bubble => ({
      x: canvas.width * 0.72 + (Math.random() - 0.5) * 30,
      y: canvas.height * 0.56 + (Math.random() - 0.5) * 20,
      r: 6 + Math.random() * 18,
      vx: -(0.4 + Math.random() * 0.8),
      vy: -(0.5 + Math.random() * 0.9),
      opacity: 0,
      phase: Math.random() * Math.PI * 2,
      speed: 0.01 + Math.random() * 0.01,
    });

    for (let i = 0; i < 18; i++) {
      const b = spawnBubble();
      b.opacity = Math.random() * 0.7;
      bubbles.push(b);
    }

    let spawnTimer = 0;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawnTimer++;
      if (spawnTimer > 28) { bubbles.push(spawnBubble()); spawnTimer = 0; }

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.phase += b.speed;
        b.x += b.vx + Math.sin(b.phase) * 0.4;
        b.y += b.vy;
        b.opacity += b.opacity < 0.75 ? 0.012 : -0.003;

        if (b.y < -b.r * 2 || b.x < -b.r * 2 || b.opacity < 0) {
          bubbles.splice(i, 1);
          continue;
        }

        const grad = ctx.createRadialGradient(
          b.x - b.r * 0.3, b.y - b.r * 0.35, b.r * 0.05,
          b.x, b.y, b.r
        );
        grad.addColorStop(0, `rgba(200,245,255,${b.opacity * 0.9})`);
        grad.addColorStop(0.3, `rgba(100,210,255,${b.opacity * 0.55})`);
        grad.addColorStop(0.7, `rgba(0,180,230,${b.opacity * 0.3})`);
        grad.addColorStop(1, `rgba(0,120,200,${b.opacity * 0.15})`);

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(150,230,255,${b.opacity * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(b.x - b.r * 0.3, b.y - b.r * 0.32, b.r * 0.22, b.r * 0.13, -Math.PI / 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${b.opacity * 0.85})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 15 }} />;
}

/* ─── Sparkle canvas ────────────────────────────────────── */
function SparkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    type Sparkle = {
      x: number; y: number; size: number;
      life: number; maxLife: number; rotation: number; rotSpeed: number; color: string;
    };

    const COLORS = ["210,185,80", "195,170,65", "220,200,100", "200,180,70", "230,215,130", "255,255,200"];

    const sparkles: Sparkle[] = [];

    const spawnSparkle = (): Sparkle => ({
      x: Math.random() * canvas.width * 0.85,
      y: Math.random() * canvas.height * 0.9,
      size: 2.5 + Math.random() * 7,
      life: 0,
      maxLife: 60 + Math.random() * 80,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.05,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    for (let i = 0; i < 20; i++) {
      const s = spawnSparkle();
      s.life = Math.random() * s.maxLife;
      sparkles.push(s);
    }

    let spawnT = 0;
    let raf: number;

    const drawStar = (cx: number, cy: number, r: number, rot: number, alpha: number, color: string) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.globalAlpha = alpha;

      ctx.beginPath();
      for (let p = 0; p < 4; p++) {
        const angle = (p / 4) * Math.PI * 2;
        const ox = Math.cos(angle) * r;
        const oy = Math.sin(angle) * r;
        const ix = Math.cos(angle + Math.PI / 4) * r * 0.18;
        const iy = Math.sin(angle + Math.PI / 4) * r * 0.18;
        if (p === 0) ctx.moveTo(ox, oy); else ctx.lineTo(ox, oy);
        ctx.lineTo(ix, iy);
      }
      ctx.closePath();

      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
      g.addColorStop(0, `rgba(255,255,255,1)`);
      g.addColorStop(0.3, `rgba(${color},1)`);
      g.addColorStop(1, `rgba(${color},0)`);
      ctx.fillStyle = g;
      ctx.fill();

      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawnT++;
      if (spawnT > 20) { sparkles.push(spawnSparkle()); spawnT = 0; }

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.life++;
        s.rotation += s.rotSpeed;
        const progress = s.life / s.maxLife;
        const alpha = progress < 0.25 ? progress / 0.25 : progress > 0.75 ? (1 - progress) / 0.25 : 1;
        drawStar(s.x, s.y, s.size, s.rotation, alpha * 0.75, s.color);
        if (s.life >= s.maxLife) sparkles.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 14 }} />;
}

/* ─── Hero ──────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative pt-36 lg:pt-44 pb-12 lg:pb-16 bg-background overflow-hidden">
      {/* Load Luckiest Guy from Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');`}</style>

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div
          className="relative rounded-[2rem] overflow-hidden text-white shadow-2xl"
          style={{
            background: "linear-gradient(160deg, #1E1832 0%, #2A2050 25%, #32325A 55%, #281E3C 80%, #1A1428 100%)",
            boxShadow: "0 0 0 1px rgba(180,160,220,0.12), 0 32px 80px rgba(10,5,30,0.8)",
          }}
        >
          <SparkleCanvas />
          <BubbleCanvas />

          {/* Nebula depth glows */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse 55% 65% at 8% 45%, rgba(60,50,100,0.55) 0%, transparent 70%)",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse 40% 50% at 75% 15%, rgba(80,60,120,0.2) 0%, transparent 65%)",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse 60% 35% at 50% 100%, rgba(15,10,35,0.85) 0%, transparent 70%)",
            }} />
          </div>

          {/* Subtle gold shimmer top edge */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              zIndex: 6,
              background: "linear-gradient(90deg, transparent 0%, rgba(200,175,80,0.4) 30%, rgba(210,185,80,0.65) 50%, rgba(200,175,80,0.4) 70%, transparent 100%)",
            }}
          />

          {/* Two-column layout */}
          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] items-end" style={{ zIndex: 20 }}>

            {/* Left: content */}
            <div className="px-6 sm:px-10 lg:px-14 pt-10 lg:pt-12 pb-10 lg:pb-12">

              {/* Headline — Luckiest Guy */}
              <h1
                className="uppercase leading-[0.92] text-6xl sm:text-7xl lg:text-8xl mb-5 animate-fade-up-delay-1"
                style={{ fontFamily: "'Luckiest Guy', cursive", letterSpacing: "0.02em" }}
              >
                We love
                <br />
                <span style={{
                  color: "#C8A84B",
                  textShadow: "0 0 24px rgba(180,145,50,0.35), 0 2px 4px rgba(0,0,0,0.5)",
                }}>
                  clean cars.
                </span>
              </h1>

              {/* Body */}
              <p className="text-base sm:text-lg text-white/75 max-w-md mb-8 leading-relaxed animate-fade-up-delay-2">
                Sparkling clean, lightning fast, and a little bit magical. Pull
                through the 180-foot wizard tunnel at any of our three
                Lowcountry locations and roll out gleaming.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-delay-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${driveAllAddr}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2 font-bold transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
                    style={{ backgroundColor: "#C8A84B", color: "#1a1428", borderColor: "transparent" }}
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </Button>
                </a>
                <Link href="/packages" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto font-bold transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      borderColor: "rgba(255,255,255,0.4)",
                      color: "#ffffff",
                      background: "rgba(255,255,255,0.07)",
                    }}
                  >
                    See Wash Packages
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: wizard — flush to bottom */}
            <div
              className="hidden lg:flex items-end justify-center self-end pointer-events-none select-none"
              style={{ paddingBottom: 0 }}
            >
              <Image
                src="/images/wizard-mascot.png"
                alt="Wash Wizard mascot"
                width={549}
                height={600}
                className="w-full h-auto object-contain object-bottom"
                style={{
                  maxHeight: "420px",
                  filter: "drop-shadow(0 0 24px rgba(0,195,255,0.25)) drop-shadow(0 16px 32px rgba(0,0,0,0.6))",
                }}
                priority
              />
            </div>
          </div>

          {/* Bottom ribbon */}
          <div className="relative z-20 border-t border-white/10 bg-deep/50 backdrop-blur-sm">
            <div className="px-6 sm:px-10 lg:px-14 py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-heading uppercase tracking-widest">
              <span style={{ color: "#C8A84B" }}>★ Unlimited Wash Club from $20/mo</span>
              <span style={{ color: "#C8A84B" }} className="hidden sm:block">★ Free DIY Vacuums With Every Wash</span>
              <span style={{ color: "#C8A84B" }}>★ Open 7 Days a Week</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}