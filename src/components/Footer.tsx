import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Wand } from "lucide-react";
import { JOIN_URL, MANAGE_ACCOUNT_URL, PHONE, PHONE_HREF } from "@/lib/utils";

const shopLinks = [
  { label: "Wash Packages", href: "/packages" },
  { label: "Deals", href: "/washwizard-deals" },
  { label: "Join the Club", href: JOIN_URL },
  { label: "Manage Membership", href: MANAGE_ACCOUNT_URL },
];

const aboutLinks = [
  { label: "About Wash Wizard", href: "/about" },
  { label: "The Wash Wizard Difference", href: "/the-wash-wizard-difference" },
  { label: "Tale of the Wash Wizard", href: "/tale-of-the-wash-wizard" },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Report an Issue", href: "/report-issue" },
  { label: "Member Welcome", href: "/welcome" },
  { label: "Fundraising", href: "/fundraising" },
  { label: "Employment", href: "/employment" },
];

export default function Footer() {
  return (
    <footer className="relative bg-deep text-white pt-16 pb-8 overflow-hidden">
      {/* Star sparkle pattern */}
      <div className="absolute inset-0 opacity-30 bg-wizard-night" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="https://ucarecdn.com/5cadb1ef-9189-413a-9de0-234cab570451/logo.png"
              alt="Wash Wizard"
              width={220}
              height={64}
              className="h-10 w-auto mb-5"
            />
            <p className="text-base sm:text-sm text-white/70 leading-relaxed mb-4">
              Summerville&apos;s magical car wash. Three Lowcountry locations,
              one unlimited club, infinite shine.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-accent font-heading font-semibold uppercase tracking-widest text-base sm:text-sm hover:text-white"
            >
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
          </div>

          <div>
            <h4 className="font-heading font-semibold uppercase tracking-widest text-base sm:text-sm text-accent mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-base sm:text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold uppercase tracking-widest text-base sm:text-sm text-accent mb-4">
              About
            </h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-base sm:text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold uppercase tracking-widest text-base sm:text-sm text-accent mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-base sm:text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Locations strip */}
        <div className="border-y border-white/10 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-base sm:text-sm">
          {[
            { name: "North Main", addr: "2146 N Main St. Summerville, SC" },
            { name: "Ladson Road", addr: "3910 Ladson Rd, Ladson, SC" },
            { name: "Bacons Bridge", addr: "999 Bacons Bridge Rd, Summerville, SC" },
          ].map((l) => (
            <div key={l.name} className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-heading font-semibold uppercase tracking-wider text-white">
                  {l.name}
                </p>
                <p className="text-white/65">{l.addr}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p className="flex items-center gap-2">
            <Wand className="w-3 h-3 text-accent" /> © {new Date().getFullYear()} WashWizard Car Wash. All wash spells reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/WashWizardCarWash/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/washwizardcarwash/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCAZwkmdtV3LEK_eI_7_ElCA/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              YouTube
            </a>
            <Link href="/disclaimer" className="hover:text-accent transition-colors">
              Disclaimer
            </Link>
            <a
              href="/documents/wash-wizard-privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
