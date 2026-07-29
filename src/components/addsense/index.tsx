"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

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
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent double-pushing during strict mode or re-renders
    if (initialized.current) return;

    try {
      // Safely access the global window object
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
      initialized.current = true;
    } catch (error) {
      console.error("AdSense push error:", error);
    }
  }, []);

  return (
    <div
      className="my-6 flex justify-center w-full overflow-hidden"
      style={{ display: "block", width: "100%", minHeight: "90px" }}
      aria-hidden="true"
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
