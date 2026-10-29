"use client";

import { useEffect, useRef } from "react";

// Nautilus form: "Website – $1 King Graphene Offer" (Wash Wizard tenant).
const FREE_WASH_FORM_ID = "85f4a5b5-b31d-418b-b761-e1efbcd04d2b";

export default function FreeWashNautilusForm() {
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
      data-nautilus-embed="form"
      data-src={`/c/form/${FREE_WASH_FORM_ID}`}
      data-height="760px"
    />
  );
}
