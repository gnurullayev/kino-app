import Script from "next/script";
import { useEffect } from "react";

const SnowEffect = () => {
  useEffect(() => {
    const loadScripts = async () => {
      if (typeof window === "undefined") return;

      // jQuery yuklash
      const jQueryScript = document.createElement("script");
      jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
      jQueryScript.onload = () => {
        // jQueryni globalga ulash
        window.jQuery = window.$ = require("jquery");

        // Snow.js yuklash
        const snowScript = document.createElement("script");
        snowScript.src = "/jquery.snow.js"; // public papkasidan yuklanadi
        snowScript.onload = () => {
          // Snow.js funksiyasini ishlatish
          window.$("body").snow({
            intensity: 40,
            sizeRange: [12, 30],
            opacityRange: [0.4, 1],
            driftRange: [10, 20],
            speedRange: [55, 120],
          });
        };
        document.body.appendChild(snowScript);
      };

      document.body.appendChild(jQueryScript);
    };

    loadScripts();
  }, []);

  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
        integrity="sha384-XNXZgvlRIfyJmFW4I8C2m5X7aA8Tcm3O5+pu6f4SiXDH6B7C+WQqlXsl3M8VqkxF"
        strategy="lazyOnload"
        onLoad={() => console.log("Snowstorm skripti yuklandi!")}
      />
    </>
  );
};

export default SnowEffect;
