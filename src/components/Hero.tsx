"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const driveAllAddr = encodeURIComponent(
  "Wash Wizard Car Wash, Summerville, SC",
);
const GOLD = "#FFB800";

type Phase = "wizard-in" | "zap" | "reveal" | "wizard-out" | "done";

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
      x: canvas.width * 0.5 + (Math.random() - 0.5) * canvas.width * 0.6,
      y: canvas.height * 0.5 + (Math.random() - 0.5) * canvas.height * 0.3,
      r: 6 + Math.random() * 18,
      vx: (Math.random() - 0.5) * 0.6,
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
      if (spawnTimer > 28) {
        bubbles.push(spawnBubble());
        spawnTimer = 0;
      }

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
          b.x - b.r * 0.3,
          b.y - b.r * 0.35,
          b.r * 0.05,
          b.x,
          b.y,
          b.r,
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
        ctx.ellipse(
          b.x - b.r * 0.3,
          b.y - b.r * 0.32,
          b.r * 0.22,
          b.r * 0.13,
          -Math.PI / 5,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = `rgba(255,255,255,${b.opacity * 0.85})`;
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
      style={{ zIndex: 15 }}
    />
  );
}

/* ─── Sparkle canvas ────────────────────────────────────── */
function SparkleCanvas() {
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

    type Sparkle = {
      x: number;
      y: number;
      size: number;
      life: number;
      maxLife: number;
      rotation: number;
      rotSpeed: number;
      color: string;
    };

    const COLORS = [
      "139,92,246",
      "160,100,255",
      "120,60,220",
      "180,140,255",
      "100,40,200",
      "200,170,255",
    ];

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

    const drawStar = (
      cx: number,
      cy: number,
      r: number,
      rot: number,
      alpha: number,
      color: string,
    ) => {
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
        if (p === 0) ctx.moveTo(ox, oy);
        else ctx.lineTo(ox, oy);
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
      if (spawnT > 20) {
        sparkles.push(spawnSparkle());
        spawnT = 0;
      }

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.life++;
        s.rotation += s.rotSpeed;
        const progress = s.life / s.maxLife;
        const alpha =
          progress < 0.25
            ? progress / 0.25
            : progress > 0.75
              ? (1 - progress) / 0.25
              : 1;
        drawStar(s.x, s.y, s.size, s.rotation, alpha * 0.75, s.color);
        if (s.life >= s.maxLife) sparkles.splice(i, 1);
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
      style={{ zIndex: 14 }}
    />
  );
}

/* ─── Magic zap canvas ─────────────────────────────────── */
function ZapCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Adjusted to match wand tip position (higher up on the wizard)
    const startX = canvas.width * 0.2;
    const startY = canvas.height * 0.7;
    const endX = canvas.width * 0.5;
    const endY = canvas.height * 0.5;

    let frame = 0;
    const totalFrames = 35;
    let raf: number;

    const drawLightning = (
      sx: number,
      sy: number,
      ex: number,
      ey: number,
      progress: number,
      width: number,
      color: string,
    ) => {
      const dx = ex - sx;
      const dy = ey - sy;
      const segments = 12;
      const reachSeg = Math.floor(segments * Math.min(progress * 1.5, 1));

      ctx.beginPath();
      ctx.moveTo(sx, sy);

      for (let i = 1; i <= reachSeg; i++) {
        const t = i / segments;
        const jitterX = (Math.random() - 0.5) * 30 * (1 - t);
        const jitterY = (Math.random() - 0.5) * 20 * (1 - t);
        const px = sx + dx * t + jitterX;
        const py = sy + dy * t + jitterY;
        ctx.lineTo(px, py);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      const progress = frame / totalFrames;

      if (progress <= 1) {
        ctx.shadowColor = "rgba(255,184,0,0.8)";
        ctx.shadowBlur = 25;
        drawLightning(
          startX,
          startY,
          endX,
          endY,
          progress,
          4,
          "rgba(255,255,255,0.9)",
        );
        ctx.shadowBlur = 15;
        drawLightning(startX, startY, endX, endY, progress, 2, GOLD);
        drawLightning(
          startX + 5,
          startY - 5,
          endX,
          endY,
          progress,
          1.5,
          "rgba(255,220,100,0.7)",
        );
        ctx.shadowBlur = 0;

        if (progress > 0.6) {
          const burstAlpha = (progress - 0.6) / 0.4;
          const burstR = burstAlpha * 120;
          const grad = ctx.createRadialGradient(
            endX,
            endY,
            0,
            endX,
            endY,
            burstR,
          );
          grad.addColorStop(0, `rgba(255,255,255,${0.9 * (1 - burstAlpha)})`);
          grad.addColorStop(0.3, `rgba(255,184,0,${0.6 * (1 - burstAlpha)})`);
          grad.addColorStop(1, "rgba(255,184,0,0)");
          ctx.fillStyle = grad;
          ctx.fillRect(endX - burstR, endY - burstR, burstR * 2, burstR * 2);
        }
      }

      if (frame < totalFrames + 10) {
        raf = requestAnimationFrame(draw);
      }
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 25, opacity: active ? 1 : 0 }}
    />
  );
}

