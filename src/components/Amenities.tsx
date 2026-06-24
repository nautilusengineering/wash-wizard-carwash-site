"use client";

import Link from "next/link";
import Image from "next/image";
import { BUY_ONLINE_URL } from "@/lib/utils";

interface Flag {
  label: string;
  heading: string;
  sub: string;
  border: "purple" | "gold";
  cta: string;
  href: string;
  external?: boolean;
  useWizard?: boolean;
}

const flags: Flag[] = [
  {
    label: "Unlimited Club",
    heading: "Wash Every Day",
    sub: "From $20/mo. Cancel anytime.",
    border: "purple",
    cta: "Get Your Plan",
    href: "/packages",
    useWizard: true,
  },
  {
    label: "Best Value",
    heading: "King's Graphene",
    sub: "Ceramic shine. Legendary clean.",
    border: "gold",
    cta: "Claim the Crown",
    href: "/packages",
  },
  {
    label: "Annual Plan",
    heading: "Two Months Free",
    sub: "Pay yearly, wash all year.",
    border: "purple",
    cta: "Save With Annual",
    href: "/packages",
  },
  {
    label: "New Member",
    heading: "First Wash Free",
    sub: "Sign up for any club tier.",
    border: "gold",
    cta: "Start Today",
    href: BUY_ONLINE_URL,
    external: true,
    useWizard: true,
  },
];

/* ── Illustrated fill for flags without a photo ── */
function FlagIllustration({ border, heading }: { border: "purple" | "gold"; heading: string }) {
  const isPurple = border === "purple";
  const starColor = isPurple ? "rgba(180,140,255,0.55)" : "rgba(220,170,30,0.55)";
  const starColor2 = isPurple ? "rgba(140,90,220,0.35)" : "rgba(200,150,10,0.35)";
  const glowColor = isPurple ? "rgba(100,50,180,0.18)" : "rgba(180,130,0,0.18)";

  // Unique illustration per card based on heading
  const isGraphene = heading.includes("Graphene");
  const isMonths = heading.includes("Months");

  return (
    <svg viewBox="0 0 182 110" xmlns="http://www.w3.org/2000/svg" width="182" height="110">
      {/* ambient glow */}
      <ellipse cx="91" cy="55" rx="70" ry="45" fill={glowColor} />

      {isGraphene && (
        /* car silhouette */
        <g opacity="0.6" fill={isPurple ? "#4A2D6B" : "#9A7008"}>
          <ellipse cx="91" cy="80" rx="55" ry="6" fill="rgba(0,0,0,0.08)" />
          <rect x="36" y="58" width="110" height="22" rx="4" />
          <path d="M52,58 Q60,36 80,32 L102,32 Q122,36 130,58 Z" />
          <circle cx="58" cy="80" r="10" fill="none" stroke={isPurple ? "#4A2D6B" : "#9A7008"} strokeWidth="5" />
          <circle cx="58" cy="80" r="4" />
          <circle cx="124" cy="80" r="10" fill="none" stroke={isPurple ? "#4A2D6B" : "#9A7008"} strokeWidth="5" />
          <circle cx="124" cy="80" r="4" />
          <rect x="38" y="46" width="38" height="14" rx="2" opacity="0.5" />
          <rect x="106" y="46" width="38" height="14" rx="2" opacity="0.5" />
        </g>
      )}

      {isMonths && (
        /* calendar + sparkles */
        <g>
          <rect x="56" y="25" width="70" height="68" rx="6" fill={isPurple ? "rgba(74,45,107,0.15)" : "rgba(154,112,8,0.12)"} stroke={isPurple ? "#4A2D6B" : "#9A7008"} strokeWidth="1.5" />
          <rect x="56" y="25" width="70" height="18" rx="6" fill={isPurple ? "#2E1A4A" : "#9A7008"} />
          <rect x="56" y="36" width="70" height="7" fill={isPurple ? "#2E1A4A" : "#9A7008"} />
          {/* calendar dots */}
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((i) => (
            <circle key={i}
              cx={68 + (i % 5) * 13} cy={58 + Math.floor(i / 5) * 14}
              r="3"
              fill={i === 4 || i === 9 ? (isPurple ? "#8B5CF6" : "#C8A020") : "rgba(100,70,10,0.25)"}
            />
          ))}
          <text x="71" y="40" fontSize="9" fill="white" fontFamily="Georgia,serif" fontWeight="bold">2 FREE</text>
          {/* sparkles */}
          <text x="40" y="35" fontSize="14" textAnchor="middle">✦</text>
          <text x="148" y="50" fontSize="10" textAnchor="middle" fill={starColor}>✦</text>
          <text x="45" y="75" fontSize="8" textAnchor="middle" fill={starColor2}>✦</text>
        </g>
      )}

      {!isGraphene && !isMonths && (
        /* generic stars/wand illustration */
        <g>
          {/* wand */}
          <line x1="60" y1="85" x2="110" y2="35" stroke={isPurple ? "#4A2D6B" : "#9A7008"} strokeWidth="3" strokeLinecap="round" />
          <circle cx="110" cy="35" r="8" fill={isPurple ? "#6D28D9" : "#C8A020"} opacity="0.9" />
          <circle cx="110" cy="35" r="4" fill="white" opacity="0.6" />
          {/* sparkle trail */}
          {[
            { x: 95, y: 50, s: 10 },
            { x: 80, y: 63, s: 7 },
            { x: 70, y: 73, s: 5 },
          ].map((sp, i) => (
            <text key={i} x={sp.x} y={sp.y} fontSize={sp.s} textAnchor="middle" fill={starColor}>✦</text>
          ))}
          <text x="130" y="28" fontSize="12" textAnchor="middle" fill={starColor}>★</text>
          <text x="50" y="40" fontSize="9" textAnchor="middle" fill={starColor2}>★</text>
          <text x="140" y="70" fontSize="8" textAnchor="middle" fill={starColor2}>✦</text>
        </g>
      )}

      {/* floating stars always */}
      <text x="30" y="55" fontSize="8" fill={starColor}>✦</text>
      <text x="152" y="35" fontSize="7" fill={starColor2}>✦</text>
    </svg>
  );
}

