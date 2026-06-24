"use client";

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

    const COLORS = ["139,92,246", "160,100,255", "120,60,220", "180,140,255", "100,40,200", "200,170,255"];

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
    <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        {/* ── Video card — centered headline only ── */}
        <div
          className="relative rounded-[2rem] overflow-hidden text-white shadow-2xl"
          style={{
            background: "linear-gradient(160deg, #1E1832 0%, #2A2050 25%, #32325A 55%, #281E3C 80%, #1A1428 100%)",
            boxShadow: "0 0 0 1px rgba(180,160,220,0.12), 0 32px 80px rgba(10,5,30,0.8)",
          }}
        >
          {/* YouTube video background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
            <iframe
              src="https://www.youtube.com/embed/_NSsCicryZE?autoplay=1&mute=1&loop=1&playlist=_NSsCicryZE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
              allow="autoplay; encrypted-media"
              className="absolute top-1/2 left-1/2 min-w-[140%] min-h-[140%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ border: 0, aspectRatio: "16/9" }}
              tabIndex={-1}
              aria-hidden="true"
            />
          </div>

          {/* Semi-transparent overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 2,
              background: "linear-gradient(180deg, rgba(20,12,40,0.45) 0%, rgba(30,20,55,0.35) 50%, rgba(20,12,40,0.50) 100%)",
            }}
          />

          <SparkleCanvas />

          {/* Subtle gold shimmer top edge */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              zIndex: 6,
              background: "linear-gradient(90deg, transparent 0%, rgba(200,175,80,0.4) 30%, rgba(210,185,80,0.65) 50%, rgba(200,175,80,0.4) 70%, transparent 100%)",
            }}
          />

          {/* Centered headline */}
          <div className="relative flex items-center justify-center py-24 sm:py-32 lg:py-40" style={{ zIndex: 20 }}>
            <h1
              className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-9xl animate-fade-up"
              style={{
                fontFamily: "'Luckiest Guy', cursive",
                letterSpacing: "0.03em",
                lineHeight: 0.92,
                color: "#C8A84B",
                textShadow: "0 0 30px rgba(200,168,75,0.4), 0 0 60px rgba(200,168,75,0.2), 0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              We love
              <br />
              clean cars.
            </h1>
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

        {/* ── Centered CTAs below video ── */}
        <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up-delay-1">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${driveAllAddr}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gap-2 font-bold"
              style={{ backgroundColor: "#C8A84B", color: "#1a1428", borderColor: "transparent" }}
            >
              <MapPin className="size-4 shrink-0" />
              Get Directions
            </Button>
          </a>
          <Link href="/packages">
            <Button
              size="lg"
              className="font-bold"
              style={{ backgroundColor: "#C8A84B", color: "#1a1428", borderColor: "transparent" }}
            >
              See Wash Packages
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}