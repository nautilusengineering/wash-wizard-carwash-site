"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Wand, Crown, FlaskConical, ScrollText, Sparkles } from "lucide-react";
import { BUY_ONLINE_URL } from "@/lib/utils";

const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";
const GOLD = "#FFB800";

function FloatingStar({
  className,
  delay = "0s",
}: {
  className: string;
  delay?: string;
}) {
  return (
    <span
      className={`absolute pointer-events-none select-none animate-twinkle ${className}`}
      style={{ animationDelay: delay, color: "rgba(255,184,0,0.25)" }}
      aria-hidden="true"
    >
      ✦
    </span>
  );
}

function SparkleCanvas({ dark = true }: { dark?: boolean }) {
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
    };

    const sparkles: Sparkle[] = [];

    const spawn = (): Sparkle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 1.5 + Math.random() * 4,
      life: 0,
      maxLife: 80 + Math.random() * 100,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.04,
    });

    for (let i = 0; i < 12; i++) {
      const s = spawn();
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
        const ix = Math.cos(angle + Math.PI / 4) * r * 0.2;
        const iy = Math.sin(angle + Math.PI / 4) * r * 0.2;
        if (p === 0) ctx.moveTo(ox, oy);
        else ctx.lineTo(ox, oy);
        ctx.lineTo(ix, iy);
      }
      ctx.closePath();
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.3, dark ? "rgba(255,184,0,1)" : "rgba(255,184,0,0.9)");
      g.addColorStop(1, "rgba(255,184,0,0)");
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawnT++;
      if (spawnT > 25) {
        sparkles.push(spawn());
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
        drawStar(s.x, s.y, s.size, s.rotation, alpha * (dark ? 0.7 : 0.5));
        if (s.life >= s.maxLife) sparkles.splice(i, 1);
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Promos() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <FloatingStar className="top-12 left-[8%] text-lg" delay="0s" />
      <FloatingStar className="top-24 right-[12%] text-sm" delay="1.2s" />
      <FloatingStar className="bottom-20 left-[15%] text-base" delay="0.6s" />
      <FloatingStar className="bottom-32 right-[6%] text-xs" delay="1.8s" />
      <FloatingStar className="top-1/2 left-[4%] text-xs" delay="2.4s" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <p className="font-script text-magic text-sm tracking-wide mb-3">
            Wash Wizard Specials
          </p>
          <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl text-primary text-balance">
            Make your ride{" "}
            <span className="text-accent magic-underline">shine for less</span>
          </h2>
        </div>

        {/* Hero card */}
        <div
          className="relative rounded-2xl text-white p-8 sm:p-10 mb-6 shadow-2xl overflow-hidden"
          style={{ background: PURPLE_DARK }}
        >
          <SparkleCanvas dark={true} />
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${GOLD}66 30%, ${GOLD}AA 50%, ${GOLD}66 70%, transparent)`,
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${GOLD}18 0%, transparent 70%)`,
            }}
          />
          <Crown
            className="absolute -bottom-6 -right-6 w-48 h-48 pointer-events-none"
            style={{ color: "rgba(255,184,0,0.05)", zIndex: 1 }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span
                className="inline-flex items-center gap-1.5 py-1 pl-1.5 pr-3 rounded-full text-[0.625rem] font-heading font-bold uppercase tracking-widest mb-4"
                style={{ background: GOLD, color: "#1a1428" }}
              >
                <Crown className="size-3 shrink-0" /> Unlimited Wash Club
              </span>
              <h3 className="font-heading font-bold uppercase text-3xl sm:text-4xl lg:text-5xl mb-3">
                Cheapest Way to Wash
              </h3>
              <p
                className="text-sm sm:text-base max-w-xl text-pretty"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Lock in unlimited Magic Washes for just $20/mo. Cancel anytime.
                The fastest path from dirty ride to sparkling clean.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/packages">
                <button
                  className="btn-shimmer font-heading font-bold uppercase tracking-widest px-8 py-4 rounded-xl"
                  style={{
                    background: GOLD,
                    color: "#1a1428",
                    fontSize: 13,
                    border: "none",
                  }}
                >
                  Get Your Plan
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Best Value */}
          <div
            className="relative rounded-2xl text-white p-7 flex flex-col shadow-xl overflow-hidden"
            style={{ background: PURPLE_DARK, border: `1.5px solid ${GOLD}33` }}
          >
            <SparkleCanvas dark={true} />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${GOLD}55, transparent)`,
              }}
            />
            <Crown
              className="absolute -bottom-4 -right-4 w-32 h-32 pointer-events-none"
              style={{ color: "rgba(255,184,0,0.06)", zIndex: 1 }}
            />

            <div className="relative z-10 flex flex-col flex-1">
              <span
                className="inline-flex items-center w-fit gap-1.5 py-1 pl-1.5 pr-2.5 rounded-full text-[0.625rem] font-heading font-bold uppercase tracking-widest mb-5"
                style={{ background: GOLD, color: "#1a1428" }}
              >
                <Crown className="size-3 shrink-0" /> Best Value
              </span>
              <h3
                className="font-heading font-bold uppercase text-2xl mb-3"
                style={{ color: GOLD }}
              >
                The King's Wash — $30/mo
              </h3>
              <p
                className="text-sm mb-7 flex-1 text-pretty"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Unlimited graphene shine, sealant armor, and rain repellent. The
                wizard's choice when only legendary clean will do.
              </p>
              <Link href="/packages">
                <button
                  className="btn-shimmer w-full font-heading font-bold uppercase tracking-widest py-3 rounded-xl"
                  style={{
                    background: GOLD,
                    color: "#1a1428",
                    fontSize: 12,
                    border: "none",
                  }}
                >
                  Claim the Crown
                </button>
              </Link>
            </div>
          </div>

          {/* Annual Plan */}
          <div
            className="relative rounded-2xl text-white p-7 flex flex-col shadow-xl overflow-hidden"
            style={{
              background: PURPLE_DARK,
              border: "1.5px solid rgba(255,255,255,0.08)",
            }}
          >
            <SparkleCanvas dark={true} />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              }}
            />
            <FlaskConical
              className="absolute -bottom-4 -right-4 w-32 h-32 pointer-events-none"
              style={{ color: "rgba(255,255,255,0.04)", zIndex: 1 }}
            />

            <div className="relative z-10 flex flex-col flex-1">
              <span
                className="inline-flex items-center w-fit gap-1.5 py-1 pl-1.5 pr-2.5 rounded-full text-[0.625rem] font-heading font-bold uppercase tracking-widest mb-5"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <FlaskConical className="size-3 shrink-0" /> Annual Plan
              </span>
              <h3 className="font-heading font-bold uppercase text-2xl mb-3">
                Get Two Months Free
              </h3>
              <p
                className="text-sm mb-7 flex-1 text-pretty"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Pay annually and unlock 2 months of unlimited washes —
                completely free. The savviest spell in the spellbook.
              </p>
              <Link href="/packages">
                <button
                  className="btn-shimmer w-full font-heading font-bold uppercase tracking-widest py-3 rounded-xl"
                  style={{
                    background: GOLD,
                    color: "#1a1428",
                    fontSize: 12,
                    border: "none",
                  }}
                >
                  Save With Annual
                </button>
              </Link>
            </div>
          </div>

          {/* New Member Perk */}
          <div
            className="relative rounded-2xl p-7 flex flex-col overflow-hidden"
            style={{
              background: "#fff",
              border: `1.5px solid rgba(255,184,0,0.2)`,
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <SparkleCanvas dark={false} />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${GOLD}44, transparent)`,
              }}
            />
            <ScrollText
              className="absolute -bottom-4 -right-4 w-32 h-32 pointer-events-none"
              style={{ color: "rgba(255,184,0,0.08)", zIndex: 1 }}
            />

            <div className="relative z-10 flex flex-col flex-1">
              <span
                className="inline-flex items-center w-fit gap-1.5 py-1 pl-1.5 pr-2.5 rounded-full text-[0.625rem] font-heading font-bold uppercase tracking-widest mb-5"
                style={{
                  background: "linear-gradient(135deg, #2A2050, #1E1832)",
                  color: "#FFB800",
                }}
              >
                <Wand className="size-3 shrink-0" /> New Member Perk
              </span>
              <h3
                className="font-heading font-bold uppercase text-2xl mb-3"
                style={{ color: "#1a1428" }}
              >
                First Wash on Us
              </h3>
              <p
                className="text-sm mb-7 flex-1 text-pretty"
                style={{ color: "rgba(0,0,0,0.55)" }}
              >
                Sign up for any Unlimited Club tier and your first wash is on
                the wizard. No prorations, no fine print.
              </p>
              <a
                href={BUY_ONLINE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="btn-shimmer w-full font-heading font-bold uppercase tracking-widest py-3 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #2A2050, #1E1832)",
                    color: GOLD,
                    fontSize: 12,
                    border: "none",
                  }}
                >
                  Start Today
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