function PennantFlag({ flag }: { flag: Flag }) {
  const isPurple = flag.border === "purple";
  const outerFill  = isPurple ? "#2E1A4A" : "#7A5600";
  const outerFill2 = isPurple ? "#3D2260" : "#B8860B";
  const accentDark = isPurple ? "#1A0A30" : "#4A2E00";
  const labelText  = isPurple ? "#E8D5FF" : "#FFF3B0";
  const accentLine = isPurple ? "rgba(180,140,255,0.4)" : "rgba(220,180,40,0.45)";

  // Pennant geometry
  const W   = 240;
  const H   = 370;
  const tipX = W / 2;
  const tipY = H;
  const bodyH = H * 0.80;
  const pad = 11;

  const outerPath = `M0,0 L${W},0 L${W},${bodyH} L${tipX},${tipY} L0,${bodyH} Z`;
  const innerPath = `M${pad},${pad} L${W-pad},${pad} L${W-pad},${bodyH-4} L${tipX},${tipY-pad*1.5} L${pad},${bodyH-4} Z`;

  // illustration area sits inside the parchment
  const illusY = pad + 8;
  const illusH = 118;
  const illusW = W - pad * 2 - 4;

  const svgContent = (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      style={{ display: "block", filter: "drop-shadow(0 10px 28px rgba(0,0,0,0.22))" }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      aria-label={flag.heading}
    >
      <defs>
        <linearGradient id={`outer-${flag.label}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={outerFill} />
          <stop offset="100%" stopColor={outerFill2} />
        </linearGradient>
        <linearGradient id={`parch-${flag.label}`} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#fdf8ec" />
          <stop offset="50%" stopColor="#f5e6b8" />
          <stop offset="100%" stopColor="#edd898" />
        </linearGradient>
        <clipPath id={`inner-clip-${flag.label}`}>
          <path d={innerPath} />
        </clipPath>
        <clipPath id={`illus-clip-${flag.label}`}>
          <rect x={pad + 2} y={illusY} width={illusW} height={illusH} rx="3" />
        </clipPath>
      </defs>

      {/* ── Outer border pennant ── */}
      <path d={outerPath} fill={`url(#outer-${flag.label})`} />

      {/* ── Inner accent stripe ── */}
      <path
        d={`M${pad-4},${pad-4} L${W-pad+4},${pad-4} L${W-pad+4},${bodyH-1} L${tipX},${tipY-pad+3} L${pad-4},${bodyH-1} Z`}
        fill="none"
        stroke={accentLine}
        strokeWidth="1.5"
      />

      {/* ── Parchment body ── */}
      <path d={innerPath} fill={`url(#parch-${flag.label})`} />

      {/* ── Parchment grain lines ── */}
      <g clipPath={`url(#inner-clip-${flag.label})`}>
        {[150, 172, 194, 216, 238, 260, 278, 295].map((y) => (
          <line key={y} x1={pad+4} y1={y} x2={W-pad-4} y2={y}
            stroke="rgba(150,110,20,0.07)" strokeWidth="0.8" />
        ))}
      </g>

      {/* ── Illustration area (clipped rect inside parchment) ── */}
      <g clipPath={`url(#illus-clip-${flag.label})`}>
        {/* parchment bg for illustration area */}
        <rect x={pad+2} y={illusY} width={illusW} height={illusH}
          fill={isPurple ? "rgba(60,30,90,0.08)" : "rgba(140,100,0,0.07)"} />

        {flag.useWizard ? (
          /* Wizard mascot centered in illustration zone */
          <image
            href="/images/wizard-mascot.png"
            x={tipX - 48}
            y={illusY - 4}
            width={96}
            height={illusH + 4}
            preserveAspectRatio="xMidYMax meet"
          />
        ) : (
          /* Inline SVG illustration */
          <g transform={`translate(${pad + 2}, ${illusY})`}>
            <FlagIllustration border={flag.border} heading={flag.heading} />
          </g>
        )}

        {/* fade bottom of illustration into parchment */}
        <defs>
          <linearGradient id={`fade-${flag.label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#f5e6b8" />
          </linearGradient>
        </defs>
        <rect x={pad+2} y={illusY + illusH - 36} width={illusW} height={36}
          fill={`url(#fade-${flag.label})`} />
      </g>

      {/* ── Grommet left ── */}
      <circle cx="24" cy="20" r="8"  fill="#A07010" />
      <circle cx="24" cy="20" r="5"  fill="#1C1000" />
      <circle cx="24" cy="20" r="3"  fill="#C8A020" />
      <circle cx="22" cy="18" r="1"  fill="rgba(255,240,150,0.7)" />

      {/* ── Grommet right ── */}
      <circle cx={W-24} cy="20" r="8"  fill="#A07010" />
      <circle cx={W-24} cy="20" r="5"  fill="#1C1000" />
      <circle cx={W-24} cy="20" r="3"  fill="#C8A020" />
      <circle cx={W-26} cy="18" r="1"  fill="rgba(255,240,150,0.7)" />

      {/* ── Text content below illustration ── */}
      {/* Decorative rule */}
      <line x1={pad+20} y1={illusY+illusH+8} x2={W-pad-20} y2={illusY+illusH+8}
        stroke="#b08020" strokeWidth="0.8" strokeOpacity="0.45" />
      <text x={tipX} y={illusY+illusH+13} textAnchor="middle"
        fontSize="9" fill="#b08020" opacity="0.55">❧</text>
      <line x1={pad+20} y1={illusY+illusH+18} x2={W-pad-20} y2={illusY+illusH+18}
        stroke="#b08020" strokeWidth="0.8" strokeOpacity="0.45" />

      {/* Label pill */}
      <rect x={pad+20} y={illusY+illusH+24} width={W-(pad+20)*2} height={19}
        rx="2" fill={accentDark} opacity="0.88" />
      <text x={tipX} y={illusY+illusH+37}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        fontSize="8.5"
        fill={labelText}
        letterSpacing="2"
      >{flag.label.toUpperCase()}</text>

      {/* Heading */}
      <text x={tipX} y={illusY+illusH+66}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        fontSize="16"
        fill="#1a0e00"
        letterSpacing="0.3"
      >{flag.heading}</text>

      {/* Sub line */}
      <text x={tipX} y={illusY+illusH+84}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontSize="11"
        fill="#7a5a10"
      >{flag.sub}</text>

      {/* CTA button */}
      <rect x={pad+18} y={illusY+illusH+96} width={W-(pad+18)*2} height={26}
        rx="3" fill={accentDark} />
      <text x={tipX} y={illusY+illusH+113}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        fontSize="9.5"
        fill={labelText}
        letterSpacing="1.8"
      >{flag.cta.toUpperCase()}</text>

    </svg>
  );

  if (flag.external) {
    return (
      <a href={flag.href} target="_blank" rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none" }}>
        {svgContent}
      </a>
    );
  }
  return (
    <Link href={flag.href} style={{ display: "block", textDecoration: "none" }}>
      {svgContent}
    </Link>
  );
}

export default function Promos() {
  return (
    <section className="relative bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        <div className="text-center mb-12 lg:mb-16">
          <p className="font-script text-magic text-sm tracking-wide mb-3">
            Wash Wizard Specials
          </p>
          <h2 className="font-heading font-semibold uppercase text-4xl sm:text-5xl text-primary text-balance">
            Make your ride
            <br />
            <span className="text-accent">shine for less.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {flags.map((flag) => (
            <PennantFlag key={flag.label} flag={flag} />
          ))}
        </div>

      </div>
    </section>
  );
}