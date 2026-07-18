"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  cn,
  STOREFRONT_URL,
  MANAGE_ACCOUNT_URL,
  PHONE,
  PHONE_HREF,
} from "@/lib/utils";

type NavItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] };

const navItems: NavItem[] = [
  { label: "Locations", href: "/locations" },
  { label: "Packages", href: "/packages" },
  { label: "Deals", href: "/washwizard-deals" },
  { label: "Rewards", href: "/rewards" },
  {
    label: "About",
    children: [
      { label: "About Wash Wizard", href: "/about" },
      {
        label: "The Wash Wizard Difference",
        href: "/the-wash-wizard-difference",
      },
      { label: "Tale of the Wash Wizard", href: "/tale-of-the-wash-wizard" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Report an Issue", href: "/report-issue" },
      { label: "Member Welcome", href: "/welcome" },
      { label: "Fundraising", href: "/fundraising" },
      { label: "Employment", href: "/employment" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
        scrolled ? "shadow-xl" : "",
      )}
    >
      {/* Blur layer — isolated from text so backdrop-filter doesn't soften nav copy */}
      <div
        className={cn(
          "absolute inset-0 -z-10 transition-colors duration-300",
          scrolled ? "bg-primary/95 backdrop-blur-md" : "bg-primary/85 backdrop-blur-sm",
        )}
      />
      {/* Main nav */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18 gap-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Homepage"
            className="shrink-0 flex items-center gap-3"
          >
            <Image
              src="https://ucarecdn.com/5cadb1ef-9189-413a-9de0-234cab570451/logo.png"
              alt="Wash Wizard Car Wash"
              width={220}
              height={64}
              className="h-9 lg:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 mx-auto">
            {navItems.map((item) =>
              "children" in item ? (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-base font-heading font-bold uppercase tracking-wider text-white hover:text-accent py-2"
                  >
                    {item.label}
                    <ChevronDown className="size-4 shrink-0 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-opacity duration-150">
                    <div className="min-w-[260px] bg-primary/97 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-white/10 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-base font-semibold text-white/90 hover:text-accent hover:bg-white/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-heading font-bold uppercase tracking-wider text-white hover:text-accent"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-2">
            <Button asChild size="default" className="px-4 2xl:px-6">
              <a href={STOREFRONT_URL} target="_blank" rel="noopener noreferrer">
                Join the Club
              </a>
            </Button>
            <a
              href={MANAGE_ACCOUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="default" className="px-4 2xl:px-6 text-sm">
                Manage My Account
              </Button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden text-white p-2 ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "xl:hidden transition-all duration-300 bg-primary/97 backdrop-blur-md overflow-y-auto overscroll-contain",
          mobileOpen
            ? "max-h-[calc(100dvh-4rem)] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <nav className="px-6 py-4 pb-8 flex flex-col gap-2">
          {navItems.map((item) =>
            "children" in item ? (
              <div key={item.label} className="flex flex-col">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label,
                    )
                  }
                  className="flex items-center justify-between text-lg font-heading font-semibold uppercase tracking-wider text-white/90 hover:text-accent py-2"
                  aria-expanded={mobileExpanded === item.label}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      mobileExpanded === item.label && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    mobileExpanded === item.label
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pl-4 flex flex-col gap-1 pb-2 border-l border-white/10 ml-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMobile}
                          className="text-base font-semibold text-white/80 hover:text-accent transition-colors py-2"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="text-lg font-heading font-semibold uppercase tracking-wider text-white/90 hover:text-accent py-2"
              >
                {item.label}
              </Link>
            ),
          )}
          <hr className="border-white/10 my-2" />
          <a
            href={PHONE_HREF}
            className="text-base text-white/80 hover:text-accent flex items-center gap-2 py-1"
          >
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
          <div className="flex flex-col gap-3 mt-4">
            <Button asChild className="w-full">
              <a
                href={STOREFRONT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
              >
                Join the Club
              </a>
            </Button>
            <a
              href={MANAGE_ACCOUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
            >
              <Button variant="outline" className="w-full">
                Manage My Account
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
