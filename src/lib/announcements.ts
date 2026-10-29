// Wizard Announcements content.
//
// To add a new announcement:
//   1. Put its image in public/images/announcements/ (PNG or WebP).
//   2. Add ONE entry to the `entries` array below — position doesn't matter,
//      the exported list is sorted newest-first by `date` automatically.
//   3. `slug` must be unique and URL-safe (lowercase-with-hyphens). It becomes
//      the deep-link anchor, e.g. for text messages:
//      https://washwizardcarwash.com/announcements#<slug>
//   4. `date` is a plain ISO calendar date string: "YYYY-MM-DD".

export interface Announcement {
  /** Unique URL-safe anchor id, e.g. "tire-shine-touch-up-stations". */
  slug: string;
  /** ISO calendar date, e.g. "2026-09-12". */
  date: string;
  title: string;
  body: string;
  /** Image path under /public (or an absolute https URL). */
  image: string;
  /** Intrinsic pixel size of the image file. */
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}

const entries: Announcement[] = [
  {
    slug: "tire-shine-touch-up-stations",
    date: "2026-09-12",
    title: "COMING SOON: NEW FREE Tire Shine Touch Up Stations!",
    body: "Get that perfect, wicked-good gloss finish with our new, easy-to-use stations. It's magic at your fingertips!",
    image: "/images/announcements/tire-shine-touch-up.png",
    imageWidth: 390,
    imageHeight: 259,
    imageAlt:
      "Tire Shine Touch Up poster — make your wheels look wicked good: move pad in tray to apply product, apply product to tires as needed, return pad to station.",
  },
  {
    slug: "magic-mist-scent",
    date: "2026-08-25",
    title: "New Mystery 'Magic Mist' Scent Unveiled!",
    body: "Try our new enchanting interior scent, now included with all top-tier washes.",
    image: "/images/announcements/magic-mist.png",
    imageWidth: 122,
    imageHeight: 87,
    imageAlt: "A wizard's wand swirling glowing Magic Mist against a starry night sky.",
  },
  {
    slug: "rewards-points-increase",
    date: "2026-07-30",
    title: "Rewards Points Increase!",
    body: "Earn 10% more points on every dollar spent.",
    image: "/images/announcements/rewards-points.png",
    imageWidth: 122,
    imageHeight: 85,
    imageAlt: "Stacks of gold coins beside a crystal ball reading 10% points.",
  },
];

/** All announcements, sorted newest first. */
export const announcements: Announcement[] = [...entries].sort((a, b) =>
  b.date.localeCompare(a.date),
);
