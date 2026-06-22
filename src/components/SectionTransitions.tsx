// Cohesive section transitions — see CLAUDE.md design-guide.
// Use <DarkPhotoIn /> right before a dark section, and wrap the next
// light section in a Lift wrapper that rises over it.
import Image from "next/image";

export function DarkPhotoIn({
  src,
  alt = "",
  bgVar = "var(--color-primary)",
}: {
  src: string;
  alt?: string;
  bgVar?: string;
}) {
  return (
    <div className="relative w-full h-44 sm:h-56 lg:h-72 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${bgVar} 100%)`,
        }}
      />
    </div>
  );
}

export function LiftOverDark({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative z-10 -mt-10 lg:-mt-14 rounded-t-[2.5rem] bg-background shadow-[0_-30px_60px_-30px_rgba(0,0,0,0.4)] ${className}`}
    >
      {children}
    </div>
  );
}