/* ─── Hero ──────────────────────────────────────────────── */
export default function Hero() {
  const [phase, setPhase] = useState<Phase>("wizard-in");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("zap"), 900),
      setTimeout(() => setPhase("reveal"), 1700),
      setTimeout(() => setPhase("wizard-out"), 2800),
      setTimeout(() => setPhase("done"), 3800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const wizardVisible = phase !== "done";
  const videoRevealed =
    phase === "reveal" || phase === "wizard-out" || phase === "done";
  const textVisible =
    phase === "reveal" || phase === "wizard-out" || phase === "done";

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-16 bg-white overflow-hidden">
      <style>{`
        @keyframes wizardSlideIn {
          0%   { transform: translateX(-200px) scale(0.7); opacity: 0; }
          65%  { transform: translateX(8px) scale(1.03); opacity: 1; }
          100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes wizardSlideOut {
          0%   { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(-200px) scale(0.7); opacity: 0; }
        }
        @keyframes flashReveal {
          0%   { opacity: 0; transform: scale(0.8); filter: brightness(3); }
          40%  { opacity: 1; transform: scale(1.04); filter: brightness(1.6); }
          100% { opacity: 1; transform: scale(1); filter: brightness(1); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 30px rgba(255,184,0,0.4), 0 0 60px rgba(255,184,0,0.2), 0 2px 4px rgba(0,0,0,0.5); }
          50%      { text-shadow: 0 0 40px rgba(255,184,0,0.6), 0 0 80px rgba(255,184,0,0.3), 0 2px 4px rgba(0,0,0,0.5); }
        }
        @keyframes screenFlash {
          0%   { opacity: 0; }
          20%  { opacity: 0.8; }
          100% { opacity: 0; }
        }
        @keyframes overlayLift {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* ── Video card ── */}
        <div
          className="relative rounded-[2rem] overflow-hidden text-white shadow-2xl"
          style={{
            boxShadow: "0 0 0 1px rgba(180,160,220,0.12)",
          }}
        >
          {/* YouTube video background */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <iframe
              src="https://www.youtube.com/embed/_NSsCicryZE?autoplay=1&mute=1&loop=1&playlist=_NSsCicryZE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&start=13&end=33"
              allow="autoplay; encrypted-media"
              className="absolute top-1/2 left-1/2 min-w-[140%] min-h-[140%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ border: 0, aspectRatio: "16/9" }}
              tabIndex={-1}
              aria-hidden="true"
            />
          </div>

          {/* Dark overlay — covers video until zap reveals it */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 3,
              background:
                "linear-gradient(160deg, #1E1832 0%, #2A2050 25%, #32325A 55%, #281E3C 80%, #1A1428 100%)",
              opacity: videoRevealed ? 0 : 1,
              animation: videoRevealed
                ? "overlayLift 0.8s ease-out forwards"
                : "none",
            }}
          />

          {/* Semi-transparent overlay (stays for readability) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 4,
              background:
                "linear-gradient(180deg, rgba(20,12,40,0.45) 0%, rgba(30,20,55,0.35) 50%, rgba(20,12,40,0.50) 100%)",
            }}
          />

          <SparkleCanvas />

          {/* Flash overlay on zap impact */}
          {phase === "zap" && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: 26,
                background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5), rgba(255,184,0,0.3) 40%, transparent 70%)`,
                animation: "screenFlash 0.7s ease-out forwards",
              }}
            />
          )}

          {/* Subtle gold shimmer top edge */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              zIndex: 6,
              background: `linear-gradient(90deg, transparent 0%, ${GOLD}66 30%, ${GOLD}A6 50%, ${GOLD}66 70%, transparent 100%)`,
            }}
          />

          {/* Zap lightning */}
          <ZapCanvas active={phase === "zap"} />

          {/* Bubble canvas */}
          <BubbleCanvas />

          {/* Wizard mascot */}
          {wizardVisible && (
            <div
              className="absolute bottom-0 left-2 sm:left-8 lg:left-12 pointer-events-none"
              style={{
                zIndex: 30,
                width: "clamp(120px, 32vw, 340px)",
                animation:
                  phase === "wizard-out"
                    ? "wizardSlideOut 0.9s cubic-bezier(0.6, -0.28, 0.74, 0.05) forwards"
                    : "wizardSlideIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              }}
            >
              <Image
                src="https://ucarecdn.com/43922423-7fb1-4544-a761-23782edcdae2/wizard-mascot.png"
                alt="Wash Wizard mascot"
                width={340}
                height={402}
                style={{
                  width: "100%",
                  height: "auto",
                  transform: "scaleX(-1)",
                }}
                priority
              />
            </div>
          )}

          {/* Centered headline + CTAs — appear after zap */}
          <div
            className="relative flex flex-col items-center justify-center py-20 sm:py-32 lg:py-40 px-4"
            style={{ zIndex: 20 }}
          >
            <h1
              className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading"
              style={{
                letterSpacing: "0.03em",
                lineHeight: 0.92,
                color: GOLD,
                textShadow: `0 0 30px rgba(255,184,0,0.4), 0 0 60px rgba(255,184,0,0.2), 0 2px 4px rgba(0,0,0,0.5)`,
                opacity: textVisible ? 1 : 0,
                animation: textVisible
                  ? "flashReveal 0.6s ease-out forwards, glowPulse 4s ease-in-out 0.6s infinite"
                  : "none",
              }}
            >
              We love
              <br />
              clean cars.
            </h1>

            {/* Branded tagline */}
            <p
              className="mt-6 max-w-2xl text-center text-lg sm:text-xl lg:text-2xl text-white font-heading uppercase tracking-[0.18em] sm:tracking-[0.22em]"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.65)",
                opacity: textVisible ? 1 : 0,
                transition: "opacity 0.45s ease 0.2s",
              }}
            >
              Summerville&apos;s magical car wash —{" "}
              <span>pull up dirty, drive off legendary.</span>
            </p>

            {/* CTAs — fade in with text */}
            <div
              className="mt-7 w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-sm sm:max-w-none"
              style={{
                opacity: textVisible ? 1 : 0,
                transition: "opacity 0.4s ease 0.3s",
              }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${driveAllAddr}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="size-5 sm:size-4 shrink-0" />
                  Get Directions
                </a>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/packages">See Wash Packages</Link>
              </Button>
            </div>
          </div>

          {/* Bottom ribbon */}
          <div className="relative z-20 border-t border-white/10 bg-deep/50 backdrop-blur-sm">
            <div className="px-4 sm:px-10 lg:px-14 py-3 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-2 sm:gap-3 text-sm font-heading uppercase tracking-widest text-center sm:text-left">
              <span style={{ color: GOLD }}>
                ★ Unlimited Wash Club from $14.99 a month
              </span>
              <span style={{ color: GOLD }} className="hidden md:block">
                ★ DIY Vacuums Included With Every Wash
              </span>
              <span style={{ color: GOLD }}>★ Open 7 Days a Week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
