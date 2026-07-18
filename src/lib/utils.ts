import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NAUTILUS_ORG_SLUG = "washwizard";

export const LOCATION_IDS = {
  northMain: "63afa600-3191-41a1-8224-189b7f13879b",
  ladsonRoad: "9f38c5c4-2c21-4832-97a7-53b97559626e",
  baconsBridge: "02cfd07d-4369-4413-ab6b-0850697c8263",
} as const;

export const DEFAULT_LOCATION_ID = LOCATION_IDS.northMain;

export type TierKey = "magic" | "wicked" | "shining" | "kings";

type TierProducts = { club: string; single: string };

export const SALES_ITEM_IDS: Record<string, Record<TierKey, TierProducts>> = {
  [LOCATION_IDS.northMain]: {
    magic:   { club: "cfb6542d-21fa-4912-aeaf-635de806964f", single: "5827c62a-abda-4897-adb5-52e2a8ca349c" },
    wicked:  { club: "88b9c829-44bb-4a92-b1b2-3408af779285", single: "53478844-d7ce-4993-88b1-25427e0fc64f" },
    shining: { club: "28d93363-66ee-41d2-a389-cde2aa16d89b", single: "a8ca8263-0d98-4f29-b72b-d248c1edcd12" },
    kings:   { club: "320d3c6f-7ce2-4df7-a522-a46d836d1206", single: "83f0d053-645e-4796-af04-db02531479df" },
  },
  [LOCATION_IDS.ladsonRoad]: {
    magic:   { club: "34e6fff1-e051-4601-9a53-10f7068c8c4c", single: "85a7f6ad-1a76-41ec-b098-7699ea5ab0ee" },
    wicked:  { club: "83e467b8-498a-4c3e-a78f-eae20a190d0e", single: "230ec0eb-2a5c-4ca4-bfe2-a1991711075c" },
    shining: { club: "f6cd5939-3a05-4e70-b5b1-074c9d3e523a", single: "618ba0f9-90e9-4833-bb40-e19f3f225fe6" },
    kings:   { club: "2c613d84-8739-4c60-a252-267be67cb0c2", single: "cdaeac99-8dad-41c4-9051-f5e50eb6ee3b" },
  },
  [LOCATION_IDS.baconsBridge]: {
    magic:   { club: "5c5b847d-e578-4731-b459-d5b99d253813", single: "59870e30-478f-4eb0-a9d7-190d19bb4f5e" },
    wicked:  { club: "c2751911-7ad0-414b-b1b2-965e614e860f", single: "c96d673b-9a3f-40af-b2ff-04220f98f8da" },
    shining: { club: "b251747b-a0da-4df8-b6c8-acdcc9350d31", single: "b72c2729-7682-4f34-a9f3-8442878d07e3" },
    kings:   { club: "2f42c192-93c5-4b2e-a28d-89add42d73a0", single: "a6ce0fe9-498f-4961-a519-76fb7176aab1" },
  },
};

export function getSalesItemId(
  locationId: string,
  tier: TierKey,
  variant: "club" | "single",
): string | undefined {
  return SALES_ITEM_IDS[locationId]?.[tier]?.[variant];
}

// Deals-page products that live outside the 4-tier club/single grid. `annualMagic`
// and `bookMagic` are the entry-price tiers the deal cards advertise ($135/yr, $50);
// the storefront's "Other Packages" link lets a customer step up from there.
export type DealItemKey = "twiceMonth" | "annualMagic" | "bookMagic";

export const DEAL_ITEM_IDS: Record<string, Record<DealItemKey, string>> = {
  [LOCATION_IDS.northMain]: {
    twiceMonth:  "c43e36c6-8812-4d6b-abe8-344868c6d883",
    annualMagic: "8e3d8ed4-8425-459e-b43e-6bdf000adf11",
    bookMagic:   "e4053b2b-81eb-4072-9440-52c8d66cd38a",
  },
  [LOCATION_IDS.ladsonRoad]: {
    twiceMonth:  "74b9add0-ff26-4317-bb66-e043df62b15b",
    annualMagic: "1fbf8338-4f7a-4770-9ddb-e4693be0277e",
    bookMagic:   "3ee98525-9f18-4e50-bd3f-ac3acce2eeb2",
  },
  [LOCATION_IDS.baconsBridge]: {
    twiceMonth:  "6e735b15-9b90-4f02-a2de-98d97f05bfc8",
    annualMagic: "f07d4030-c0ee-4d07-b923-7d4077ff7d31",
    bookMagic:   "6475a755-bb26-474c-844b-bbb948d9c99a",
  },
};

export function getDealItemId(
  locationId: string,
  key: DealItemKey,
): string | undefined {
  return DEAL_ITEM_IDS[locationId]?.[key];
}

// Join (new member) → internal wash package selection (drawer-based Nautilus checkout)
export const JOIN_URL = "/packages";
// "Join the Club" CTAs → hosted Nautilus storefront (customer picks location + membership)
export const STOREFRONT_URL = `https://www.nautilus-app.com/c/storefront/${NAUTILUS_ORG_SLUG}`;
// Gift cards → hosted Nautilus gift-card builder
export const GIFTCARD_URL = `https://www.nautilus-app.com/c/giftcard-builder/${NAUTILUS_ORG_SLUG}`;
// Manage existing membership → Nautilus customer portal
export const MANAGE_ACCOUNT_URL =
  "https://www.nautilus-app.com/c/washwizard/portal";
export const PHONE = "1-843-900-3234";
export const PHONE_HREF = "tel:+18439003234";
export const CONTACT_FORM_URL =
  "https://www.nautilus-app.com/c/form/f4de3710-5942-4147-97ab-0d01a81bad89";
