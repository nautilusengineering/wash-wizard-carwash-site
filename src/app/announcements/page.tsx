import type { Metadata } from "next";
import Image from "next/image";
import { Wand } from "lucide-react";
import { announcements, type Announcement } from "@/lib/announcements";
import styles from "./announcements.module.css";

export const metadata: Metadata = {
  title: "Announcements",
  description:
    "Wizard Announcements — the latest magic in the making at Wash Wizard Car Wash: new perks, services, scents, and rewards across Summerville & Ladson, SC.",
  alternates: { canonical: "/announcements" },
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** "2026-09-12" -> "Sep 12, 2026" — pure string parse, no Date, no timezone drift. */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[(m - 1 + 12) % 12]} ${d}, ${y}`;
}

/** Four-pointed gold star — echoes the sparkles on the homepage crystal balls. */
function Sparkle({
  size = 14,
  delay = 0,
  className = "",
  style,
}: {
  size?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`${styles.sparkle} ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      <path
        d="M12 1C13.2 7.6 16.4 10.8 23 12C16.4 13.2 13.2 16.4 12 23C10.8 16.4 7.6 13.2 1 12C7.6 10.8 10.8 7.6 12 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Decorative layer for the cards: hover shimmer sweep + twinkling corner stars. */
function CardMagic({
  variant = "list",
  delay = 0,
}: {
  variant?: "featured" | "list";
  delay?: number;
}) {
  return (
    <>
      <div className={styles.sweepHost} aria-hidden="true" />
      {variant === "featured" ? (
        <>
          <Sparkle size={20} delay={delay} style={{ top: -10, left: -10 }} />
          <Sparkle size={12} delay={delay + 0.9} style={{ top: -6, right: 28 }} />
          <Sparkle size={10} delay={delay + 1.6} style={{ top: "44%", left: -5 }} />
          <Sparkle size={16} delay={delay + 0.5} style={{ bottom: -8, right: -8 }} />
        </>
      ) : (
        <>
          <Sparkle size={14} delay={delay} style={{ top: -7, left: -7 }} />
          <Sparkle size={11} delay={delay + 1.1} style={{ bottom: -5, right: -5 }} />
        </>
      )}
    </>
  );
}

/** Crescent moon — gold-cream, soft glow (shape matches the site's lunar motif). */
function CrescentMoon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className={styles.moon}
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Swirling magic-dust trail — dashed arc drifting from the wizard's wand. */
function DustTrail() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 420 150"
      className={`${styles.dustTrail} hidden sm:block`}
    >
      <path d="M6 128 C 96 22, 204 148, 300 54 S 398 18, 414 30" />
    </svg>
  );
}

/** Faint constellation — connected stars in the wide margins (xl+). */
function Constellation({
  style,
  flip = false,
}: {
  style?: React.CSSProperties;
  flip?: boolean;
}) {
  const pts: [number, number][] = [
    [6, 74],
    [38, 56],
    [70, 62],
    [98, 38],
    [128, 34],
    [148, 12],
    [172, 18],
  ];
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 180 86"
      width={170}
      height={81}
      className={`${styles.constellation} hidden xl:block`}
      style={{ ...(flip ? { transform: "scaleX(-1)" } : {}), ...style }}
    >
      <polyline points={pts.map((p) => p.join(",")).join(" ")} />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 2.4 : 1.6} />
      ))}
    </svg>
  );
}

