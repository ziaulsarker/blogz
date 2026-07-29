"use client";

import { useEffect } from "react";
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
  const pathname = usePathname();

  useEffect(() => {
    // Wrap in a short timeout to let Next.js complete the layout paint
    const timer = setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          // Check if adsbygoogle array exists
          ((window as any).adsbygoogle =
            (window as any).adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error("AdSense push failed:", error);
      }
    }, 100); // 100ms is usually enough to clear hydration zero-width state

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when the user switches pages

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
