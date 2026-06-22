import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NAUTILUS_ORG_SLUG = "washwizard";
// TODO: Replace with the real Nautilus location UUIDs once available
export const LOCATION_IDS = {
  northMain: "TODO-NORTH-MAIN-LOCATION-ID",
  ladsonRoad: "TODO-LADSON-LOCATION-ID",
  baconsBridge: "TODO-BACONS-BRIDGE-LOCATION-ID",
};

export const DEFAULT_LOCATION_ID = LOCATION_IDS.northMain;

// Buy Online + Manage Account links (existing customer portal — used in nav + CTAs)
export const BUY_ONLINE_URL = "https://washwizard.mywashaccount.com/";
export const MANAGE_ACCOUNT_URL = "https://washwizard.mywashaccount.com/login";
export const PHONE = "1-843-900-3234";
export const PHONE_HREF = "tel:+18439003234";
