"use client";

import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    const initializeAds = () => {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        try {
          ((window as any).adsbygoogle =
            (window as any).adsbygoogle || []).push({});
        } catch (error: any) {
          console.error("Adsense error:", error.message);
        }
      }
    };

    // Delay to ensure the script has loaded
    const timer = setTimeout(initializeAds, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3464058973592293"
      data-ad-slot="2710067661"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdBanner;
