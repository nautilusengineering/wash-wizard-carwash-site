"use client";

import Link from "next/link";
import { forwardRef } from "react";

type PackageLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href?: string;
};

/**
 * CTA link that points at the Packages page's pricing section.
 *
 * When the user is already on /packages, a plain <Link href="/packages"> is a
 * same-route navigation, which Next treats as a no-op — the button appears
 * "dead" and never refocuses the pricing cards. Here we intercept the click and
 * smooth-scroll #pricing into view instead, so a package link always refocuses
 * the packages, no matter where the visitor has scrolled. From any other page it
 * navigates to /packages#pricing as usual.
 */
const PackageLink = forwardRef<HTMLAnchorElement, PackageLinkProps>(
  function PackageLink({ href = "/packages#pricing", onClick, ...props }, ref) {
    return (
      <Link
        ref={ref}
        href={href}
        onClick={(e) => {
          if (
            typeof window !== "undefined" &&
            window.location.pathname === "/packages"
          ) {
            const section = document.getElementById("pricing");
            if (section) {
              e.preventDefault();
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
          onClick?.(e);
        }}
        {...props}
      />
    );
  },
);

export default PackageLink;