function FeaturedAnnouncement({ a }: { a: Announcement }) {
  return (
    <article
      id={a.slug}
      className={`${styles.magicCard} scroll-mt-24 lg:scroll-mt-28 rounded-2xl lg:grid lg:grid-cols-[1.08fr_1fr] animate-fade-up-delay-1`}
    >
      <CardMagic variant="featured" />
      <div className="relative p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className={`${styles.goldFrame} w-full`}>
          <Image
            src={a.image}
            alt={a.imageAlt}
            width={a.imageWidth}
            height={a.imageHeight}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
      <div className="relative px-5 pb-6 sm:px-8 sm:pb-8 lg:p-10 lg:pl-4 flex flex-col justify-center">
        <p className="font-heading uppercase tracking-[0.28em] text-xs text-secondary mb-3">
          Latest &middot; <time dateTime={a.date}>{formatDate(a.date)}</time>
        </p>
        <h2
          className={`${styles.goldTitle} font-heading uppercase leading-[1.05] text-2xl sm:text-3xl lg:text-4xl text-balance`}
        >
          {a.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/85">
          {a.body}
        </p>
      </div>
    </article>
  );
}

function AnnouncementCard({ a, index }: { a: Announcement; index: number }) {
  return (
    <article
      id={a.slug}
      className={`${styles.magicCard} scroll-mt-24 lg:scroll-mt-28 rounded-2xl p-5 sm:p-6 flex items-start gap-4 sm:gap-6`}
    >
      <CardMagic delay={index * 0.45} />
      <div className="relative min-w-0 flex-1">
        <h2 className="leading-snug">
          <time
            dateTime={a.date}
            className="font-card font-semibold text-white/70 text-sm sm:text-base align-middle"
          >
            {formatDate(a.date)}
          </time>
          <span aria-hidden="true" className="text-white/40 text-sm sm:text-base align-middle">
            {" "}
            &mdash;{" "}
          </span>
          <span className="font-heading uppercase tracking-wide text-accent text-lg sm:text-xl align-middle">
            {a.title}
          </span>
        </h2>
        <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/85">
          {a.body}
        </p>
      </div>
      <div className={`${styles.goldFrame} relative w-24 sm:w-32 shrink-0`}>
        <Image
          src={a.image}
          alt={a.imageAlt}
          width={a.imageWidth}
          height={a.imageHeight}
          sizes="(min-width: 640px) 128px, 96px"
        />
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div
      className={`${styles.magicCard} mt-12 lg:mt-16 mx-auto max-w-2xl rounded-2xl px-6 py-14 sm:py-16 text-center animate-fade-up-delay-1`}
    >
      <CardMagic />
      <div className="relative">
        <Wand className="mx-auto w-10 h-10 text-accent animate-sparkle" aria-hidden="true" />
        <p className="mt-5 font-heading uppercase text-xl sm:text-2xl text-white leading-snug">
          No announcements right now &mdash; check back soon.
        </p>
        <p className="mt-3 text-white/75">
          The Wizard is always brewing up something new.
        </p>
      </div>
    </div>
  );
}

export default function AnnouncementsPage() {
  const [latest, ...older] = announcements;

  return (
    <section className={`${styles.wizardSky} relative overflow-hidden text-white pt-24 lg:pt-28 pb-24 lg:pb-32 min-h-[70svh]`}>
      {/* Dense twinkling starfield (two counter-phase layers) */}
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.starsFar} aria-hidden="true" />
      {/* Crescent moon + swirling magic dust */}
      <CrescentMoon />
      <DustTrail />
      {/* Faint constellations in the wide margins */}
      <Constellation style={{ top: "38%", left: "1.5%" }} />
      <Constellation style={{ bottom: "24%", right: "1%" }} flip />
      <div
        className="absolute top-10 left-[8%] text-accent/60 animate-sparkle hidden sm:block"
        aria-hidden="true"
      >
        <Wand className="w-6 h-6" />
      </div>
      <div
        className="absolute top-24 right-[12%] text-white/30 animate-sparkle hidden sm:block"
        style={{ animationDelay: "0.6s" }}
        aria-hidden="true"
      >
        <Wand className="w-4 h-4" />
      </div>
      {/* Faint twinkling starfield accents */}
      <Sparkle size={12} className="hidden sm:block" delay={0.4} style={{ top: "9rem", left: "19%" }} />
      <Sparkle size={9} className="hidden lg:block" delay={1.3} style={{ top: "38%", right: "6%" }} />
      <Sparkle size={10} delay={2.0} style={{ bottom: "9%", left: "9%" }} />
      <Sparkle size={8} className="hidden sm:block" delay={0.9} style={{ bottom: "20%", right: "15%" }} />
      <Sparkle size={9} delay={1.7} style={{ top: "3.5rem", left: "38%" }} />
      <Sparkle size={11} className="hidden lg:block" delay={2.6} style={{ top: "56%", left: "4%" }} />
      <Sparkle size={8} delay={0.2} style={{ bottom: "5.5%", right: "28%" }} />

      <div className="relative mx-auto w-full max-w-5xl px-4 lg:px-6">
        <h1 className="font-heading uppercase text-center text-accent leading-[1.05] text-3xl sm:text-4xl lg:text-5xl text-balance animate-fade-up">
          Wizard Announcements: Magic in the Making
        </h1>

        {announcements.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="mt-10 lg:mt-14">
              <FeaturedAnnouncement a={latest} />
            </div>
            {older.length > 0 && (
              <div className="mt-6 lg:mt-8 space-y-5 lg:space-y-6 animate-fade-up-delay-2">
                {older.map((a, i) => (
                  <AnnouncementCard key={a.slug} a={a} index={i} />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Glowing gold horizon — clear seam before the navy footer */}
      <div className={styles.horizon} aria-hidden="true">
        <div className={styles.horizonGlow} />
        <div className={styles.horizonLine} />
      </div>
    </section>
  );
}
