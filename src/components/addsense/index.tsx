"use client";

import { useEffect } from "react";
interface AdBannerProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle";
  fullWidthResponsive?: boolean;
}

// Extend global window object for TypeScript safety
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
}: AdBannerProps) {
  useEffect(() => {
    const handleAddSenseOnPageLoad = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    window.addEventListener("load", handleAddSenseOnPageLoad);

    return () => {
      window.removeEventListener("load", handleAddSenseOnPageLoad);
    };
  }, []);

  return (
    <div
      className="my-6 flex justify-center w-full overflow-hidden ad-container"
      aria-hidden
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4017842415006810"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
