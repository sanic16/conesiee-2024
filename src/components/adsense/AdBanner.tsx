"use client";

import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    }
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
