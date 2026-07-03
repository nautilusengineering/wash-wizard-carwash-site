import type { MetadataRoute } from "next";

const BASE = "https://washwizardcarwash.com";

const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/packages", changeFrequency: "monthly", priority: 0.9 },
  { path: "/washwizard-deals", changeFrequency: "weekly", priority: 0.9 },
  { path: "/locations", changeFrequency: "monthly", priority: 0.9 },
  { path: "/rewards", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/the-wash-wizard-difference", changeFrequency: "yearly", priority: 0.6 },
  { path: "/tale-of-the-wash-wizard", changeFrequency: "yearly", priority: 0.5 },
  { path: "/fundraising", changeFrequency: "monthly", priority: 0.6 },
  { path: "/employment", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact-us", changeFrequency: "yearly", priority: 0.5 },
  { path: "/report-issue", changeFrequency: "yearly", priority: 0.5 },
  { path: "/welcome", changeFrequency: "yearly", priority: 0.5 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
