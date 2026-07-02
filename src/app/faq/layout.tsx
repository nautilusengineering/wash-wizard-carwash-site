import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Wash Wizard Car Wash",
  description:
    "Answers to the most-asked questions about Wash Wizard memberships, wash packages, hours, cancellations, family plans, and more.",
  alternates: { canonical: "/faq" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
