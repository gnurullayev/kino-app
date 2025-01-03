import Head from "next/head";
import React, { useEffect } from "react";

// Extend the Window interface for type safety
declare global {
  interface Window {
    adsbygoogle: any;
    Ya: any;
  }
}

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) => {
  useEffect(() => {
    // Google Ads initialization
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error: any) {
      console.error("Google Ads Error:", error.message);
    }

    // Yandex Ads initialization
    const yandexScript = document.createElement("script");
    yandexScript.src = "https://yandex.ru/ads/system/context.js";
    yandexScript.async = true;
    yandexScript.onload = () => {
      if (window.yaContextCb) {
        window.yaContextCb.push(() => {
          window.Ya.Context.AdvManager.render({
            blockId: "R-A-13558384-1",
            renderTo: "yandex_rtb_R-A-13558384-1",
            type: "feed",
          });
        });
      }
    };
    document.body.appendChild(yandexScript);

    return () => {
      // Cleanup Yandex script if necessary
      document.body.removeChild(yandexScript);
    };
  }, []);

  return (
    <>
      <Head>
        <script>window.yaContextCb = window.yaContextCb || [];</script>
      </Head>

      {/* Google AdSense */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6341050522698824"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      ></ins>

      {/* Yandex Ads */}
      <div id="yandex_rtb_R-A-13558384-1"></div>
    </>
  );
};

export default AdBanner;
