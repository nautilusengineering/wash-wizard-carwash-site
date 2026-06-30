"use client";

import Script from "next/script";
import { useEffect } from "react";

const NAUTILUS_BASE_URL = "https://www.nautilus-app.com";
const NAUTILUS_LICENSE = "washwizard";

declare global {
  interface Window {
    NautilusEmbed?: { init?: () => void };
    NautilusEmbedConfig?: { baseUrl: string; license?: string };
  }
}

export default function NautilusFormEmbed({ formId }: { formId: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.NautilusEmbedConfig = { baseUrl: NAUTILUS_BASE_URL, license: NAUTILUS_LICENSE };
    window.NautilusEmbed?.init?.();
  }, [formId]);

  return (
    <>
      <div
        data-nautilus-embed="form"
        data-src={`/c/form/${formId}?embedded=true`}
        data-height="100%"
      />
      <Script
        id="nautilus-embed-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.NautilusEmbedConfig = { baseUrl: "${NAUTILUS_BASE_URL}", license: "${NAUTILUS_LICENSE}" };`,
        }}
      />
      <Script src={`${NAUTILUS_BASE_URL}/embed/loader.js`} strategy="afterInteractive" />
    </>
  );
}
