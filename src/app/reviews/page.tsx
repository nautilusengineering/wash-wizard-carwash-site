import Link from "next/link";
import { Star } from "lucide-react";
import ReviewsNautilusSurvey from "./nautilus-survey";

export const metadata = {
  title: "Leave a Review",
  description:
    "Rate your Wash Wizard visit and see what customers are saying about our North Main, Ladson Road, and Bacons Bridge locations.",
  alternates: { canonical: "/reviews" },
};

const PURPLE_DARK =
  "linear-gradient(160deg, #1E1832 0%, #2A2050 60%, #1A1428 100%)";

interface Review {
  name: string;
  location: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "John B.",
    location: "Bacons Bridge",
    text: "Love the car wash, does a great job on all of my cars! You can even ask for Touchless and some of the brushes are halted. Pulling your rig out and spending time drying it off as well as vacuuming is awesome. Great friendly and caring staff! Thx!",
  },
  {
    name: "Brian C.",
    location: "Ladson Road",
    text: "Wash Wizard Ladson Road is pure magic. I roll in with a dusty, bug‑covered mess and roll out looking like I’m headed to a car show. The crew is awesome, the wash hits every angle, and the shine is unreal. Quick, clean, and consistently top‑tier. If your car needs a little wizardry, this is the spot",
  },
  {
    name: "Sam B.",
    location: "Ladson Road",
    text: "Ive been a monthly customer for y a few years now and they always have everything I need to keep my car shinning like new.  They really believe in customer service and go above and beyond for their customers.  Especially Heather at the Ladson rd. location she's the best, friendly and nice and actually helped me get a stubborn makeup stain out of my interior. Customer for life 10 stars!",
  },
  {
    name: "Tony P.",
    location: "Bacons Bridge",
    text: "There is a black haired woman and a brown haired woman that ALWAYS greet people with a smile at the wash and deliver enthusiasm.  I typically see them on a weekday morning.  They make the simple task of getting my car washed a pleasure.  Great work ladies!!",
  },
  {
    name: "Chris",
    location: "North Main",
    text: "Three weeks ago I lost a vehicle magnet while taking my car through the car wash. Since this particular magnet design was no longer being manufactured I asked an employee if they could look through the car wash bay for me. Unfortunately though he couldn't find it. This past weekend, I went back to wash my car and spoke with another employee about a lost and found. To my surprise, as we entered the office, she picked up the very magnet I had lost from the desk and asked if this was it. Thank you for having two great employees that were happy to help me.",
  },
  {
    name: "Tom S.",
    location: "Ladson Road",
    text: "Nice facility. Automatic car wash does a great job. They provide microfiber cloths, glass cleaning fluid, air hoses and matt cleaners. Staff is always walking around to make sure everything is clean and stocked.",
  },
];

const marqueeCss = `
.ww-reviews-marquee {
  overflow-x: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
}
.ww-reviews-track {
  animation: ww-reviews-scroll 55s linear infinite;
}
@keyframes ww-reviews-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.ww-reviews-marquee:hover .ww-reviews-track,
.ww-reviews-marquee:focus-within .ww-reviews-track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .ww-reviews-track {
    animation: none;
  }
  .ww-reviews-marquee {
    overflow-x: auto;
    scroll-snap-type: x proximity;
    padding: 0 1rem 1rem;
    -webkit-mask-image: none;
    mask-image: none;
  }
  .ww-reviews-marquee ul[aria-hidden="true"] {
    display: none;
  }
  .ww-reviews-card {
    scroll-snap-align: start;
  }
}
`;

function Stars({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4 text-accent fill-accent"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  focusable = false,
}: {
  review: Review;
  focusable?: boolean;
}) {
  return (
    <li className="ww-reviews-card w-[320px] md:w-[380px] shrink-0 flex">
      <figure
        tabIndex={focusable ? 0 : undefined}
        className="h-full w-full rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6 lg:p-7 flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Stars className="mb-4" />
        <blockquote className="text-sm leading-relaxed text-foreground/85 mb-5">
          &ldquo;{review.text}&rdquo;
        </blockquote>
        <figcaption className="mt-auto">
          <p className="font-card font-bold uppercase text-primary leading-tight">
            {review.name}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {review.location} · Google review
          </p>
        </figcaption>
      </figure>
    </li>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Dark hero + survey */}
      <section
        className="relative overflow-hidden text-white pt-24 lg:pt-28 pb-14 lg:pb-20"
        style={{ background: PURPLE_DARK }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 10%, rgba(255,184,0,0.18), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 lg:px-6 text-center">
          <p className="font-heading uppercase tracking-[0.32em] text-xs text-accent mb-5">
            Your feedback matters
          </p>
          <h1 className="font-heading font-bold uppercase text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
            How did <span className="text-accent">we do?</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/85 max-w-2xl mx-auto text-pretty">
            Pick your location and rate your visit — it takes 30 seconds.
          </p>
        </div>

        {/* Survey card */}
        <div className="relative mx-auto max-w-3xl px-4 lg:px-6 mt-10 lg:mt-12">
          <div className="bg-white rounded-2xl p-3 sm:p-5 shadow-xl overflow-hidden">
            <ReviewsNautilusSurvey />
          </div>
        </div>
      </section>

      {/* Customer reviews carousel */}
      <section className="bg-background py-16 lg:py-24">
        <style dangerouslySetInnerHTML={{ __html: marqueeCss }} />
        <div className="mx-auto max-w-6xl px-4 lg:px-6 text-center mb-12">
          <p className="font-heading uppercase tracking-[0.28em] text-xs text-accent mb-2">
            Straight from Google
          </p>
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl text-primary leading-[0.95]">
            What our customers <span className="text-accent">are saying</span>
          </h2>
        </div>
        <div
          className="ww-reviews-marquee relative"
          role="region"
          aria-label="Customer reviews"
        >
          <div className="ww-reviews-track flex w-max items-stretch">
            <ul className="flex items-stretch list-none m-0 p-0 gap-5 pr-5 lg:gap-6 lg:pr-6">
              {reviews.map((r) => (
                <ReviewCard
                  key={`${r.name}-${r.location}`}
                  review={r}
                  focusable
                />
              ))}
            </ul>
            <ul
              className="flex items-stretch list-none m-0 p-0 gap-5 pr-5 lg:gap-6 lg:pr-6"
              aria-hidden="true"
            >
              {reviews.map((r) => (
                <ReviewCard key={`${r.name}-${r.location}-dup`} review={r} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Had an issue? */}
      <section className="bg-background py-10 lg:py-14">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <p className="text-base text-foreground/80">
            Had an issue with your visit?{" "}
            <Link
              href="/report-issue"
              className="font-semibold text-primary underline underline-offset-4 hover:text-secondary"
            >
              Report it to our team
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
