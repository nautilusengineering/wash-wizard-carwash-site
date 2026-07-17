"use client";

import { useEffect, useRef } from "react";

export default function ContactNautilusForm() {
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
      data-src="/c/form/f4de3710-5942-4147-97ab-0d01a81bad89"
      data-height="760px"
    />
  );
}
