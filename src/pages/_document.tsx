import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <amp-auto-ads
          type="adsense"
          data-ad-client="ca-pub-6341050522698824"
        ></amp-auto-ads>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
