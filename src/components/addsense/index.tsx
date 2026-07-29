"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      // Ensure the adsbygoogle array exists, then push a initialization command
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense placement error:", error);
    }
  }, [pathname, searchParams]); // Re-runs on internal page changes to render new ads

  return (
    <div
      className="my-6 flex justify-center w-full overflow-hidden"
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
