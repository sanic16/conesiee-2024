import Script from "next/script";

const pId = process.env.NEXT_PUBLIC_ADSENSE_ID;

const AdSense = () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin="anonymous"
    />
  );
};

export default AdSense;
