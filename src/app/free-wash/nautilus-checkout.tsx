"use client";

import { useEffect, useRef } from "react";

// Nautilus checkout: "Website – FREE King Graphene" (Wash Wizard tenant).
// Sells the $0 King Graphene wash book (Sonny's SKU 1778873494) per location.
const FREE_WASH_CHECKOUT_ID = "41d5aa73-82eb-4222-851d-3e2ac24c36c2";

export default function FreeWashNautilusCheckout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).NautilusEmbedConfig = {
      baseUrl: "https://www.nautilus-app.com",
      license: "12ajjdewwwy-26rnhw2943-1s7g1u8ma0i",
    };

    const script = document.createElement("script");
    script.src = "https://www.nautilus-app.com/embed/loader.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-nautilus-embed="checkout"
      data-src={`/c/checkout/${FREE_WASH_CHECKOUT_ID}`}
      data-height="1100px"
    />
  );
}
