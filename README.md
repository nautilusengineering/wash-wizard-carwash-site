# Wash Wizard Car Wash — Marketing Site

Multi-page marketing website for [Wash Wizard Car Wash](https://washwizardcarwash.com),
the Lowcountry's magical tunnel car wash with three locations across Summerville and Ladson, SC.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- lucide-react icons
- Google Fonts: Khand (heading), Open Sans (body), Cinzel (display/script)

## Local dev

```sh
bun install
bun run dev    # http://localhost:3000
```

## TODO before launch

The payment drawer (`src/components/IframeDrawer.tsx`) embeds the Nautilus storefront
at `https://www.nautilus-app.com/c/storefront/washwizard?locationId=<id>&productId=<id>`.

Replace the TODO constants in:

- `src/lib/utils.ts` — `LOCATION_IDS.{northMain, ladsonRoad, baconsBridge}` and `NAUTILUS_ORG_SLUG`
- `src/components/Pricing.tsx` — `tiers[].productId` and `tiers[].singleProductId` for each of the 4 tiers

once the org is onboarded on Nautilus.

## Pages

- `/` — Homepage
- `/packages` — Wash packages & pricing
- `/locations` — 3 Lowcountry locations with Google Maps
- `/washwizard-deals` — Current specials
- `/the-wash-wizard-difference` — Why Wash Wizard
- `/about` — Mission & values
- `/our-history` — Timeline
- `/tale-of-the-wash-wizard` — The legend
- `/welcome` — New member orientation
- `/fundraising` — School & team fundraising
- `/employment` — Open roles
- `/faq` — Frequently asked questions
- `/disclaimer` — Terms & conditions
