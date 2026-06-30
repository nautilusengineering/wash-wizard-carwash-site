"use client";

import {
  Zap, Bug, ScanLine, Lightbulb, CircleOff, Droplets, Wind, ArrowLeftRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Zap, Bug, ScanLine, Lightbulb, CircleOff, Droplets, Wind, ArrowLeftRight,
};

function WizardHatIcon({ size, style }: { size: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      {/* Hat cone — outline only */}
      <path d="M 20 2 L 7 27 L 33 27 Z" stroke="white" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      {/* Brim — outline only */}
      <ellipse cx="20" cy="27" rx="18" ry="5" stroke="white" strokeWidth="2.2" fill="none" />
      {/* Star on hat */}
      <path d="M 20 11 L 21 14 L 24 14 L 21.5 16 L 22.5 19 L 20 17 L 17.5 19 L 18.5 16 L 16 14 L 19 14 Z" fill="#FFD700" stroke="none" />
    </svg>
  );
}

const COLORS: Record<string, [string, string]> = {
  "#151b41": ["#3d4fa8", "#5c70e0"],
  "#0b9069": ["#0db37d", "#22e8a8"],
  "#9f15b9": ["#b930d4", "#d55ef0"],
  "#41a1d3": ["#41a1d3", "#7ccaee"],
};

// Ball: center (100, 90), r=86 → bottom at y=176
// Stand contacts ball at y=158 → x = 100 ± sqrt(86²-(158-90)²) = 100 ± sqrt(7396-4624) = 100 ± 52.7 → (47,158) & (153,158)
// Stand drawn ON TOP of ball so it cups the ball naturally

export function CrystalBall({ color, icon }: { color: string; icon: string }) {
  const uid = color.replace("#", "");
  const [ballColor, lightColor] = COLORS[color] ?? [color, color];
  const Icon = ICONS[icon];

  return (
    <div className="relative inline-flex flex-col items-center" style={{ width: 160 }}>
      <svg viewBox="0 0 200 235" width="160" height="188" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
        <defs>
          {/* Crescent mask: outer ball circle minus inner offset circle = left crescent */}
          <mask id={`cm${uid}`}>
            <circle cx="100" cy="90" r="82" fill="white" />
            <circle cx="126" cy="90" r="70" fill="black" />
          </mask>
          {/* Clip ball inner effects to ball boundary */}
          <clipPath id={`bc${uid}`}>
            <circle cx="100" cy="90" r="84" />
          </clipPath>
        </defs>

        {/* ── 1. BALL (drawn first, stand will cover its bottom) ── */}
        <circle cx="100" cy="90" r="86" fill={ballColor} stroke="#1a0800" strokeWidth="4.5" />

        {/* Left crescent highlight — lighter shade on left portion */}
        <circle cx="100" cy="90" r="82" fill={lightColor} opacity="0.38" mask={`url(#cm${uid})`} />

        {/* Inner edge vignette for depth */}
        <circle cx="100" cy="90" r="84" fill="transparent" stroke="rgba(0,0,0,0.22)" strokeWidth="20" clipPath={`url(#bc${uid})`} />

        {/* Gold 4-pointed sparkle stars on ball (right side, matching reference) */}
        <path d="M 136 55 L 139 47 L 142 55 L 150 58 L 142 61 L 139 69 L 136 61 L 128 58 Z" fill="#FFD700" />
        <path d="M 147 78 L 149 72 L 151 78 L 157 80 L 151 82 L 149 88 L 147 82 L 141 80 Z" fill="#FFD700" />

        {/* ── 2. STAND (drawn ON TOP of ball — covers ball bottom, creates seated look) ── */}
        {/* Main trapezoid body with concave top arc matching ball curve */}
        <path
          d="M 47 158 A 86 86 0 0 0 153 158 L 178 212 Q 100 224 22 212 Z"
          fill="#b86830"
          stroke="#2e1005"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Stand shading: darker left/right edges for roundness */}
        <path d="M 47 158 A 86 86 0 0 0 153 158 L 178 212 Q 100 224 22 212 Z" fill="url(#sh)" />
        <defs>
          <linearGradient id="sh" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#3d1800" stopOpacity="0.35" />
            <stop offset="35%"  stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="65%"  stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#3d1800" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Groove line */}
        <path d="M 56 184 Q 100 192 144 184" stroke="#2e1005" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />

        {/* Base oval */}
        <ellipse cx="100" cy="213" rx="78" ry="9" fill="#924a1c" stroke="#2e1005" strokeWidth="2.5" />
      </svg>

      {/* Icon — centered on ball. Ball center: (100,90) in 200×235 viewBox, rendered at 160×188 → scale 0.8 → (80, 72) */}
      <div
        className="absolute pointer-events-none flex items-center justify-center"
        style={{ top: 52, left: 0, width: 160, height: 40 }}
      >
        {icon === "WizardHat" ? (
          <WizardHatIcon size={46} style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8)) drop-shadow(0 2px 5px rgba(0,0,0,0.8))" }} />
        ) : Icon ? (
          <Icon size={38} color="white" style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8)) drop-shadow(0 2px 5px rgba(0,0,0,0.8))" }} />
        ) : null}
      </div>
    </div>
  );
}
