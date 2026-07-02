const SITE_URL = "https://washwizardcarwash.com";
const PHONE = "+1-843-900-3234";
const LOGO_URL = "https://ucarecdn.com/5cadb1ef-9189-413a-9de0-234cab570451/logo.png";

const LOCATIONS = [
  {
    name: "Wash Wizard N Main St",
    street: "2146 N Main St",
    locality: "Summerville",
    region: "SC",
    postalCode: "29486",
    image: "https://ucarecdn.com/924824ae-e14b-4454-b92d-1a90f0b42d7a/loc-north-main.webp",
    url: `${SITE_URL}/locations`,
  },
  {
    name: "Wash Wizard Ladson Road",
    street: "3910 Ladson Rd",
    locality: "Ladson",
    region: "SC",
    postalCode: "29456",
    image: "https://ucarecdn.com/79724f54-79b5-463e-bd9d-9356f047ee51/loc-ladson-road.webp",
    url: `${SITE_URL}/locations`,
  },
  {
    name: "Wash Wizard Bacons Bridge",
    street: "999 Bacons Bridge Rd",
    locality: "Summerville",
    region: "SC",
    postalCode: "29485",
    image: "https://ucarecdn.com/900af020-1d9a-41fc-8af9-caa56d7556d6/loc-bacons-bridge.webp",
    url: `${SITE_URL}/locations`,
  },
];

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wash Wizard Car Wash",
    url: SITE_URL,
    logo: LOGO_URL,
    sameAs: [
      "https://www.facebook.com/washwizardcarwash",
      "https://www.instagram.com/washwizardcarwash",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wash Wizard Car Wash",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/faq?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const locations = LOCATIONS.map((loc) => ({
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: loc.name,
    image: loc.image,
    url: loc.url,
    telephone: PHONE,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.locality,
      addressRegion: loc.region,
      postalCode: loc.postalCode,
      addressCountry: "US",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Wash Wizard Car Wash",
      url: SITE_URL,
    },
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, ...locations],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
